import './randomChar.scss';
import '../../style/buttons.scss';
import thor from '../../resources/thor.jpg';
import mjolnir from '../../resources/mjolnir.png';

function RandomChar() {

  return (
    <div className='char-list'>
      <div className="char-list__character character">
        <div className="character__char-img">
            <img src={thor} alt="thor"/>
        </div>
        <div className="character__info">
          <div className="character__info-name">THOR</div>
          <div className="character__info-text">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>
          <div className="character__info-buttons">
            <button className="button">HOMEPAGE</button>
            <button className="button button__little-gray">WIKI</button>
          </div>
        </div>
      </div>
      <div className="char-list__random">
        <div className="char-list__text">
          Random character for today! <br/>
          Do you want to get to know him better?
        </div>
        <div className="char-list__text char-list__text_2">
          Or choose another one
        </div>
        <a href="" disabled className="button char-list__button">TRY IT</a>
        <div className="char-list__img">
          <img src={mjolnir} alt="mjolnir"/>
        </div>
      </div>
    </div>
  )
}

export default RandomChar;