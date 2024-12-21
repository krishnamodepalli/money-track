import CategoryContext from "@/contexts/categories";
import { useContext } from "react";

const useCategoryContext = () => {
  const context = useContext(CategoryContext);

  if (!context)
    throw Error(
      "Category Context should be used only inside Category Context Provider!!",
    );

  return context;
};

export default useCategoryContext;
