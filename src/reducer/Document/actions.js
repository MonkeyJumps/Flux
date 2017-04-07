export const SET_CURRENT_DOCUMENT = "SET_CURRENT_DOCUMENT";
export const SET_CURRENT_PAGES="SET_CURRENT_PAGES";


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