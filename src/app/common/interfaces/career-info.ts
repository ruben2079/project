export interface CareerInfo {
  profileDemographicsContactInfo: ProfileDemographicsContactInfo;
  profileDemographicsFormInfo: ProfileDemographicsFormInfo
  statusCode: number;
  statusMessage: string;
}

export interface ProfileDemographicsContactInfo {
  expectedGraduationMonth: string;
  expectedGraduationYear: string;
  highestDegree: string;
  industry: string;
  industryStartWorkingYear: string;
  jobFunction: string;
  professionalDesignationACCA: boolean;
  professionalDesignationCA: boolean;
  professionalDesignationCAIA: boolean;
  professionalDesignationCFA: boolean;
  professionalDesignationCFP: boolean;
  professionalDesignationCIA: boolean;
  professionalDesignationCMA: boolean;
  professionalDesignationCMT: boolean;
  professionalDesignationCPA: boolean;
  professionalDesignationCQF: boolean;
  professionalDesignationOther: boolean;
  professionalDesignationPMP: boolean;
  professionalLevel: string;
  riskManagementStartWorkingYear: string;
  workingStatus: string;
  school?: string
  company?: string
  riskSpecialty?: string
}


export interface ProfileDemographicsFormInfo {
  countries: Country[];
  degrees: string[];
  graduationMonths: string[];
  howDidYouHearOptions: string[];
  industries: string[];
  institutions: Institution[];
  jobFunctions: string[];
  professionalLevels: string[];
  riskSpecialties: string[];
  workingStatus: string[];
  workingYears: string[];
}

export interface Country {
  code: string;
  id: string;
  name: string;
  phoneCode: string;
}

export interface Institution {
  id: string;
  name: string;
  type: string;
}