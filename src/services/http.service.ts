import { AxiosError } from "axios";
import { toast } from "react-toastify";
import httpAxios from "~/api";
import { API_ROUTES } from "~/constants";

export class HttpService {
  protected get HTTP() {
    return httpAxios;
  }

  protected get API_ROUTES() {
    return API_ROUTES;
  }

  protected handleHttpError(error: unknown): void {
    if (error instanceof AxiosError) {
      const statusCode = error.response?.status;

      console.log(statusCode);

      if (statusCode === 401) {
        toast.error("Unauthorized access, provide valid account", {
          autoClose: 2500,
          pauseOnHover: false,
          position: "top-center",
          theme: "colored",
        });
      }

      if (statusCode === 500) {
        toast.error("Internal server error occured", {
          autoClose: 2500,
          pauseOnHover: false,
          position: "top-center",
          theme: "colored",
        });
      }
    }
  }
}
