import { Interview } from "../interview/Interview";
import { Position } from "../position/Position";

export type Applicant = {
  email: string;
  id: string;
  interviews?: Array<Interview>;
  name: string;
  phone: string;
  position?: Position;
  resume: string | null;
  status: string;
};
