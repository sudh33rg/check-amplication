import { ApplicantWhereUniqueInput } from "../applicant/ApplicantWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type InterviewWhereInput = {
  applicant?: ApplicantWhereUniqueInput;
  feedback?: StringNullableFilter;
  id?: StringFilter;
  level?: IntFilter;
  rating?: IntFilter;
};
