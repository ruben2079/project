export interface Programs {
  enrolledPrograms: {
    programType: string;
    adminPartIName: string;
  }[];
  statusCode: number;
  statusMessage: string;
}
