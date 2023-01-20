import { img_300, img_500, unavailable } from "../../configs/config"
import "./Card.css"
const Card = ({ content }) => {
  const { id, release_date, media_type, vote_average, vote_count } = content
  const title = content.title || content.name
  const poster = content.poster_path ? `${img_500}/${content.poster_path}` : `${unavailable}`
  return (
    <div className="card">
      <img src={poster} alt={title} />
      <h4 className="name">{title}</h4>
      <div className={`${vote_average > 0 ? 'rate' : ''} ${vote_average >= 5 ? '' : 'under5'}`} data-rate={isNaN(vote_average) ? 0 : vote_average.toFixed(2)}></div>
    </div >
  )
}

export default Card