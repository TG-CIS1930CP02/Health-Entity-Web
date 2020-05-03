export class Transaction {
  constructor(
    public institution: string,
    public operation: string,
    public recipient: string,
    public recipientRole: string,
    public resourceIntegrity: string,
    public resourcePath: string,
    public resourceType: string,
    public sender: string,
    public senderRole: string,
    public timestamp: Date,
    public resourceId: string
  ) {}
}
