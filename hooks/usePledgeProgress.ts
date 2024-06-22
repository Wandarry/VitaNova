import { useState } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import pledgeCollectionInstance from "@/firebase/collections/PledgeCollection";
import { useFocusEffect } from "expo-router";

export const usePledgeProgress = () => {
  const { user } = useAuthContext();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useFocusEffect(() => {
    const fetchProgress = async () => {
      if (user?.email) {
        const pledge = await pledgeCollectionInstance.getUserPledge(user.email);
        if (pledge) {
          setProgress(pledge.progress || 0);
        }
      }
      setLoading(false);
    };

    fetchProgress();
  });

  return { progress, loading };
};
