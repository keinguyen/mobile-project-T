import apiErrorService from "@src/apis/api-error";

export enum ERequestAPI {
  GET_LIST = "api/ticket/get",
  CREATE_TICKET = "api/ticket/create",
  UPLOAD_ATTACHMENT_FILE = "api/drive/upload",
}

export const requestAPI = async <T>(params: {
  body?: T;
  subject: string;
  isUploadFile?: boolean;
  method: "GET" | "POST";
}) => {
  const isDev = false;
  const { body, subject, method, isUploadFile } = params;

  const result = await fetch(
    new URL(
      subject,
      isDev ? "http://localhost:5000/" : "https://appraisal-hub.onrender.com/"
    ),
    {
      mode: "cors",
      body: body
        ? isUploadFile
          ? (body as unknown as Blob)
          : JSON.stringify(body)
        : undefined,
      method,
      headers: {
        "Content-Type": isUploadFile
          ? "multipart/form-data"
          : "application/json",
      },
    }
  )
    .then((e) => e.json())
    .catch((error) => apiErrorService.handleError(error, subject));

  console.log(`End request ${subject}`);
  return result;
};
