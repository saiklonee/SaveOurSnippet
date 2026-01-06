import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import api from "../libs/api";

function SyncUser() {
  const { getToken, isSignedIn } = useAuth();

  useEffect(() => {
    if (!isSignedIn) return;

    const syncUser = async () => {
      try {
        const token = await getToken();

        await api.post(
          "user/sync-user",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error("User sync failed", error);
      }
    };

    syncUser();
  }, [isSignedIn]);

  return null;
}

export default SyncUser;
