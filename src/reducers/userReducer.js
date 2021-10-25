import { SET_USER_PURCHASES } from "../actions/types";

const INITIAN_STATE = {
  purchases: [],
};

export default function (state = INITIAN_STATE, actions) {
  switch (actions.type) {
    case SET_USER_PURCHASES:
      return {
        purchases: actions.payload,
      };
    default:
      return state;
  }
}
