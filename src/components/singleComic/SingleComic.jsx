import './singleComic.scss';
import AppHeader from "../appHeader/AppHeader";
import AppBanner from "../appBanner/AppBanner";
import xmen from '../../resources/x-men.jpg';

const SingleComic = () => {


  return (
    <>
      <AppBanner />
      <div className="single-comic__wrapper">
        <div className="single-comic__img">
          <img src={xmen} alt="xmen" />
        </div>
        <div className="single-comic__description">
          <div className="single-comic__title">X-Men: Days of Future Past</div>
          <div className="single-comic__text">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</div>
          <div className="single-comic__pages">144 pages</div>
          <div className="single-comic__language">Language: en-us</div>
          <div className="single-comic__price">9.99$</div>
        </div>
        <a href='' className="single-comic__back">Back to all</a>
      </div>
    </>
  )
}

export default SingleComic;