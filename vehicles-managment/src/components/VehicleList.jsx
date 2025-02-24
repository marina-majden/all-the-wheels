import Vehicle from './Vehicle';
import { vehicles } from '../data.json';

const VehicleList = () => {


    return (
        <div>
            {vehicles.map((vehicle) => (
                <Vehicle key={vehicle.id} vehicle={vehicle} />
            ))}
        </div>
    );
}

export default VehicleList;
