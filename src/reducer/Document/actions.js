export const SET_CURRENT_DOCUMENT = "SET_CURRENT_DOCUMENT";
export const SET_CURRENT_PAGES="SET_CURRENT_PAGES";
export const SET_CURRENT_PAGE ="SET_CURENT_PAGE";
export const SET_CURRENT_RECORDS="SET_CURRENT_RECORDS";




//create action creator for the SET_CURRENT_DOCUMENT action that will be handled by the reducer
//returns new action
export function setCurrentDocument(document){    
    return { 
        type: SET_CURRENT_DOCUMENT,
        document
    };
}

export function setCurrentPages(pages){
    
    return{
        type: SET_CURRENT_PAGES,
        pages
    }
}

export function setCurrentPage(page){
  
    return{
        type: SET_CURRENT_PAGES,
        page
    }
}

export function setCurrentRecords(records){
    
    return{
        type: SET_CURRENT_RECORDS,
        records
    }
}


