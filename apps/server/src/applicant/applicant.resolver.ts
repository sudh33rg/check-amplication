import * as graphql from "@nestjs/graphql";
import { ApplicantResolverBase } from "./base/applicant.resolver.base";
import { Applicant } from "./base/Applicant";
import { ApplicantService } from "./applicant.service";

@graphql.Resolver(() => Applicant)
export class ApplicantResolver extends ApplicantResolverBase {
  constructor(protected readonly service: ApplicantService) {
    super(service);
  }
}
