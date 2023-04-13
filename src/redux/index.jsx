import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import Card from '../Components/Content/Card/CardItems/cardReducer';
import addressess from './addresessReducer';
import bigImages from './BigImageReducer';
import ContactInfo from './ContactInfoReducer';
import Rating from './RatingReducer';
import reviewsReducer from '../Components/BlockReviews/reviewsReducer';
import usersReducer from '../Components/BlockReviews/Users/usersReducer';
import { auth } from './RegAuthReducer/auth';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  cafe: Card,
  addresses: addressess,
  bigimage: bigImages,
  contactinfo: ContactInfo,
  ratinges: Rating,
  reviews: reviewsReducer,
  users: usersReducer,
  auth: auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
