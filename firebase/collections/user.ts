import { UserEntity } from "@/types/collections/user";
import { BaseCollection } from "./BaseCollections";
import { FirebaseCollectionsNames } from "../collectionsNames";

let instance: UserCollection;

class UserCollection extends BaseCollection<UserEntity> {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    // import FirebaseCollectionsNames please
    super(FirebaseCollectionsNames.users);
    instance = this;
  }

  async getUserByEmail(email: string): Promise<[UserEntity, string] | null> {
    const snapshot = await this.getFirstSnapshotBy("email", email);
    if (!snapshot) {
      return null;
    }

    const id = snapshot.id;
    const data = snapshot.data();

    return [data, id];
  }
}

const userCollectionInstance = Object.freeze(new UserCollection());

export default userCollectionInstance;
