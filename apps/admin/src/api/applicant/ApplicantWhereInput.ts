import { StringFilter } from "../../util/StringFilter";
import { InterviewListRelationFilter } from "../interview/InterviewListRelationFilter";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ApplicantWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  interviews?: InterviewListRelationFilter;
  name?: StringFilter;
  phone?: StringFilter;
  position?: PositionWhereUniqueInput;
  resume?: StringNullableFilter;
  status?: StringFilter;
};
