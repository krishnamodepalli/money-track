import { ICategoriesContextState, TransacType } from "@/interfaces";
import React, { createContext } from "react";

type ICategoryContextAction =
  | { type: "ADD_CAT"; payload: { id: string; title: string, transacType: TransacType } }
  | { type: "REMOVE_CAT"; payload: { id: string, transacType: TransacType } };

interface ICategoryContext {
  state: ICategoriesContextState;
  dispatch: React.Dispatch<ICategoryContextAction>;
}

const CategoryContext = createContext<ICategoryContext | null>(null);

export default CategoryContext;
export type { ICategoriesContextState, ICategoryContextAction };
