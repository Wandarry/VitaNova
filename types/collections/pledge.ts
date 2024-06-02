enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

enum DonationType {
  Organ = "Organ",
  Tissue = "Tissue",
  Blood = "Blood",
}

enum BloodGroup {
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
  id: string;
  fullName: string;
  npiNumber: string;
  birthDate: Date;
  phoneNumber: string;
  email: string;
  gender: Gender;
  address: string;
  pledgeID?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PledgeDonationInfo {
  id: string;
  donationType: DonationType;
  excludedOrgans: string[];
  pledgeID?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PledgeEmergencyContactInfo {
  id: string;
  contactFullName: string;
  phoneNumber: string;
  address: string;
  email: string;
  pledgeID?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PledgeMedicalInfo {
  id: string;
  bloodGroup: BloodGroup;
  medicalHistory?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Pledge {
  state: PledgeStatus;
  medicalInfo?: PledgeMedicalInfo;
  emergencyContactInfo?: PledgeEmergencyContactInfo;
  pledgeDonationInfo?: PledgeDonationInfo;
  personalInfo?: PledgePersonalInfo;
}
