export class Engine {
    constructor(engineStatus) {
        this._engineStatus = false;
        this._engineStatus = engineStatus;
    }
    get engineStatus() {
        return this._engineStatus;
    }
    turnEngineOn() {
        this._engineStatus = true;
    }
    turnEngineOff() {
        this._engineStatus = false;
    }
}
