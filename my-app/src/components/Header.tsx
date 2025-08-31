

import "./Header.scss";


const Header = () => {
  return (
    <header className="header">
      <div className="header__brand">
        <span className="header__logo">FaceLook</span>
      </div>

      <nav className="header__nav">
        <a className="header__link" href="/">Home</a>
        <a className="header__link" href="/users">Users</a>
      </nav>
    </header>
  );
}

export default Header;