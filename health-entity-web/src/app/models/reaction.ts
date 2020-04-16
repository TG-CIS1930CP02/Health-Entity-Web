export class Reaction {
  constructor(
    public substance: string,
    public manifestation: string,
    public description: string[],
    public severity: string,
    public exposureRoute: string
  ) {}
}
