/* Store for state of vehicles */
import { makeObservable, observable, action } from 'mobx';

class VehicleStore {
    vehicles = [];

    constructor() {
        makeObservable(this, {
            vehicles: observable,
            addVehicle: action,
            updateVehicle: action,
            deleteVehicle: action,
        });
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    updateVehicle(updatedVehicle) {
        this.vehicles = this.vehicles.map((vehicle) =>
            vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
        );
    }

    deleteVehicle(vehicleId) {
        this.vehicles = this.vehicles.filter((vehicle) => vehicle.id !== vehicleId);
    }
}

export default new VehicleStore();