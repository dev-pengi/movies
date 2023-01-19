import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
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
            <span className="pageTitle">
            </span>
            <div className="trending">
                {
                    content && content.map((c, index) => <SingleContent key={index} content={c} />)
                }
            </div>
        </div>
    )
}

export default Trending