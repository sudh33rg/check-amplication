import { Module } from "@nestjs/common";
import { InterviewModuleBase } from "./base/interview.module.base";
import { InterviewService } from "./interview.service";
import { InterviewController } from "./interview.controller";
import { InterviewResolver } from "./interview.resolver";

@Module({
  imports: [InterviewModuleBase],
  controllers: [InterviewController],
  providers: [InterviewService, InterviewResolver],
  exports: [InterviewService],
})
export class InterviewModule {}
