import './charList.scss';
import abyss from '../../resources/abyss.jpg';
import loki from '../../resources/loki.jpg';

function CharList() {

  return (
    <div className='chars'>
      <div className="chars__items">
        <div className="chars__item">
          <div className="chars__item-img"><img src={abyss} alt="abyss"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">ABYSS</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={loki} alt="loki"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">LOKI</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={abyss} alt="abyss"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">ABYSS</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={loki} alt="loki"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">LOKI</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={abyss} alt="abyss"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">ABYSS</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={loki} alt="loki"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">LOKI</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={abyss} alt="abyss"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">ABYSS</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={loki} alt="loki"/></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">LOKI</div>
          </div>
        </div>
        <div className="chars__item">
          <div className="chars__item-img"><img src={abyss} alt="abyss" /></div>
          <div className="chars__item-bottom">
            <div className="chars__item-name">ABYSS</div>
          </div>
        </div>
      </div>  
      <button className="button button__big">LOAD MORE</button>
    </div>
  )
}

export default CharList;