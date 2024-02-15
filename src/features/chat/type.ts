export type AttachmentFile = {
  fileId: string;
  ticketId: string;
  imageView: string;
};

export enum TicketStatus {
  WAITING = "WAITING",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
}

export type Ticket = {
  id: string;
  ts?: { isoString: string };
  createBy: string;
  title: string;
  desc: string;
  channelId: string;
  patientInfo: {
    fisrtName: string;
    lastName: string;
    phoneNumber: string;
  };
  status: TicketStatus;
  attachmentFiles?: AttachmentFile[];
};
