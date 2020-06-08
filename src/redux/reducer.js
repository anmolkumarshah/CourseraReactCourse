import { DISHES } from '../Components/Shared/Dishes'
import { COMMENTS } from '../Components/Shared/Comments'
import { LEADERS } from '../Components/Shared/Leaders'
import { PROMOTIONS } from '../Components/Shared/Promotions'

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    leaders : LEADERS,
    promotions : PROMOTIONS,
};

export const Reducer = (state = initialState, action) => {
  return state;
};