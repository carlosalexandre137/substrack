export const ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION";

export const SubscriptionReducer = (state, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      const subscription = action.payload;
      return [...state, subscription];
    default:
      return state;
  }
};
