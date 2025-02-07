import { InterviewCreateNestedManyWithoutApplicantsInput } from "./InterviewCreateNestedManyWithoutApplicantsInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type ApplicantCreateInput = {
  email: string;
  interviews?: InterviewCreateNestedManyWithoutApplicantsInput;
  name: string;
  phone: string;
  position: PositionWhereUniqueInput;
  resume?: string | null;
  status: string;
};
