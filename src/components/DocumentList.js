import React from 'react';
//connect allows us to connect our component to the store. Anytime our state is updated it will notify component and update
import {connect } from 'react-redux';
//make sure to bring the action creator from the actions file
import {
    setCurrentDocument,
    setCurrentPages,
    setCurrentRecords
} from '../reducer/document/actions';


//Since we know that props are what is passed to a funcitonal component so we know we can pull them out and use them.
const DocumentList = ({documents,setDocument }) => 
    <div id="documentList" className="col-md-6">
        <h1>Documents</h1>
        <ul>
     {documents.map(d=>
        <li key={d.Name} onClick={setDocument(d)}> {d.Name}
            </li>
     )}
            </ul>
        </div>



// store or state is going to be passed as an object use object destructuring to pull out only what we need. then return filtered object containg only the documents.
const mapStateToProps=(  { documents })=>({    
    documents
});


//new syntax below is the same but cleaner than setDocument : function(id)
//our setDocument function is actually going to be a curry function where we are going to return another function from it. This will create a closure and keep the scope of the id
//for us to use later in the onclick event and after the map function runs
const mapDispatchToProps = dispatch => ({
    setDocument(document){            
        return () => {
            dispatch(setCurrentDocument(document))
            dispatch(setCurrentPages(document.Pages))
            dispatch(setCurrentRecords(document.Records))            
        };
    }
});
//need to connect component to the store by way of the connect component to do so. Need to wrap DocumentList in a "connected component".
//under the hood connect creates a new component that talks to the store and makes sure the correct things are passed to our component through props.
//connect is actually a curry function and needs to be called twice
export default connect(mapStateToProps, mapDispatchToProps)(DocumentList);
