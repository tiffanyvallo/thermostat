class Thermostat{
  constructor(temperature = 20, powersave = true) {
    this.temperature = temperature
    this.minimumTemperature = 10
    this.powersave = powersave
  }

  up(amount) {
    if(this.powersave && (this.temperature + amount) > 25) {
      throw new Error('Powersave Mode on: Max temp is 25 degrees!')
    } else if (this.powersave === false && (this.temperature + amount) > 35) {
      throw new Error('Powersave Mode off: Max temp is 35 degrees!')
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