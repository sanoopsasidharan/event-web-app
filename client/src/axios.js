import axios from "axios";
import { baseUrl } from "./constands/Constands";

const instance = axios.create({
  baseURL: baseUrl,
});

export default instance;
