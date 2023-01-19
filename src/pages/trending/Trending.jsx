import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/SingleContent/Card";
import "./trending.css";
const Trending = () => {
    const api = `https://api.themoviedb.org/`;
    const key = `api_key=${process.env.REACT_APP_API_KEY}`;
    const [content, setContent] = useState([]);

    const fetchTrending = async () => {
        try {
            const { data } = await axios.get(`${api}3/trending/all/day?${key}`);
            setContent(data.results);
        } catch (err) {
            setContent([]);
        }
    }

    useEffect(() => {
        fetchTrending();
    }, [])


    return (
        <div>
            <h2 className="pageTitle">
                Trending for today
            </h2>
            <div className="cards">
                {
                    content && content.map((c, index) => <Card key={index} content={c} />)
                }
            </div>
        </div>
    )
}

export default Trending