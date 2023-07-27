import { AxiosResponse } from "axios";
import dispatch from "@/api/client";
import { useQuery } from "react-query";
import { IProperty } from "@/scenes/property";

const fetchProperty = ({ queryKey }) => {
  return dispatch({
    method: "get",
    url: `/api/property/find/${queryKey[1]}`,
  });
};
export const useProperty = (propertyId: string) => {
  return useQuery<any, any, IProperty, any>(
    ["search", propertyId],
    fetchProperty
  );
};
