class Thermostat{
  constructor(temperature = 20) {
    this.temperature = temperature
    this.minimumTemperature = 10
  }

  up(amount) {
    this.temperature += amount
  }

  down(amount) {
    if((this.temperature - amount) < 10) {
      throw new Error('Min temp is 10 degrees')
    }
    this.temperature -= amount
  }
}