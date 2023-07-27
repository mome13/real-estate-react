import { AxiosResponse } from "axios";
import dispatch from "@/api/client";
import { useMutation } from "react-query";

const postSignOut = () => {
  return dispatch({
    method: "post",
    url: "/api/auth/signout",
  });
};
export const useSignOut = (
  onSuccess?: (data: AxiosResponse<any, any>) => void,
  onError?: (data: AxiosResponse<any, any>) => void
) => {
  return useMutation(postSignOut, {
    onSuccess,
    onError,
  });
};
