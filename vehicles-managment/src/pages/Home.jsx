import VehicleList from '../components/VehicleList';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <h1>All the Wheels</h1>
        <VehicleList />
        <div className="container flex">
            <Link to="/add" className="button">Add Vehicle</Link>
       

        </div>
    
        </>
    );
    }

export default Home;