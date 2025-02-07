import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InterviewService } from "./interview.service";
import { InterviewControllerBase } from "./base/interview.controller.base";

@swagger.ApiTags("interviews")
@common.Controller("interviews")
export class InterviewController extends InterviewControllerBase {
  constructor(protected readonly service: InterviewService) {
    super(service);
  }
}
