import './comicsPage.scss';
import xmen from '../../resources/x-men.jpg';
import AppBanner from '../appBanner/AppBanner';
import uw from '../../resources/UW.jpg';

const ComicsPage = () => {

  return (
    <>
      <AppBanner />
      <div className="comics-wrapper">
        <div className="comics-list">
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={uw} alt="xmen" />
            </div>
            <div className="item-comics__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="item-comics__price">9.99$</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={xmen} alt="xmen" />
            </div>
            <div className="item-comics__name">X-Men: Days of Future Past</div>
            <div className="item-comics__price">NOT AVAILABLE</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={uw} alt="uw" />
            </div>
            <div className="item-comics__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="item-comics__price">9.99$</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={xmen} alt="xmen" />
            </div>
            <div className="item-comics__name">X-Men: Days of Future Past</div>
            <div className="item-comics__price">NOT AVAILABLE</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={xmen} alt="xmen" />
            </div>
            <div className="item-comics__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="item-comics__price">9.99$</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={xmen} alt="xmen" />
            </div>
            <div className="item-comics__name">X-Men: Days of Future Past</div>
            <div className="item-comics__price">NOT AVAILABLE</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={xmen} alt="xmen" />
            </div>
            <div className="item-comics__name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
            <div className="item-comics__price">9.99$</div>
          </div>
          <div className="comics-list__item item-comics">
            <div className="item-comics__img">
              <img src={xmen} alt="xmen" />
            </div>
            <div className="item-comics__name">X-Men: Days of Future Past</div>
            <div className="item-comics__price">NOT AVAILABLE</div>
          </div>
        </div>

        <button className="button button__big">LOAD MORE</button>
      </div></>
    
  )
}

export default ComicsPage;