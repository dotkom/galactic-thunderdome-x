import SES from "aws-sdk/clients/ses"
import { MailSchema } from "./mail"

export type MailRequest = MailSchema

export interface MailService {
  send(request: MailRequest): Promise<void>
}

export const initMailService = (): MailService => {
  const ses = new SES({ region: "eu-north-1" })
  return {
    send: async (request: MailRequest) =>
      ses
        .sendEmail({
          Source: request.sender,
          Destination: {
            ToAddresses: request.recipients,
            CcAddresses: request.carbonCopy,
            BccAddresses: request.blindCarbonCopy,
          },
          Message: {
            Subject: {
              Data: request.subject,
            },
            Body: {
              Html: {
                Data: request.body,
              },
            },
          },
        })
        .promise()
        .then(() => undefined), // SendEmailResponse only provides an AWS MessageId, discard it
  }
}
