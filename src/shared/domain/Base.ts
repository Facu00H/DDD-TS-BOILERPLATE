import { IBase } from "../interface/IBase";

export class Base implements IBase {
  readonly id?: number;
  readonly createdAt: Date;
  updatedAt: Date;

  constructor() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
