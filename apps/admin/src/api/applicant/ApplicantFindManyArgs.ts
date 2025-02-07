import { ApplicantWhereInput } from "./ApplicantWhereInput";
import { ApplicantOrderByInput } from "./ApplicantOrderByInput";

export type ApplicantFindManyArgs = {
  where?: ApplicantWhereInput;
  orderBy?: Array<ApplicantOrderByInput>;
  skip?: number;
  take?: number;
};
