import * as graphql from "@nestjs/graphql";
import { InterviewResolverBase } from "./base/interview.resolver.base";
import { Interview } from "./base/Interview";
import { InterviewService } from "./interview.service";

@graphql.Resolver(() => Interview)
export class InterviewResolver extends InterviewResolverBase {
  constructor(protected readonly service: InterviewService) {
    super(service);
  }
}
