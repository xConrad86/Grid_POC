import { IData } from "../interface/Interface"

export const mockData = (data: Array<IData> | any): Array<IData> => {
    let mocked_data: Array<IData> | any = [];
    let i: number;
    console.log(data)
    for(i = 0; i < 600; i++){
        let record: IData = Object.assign({}, data[0]);        
        record.id += i;       
        if(i % 2 === 0) {
            record.is_unread = true
        } else {
            record.is_unread = false
        }
        mocked_data.push(record)
    }
    console.log(mocked_data)
    return mocked_data
}