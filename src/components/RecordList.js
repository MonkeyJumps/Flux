import React from 'react';
//connect allows us to connect our component to the store. Anytime our state is updated it will notify component and update
import {connect } from 'react-redux';
//make sure to bring the action creator from the actions file

import {
    setCurrentRecord    
} from '../reducer/record/actions';

//Since we know that props are what is passed to a funcitonal component so we know we can pull them out and use them.
const RecordList = ( {records , setRecord} ) => 
    <div id="recordList" className="col-md-6">
        <h1>Records</h1>
        <ul>
     {records && records.map(r=>
        <li key={r.RecordNumber} onClick={setRecord(r)}>
             {r.RecordNumber}
            </li>
     )}
            </ul>
        </div>



// store or state is going to be passed as an object use object destructuring to pull out only what we need. then return filtered object containg only the documents.
const mapStateToProps=( {document: { records }})=>({    
    records
});


const mapDispatchToProps = dispatch => ({
    setRecord(record){
        return () =>{
            dispatch(setCurrentRecord(record));                     
        };
    }
});
//need to connect component to the store by way of the connect component to do so. Need to wrap DocumentList in a "connected component".
//under the hood connect creates a new component that talks to the store and makes sure the correct things are passed to our component through props.
//connect is actually a curry function and needs to be called twice
export default connect(mapStateToProps,mapDispatchToProps)(RecordList);