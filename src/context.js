import { createContext } from "react";

const CategoriesContext = createContext({
    categories: null,
    setCategory: () => { }
});
export default CategoriesContext;