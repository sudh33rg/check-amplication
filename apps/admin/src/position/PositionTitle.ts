import { Position as TPosition } from "../api/position/Position";

export const POSITION_TITLE_FIELD = "title";

export const PositionTitle = (record: TPosition): string => {
  return record.title?.toString() || String(record.id);
};
