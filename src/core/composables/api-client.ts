import IApiRequest from "../interfaces/api.interface";

export function api(request: IApiRequest): Promise<Response> {
  return fetch(`${request.url}`, {
    method: request.method,
    headers: {
      "Content-type": "application/json",
    },
  });
}
