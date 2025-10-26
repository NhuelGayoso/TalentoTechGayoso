import { createContext,useState } from "react";

// 1. crear el contexto
const FilterContext = createContext();

// 2. crear el provider
export const FilterProvider = ({ children }) => {
    const [category, setCategory] = useState("all");
  return (
    <FilterContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
