export enum BusinessStage {
  SERIES_A = "Series A",
  SERIES_B = "Series B",
  SERIES_C = "Series C",
  PRE_IPO = "Pre-IPO",
  PUBLIC = "Public",
}

export interface StrategyResult {
  title: string;
  roadmap: string[];
  priorityItems: string[];
  potentialPitfalls: string[];
}
