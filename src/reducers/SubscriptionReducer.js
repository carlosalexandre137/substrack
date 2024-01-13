export const ADD_SUBSCRIPTION = "ADD_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";
export const UPDATE_SUBSCRIPTION = "UPDATE_SUBSCRIPTION";

export const SubscriptionReducer = (state, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      const subscription = action.payload;
      return [subscription, ...state];
    case REMOVE_SUBSCRIPTION:
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    case UPDATE_SUBSCRIPTION:
      const sub = action.payload;
      return state.map((item) => {
        if (item.id === sub.id) {
          item = sub;
        }
        return item;
      });
    default:
      return state;
  }
};
