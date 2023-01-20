
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination";
import "../page.css";

const Series = () => {
    const api = `https://api.themoviedb.org/`;
    const key = `api_key=${process.env.REACT_APP_API_KEY}`;
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(0);

    const fetchTrending = async () => {
        try {
            const { data } = await axios.get(`${api}3/discover/tv?${key}&page=${page}`);
            console.log(data);
            setContent(data.results);
            setPage(data.page)
            setPages(data.total_pages)
        } catch (err) {
            setContent([]);
        }
    }

    useEffect(() => {
        fetchTrending();
    }, [page])


    return (
        <div className="container">
            <h2 className="pageTitle">
                LOOK FOR TV SHOWS
            </h2>
            <div className="cards" id="cards">
                {
                    content && content.map((c, index) => <Card key={index} content={c} />)
                }
            </div>
            <Pagination setPage={setPage} pages={pages <= 500 ? pages : 500}></Pagination>
        </div>
    )
}

export default Series