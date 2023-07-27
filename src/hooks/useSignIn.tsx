import { AxiosResponse } from "axios";
import dispatch from "@/api/client";
import { useMutation } from "react-query";

const postSignIn = <T,>(data: any) => {
  return dispatch({
    method: "post",
    url: "/api/auth/signin",
    data,
  });
};

export const useSignIn = <T,>(
  onSuccess?: (data: AxiosResponse<any, any>) => void,
  onError?: (data: AxiosResponse<any, any>) => void
) => {
  return useMutation<any, any, T, any>(postSignIn, {
    onSuccess,
    onError,
  });
};
