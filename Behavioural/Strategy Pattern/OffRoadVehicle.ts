import { OffRoadDriveStrategy } from "./Strategy/OffRoadDriveStrategy";
import { Vehicle } from "./Vehicle";

export class OffRoadVehicle extends Vehicle {
    constructor () {
        super(new OffRoadDriveStrategy());
    }
}