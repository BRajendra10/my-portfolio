import { createContext, useState } from "react";

export const SidebarContext = createContext();

export function SidebarContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = (value) => setIsOpen(value);

  return (
    <SidebarContext.Provider value={{ isOpen, handleChange }}>
      {children}
    </SidebarContext.Provider>
  );
}
