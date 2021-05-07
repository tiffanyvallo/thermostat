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

  
});