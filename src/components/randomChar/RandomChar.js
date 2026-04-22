import './randomChar.scss';
import thor from '../../resources/img/thor.jpeg';
import mjolnir from '../../resources/img/mjolnir.png';
import { useEffect, useState } from 'react';
import setContent from '../../utils/setContent';
import useMarvelService from '../../services/marvelService';

const RandomChar = () => {
    const [char, setChar] = useState(null);

    const {getCharacter, clearError, setProcess, process} = useMarvelService();

    useEffect(() => {
      updateChar();
    }, [])


    const updateChar = async () => {
      try {
        clearError();
        setProcess('loading');  
        const id = Math.floor(Math.random() * 20);

        const character = await getCharacter(id);

        setChar(character);
        setProcess('confirmed');
      } catch (error) {
        console.log(error);
        setChar(null);
        setProcess('error');
      }
      
    }
    

    return (
        <div className="randomchar">
            {setContent(process, View, char)}
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button onClick={updateChar} className="button button__main">
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

const View = ({data}) => {

  const {thumbnail, description, name, homepage, wiki} = data;


  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt={name} className="randomchar__img" />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">
          {description}
        </p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default RandomChar;