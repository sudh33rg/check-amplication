import { ApplicantListRelationFilter } from "../applicant/ApplicantListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntFilter } from "../../util/IntFilter";

export type PositionWhereInput = {
  applicants?: ApplicantListRelationFilter;
  description?: StringFilter;
  id?: StringFilter;
  notes?: StringNullableFilter;
  priority?: StringFilter;
  recruiter?: StringFilter;
  status?: StringFilter;
  title?: StringFilter;
  vacancies?: IntFilter;
};
