import { ApolloError } from "@apollo/client";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

interface QueryResultProps<T> {
    loading: boolean;
    error: ApolloError | undefined;
    data: T | undefined;
    children: JSX.Element | JSX.Element[] | undefined; // React.Child | React.Child[]
}
const QueryResult = <T extends object>({ loading, error, data, children }: QueryResultProps<T>) => {
    if (error) {
        return <p>ERROR: {error.message}</p>;
    }
    if (loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        );
    }
    if (data && children) {
        return <React.Fragment>{children}</React.Fragment>;
    } else {
        return <p>Nothing to show...</p>;
    }
};

export default QueryResult;