import { useReducer } from "react";

interface ReducerState {
  currentFilters: [];
}

const reducer = (state: any, action: { type: string; payload: string }) => {
  const addAction = (state: ReducerState) => ({
    ...state,
    currentFilters: [...state.currentFilters, action.payload]
  });

  const actionTypes: any = {
    add: addAction
  };
  return actionTypes[action.type](state);
};

export const useTagsReducer = (initialState: ReducerState) =>
  useReducer(reducer, initialState);
