
export interface IData {
      id: number,
      from: string,
      sent_date: string,
      is_unread: boolean,
      subject: string,
      snippet: string
};
  
export enum RecordsAmount {
      SMALL = 100,
      MEDIUM = 250,
      HIGH = 500,
}

export interface IFunction {
      (): void;
  }