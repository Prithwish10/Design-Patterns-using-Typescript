import { DriveStrategy } from "./Strategy/DriveStrategy";

export class Vehicle {
  strategy: DriveStrategy;

  constructor(strategy: DriveStrategy) {
    this.strategy = strategy;
  }

  drive() {
    this.strategy.drive();
  }
}
