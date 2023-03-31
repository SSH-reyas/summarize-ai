import { useEffect } from "react";
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

// const getData = (page, sortField, sortOrder) =>
//     callGetpi("https://example.com", { page, sortField, sortOrder });

export const useGetData = (page, sortField, sortOrder) => {
    const queryClient = useQueryClient();
    const data = [
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
    const isLoading = useQuery(
        {
            keepPreviousData: true,
            staleTime: 12000
        }
    );

    useEffect(() => {
        if (data && data.config.hasMore) {
            const nextPage = page + 1;
            data
            queryClient.prefetchQuery(
                ["unique-key", nextPage, sortField, sortOrder],
                () => getData(nextPage, sortField, sortOrder)
            );
        }
    }, [queryClient, page, sortField, sortOrder, data]);

    return {data, isLoading};
};