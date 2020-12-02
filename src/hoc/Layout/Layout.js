import React from 'react';
import css from './Layout.module.css';

const Layout = props => <div className={css.layout}>{props.children}</div>;

export default Layout;
