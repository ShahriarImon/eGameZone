import axios from "axios";
import { gameQuery } from "../Hooks/useGames";

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
  getAll = () => {
    return axiosInstance
      .get<T>(this.endPoint, {
        params: {
          userId: this.query?.userId,
          _start: (this.query?.pageNo - 1) * this.query?.pageSize,
          _limit: this.query?.pageSize,
          key: "5cefd7e93fcc49378ab6e5858233b40d",
        },
      })
      .then((res) => res.data);
  };
  post = (data: T) => {
    return axiosInstance.post<T>(this.endPoint, data).then((res) => res.data);
  };
}

export default APIClient;
