import MAIN_ACTION_TYPES from "./main.types";

export const setUser = (name) => ({
    type: MAIN_ACTION_TYPES.SET_NAME,
    payload: name
});
