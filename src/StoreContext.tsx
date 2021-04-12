import React from "react";
import {StoreType} from "./redux/store";
import {RootReduxStoreType} from "./redux/redux-store";

const StoreContext = React.createContext({} as RootReduxStoreType)

export type ProviderType = {
    store:  RootReduxStoreType // need to fix it
    children: React.ReactNode
}

export const Provider: React.FC<ProviderType> = (props) => {
    return(
        <div>
            <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
}

export {
    StoreContext
}