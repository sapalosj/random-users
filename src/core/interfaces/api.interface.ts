import HttpRequest from "@/core/enums/api.enum";

interface IApiRequest {
  method: HttpRequest;
  url: string;
}
export default IApiRequest;
