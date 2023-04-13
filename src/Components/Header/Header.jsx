//library
import React from 'react';
import { Toolbar } from '@material-ui/core';

//components
import LogoText from './LogoText';
import ButtonForAuth from '../Login/ButtonForAuth';

//styles
import s from '../../common/Common.module.scss';

function Header() {
  return (
    <div className={s.header}>
      <Toolbar className={s.navbar}>
        <LogoText />
        <ButtonForAuth />
      </Toolbar>
    </div>
  );
}

export default Header;
