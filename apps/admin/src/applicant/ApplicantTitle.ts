import { Applicant as TApplicant } from "../api/applicant/Applicant";

export const APPLICANT_TITLE_FIELD = "name";

export const ApplicantTitle = (record: TApplicant): string => {
  return record.name?.toString() || String(record.id);
};
