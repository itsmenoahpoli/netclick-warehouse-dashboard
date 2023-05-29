import axios from "axios";
import { APP_VARS } from "~/config";

export default axios.create({
  baseURL: APP_VARS.getEnv("API_BASE_URL"),
  timeout: 8000,
});
