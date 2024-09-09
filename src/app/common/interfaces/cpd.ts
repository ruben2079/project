export interface CPDListingInfo {
  statusMessage: string;
  statusCode: number;
  CPDProgramInfo: CPDProgramInfo;
  featuredCPDActivities: CPDActivity[];
}

export interface CPDActivity {
  id: string;
  title: string;
  description: string;
  location: string;
  sortDate: Date;
  activityDate: string;
  activityType: string;
  areasOfStudy: string;
  credits: number;
  organization: string;
  provider: string;
  publication: string;
  url: string;
}

export interface CPDProgramInfo {
  currentCycle: string;
  cycles: CPDCycleInfo[];
}

export interface CPDCycleInfo {
  programId: string;
  cycleName: string;
  startYear: number;
  endYear: number;
  status: string;
  isAttested: boolean;
  creditsSubmitted: number;
  creditsApproved: number;
  creditsRequired: number;
  approvedClaims: CPDClaim[];
  pendingClaims: CPDClaim[];
}

export interface CPDClaim {
  claimId: string;
  activityType: string;
  dateOfCompletion?: Date;
  dateOfCompletionString?: string;
  credits: number;
  areaOfStudy: string;
  comments: string;
  URL: string;
  provider: string;
  providerOther: string;
  title: string;
  organizationName: string;
  contactEmail: string;
  publication: string;
  approvalComments: string;
  isFRM: boolean;
  isERP: boolean;
  isSCR: boolean;
}