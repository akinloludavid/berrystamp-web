import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/user";

export const useLogin = () => {
  return useMutation({
    mutationFn: (e: any) => loginUser(e),
    mutationKey: ["login user"],
  });
};
