import userCollectionInstance from "@/firebase/collections/user";
import { UserEntity } from "@/types/collections/user";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";

export const useUserData = (user: User | null) => {
  const [userData, setUserData] = useState<UserEntity | null>(null);
  const [userID, setUserId] = useState<string | null>(null);

  const [error, setError] = useState(false);

  useEffect(() => {
    let ignore = false;

    if (user?.email) {
      userCollectionInstance
        .getUserByEmail(user.email)
        .then((response) => {
          if (!response) {
            return;
          }

          if (!ignore) {
            setUserData(response[0]);
            setUserId(response[1]);
          }
        })
        .catch(() => {
          if (!ignore) setError(true);
        });
    }

    return () => {
      ignore = true;
    };
  }, [user]);

  return { userData, error, userID };
};
