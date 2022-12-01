import * as dayjs from "dayjs";

export class MyTask {
  public id ?: string;
  public name ?: string;
  public createdDate ?: dayjs.Dayjs;
  public solvedTime ?: number;
  public deleted ?: boolean;
  public reason ?: string;
  public important ?: boolean;

  constructor() {
  }
}
