import { Tamagotchi } from './../src/tamagotchi.js';

describe('tamagotchi', function() {
   let cutie = new Tamagotchi("Alexa");

   beforeEach(function() {
     jasmine.clock().install();
     cutie.setHunger();
     cutie.setActivity();
     cutie.setRest();
     // utilize setHunger()
  });

    afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name, a food level of 10, a play level of 10, and a sleep level when it is created', function() {
    expect(cutie.name).toEqual("Alexa");
    expect(cutie.foodLevel).toEqual(10);
    expect(cutie.playLevel).toEqual(10);
    expect(cutie.sleepLevel).toEqual(10);
  });
  it('should have a food level of 6, a play level of 9 and a sleep level of 8 after 2881 milliseconds ', function() {
    jasmine.clock().tick(2881);
    expect(cutie.foodLevel).toEqual(6);
    expect(cutie.playLevel).toEqual(8);
    expect(cutie.sleepLevel).toEqual(9);

  });
  it('should get very hungry if the food level drops below zero', function() {
  cutie.foodLevel = 1;
  expect(cutie.didYouGetEaten()).toEqual(false);
  });

  it('should get very hungry if 720 seconds pass without feeding', function() {
    jasmine.clock().tick(6481);
    expect(cutie.didYouGetEaten()).toEqual(true);
  });

  // it('should have a food level of ten if it is fed', function() {
  //   jasmine.clock().tick(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });

});
