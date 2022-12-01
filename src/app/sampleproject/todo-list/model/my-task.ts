import * as dayjs from "dayjs";

export class MyTask {
  public id ?: string;
  public name ?: string;
  public createdDate ?: dayjs.Dayjs;
  public solved ?: boolean;
  public deleted ?: boolean;
  public reason ?: string;
  public important ?: boolean;

  constructor() {
  }
}
