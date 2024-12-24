"use client";

import React, { useReducer } from "react";

import { TransacType } from "@/interfaces";
import CategoryContext, {
  ICategoryContextAction,
  ICategoriesContextState,
} from ".";
import { catActions } from "@/utils/database";

const CategoryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    (state: ICategoriesContextState, action: ICategoryContextAction) => {
      switch (action.type) {
        case "ADD_CAT":
          {
            const { id, title, transacType } = action.payload;
            if (transacType === TransacType.EXPENSE) state.expense[id] = title;
            else if (transacType === TransacType.INCOME)
              state.income[id] = title;
          }
          return state;

        case "REMOVE_CAT":
          const new_categories: ICategoriesContextState = {
            income: {},
            expense: {},
          };
          {
            const { id, transacType } = action.payload;
            if (transacType === TransacType.EXPENSE) {
              Object.keys(state.expense).forEach((key) => {
                if (key !== id)
                  new_categories.expense[key] = state.expense[key];
              });
            } else if (transacType === TransacType.INCOME) {
              Object.keys(state.income).forEach((key) => {
                if (key !== id) new_categories.income[key] = state.income[key];
              });
            }
          }
          return new_categories;
        default:
          return state;
      }
    },
    {
      income: {},
      expense: {},
    },
  );

  // fetch the categories here itself
  const { getAll } = catActions;
  (async () => {
    const categories = await getAll();
    if (!categories) {
      // TODO: show some error
      return;
    }
    Object.keys(categories.income).forEach((category) => {
      dispatch({
        type: "ADD_CAT",
        payload: {
          id: category,
          title: categories.income[category],
          transacType: TransacType.INCOME,
        },
      });
    });
    Object.keys(categories.expense).forEach((category) => {
      dispatch({
        type: "ADD_CAT",
        payload: {
          id: category,
          title: categories.expense[category],
          transacType: TransacType.EXPENSE,
        },
      });
    });
  })();

  return (
    <CategoryContext.Provider value={{ state, dispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
