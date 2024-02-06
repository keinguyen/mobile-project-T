class APIErrorService {
  async handleError(error: any, subject?: string) {
    console.log("handleError:", subject, error);

    throw error;
  }
}

const apiErrorService = new APIErrorService();
export default apiErrorService;
