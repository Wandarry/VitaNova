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
  idPrefix = "user/pledge";

  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }

    super("users");
    instance = this;
  }

  private computeId(email: string): string {
    return `${this.idPrefix}${email}`;
  }

  savePersonalInfo(document: PledgePersonalInfo, email: string) {
    const recordId = this.computeId(email);
    this.createOrUpdate(
      {
        personalInfo: document,
        state: PledgeStatus.Active,
      },
      recordId,
    );
  }

  saveDonationInfo(document: PledgeDonationInfo, email: string) {
    const recordId = this.computeId(email);
    this.createOrUpdate(
      {
        pledgeDonationInfo: document,
        state: PledgeStatus.Active,
      },
      recordId,
    );
  }

  saveEmergencyContactInfo(
    document: PledgeEmergencyContactInfo,
    email: string,
  ) {
    const recordId = this.computeId(email);
    this.createOrUpdate(
      {
        emergencyContactInfo: document,
        state: PledgeStatus.Active,
      },
      recordId,
    );
  }

  saveMedicalInfo(document: PledgeMedicalInfo, email: string) {
    const recordId = this.computeId(email);
    this.createOrUpdate(
      {
        medicalInfo: document,
        state: PledgeStatus.Active,
      },
      recordId,
    );
  }
}

const pledgeCollectionInstance = Object.freeze(new PledgeCollection());

export default pledgeCollectionInstance;
