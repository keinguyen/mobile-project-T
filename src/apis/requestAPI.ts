import apiErrorService from "@src/apis/api-error";

export enum ERequestAPI {
  GET_LIST = "tickets.api.getList",
  CREATE_TICKET = "tickets.api.createTicket",
  UPLOAD_ATTACHMENT_FILE = "attachments.api.uploadfiles",
}

const availableAPIs: Record<string, Array<ERequestAPI>> = {
  GET: [ERequestAPI.GET_LIST],
  POST: [ERequestAPI.CREATE_TICKET, ERequestAPI.UPLOAD_ATTACHMENT_FILE],
};

export const requestAPI = async <T>(params: {
  body?: T;
  isUploadFile?: boolean;
  subject: ERequestAPI;
}) => {
  const { body, subject, isUploadFile } = params;

  const result = await fetch(
    new URL(
      `.netlify/functions/${subject.split(".")[0]}`,
      // "http://192.168.1.11:8888/"
      "https://ephemeral-salmiakki-1ae238.netlify.app/"
    ),
    {
      mode: "cors",
      body: body
        ? isUploadFile
          ? (body as unknown as Blob)
          : JSON.stringify(body)
        : undefined,
      method: availableAPIs["GET"].includes(subject) ? "GET" : "POST",
      headers: {
        subject,
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
