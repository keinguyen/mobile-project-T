import apiErrorService from "@src/apis/api-error";

const subjectKey = {
  "tickets.api.getList": "GET",
  "tickets.api.createTicket": "POST",
  "tickets.api.google": "POST",
};

export const requestAPI = async <T>(params: {
  body?: T;
  isUploadFile?: boolean;
  subject: keyof typeof subjectKey;
}) => {
  const { body, subject, isUploadFile } = params;

  const result = await fetch(
    new URL(
      `.netlify/functions/${subject.split(".")[0]}`,
      "https://ephemeral-salmiakki-1ae238.netlify.app/"
    ),
    {
      mode: "cors",
      body: body
        ? isUploadFile
          ? (body as unknown as Blob)
          : JSON.stringify(body)
        : undefined,
      method: subjectKey[subject],
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
