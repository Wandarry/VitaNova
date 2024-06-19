import { useState, useEffect } from "react";
import { useAuthContext } from "@/hooks/useAuthContext";
import pledgeCollectionInstance from "@/firebase/collections/PledgeCollection";

export const usePledgeProgress = () => {
  const { user } = useAuthContext();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      if (user?.email) {
        const pledge = await pledgeCollectionInstance.getById(user.email);
        if (pledge) {
          setProgress(pledge.progress || 0);
        }
      }
      setLoading(false);
    };

    fetchProgress();
  }, [user]);

  return { progress, loading };
};
