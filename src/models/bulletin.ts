export interface IBulletin {
  id: number;
  employeeId: number;
  startDate: string;
  endDate: string;
  appointments: Appointment[];
}

export type Appointment = {
  id: number;
  date: string;
  activityId: number;
};
