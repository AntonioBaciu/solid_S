export class Car {
    constructor(musicPlayer, engine, fuelTank) {
        this._miles = 0;
        this._musicPlayer = musicPlayer;
        this._engine = engine;
        this._fuelTank = fuelTank;
    }
    get miles() {
        return this._miles;
    }
    get musicPlayer() {
        return this._musicPlayer;
    }
    get engine() {
        return this._engine;
    }
    get fuelTank() {
        return this._fuelTank;
    }
    drive() {
        if (this._engine.engineStatus === false || this.fuelTank.fuel <= 0) { //engineStatus no brackets cause Boolean?
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this.fuelTank.fuel -= 1;
        this._miles += this.fuelTank.FUEL_MILEAGE;
    }
}
