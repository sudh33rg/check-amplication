import { InterviewUpdateManyWithoutApplicantsInput } from "./InterviewUpdateManyWithoutApplicantsInput";
import { PositionWhereUniqueInput } from "../position/PositionWhereUniqueInput";

export type ApplicantUpdateInput = {
  email?: string;
  interviews?: InterviewUpdateManyWithoutApplicantsInput;
  name?: string;
  phone?: string;
  position?: PositionWhereUniqueInput;
  resume?: string | null;
  status?: string;
};
