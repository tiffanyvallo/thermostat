describe ('Thermostat', function() { 
  let thermostat
  beforeEach(function() {
    thermostat = new Thermostat 
  });

  describe('constructor', function() {
     it('can start at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20)
    });
  })
  
  describe('up', function() {
    it('can increment temp', function() {
      thermostat.up(5)
      expect(thermostat.temperature).toEqual(25)
    })
  })

  describe('down', function() {
    it('can decrease temp', function() {
      thermostat.down(10)
      expect(thermostat.temperature).toEqual(10)
    })

    it('raises error if temp goes below 10 degrees', function() {
      expect(function() { thermostat.down(11) } ).toThrowError(Error, 'Min temp is 10 degrees')
    })
  })

  
});