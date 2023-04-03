import { DriveStrategy } from "./DriveStrategy";

export class OffRoadDriveStrategy implements DriveStrategy {
    drive(): void {
        console.log("Off-road drive strategy");
    }
}