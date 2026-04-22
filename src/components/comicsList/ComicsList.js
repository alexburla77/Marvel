import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import { useEffect, useState } from 'react';
import useMarvelService from '../../services/marvelService';
import { Link } from 'react-router';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner />;
    case 'loading':
      return newItemLoading ? <Component /> : <Spinner />;
    case 'confirmed':
      return <Component />;
    case 'error':
      return <ErrorMessage />;
    default:
      throw new Error('Unexpected process state');
  }
}

const ComicsList = () => {

  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [newItemLoading, setnewItemLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);

  const {getAllComics, clearError, setProcess, process} = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);


  const onRequest = (offset, initial) => {
    initial ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllComics(offset)
      .then(onComicsListLoaded)
      .then(() => setProcess('confirmed'))
  }

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList < 9) {
      ended = true;
    } 
    setComicsList([...comicsList, ...newComicsList]);
    setnewItemLoading(false);
    setOffset(offset + 8);
    setCharEnded(ended);
  }


  function renderItems(arr) {

      const items = arr.map((item, i) => {
        return (
          <li key={i} className="comics__item">
            <Link to={`/comics/${item.id}`}>
              <img src={item.thumbnail} alt={item.name} className="comics__item-img" />
              <div className="comics__item-name">{item.name}</div>
              <div className="comics__item-price">{item.price}</div>
            </Link>
          </li>
        )
      })

      return (
        <ul className="comics__grid">
          {items}
        </ul>
      )
  }


  return (
    <div className="comics__list">
      {setContent(process, () => renderItems(comicsList), newItemLoading)}
      <button 
        
        onClick={() => onRequest(offset)} 
        className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  )
}

export default ComicsList;