export const REMOVE_ITEM = "REMOVE_ITEM";

export const removeItem = item => {
  console.log("Incoming Item to remove:", item);
  return {
    type: REMOVE_ITEM,
    payload: item
  };
};

export const ADD_ITEM = "ADD_ITEM";

export const addItem = item => {
  console.log("Incoming Item in actions:", item);
  return {
    type: ADD_ITEM,
    payload: item
  };
};
