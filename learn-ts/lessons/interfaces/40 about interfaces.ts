interface IVehicle {
  seats: number;
  colour: string;
  canHavePassengers: boolean;
  fuelPer100Kilometers: number;

  calcFuelNeeded(distance: number): number;
}


class Car implements IVehicle {
  constructor(public seats: number, public colour: string, public canHavePassengers: boolean, public fuelPer100Kilometers: number) {
    this.seats = seats;
    this.colour = colour;
    this.canHavePassengers = canHavePassengers;
    this.fuelPer100Kilometers = fuelPer100Kilometers;
  }

  calcFuelNeeded(distance: number): number {
    return (distance * this.fuelPer100Kilometers) / 100
  }
}
