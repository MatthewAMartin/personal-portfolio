import React from 'react';
import { useState } from 'react';
import { MenuBar } from './MenuBar/MenuBar';
import { MenuDrawer } from './MenuDrawer/MenuDrawer';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.HeaderContainer + ' flex items-center justify-between flex-wrap fixed top-0 left-0 right-0'}>
      <div className="container">
        <div className="row flex flex-row py-5 justify-between">
          <div className="flex items-center flex-shrink-0 w-full lg:w-52 justify-between">
            <div className="w-52">
              <a href="/">
                <h4 className="block leading-6">
                  Matthew Alexander<span className="text-primary">.</span>
                </h4>
              </a>
            </div>
            <div className="block lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-secondary-500 border-secondary-500 hover:text-white hover:bg-secondary-500 transition"
                onClick={() => setOpen(!open)}
              >
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
          </div>
          <MenuBar />
          <MenuDrawer open={open} setOpen={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
