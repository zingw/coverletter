import * as dayjs from "dayjs";

export class MyTask{
  name ?: string;
  createdDate ?: dayjs.Dayjs;
  solved ?: boolean;
  reason ?: string;
  important ?: boolean;
}
