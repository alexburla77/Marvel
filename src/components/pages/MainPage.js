import RandomChar from "../randomChar/RandomChar"
import CharList from "../charList/CharList"
import CharInfo from "../charInfo/CharInfo"
import CharSearchForm from "../charSearchForm/CharSearchForm";
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import decoration from '../../resources/img/vision.png';
import { useState } from "react";


const MainPage = () => {

  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
    setChar(id);
  }


  return (
    <>
      <RandomChar />
      <div className="char__content" style={{ position: 'relative'}}>
        <CharList onCharSelected={onCharSelected} />
        <div style={{position: 'sticky', top: '40px'}}>
          <ErrorBoundary>
            <CharInfo charId={selectedChar} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharSearchForm />
          </ErrorBoundary>
        </div>
      </div>
      <img className="bg-decoration" src={decoration} alt="vision" />
    </>
  )
}

export default MainPage;