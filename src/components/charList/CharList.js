import './charList.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import useMarvelService from '../../services/marvelService';
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

const CharList = (props) => {
  const [charList, setCharList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [newItemLoading, setnewItemLoading] = useState(false);
  const [charEnded, setCharEnded] = useState(false);


  const { clearError, getAllCharacters, process, setProcess } = useMarvelService()

  useEffect((props) => {
    onRequest(offset, true);
  }, [])


  const onRequest = (offset, initial) => {
    initial ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllCharacters(offset)
      .then(onCharListLoaded)
      .then(() => setProcess("confirmed"))
  }

  const onCharListLoaded = async (newCharList) => {
    let ended = false;
    if (newCharList < 9) {
      ended = true;
    }
    setCharList([...charList, ...newCharList]);
    setnewItemLoading(false);
    setOffset(offset + 9);
    setCharEnded(ended);
  }

  const itemRefs = useRef([]);


  const focusOnItem = (id) => {
    itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
    itemRefs.current[id].classList.add('char__item_selected');
    itemRefs.current[id].focus();
  }

  const renderItems = arr => {
    const items = arr.map((item, i) => {
      return (
        <li
          key={i}
          ref={el => itemRefs.current[i] = el}
          onClick={() =>{ 
            props.onCharSelected(item.id);
            focusOnItem(i);
          }}
          className="char__item">
          <img src={item.thumbnail} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      )
    });

    return (
      <ul className="char__grid">
        {items}
      </ul>
    )
  }

  const elements = useMemo(() => {
    return setContent(process, () => renderItems(charList), newItemLoading);
    // eslint-disable-next-line
  }, [process])

  return (
    <div className="char__list">
      {elements}
      <button
        disabled={newItemLoading}
        onClick={() => onRequest(offset)}
        style={{ 'display': charEnded ? 'none' : 'block' }}
        className="button button__main button__long"
      >
        <div className="inner">load more</div>
      </button>
    </div>
  )
}

export default CharList;