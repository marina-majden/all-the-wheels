import { Link } from 'react-router-dom';
import VehicleForm from '../components/VehicleForm';

const AddVehicle = () => {
    return (
        <div>
            <h2>Add New Vehicle</h2>
            <VehicleForm />
            <Link to="/">Back to Home</Link>    
        </div>
    );
}   

export default AddVehicle;