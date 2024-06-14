import { BaseCollection } from "./BaseCollections";
import {
  Pledge,
  PledgeDonationInfo,
  PledgeEmergencyContactInfo,
  PledgeMedicalInfo,
  PledgePersonalInfo,
  PledgeStatus,
} from "@/types/collections/pledge";

let instance: PledgeCollection;

class PledgeCollection extends BaseCollection<Pledge> {
  idPrefix = "user-pledge";

  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    super("pledges");
    instance = this;
  }

  private computeId(email: string): string {
    return `${this.idPrefix}${email}`;
  }

  savePersonalInfo(document: PledgePersonalInfo, email: string) {
    const recordId = this.computeId(email);
    return this.createOrUpdate(
      {
        personalInfo: document,
        status: PledgeStatus.Active,
      },
      recordId,
    );
  }

  saveDonationInfo(document: PledgeDonationInfo, email: string) {
    const recordId = this.computeId(email);
    return this.createOrUpdate(
      {
        pledgeDonationInfo: document,
        status: PledgeStatus.Active,
      },
      recordId,
    );
  }

  saveEmergencyContactInfo(
    document: PledgeEmergencyContactInfo,
    email: string,
  ) {
    const recordId = this.computeId(email);
    return this.createOrUpdate(
      {
        emergencyContactInfo: document,
        status: PledgeStatus.Active,
      },
      recordId,
    );
  }

  saveMedicalInfo(document: PledgeMedicalInfo, email: string) {
    const recordId = this.computeId(email);
    return this.createOrUpdate(
      {
        medicalInfo: document,
        status: PledgeStatus.Active,
      },
      recordId,
    );
  }
}

const pledgeCollectionInstance = Object.freeze(new PledgeCollection());

export default pledgeCollectionInstance;
