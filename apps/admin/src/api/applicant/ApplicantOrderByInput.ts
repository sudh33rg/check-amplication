import { SortOrder } from "../../util/SortOrder";

export type ApplicantOrderByInput = {
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  positionId?: SortOrder;
  resume?: SortOrder;
  status?: SortOrder;
};
