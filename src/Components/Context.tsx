import React, { useState, createContext } from "react";

type OrderContextType = any;

export const OrderContext = createContext<OrderContextType | null>(null);

const Context = ({ children }: { children: any }) => {
  const [authCard, setAuthCard] = useState({});
  console.log(authCard);
  const value = {
    authCard,
    setAuthCard,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export default Context;
