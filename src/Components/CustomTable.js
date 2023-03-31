import React, { Component, useState } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, { PaginationProvider, PaginationTotalStandalone, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

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

const CustomTable = (props) => {
    const { data, columns, page, totalSize, handleTableChange } = props;
    return (
        <div className = "Home">
            <br></br>
            <h2>Data Table</h2>
            <div style={{ minHeight: "61.5vh",borderRadius: "15x",paddingLeft: "100px", paddingRight: "100px", paddingBottom: "10px" }}>
                <br></br>
                <BootstrapTable
                    keyField = "id"
                    remote
                    data = {data}
                    columns = {columns}
                    expandRow={expandRow}
                    pagination = {paginationFactory({
                        page,
                        sizePerPage: 20,
                        sizePerPageList: [],
                        totalSize
                    })}
                    onTableChange = {handleTableChange}
                />
            </div>
        </div>
    );
};

export default CustomTable;