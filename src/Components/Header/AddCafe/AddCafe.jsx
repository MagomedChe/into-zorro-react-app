import React, { useState } from 'react';
import styles from '../../../common/Common.module.scss';
import { useDispatch } from 'react-redux';
import { postCafe } from '../../Content/Card/CardItems/actions';
import { NavLink } from 'react-router-dom';

function AddCafe(props) {
  //Проблемы с добавлением фотографии, функкция не доделана, предстоит еще поработать!

  const dispatch = useDispatch();
  const [title, setTittle] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');
  const NameOnchange = (e) => {
    setTittle(e.target.value);
  };
  const AddressOnchange = (e) => {
    setAddress(e.target.value);
  };
  const photoOnchange = (e) => {
    setPhoto(e.target.value);
  };
  const postClick = () => {
    dispatch(postCafe(title, address, photo));
  };

  return (
    <div className={styles.FormAddCafe}>
      <form>
        <div>Введите официальное название заведения</div>
        <input
          type="text"
          placeholder="Введите Название заведения"
          onChange={NameOnchange}
          value={title}
        />
      </form>

      <form>
        <div>Улица и номер дома</div>
        <input
          type="text"
          placeholder="Укажите номер дома и название улицы"
          value={address}
          onChange={AddressOnchange}
        />
      </form>

      <form>
        <div>Фотография заведения</div>
        <input
          type="text"
          placeholder="Вставьте ссылку фотографии"
          value={photo}
          onChange={photoOnchange}
        />
      </form>

      <div className={styles.ShipmentButton}>
        <NavLink exact to="/">
          <input type="submit" onClick={postClick} />
        </NavLink>
      </div>
    </div>
  );
}

export default AddCafe;
