import './appHeader.scss';
import { Link } from 'react-router-dom';

function AppHeader() {
  

  return (
      <header className="app__header">
        <Link to="/" className="app__logo"><span>Marvel</span> information portal</Link>
        <div className="app__links">
          <Link to="/" className="app__link">Characters</Link> / <Link to="/comics" className="app__link">Comics</Link>
        </div>
      </header>
  )
}

export default AppHeader;