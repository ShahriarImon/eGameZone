import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "00917201171e40f5a31e4509e8f9f614" },
});
class APIClient<T> {
  endPoint: string;
  requestConfig?: AxiosRequestConfig;
  constructor(endPoint: string, requestConfig?: AxiosRequestConfig) {
    this.endPoint = endPoint;
    this.requestConfig = requestConfig;
  }
  get = () => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, this.requestConfig)
      .then((res) => res.data);
  };
  // post = (data: T) => {
  //   return axiosInstance.post<T>(this.endPoint, data).then((res) => res.data);
  // };
}

export default APIClient;
