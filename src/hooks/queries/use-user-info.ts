import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchUserDetails } from "../../services/api/user-info";
import { useStore } from "../../stores";

export const useUserInfo = (userId?: string) => {
  const setUserInfo = useStore((state) => state.setUserInfo);

  const query = useQuery({
    queryKey: ["user-info", userId],
    queryFn: () => fetchUserDetails({ userId: userId! }),
    enabled: !!userId,
  });

  useEffect(() => {
    if (query.data) {
      setUserInfo(query.data.data);
    }
  }, [query.data, setUserInfo]);

  return query;
};
