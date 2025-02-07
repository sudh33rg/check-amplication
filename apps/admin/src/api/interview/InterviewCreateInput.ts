import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";

export type InterviewCreateInput = {
  applicant: ApplicantWhereUniqueInput;
  feedback?: string | null;
  level: number;
  rating: number;
};
