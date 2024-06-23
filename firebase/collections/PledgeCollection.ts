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

  async getUserPledge(email: string): Promise<Pledge | null> {
    const recordId = this.computeId(email);
    const pledge = await super.getByID(recordId);
    return pledge;
  }

  private computeProgress(pledge: Partial<Pledge>): number {
    let progress = 0;
    if (pledge.personalInfo) progress += 25;
    if (pledge.pledgeDonationInfo) progress += 25;
    if (pledge.emergencyContactInfo) progress += 25;
    if (pledge.medicalInfo) progress += 25;
    return progress;
  }

  async savePersonalInfo(document: PledgePersonalInfo, email: string) {
    const recordId = this.computeId(email);
    const existingPledge = (await this.getByID(recordId)) || {};
    const progress = this.computeProgress({
      ...existingPledge,
      personalInfo: document,
    });
    return this.createOrUpdate(
      {
        ...existingPledge,
        personalInfo: document,
        status: PledgeStatus.Active,
        progress,
      },
      recordId,
    );
  }

  async saveDonationInfo(document: PledgeDonationInfo, email: string) {
    const recordId = this.computeId(email);
    const existingPledge = (await this.getByID(recordId)) || {};
    const progress = this.computeProgress({
      ...existingPledge,
      pledgeDonationInfo: document,
    });
    return this.createOrUpdate(
      {
        ...existingPledge,
        pledgeDonationInfo: document,
        status: PledgeStatus.Active,
        progress,
      },
      recordId,
    );
  }

  async saveEmergencyContactInfo(
    document: PledgeEmergencyContactInfo,
    email: string,
  ) {
    const recordId = this.computeId(email);
    const existingPledge = (await this.getByID(recordId)) || {};
    const progress = this.computeProgress({
      ...existingPledge,
      emergencyContactInfo: document,
    });
    return this.createOrUpdate(
      {
        ...existingPledge,
        emergencyContactInfo: document,
        status: PledgeStatus.Active,
        progress,
      },
      recordId,
    );
  }

  async saveMedicalInfo(document: PledgeMedicalInfo, email: string) {
    const recordId = this.computeId(email);
    const existingPledge = (await this.getByID(recordId)) || {};
    const progress = this.computeProgress({
      ...existingPledge,
      medicalInfo: document,
    });
    return this.createOrUpdate(
      {
        ...existingPledge,
        medicalInfo: document,
        status: PledgeStatus.Active,
        progress,
      },
      recordId,
    );
  }
}

const pledgeCollectionInstance = Object.freeze(new PledgeCollection());

export default pledgeCollectionInstance;
