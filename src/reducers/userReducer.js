import { SET_PURCHASE_DETAIL, SET_USER_PURCHASES } from "../actions/types";

const INITIAN_STATE = {
  purchases: [],
  purchaseDetail: {},
};

export default function (state = INITIAN_STATE, actions) {
  switch (actions.type) {
    case SET_USER_PURCHASES:
      return {
        purchases: actions.payload,
      };
    case SET_PURCHASE_DETAIL:
      let purchaseDetail;
      state.purchases.map((purchase) => {
        if ((purchase._id = action.payload)) {
          purchaseDetail = purchase;
        }
      });
      return {
        ...state,
        purchaseDetail,
      };
    default:
      return state;
  }
}
