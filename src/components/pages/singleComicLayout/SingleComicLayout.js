import { Link } from "react-router"
import './singleComicLayout.scss';

const SingleComicLayout = ({ data }) => {
  const { title, thumbnail, description, price, language, pageCount } = data;
  return (
    <div className="single-comic">
      <img src={thumbnail} alt={title} className="single-comic__img" />
      <div className="single-comic__info">
        <h2 className="single-comic__name">{title}</h2>
        <p className="single-comic__descr">{description}</p>
        <p className="single-comic__pages">{pageCount}</p>
        <p className="single-comic__pages">Language: {language}</p>
        <div className="single-comic__price">{price}</div>
      </div>
      <Link to="/comics" className="single-comic__back">Back to all</Link>
    </div>
  )
}

export default SingleComicLayout