import apiErrorService from "@src/apis/api-error";

const subjectKey = {
  "tickets.api.getList": "GET",
  "tickets.api.createTicket": "POST",
};

export const requestAPI = async <T>(params: {
  body?: T;
  subject: keyof typeof subjectKey;
}): Promise<T> => {
  const { body, subject } = params;

  const result = await fetch(
    new URL(
      `.netlify/functions/${subject.split(".")[0]}`,
      "http://192.168.1.9:9999/"
    ),
    {
      mode: "cors",
      body: body ? JSON.stringify(body) : undefined,
      method: subjectKey[subject],
      headers: { subject, "Content-Type": "application/json" },
    }
  )
    .then((e) => e.json())
    .catch((error) => apiErrorService.handleError(error, subject));

  console.log(`End request ${subject}`);
  return result.data;
};
