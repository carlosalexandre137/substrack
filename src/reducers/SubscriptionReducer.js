export const ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";

export const SubscriptionReducer = (state, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      const subscription = action.payload;
      return [...state, subscription];
    case REMOVE_SUBSCRIPTION:
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
};
