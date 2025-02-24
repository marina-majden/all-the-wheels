import { createContext, useContext } from 'react';
import VehicleStore from './VehicleStore';

const storeContext = createContext();

export const StoreProvider = ({ children }) => {
    return (
        <storeContext.Provider value={{ vehicleStore: VehicleStore }}>
            {children}
        </storeContext.Provider>
    );
}

export const useStore = () => {
    return useContext(storeContext);
}
