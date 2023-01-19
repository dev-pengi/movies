import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const links = [
    '/',
    '/movies',
    '/series',
    '/search',
]

const SimpleBottomNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const linkIndex = links.find((link) => location.pathname == link)
    const [value, setValue] = useState(linkIndex ? links.indexOf(linkIndex) : 0);

    useEffect(() => {
        const link = links[value] ? links[value] : '/'
        navigate(link)
    }, [value])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
    };
    const boxStyles = {
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 100,
    }
    const navStyles = {
        backgroundColor: "#495774",
        height: '55px',
    }
    const actionStyles = {
        color: "#ffffff !important"
    }

    return (
        <Box sx={boxStyles}>
            <BottomNavigation sx={navStyles} value={value} onChange={handleChange}>
                <BottomNavigationAction sx={actionStyles} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction sx={actionStyles} label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction sx={actionStyles} label="Tv Shows" icon={<LiveTvIcon />} />
                <BottomNavigationAction sx={actionStyles} label="Search" icon={<SearchIcon />} />

            </BottomNavigation>
        </Box>
    );
}
export default SimpleBottomNavigation;