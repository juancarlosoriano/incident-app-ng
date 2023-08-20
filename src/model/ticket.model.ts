// const enum Status {
//   Open = 'Open',
//   Closed = 'Closed',
// }

export class Ticket {
  constructor(
    public _id?: string,
    public title?: string,
    public status?: string,
    public description?: string,
    public createdOn?: Date,
    public createdBy?: [string, string],
    public assignedTo?: [string, string],
    public comments?: Array<[string, Date]>,
    public closedOn?: Date
  ) {}

  public toString(): string {
    return `Ticket
    ---------------------------------
    Title: ${this.title}
    Description: ${this.description}
    ---------------------------------
    `;
  }
}
