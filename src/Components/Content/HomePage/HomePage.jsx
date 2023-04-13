//library
import React from 'react';
import { useSelector } from 'react-redux';

//components
import CardItems from '../Card/CardItems/CardItems';

function HomePage(props) {
  const items = useSelector((state) => state.cafe.item);
  const loading = useSelector((state) => state.cafe.loadingItem);

  return loading ? (
    <div>Loading is Start! Wait Please!</div>
  ) : (
    items.map((item) => {
      return <CardItems item={item} key={item.id} />;
    })
  );
}

export default HomePage;
