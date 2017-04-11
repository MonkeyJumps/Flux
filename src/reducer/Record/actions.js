export const SET_CURRENT_RECORD="SET_CURRENT_RECORD";
export const SET_CURRENT_FIELDS="SET_CURRENT_FIELDS";
export const RESET_RECORD_FIELDS="RESET_RECORD_FIELDS";

export function setCurrentRecord(record){    
    return{
        type: SET_CURRENT_RECORD,
        record
    }
}

export function resetRecordFields(record){    
    return{
        type: RESET_RECORD_FIELDS,
        record
    }
}