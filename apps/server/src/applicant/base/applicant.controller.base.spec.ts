import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ApplicantController } from "../applicant.controller";
import { ApplicantService } from "../applicant.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  email: "exampleEmail",
  id: "exampleId",
  name: "exampleName",
  phone: "examplePhone",
  resume: "exampleResume",
  status: "exampleStatus",
};
const CREATE_RESULT = {
  email: "exampleEmail",
  id: "exampleId",
  name: "exampleName",
  phone: "examplePhone",
  resume: "exampleResume",
  status: "exampleStatus",
};
const FIND_MANY_RESULT = [
  {
    email: "exampleEmail",
    id: "exampleId",
    name: "exampleName",
    phone: "examplePhone",
    resume: "exampleResume",
    status: "exampleStatus",
  },
];
const FIND_ONE_RESULT = {
  email: "exampleEmail",
  id: "exampleId",
  name: "exampleName",
  phone: "examplePhone",
  resume: "exampleResume",
  status: "exampleStatus",
};

const service = {
  createApplicant() {
    return CREATE_RESULT;
  },
  applicants: () => FIND_MANY_RESULT,
  applicant: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Applicant", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ApplicantService,
          useValue: service,
        },
      ],
      controllers: [ApplicantController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /applicants", async () => {
    await request(app.getHttpServer())
      .post("/applicants")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT);
  });

  test("GET /applicants", async () => {
    await request(app.getHttpServer())
      .get("/applicants")
      .expect(HttpStatus.OK)
      .expect([FIND_MANY_RESULT[0]]);
  });

  test("GET /applicants/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicants"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /applicants/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/applicants"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect(FIND_ONE_RESULT);
  });

  test("POST /applicants existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/applicants")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect(CREATE_RESULT)
      .then(function () {
        agent
          .post("/applicants")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
