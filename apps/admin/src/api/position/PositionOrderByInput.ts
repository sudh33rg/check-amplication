import { SortOrder } from "../../util/SortOrder";

export type PositionOrderByInput = {
  description?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  priority?: SortOrder;
  recruiter?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  vacancies?: SortOrder;
};
