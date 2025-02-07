import { Module } from "@nestjs/common";
import { ApplicantModuleBase } from "./base/applicant.module.base";
import { ApplicantService } from "./applicant.service";
import { ApplicantController } from "./applicant.controller";
import { ApplicantResolver } from "./applicant.resolver";

@Module({
  imports: [ApplicantModuleBase],
  controllers: [ApplicantController],
  providers: [ApplicantService, ApplicantResolver],
  exports: [ApplicantService],
})
export class ApplicantModule {}
