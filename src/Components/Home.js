import React, { Component } from 'react';
// import './Home.css';
// import NestedGrid from './NestedGrid.js';
import BootstrapTable from "react-bootstrap-table-next";
// import { QueryClientProvider, QueryClient, Query } from 'react-query';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

// const queryClient = new QueryClient();

const expandRow = {
    renderer: row => (
      <div style={{ padding: "10px", backgroundColor: 'white'}}>
        <h4 style={{textAlign: "left"}}>Demographics Information</h4>
        <br></br>
        <div class="row justify-content-center">
        <div class="col-auto">
            <BootstrapTable 
                keyField="id"
                data={persons}
                columns={columns}
            />
        </div>
        </div>
      </div>
    ),
    showExpandColumn: true,
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
      if (isAnyExpands) {
        return <b>-</b>;
      }
      return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
      if (expanded) {
        return (
          <b>-</b>
        );
      }
      return (
        <b>+</b>
      );
    }
  };
  
const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "firstName",
      text: "First Name"
    },
    {
      dataField: "lastName",
      text: "Last Name"
    }
  ];

const persons = [
    { id: 1, firstName: "James", lastName: "Smith", age: 20 },
    { id: 2, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 3, firstName: "May", lastName: "Jones", age: 18 }
]

const people = [
    { id: 1, firstName: "James", lastName: "Smith", age: 20 },
    { id: 2, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 3, firstName: "May", lastName: "Jones", age: 18 },
    { id: 4, firstName: "James", lastName: "Smith", age: 20 },
    { id: 5, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 6, firstName: "May", lastName: "Jones", age: 18 },
    { id: 7, firstName: "James", lastName: "Smith", age: 20 },
    { id: 8, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 9, firstName: "May", lastName: "Jones", age: 18 },
    { id: 10, firstName: "James", lastName: "Smith", age: 20 },
    { id: 11, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 12, firstName: "May", lastName: "Jones", age: 18 },
    { id: 13, firstName: "James", lastName: "Smith", age: 20 },
    { id: 14, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 15, firstName: "May", lastName: "Jones", age: 18 }, 
    { id: 16, firstName: "James", lastName: "Smith", age: 20 },
    { id: 17, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 18, firstName: "May", lastName: "Jones", age: 18 },
    { id: 19, firstName: "James", lastName: "Smith", age: 20 },
    { id: 20, firstName: "Alex", lastName: "Green", age: 20 },
    { id: 21, firstName: "May", lastName: "Jones", age: 18 }
  ];


export default class Home extends Component {
    render() {
        return (
            <div className = "Home">
                <br></br>
                <h2>Data Table</h2>
                <div style={{ minHeight: "61.5vh",borderRadius: "15x",paddingLeft: "100px", paddingRight: "100px", paddingBottom: "10px" }}>
                    <br></br>
                    <BootstrapTable 
                        hover
                        keyField = "id"
                        data={people}
                        columns={columns}
                        expandRow={expandRow}   
                        pagination = { paginationFactory() }
                    />
      
                </div>
            </div>
        )
    }
    // return (
    //     <QueryClientProvider client = {queryClient}>
    //         <NestedGrid />
    //     </QueryClientProvider>

    // );}
}

// {<div className ='row'><h4>AT&T Chief Data Office</h4>
// <h4>© 2023 AT&T Proprietary (Internal Use Only)</h4>
// <h4>Please be reminded it is unlawful to trade in securities of AT&T or the securities of another company while in possession of material, nonpublic information acquired in the course of an employment or vendor relationship or otherwise through a confidential relationship. It is also unlawful to pass on such information to another person without an AT&T business-related reason. All of this conduct is typically referred to as "Insider Trading" and can subject a person to criminal and civil penalties, including up to 20 years in prison, disgorgement of profits, and substantial financial penalties.</h4></div>}
// {/* {<div className ='row'><p>© 2023 AT&T Proprietary (Internal Use Only)</p></div>} */}
// {/* {<p>Please be reminded it is unlawful to trade in securities of AT&T or the securities of another company while in possession of material, nonpublic information acquired in the course of an employment or vendor relationship or otherwise through a confidential relationship. It is also unlawful to pass on such information to another person without an AT&T business-related reason. All of this conduct is typically referred to as "Insider Trading" and can subject a person to criminal and civil penalties, including up to 20 years in prison, disgorgement of profits, and substantial financial penalties.</p>} */}
// </div>