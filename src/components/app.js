import React from 'react';
import DocumentList from './DocumentList';
import PageList from './PageList';
import RecordList from './RecordList';
import FieldList from './FieldList';


const App =()=>
<div className="container">
    <div className="row">
        <DocumentList className="col-md-6"/>
        <PageList className="col-md-6" />
        <RecordList className="col-md-6" />
        <FieldList className="col-md-6" />
        </div>
        </div>;


export default App;

