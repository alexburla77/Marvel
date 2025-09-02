import './App.scss'
import AppHeader from '../appHeader/AppHeader';
import CharInfo from '../charInfo/CharInfo';
import CharList from '../charList/CharList';
import RandomChar from '../randomChar/RandomChar';
import Skeleton from '../skeleton/Skeleton';
import CharForm from '../charForm/charForm';
import ComicsPage from '../comicsPage/ComicsPage';
import SingleComic from '../singleComic/SingleComic';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import superhero from '../../resources/bg-asset.png';

function App() {

  return (
    <Router>
      <div className='app'>
        <AppHeader />

        <Routes>
        <Route exact path="/" element={
            <main>
            <RandomChar />
            <div className="char__content">
              <CharList />
              <div>
                <CharInfo />
                {/* <Skeleton/> */}
                <CharForm/>
              </div>
            </div>
            <img src={superhero} alt='superhero' className='superhero' />
          </main>
        } />
        <Route path="/comics" element={<ComicsPage />}/>
        {/* <SingleComic /> */}
        </Routes>
      </div>

    </Router>
  )
}

export default App
