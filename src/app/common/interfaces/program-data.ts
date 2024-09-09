export interface eBookItem {
  title?: string;
  vendorId?: number;
  accessUrl?: any;
}

export interface ExamPartInfo {
  examPartState?: string; // Unpaid, Deferred, AwaitingSchedulingToOpen, SchedulingOpen, SchedulingClosedAwaitingResults, SchedulingClosedNeverScheduled, SchedulingClosedResultsAvailable
  examAttemptAdminName?: string;
  examAttemptId?: string;
  unpaidOrderId?: string;
  deferredAdminName?: string;
  deferredExamSetupOpenDate?: Date;
  schedulingAwaitingToOpenOpenDate?: Date;
  schedulingIsComplete?: boolean;
  schedulingDeadline?: Date;
  schedulingExamDateTimeSelected?: Date;
  schedulingExamLocationSelected?: string;
  schedulingExamProviderName?: string;
  schedulingExamAccessURL?: string;
  resultsAvailableDateTime?: Date;
  resultsAvailableStatement?: string;
  result?: string; // Pass, Fail, No-Show, Not Graded
  primaryBtnText?: string;
  secondaryBtnText?: string;
}

export interface ExamResources {
  IsOptedIntoEPP?: boolean;
  eBookExpireDate?: number;
  eBookItems?: eBookItem[];
  eBookProviderName?: string;
  ebookItems?: {
    accessURLs: any[];
    statusCode: number;
    statusMessage: string;
  };
  ADAFormAccessURL?: string;
  eLearningPlatformAccessURL?: string;
}

export interface ProgramsDetailInfo {
  courseDetailInfo?: any;
  currentRegistrationAdminName?: string;
  currentRegistrationIsOpen?: boolean;
  examDeadlines?: any[];
  examPart1Info?: ExamPartInfo;
  examPart2Info?: ExamPartInfo;
  examResources?: ExamResources;
  programState?: string;
  programType: string;
}

export interface ProgramData {
  contactId: string;
  frmProgramProgessInfo?: any;
  programsDetailInfo: ProgramsDetailInfo;
  courseDetailInfo: any;
  statusCode: number;
  statusMessage?: string;
}

export interface CourseDetailInfo {
  programState?: string; // Unpaid, Enrolled, AwaitingResults??, ResultsAvailable, Expired, Completed
  programType?: string;
  programRegisteredOnDate?: Date;
  programExpireDate?: Date;
  unpaidOrderId?: string;
  registrationURL?: string;
  eBookKey?: string;
  eBookAccessURL?: string;
  eBookExpireDate?: Date;
  eLearningPlatformName?: string;
  eLearningPlatformAccessURL?: string;
  eLearningPlatformExpiresOnDate?: Date;
  onlineExamProviderName?: string;
  onlineExamSchedulingID?: string;
  onlineExamSchedulingInformationPageURL?: string;
  OnlineExamSchedulingAccessURL?: string;
  OnlineExamSchedulingExpiresOn?: Date;
  examTakenDate?: Date;
  examResult?: string;
  examRetakeAvailable?: boolean;
  examRetakeAvailableDate?: Date;
  downloadCertificateURL?: string;
}
