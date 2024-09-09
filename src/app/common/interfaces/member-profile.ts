export interface Address {
  city: string;
  country: string;
  postalCode: string;
  provence: string;
  street1: string;
}

export interface PersonalInfo {
  avatarPhoto?: string;
  billingAddress: Address;
  email: string;
  firstName: string;
  garpId: string;
  lastName: string;
  phone?: string;
  linkedIn?: string;
  twitter?: string;
  mailingAddress: Address;
}

export interface MemberProfile {
  personalInfo: PersonalInfo;
  statusCode: number;
  statusMessage: string;
}