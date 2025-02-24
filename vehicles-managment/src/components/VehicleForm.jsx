import React from 'react';
import { observable } from 'mobx';
import VehicleStore from '../stores/VehicleStore';

/* TODO: change useState to mobx observe */
const VehicleForm = () => {
    const vehicleStore = observable(VehicleStore);
    const [make, setMake] = React.useState('');
    const [model, setModel] = React.useState('');
    const [year, setYear] = React.useState('');
    const [isLiked, setIsLiked] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        vehicleStore.vehicles({ make, model, year, isLiked });
        setMake('');
        setModel('');
        setYear('');
        setIsLiked(false);
    };

    return (
        <div className="container flex">
  <form onSubmit={handleSubmit}>
        <label>
        Make:
        <input
        type="text"
        value={make}
        onChange={(e) => setMake(e.target.value)}
        />
        </label>
        <label>
        Model:
        <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        />
        </label>
        <label>
        Year:
        <input
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        />
        </label>
        <label>
        Liked:
        <input
        type="checkbox"
        checked={isLiked}
        onChange={(e) => setIsLiked(e.target.checked)}
        />
        </label>
        <button type="submit">Add Vehicle</button>
        </form>
        </div>
      


    );
};

export default VehicleForm;
