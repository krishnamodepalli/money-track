"use client";

import React, { useReducer } from "react";

import { ICategories } from "@/interfaces";
import CategoryContext, {
  ICategoryContextAction,
  ICategoryContextState,
} from ".";

const CategoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    (state: ICategoryContextState, action: ICategoryContextAction) => {
      switch (action.type) {
        case "ADD_CAT":
          state.categories[action.payload.id] = action.payload.title;
          return state;
        case "REMOVE_CAT":
          const new_categories: ICategories = {};
          Object.keys(state.categories).forEach((key) => {
            if (key !== action.payload.id)
              new_categories[key] = state.categories[key];
          });
          return {
            categories: new_categories,
          };
        default:
          return state;
      }
    },
    {
      categories: {},
    },
  );

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
