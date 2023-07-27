import axios, { AxiosResponse } from "axios";
import dispatch from "@/api/client";
import { useQuery } from "react-query";
import { IProperty } from "@/scenes/property";

const fetchSearchItems = ({ queryKey }) => {
  return dispatch({
    method: "get",
    url: `/api/property/find${queryKey[1] ? `?${queryKey[1]}` : ""}`,
    // params: {
    // type: "sale",
    //   bathrooms: 3,
    // },
  });
};
export const useSearchQuery = (
  queryParams: string | null,
  // onSuccess?: (data: AxiosResponse<any, any>) => void,
  onError?: (data: AxiosResponse<any, any>) => void,
  select?: (data: AxiosResponse<any, any>) => any
) => {
  return useQuery<any, any, Array<IProperty>, any>(
    ["search", queryParams],
    fetchSearchItems,
    {
      // onSuccess,
      onError,
      select,
    }
  );
};
