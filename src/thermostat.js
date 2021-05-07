class Thermostat{
  constructor(temperature = 20, powersave = false) {
    this.temperature = temperature
    this.minimumTemperature = 10
    this.powersave = powersave
  }

  up(amount) {
    if(this.powersave) {
      throw new Error('Powersave Mode on: Max temp is 25 degrees!')
    }
    this.temperature += amount
  }

  down(amount) {
    if((this.temperature - amount) < 10) {
      throw new Error('Min temp is 10 degrees')
    }
    this.temperature -= amount
  }

}