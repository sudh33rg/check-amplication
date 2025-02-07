import { Applicant } from "../applicant/Applicant";

export type Interview = {
  applicant?: Applicant;
  feedback: string | null;
  id: string;
  level: number;
  rating: number;
};
