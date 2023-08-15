import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/apiClient";

export interface platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () => {
  const todoService = new APIClient<platform>("/platforms/lists/parents");

  return useQuery<FetchResponse<platform>, Error>({
    queryKey: ["platforms"],
    queryFn: todoService.get,
    staleTime: 5000,
    keepPreviousData: true,
  });
};

export default usePlatform;
