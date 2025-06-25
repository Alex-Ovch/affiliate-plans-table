export interface PlanFact {
  income: number;
  activePartners: number;
}

export interface TotalEntry {
  plan: PlanFact;
  fact: PlanFact;
}

export interface MonthEntry {
  income: number;
  activePartners: number;
  plan: PlanFact;
  fact: PlanFact;
}

export interface TableEntry {
  id: number;
  adminId: number;
  adminName: string;
  months: (MonthEntry | null)[];
  year: number;
}

export interface ApiResponse {
  success: boolean;
  data: {
    total: TotalEntry[];
    table: TableEntry[];
  };
}
