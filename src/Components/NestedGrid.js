import React, { useState } from "react";
import CustomTable from "./CustomTable";
import { useGetData } from "./customHook"

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

// const personData = [
//     { id: 1, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 2, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 3, firstName: "May", lastName: "Jones", age: 18 },
//     { id: 4, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 5, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 6, firstName: "May", lastName: "Jones", age: 18 },
//     { id: 7, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 8, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 9, firstName: "May", lastName: "Jones", age: 18 },
//     { id: 10, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 11, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 12, firstName: "May", lastName: "Jones", age: 18 },
//     { id: 13, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 14, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 15, firstName: "May", lastName: "Jones", age: 18 }, 
//     { id: 16, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 17, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 18, firstName: "May", lastName: "Jones", age: 18 },
//     { id: 19, firstName: "James", lastName: "Smith", age: 20 },
//     { id: 20, firstName: "Alex", lastName: "Green", age: 20 },
//     { id: 21, firstName: "May", lastName: "Jones", age: 18 }
//   ];

const NestedGrid = () => {
    const [page, setPage] = useState(1);
    const [sortField, setSortField] = useState();
    const [sortOrder, setSortOrder] = useState();

    const {data, isLoading} = useGetData(page, sortField, sortOrder);

    const handleTableChange = (type, { page, sortField, sortOrder }) => {
        if (type === "sort") {
            setPage(1);
            setSortField(sortField);
            setSortOrder(sortOrder);
        }
        if (type === "pagination") {
            setPage(page);
        }
    };

    if(isLoading) {
        return <h3>Loading......</h3>;
    }
    
    return (
        <CustomTable
            data = {data.data}
            columns = {columns}
            page = {page}
            handleTableChange = {handleTableChange}
            totalSize = {data.config.totalSize}
        />
    );
  };

  export default NestedGrid;