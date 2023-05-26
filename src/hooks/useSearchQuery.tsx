import axios, { AxiosResponse } from "axios";
import dispatch from "@/api/client";
import { useQuery } from "react-query";

const fetchSearchItems = () => {
  return dispatch({
    method: "get",
    url: "/property/find",
    params: {
      // type: "sale",
      bathrooms: 3,
    },
  });
};
export const useSearchQuery = (
  onSuccess?: (data: AxiosResponse<any, any>) => void,
  onError?: (data: AxiosResponse<any, any>) => void,
  select?: (data: AxiosResponse<any, any>) => any
) => {
  return useQuery("search", fetchSearchItems, {
    onSuccess,
    onError,
    select,
  });
};
