export const SET_CURRENT_RECORD="SET_CURRENT_RECORD";
export const SET_CURRENT_FIELDS="SET_CURRENT_FIELDS";


export function setCurrentRecord(record){    
    return{
        type: SET_CURRENT_RECORD,
        record
    }
}