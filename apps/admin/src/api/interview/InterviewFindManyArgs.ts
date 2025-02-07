import { InterviewWhereInput } from "./InterviewWhereInput";
import { InterviewOrderByInput } from "./InterviewOrderByInput";

export type InterviewFindManyArgs = {
  where?: InterviewWhereInput;
  orderBy?: Array<InterviewOrderByInput>;
  skip?: number;
  take?: number;
};
