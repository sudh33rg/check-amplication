import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";

export type InterviewUpdateInput = {
  applicant?: ApplicantWhereUniqueInput;
  feedback?: string | null;
  level?: number;
  rating?: number;
};
