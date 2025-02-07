import { Applicant } from "../applicant/Applicant";

export type Position = {
  applicants?: Array<Applicant>;
  description: string;
  id: string;
  notes: string | null;
  priority: string;
  recruiter: string;
  status: string;
  title: string;
  vacancies: number;
};
