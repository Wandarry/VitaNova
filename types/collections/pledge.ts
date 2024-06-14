export enum Gender {
  Male = "male",
  Female = "female",
}

export enum DonationType {
  Tranplantation = "Transplantation only",
  TranplantationOrReasearch = "Transplantation or Research",
}

export enum OrganToDonate {
  AllOrgans = "All organs",
  OrgansWithException = "Organs exception",
}

export enum BloodGroup {
  APositive = "A+",
  ANegative = "A-",
  BPositive = "B+",
  BNegative = "B-",
  ABPositive = "AB+",
  ABNegative = "AB-",
  OPositive = "O+",
  ONegative = "O-",
}

export enum PledgeStatus {
  Active = "Active",
  Revoked = "Revoked",
}

export interface PledgePersonalInfo {
  fullName: string;
  npiNumber: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  gender: Gender;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PledgeDonationInfo {
  donationType: DonationType;
  organToDonate: OrganToDonate;
  excludedOrgans: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PledgeEmergencyContactInfo {
  emergencyContactFullName: string;
  phoneNumber: string;
  address: string;
  email?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PledgeMedicalInfo {
  bloodGroup: BloodGroup;
  medicalHistory?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Pledge {
  status: PledgeStatus;
  medicalInfo?: PledgeMedicalInfo;
  emergencyContactInfo?: PledgeEmergencyContactInfo;
  pledgeDonationInfo?: PledgeDonationInfo;
  personalInfo?: PledgePersonalInfo;
}
