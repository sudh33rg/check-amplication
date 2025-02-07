import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InterviewServiceBase } from "./base/interview.service.base";

@Injectable()
export class InterviewService extends InterviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
