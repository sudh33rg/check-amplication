import { ApplicantCreateNestedManyWithoutPositionsInput } from "./ApplicantCreateNestedManyWithoutPositionsInput";

export type PositionCreateInput = {
  applicants?: ApplicantCreateNestedManyWithoutPositionsInput;
  description: string;
  notes?: string | null;
  priority: string;
  recruiter: string;
  status: string;
  title: string;
  vacancies: number;
};
