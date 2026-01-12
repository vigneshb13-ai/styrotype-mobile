import { UserResponse } from "src/types/user-info";
import { get } from "../axios-client";

export const fetchUserDetails = async (params: { userId: string }) => {
  const path = `/users/${params.userId}`;
  const result: UserResponse = await get(path);
  console.log("result", result);
  return result;
};
