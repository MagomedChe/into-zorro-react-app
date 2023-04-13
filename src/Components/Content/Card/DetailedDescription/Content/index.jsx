//library
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

//components
import Map from '../Header/Map';
import ImageCafe from './ImageCafe';
import InfoCafe from './InfoCafe';
import LocationMap from './LocationMap';
import Reviews from '../../../../BlockReviews';

//styles
import styles from '../../../../../common/Common.module.scss';

function Content(props) {
  const location = useSelector((state) => state.addresses.addresses);
  const id = parseInt(useParams().id);
  const filteredAddresses = location.filter((item) => item.cafeId === id);
  const images = useSelector((state) => state.bigimage.BigImage);
  const filteredImages = images.filter((item) => item.cafeId === id);
  const ContactInfo = useSelector((state) => state.contactinfo.ContactInfo);
  const filteredContactInfo = ContactInfo.filter((item) => item.cafeId === id);

  return (
    <div className={styles.index}>
      {filteredImages.map((image) => {
        return <ImageCafe image={image} key={image.id} />;
      })}
      {filteredAddresses.map((item) => {
        return <Map item={item} key={item.id} id={id} />;
      })}

      {filteredContactInfo.map((item) => {
        return <InfoCafe item={item} key={item.id} />;
      })}
      <LocationMap />
      <Reviews />
    </div>
  );
}

export default Content;
