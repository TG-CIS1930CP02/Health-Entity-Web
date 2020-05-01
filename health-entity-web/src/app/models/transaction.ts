export class Transaction {
  constructor(
    public institution: string,
    public operation: string,
    public recipient: string,
    public recipientRole: string,
    public resourceIntegrity: string,
    public resourcePath: string,
    public sourceType: string,
    public sender: string,
    public senderRole: string,
    public timestamp: Date
  ) {}
}
