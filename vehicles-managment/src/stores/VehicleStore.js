/* Component that defines the vehicle object and returns its UI */
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import VehicleStore from '../stores/VehicleStore';

const Vehicle = ({ vehicle }) => {
    const vehicleStore = observable(VehicleStore);
    const { id, make, model, year, isLiked } = vehicle;
    const handleLike = () => {
        vehicleStore.updateVehicle({ ...vehicle, isLiked: !isLiked });
    };
    
    return (
        <li>
        {make} {model} {year}{' '}
        <button onClick={handleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
        </li>
    );
    }

export default observer(Vehicle);