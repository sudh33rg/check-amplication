import { Interview as TInterview } from "../api/interview/Interview";

export const INTERVIEW_TITLE_FIELD = "feedback";

export const InterviewTitle = (record: TInterview): string => {
  return record.feedback?.toString() || String(record.id);
};
