import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApplicantServiceBase } from "./base/applicant.service.base";

@Injectable()
export class ApplicantService extends ApplicantServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
