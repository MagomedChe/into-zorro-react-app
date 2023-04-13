//library
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import HomePage from '../HomePage/HomePage';
import Content from './DetailedDescription/Content';
import AddCafe from '../../Header/AddCafe/AddCafe';
import Registration from '../../Registration/Registration';
import Login from '../../Login';

//styles
import styles from '../../../common/Common.module.scss';

function Index(props) {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/add-cafe" element={<AddCafe />} />
        <Route path="/:id?" element={<Content />} />
      </Routes>
    </div>
  );
}

export default Index;
