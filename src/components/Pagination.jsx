import { createTheme, Pagination, PaginationItem, ThemeProvider } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

const PaginationFnc = ({ page, setPage, pages }) => {

    const handleChange = (page) => {
        console.log(page);
        setPage(page);
        document.getElementById("app").scrollTo(0, 0);
    }
    const containerStyles = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        margin: '10px 0'
    }
    const DarkTheme = createTheme({
        palette: {
            mode:'dark',
            text:'#ffffff'
        }
    })

    return (
        <>
            {
                pages && < div className="Pagination" style={containerStyles}>
                    <ThemeProvider theme={DarkTheme}>
                        <Pagination sx={{ color: 'white !important' }}
                            count={pages}
                            color="primary"
                            onChange={(event, value) => handleChange(value)}
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                />
                            )}
                        />
                    </ThemeProvider>

                </div >
            }
        </>
    )
}

export default PaginationFnc