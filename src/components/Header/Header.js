import React from 'react';
import css from './Header.module.css';

const Header = () => (
    <header className={css.header}>
      <div className={css.logo}><span>תומכת חריגים</span></div>
      <nav className={css.nav}>
      <a className={css.nav__link} href='/visual'>הצגה ויזואלית</a>
      <a className={css.nav__link} href='/curriculum'>תכניות לימודים</a>
      <a className={css.nav__link} href='/file-form'>העלאת קבצים</a>
      <a className={css.nav__link} href='/files'>הגדרות</a>
      <a className={css.nav__link} href='/exit'>יציאה מהמערכת</a>
    </nav>
    </header>
  );

export default Header;
