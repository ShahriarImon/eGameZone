import axios from "axios";
import { gameQuery } from "../Hooks/useGames";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});
class APIClient<T> {
  endPoint: string;
  query: gameQuery;
  constructor(endPoint: string, query: gameQuery) {
    this.endPoint = endPoint;
    this.query = query;
  }
  get = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, {
        params: {
          userId: this.query?.userId,
          _start: (this.query?.pageNo - 1) * this.query?.pageSize,
          _limit: this.query?.pageSize,
          key: "00917201171e40f5a31e4509e8f9f614",
        },
      })
      .then((res) => res.data);
  };
  // post = (data: T) => {
  //   return axiosInstance.post<T>(this.endPoint, data).then((res) => res.data);
  // };
}

export default APIClient;
