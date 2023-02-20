import { ThemeProvider } from "@emotion/react";
import { createTheme } from '@mui/material/styles'
import { Pagination } from "@mui/material";
import React from "react";





const darkTheme = createTheme({
    palette: {

    },
});

const CustomPagination = (props) => {
    // Scroll to top when page changes

    const { setPage, numOfPages } = props


    const handlePageChange = (page) => {

        console.log("page:", page)
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                zIndex: "10000"


            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numOfPages}
                    variant="outlined" color="primary"
                    background="primary"

                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    );

}
export default CustomPagination