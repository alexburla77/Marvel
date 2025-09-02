import './charInfo.scss';
import loki from '../../resources/loki.jpg';

function CharInfo() {

  return (
    <div className="char-info">
      <div className="char-info__top">
        <div className="char-info__img">
          <img src={loki} alt="loki" />
        </div>
        <div className="char-info__aside">
          <div className="char-info__name">LOKI</div>
          <div className="char-info__buttons">
            <button className="button">HOMEPAGE</button>
            <button className="button button__little-gray char-info__button">WIKI</button>
          </div>
        </div>
      </div>
      <div className="char-info__text">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.
      </div>
      <div className="char-info__comics">Comics:</div>
      <ul className="char-info__list">
        <li className="char-info__list-item">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="char-info__list-item">Alpha Flight (1983) #50</li>
        <li className="char-info__list-item">Amazing Spider-Man (1999) #503</li>
        <li className="char-info__list-item">Amazing Spider-Man (1999) #504</li>
        <li className="char-info__list-item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
        <li className="char-info__list-item">Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
        <li className="char-info__list-item">Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)</li>
        <li className="char-info__list-item">Vengeance (2011) #4</li>
        <li className="char-info__list-item">Avengers (1963) #1</li>
        <li className="char-info__list-item">Avengers (1996) #1</li>
      </ul>
    </div>
  )
}

export default CharInfo;