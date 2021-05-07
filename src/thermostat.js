class Thermostat{
  constructor(temperature = 20) {
    this.temperature = temperature
  }

  up(amount) {
    this.temperature += amount
  }

  down(amount) {
    this.temperature -= amount
  }
}