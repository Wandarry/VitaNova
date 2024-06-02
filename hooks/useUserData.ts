// Importing necessary modules and types
import userCollectionInstance from "@/firebase/collections/user";
import { UserEntity } from "@/types/collections/user";
import { User } from "firebase/auth";
import { useState, useEffect } from "react";

// Custom hook to fetch and manage user data
export const useUserData = (user: User | null) => {
  // State to hold the fetched user data
  const [userData, setUserData] = useState<UserEntity | null>(null);
  // State to handle any errors during data fetching
  const [error, setError] = useState(false);

  // useEffect hook to fetch user data when the component mounts or the 'user' changes
  useEffect(() => {
    // Variable to ignore setting state if the component is unmounted
    let ignore = false;

    // Check if the user object has an email property
    if (user?.email) {
      // Fetch user data by email
      userCollectionInstance
        .getUserByEmail(user.email)
        .then((response) => {
          // If no response, do nothing
          if (!response) {
            return;
          }
          // If the component is still mounted, update the userData state
          if (!ignore) {
            setUserData(response[0]);
          }
        })
        .catch(() => {
          // If an error occurs and the component is still mounted, set the error state
          if (!ignore) setError(true);
        });
    }

    // Cleanup function to set ignore to true if the component unmounts
    return () => {
      ignore = true;
    };
  }, [user]); // Dependency array, effect runs when 'user' changes

  // Return the userData and error state
  return { userData, error };
};
