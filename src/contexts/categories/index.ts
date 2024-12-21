import { ICategories } from "@/interfaces";
import React, { createContext } from "react";

interface ICategoryContextState {
  categories: ICategories;
}

type ICategoryContextAction =
  | { type: "ADD_CAT"; payload: { id: string; title: string } }
  | { type: "REMOVE_CAT"; payload: { id: string } };

interface ICategoryContext {
  state: ICategoryContextState;
  dispatch: React.Dispatch<ICategoryContextAction>;
}

const CategoryContext = createContext<ICategoryContext | null>(null);

export default CategoryContext;
export type { ICategoryContextState, ICategoryContextAction };
