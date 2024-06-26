import React, { createContext, useContext, useState } from 'react';

export interface IStateContext {
    user: any;
    setUser: (user: any) => void;
    showCart: boolean;
    setShowCart: (show: boolean) => void;
    showRequester: boolean;
    setShowRequester: (show: boolean) => void;
    plan: any;
    setPlan: (plan: any) => void;
    carDetail: any;
    setCarDetail: (carDetail: any) => void;
}

const Context = createContext<IStateContext | null>(null);

export const StateContext = ({ children }:any) => {
    const [user, setUser] = useState();
    const [showCart, setShowCart] = useState(false);
    const [showRequester, setShowRequester]: any = useState(false);
    const [plan, setPlan] = useState();
    const [carDetail,setCarDetail] = useState();
    return (
        <Context.Provider value={{ user, setUser,showCart, setShowCart,plan, setPlan,carDetail,setCarDetail,showRequester,setShowRequester }}>
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);