import AppHeader from "../appHeader/AppHeader";
import MainPage from "../pages/MainPage";
import ComicsPage from '../pages/ComicsPage';
import Page404 from '../pages/404';

import { BrowserRouter as Router, Route, Routes } from "react-router";
import SingleCharacterLayout from "../pages/singleCharacterLayout/SingleCharacterLayout";
import SingleComicLayout from '../pages/singleComicLayout/SingleComicLayout';
import SinglePage from "../pages/SinglePage";



const App = () => {


  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:id" element={<SinglePage Component={SingleComicLayout} dataType="comic" />} />
            <Route path="/characters/:id" element={<SinglePage Component={SingleCharacterLayout} dataType="character" />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </Router>

  )
}

export default App;