import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import firebaseAuth from "@/firebase/auth";

export const useAuthState = () => {
  // State to hold the authenticated user object
  const [user, setUser] = useState<User | null>(null);
  // State to handle the loading state during authentication check
  const [loading, setLoading] = useState(true);

  // useEffect hook to handle Firebase authentication state changes
  useEffect(() => {
    // Subscribe to the Firebase authentication state changes
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      (currentUser) => {
        // Update the user state with the current user if authenticated
        setUser(currentUser);
        // Set loading to false once the user state is updated
        setLoading(false);
      },
      () => {
        // In case of an error, set loading to false
        setLoading(false);
      },
    );

    // Cleanup function to unsubscribe from the auth state changes when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Return the user and loading state
  return { user, loading };
};
