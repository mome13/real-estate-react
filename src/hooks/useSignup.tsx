import { AxiosResponse } from "axios";
import dispatch from "@/api/client";
import { useMutation } from "react-query";

const postSignUp = (data: any) => {
  return dispatch({
    method: "post",
    url: "/api/auth/signup",
    data,
  });
};
export const useSignUp = <T,>(
  onSuccess?: (data: AxiosResponse<any, any>) => void,
  onError?: (data: AxiosResponse<any, any>) => void
) => {
  return useMutation<any, any, T, any>(postSignUp, {
    onSuccess,
    onError,
  });
};
