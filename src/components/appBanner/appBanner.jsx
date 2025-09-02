import './appBanner.scss';
import avengers from '../../resources/avengers.png';
import avengersLogo from '../../resources/avengers-logo.png';

const AppBanner = () => {

  return (
    <div className='app-banner'>
      <div className="app-banner__wrapper">
        <div className="app-banner__img">
          <img src={avengers} alt="avengers" />
        </div>
        <div className="app-banner__title">
          New comics every week! <br />
          Stay tuned!
        </div>
      </div>
      <div className="app-banner__logo">
        <img src={avengersLogo} alt="avengers-logo" />
      </div>
    </div>
  )
}

export default AppBanner;