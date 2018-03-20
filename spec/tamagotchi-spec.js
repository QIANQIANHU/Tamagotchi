import { Tamagotchi } from './../src/tamagotchi.js';

describe('tamagotchi', function() {
   let cutie = new Tamagotchi("Alexa");

   beforeEach(function() {
     jasmine.clock().install();
     cutie.setHunger();
     cutie.didYouGetEaten()
     cutie.setActivity();
     cutie.didYouGetActivity()
     cutie.setRest();
     cutie.playLevel = 10;
     cutie.sleepLevel = 10;

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
  it('should get happy if the food level above or equal to zero', function() {
  cutie.foodLevel = 1;
  expect(cutie.didYouGetEaten()).toEqual(`I'm happy`);
  });

  it('should get hungry if 7200 seconds pass and still in 14400 seconds without feeding', function() {
    jasmine.clock().tick(7201);
    expect(cutie.didYouGetEaten()).toEqual(`I'm hungry! Could you give me some pasta?`);
  });

  it('should get angry if 14400 seconds pass and still in 28800 seconds without feeding', function() {
    jasmine.clock().tick(14401);
    expect(cutie.didYouGetEaten()).toEqual(`Alive but angry and hungry!`);
  });

  it('should get mad if 28800 seconds pass  without feeding', function() {
    jasmine.clock().tick(28801);
    expect(cutie.didYouGetEaten()).toEqual(`I'm mad and leave to find food!`);
  });

  it('should have a food level of ten if it is fed', function() {
    cutie.feed();
    expect(cutie.foodLevel).toEqual(10);
  });

  it('should get happy if within 7200 seconds', function() {
    console.log("PLAY LEVEL ++++++++++++++++++++++"+cutie.playLevel);
    jasmine.clock().tick(1);
    expect(cutie.didYouGetActivity()).toEqual(false);
  });

  it('should have a play level of ten if it play', function() {
    cutie.play();
    expect(cutie.playLevel).toEqual(10);
  });

  it('should get want to go to bed if 28801 seconds pass without sleep', function() {
    jasmine.clock().tick(28801);
    expect(cutie.needsSleep()).toEqual(true);
  });

  it('should have a sleep level of ten if it sleep', function() {
    cutie.sleep();
    expect(cutie.sleepLevel).toEqual(10);
  });

});
