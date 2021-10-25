import { SET_USER_PURCHASES } from "./types";

export function fetchUserPurchases() {
  return {
    type: SET_USER_PURCHASES,
    payload: [
      {
        _id: 0,
        total: 19.02,
        orderNumber: "s5d1f8r16s5",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Eduardo Hernadez",
          shippingAddress: "1234 west street",
        },
      },
      {
        _id: 1,
        total: 19.02,
        orderNumber: "s5d1f8r16s5",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "Eduardo Hernadez",
          shippingAddress: "1234 west street",
        },
      },
      {
        _id: 2,
        total: 19.02,
        orderNumber: "s5d1f8r16s5",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "hrte Hernadez",
          shippingAddress: "1234 west street",
        },
      },
      {
        _id: 3,
        total: 19.02,
        orderNumber: "s5d1f8r16s5",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "max Hernadez",
          shippingAddress: "1234 west street",
        },
      },
      {
        _id: 4,
        total: 19.02,
        orderNumber: "s5d1f8r16s5",
        orderDate: new Date(),
        creditCard: "-0000",
        user: {
          name: "edd Hernadez",
          shippingAddress: "1234 west street",
        },
      },
    ],
  };
}
