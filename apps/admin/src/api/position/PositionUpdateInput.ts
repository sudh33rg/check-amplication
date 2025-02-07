import { ApplicantUpdateManyWithoutPositionsInput } from "./ApplicantUpdateManyWithoutPositionsInput";

export type PositionUpdateInput = {
  applicants?: ApplicantUpdateManyWithoutPositionsInput;
  description?: string;
  notes?: string | null;
  priority?: string;
  recruiter?: string;
  status?: string;
  title?: string;
  vacancies?: number;
};
