
export class Tamagotchi {

  constructor(name) {
    this.name = name;
    // this.age = age;// want to set the signup time as cutie's birthday, and caculate age
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;

    // let birthdayOfCutie = new Date(birthday);
    // this.yearOfBirth = birthdayOfInput.getFullYear();
    // this.monthOfBirth = birthdayOfInput.getMonth() + 1;
    // this.dayOfBirth =  birthdayOfInput.getDate() + 1;

    // let today = new Date();
    // this.currentYear = today.getFullYear();
    // this.currentMonth = today.getMonth() + 1;
    // this.currentDay = today.getDate() + 1 ;

  }

  setHunger() {
      setInterval(() => {
        this.foodLevel--;
      }, 720); //2 hours/120 minutes
    }

  setActivity() {
      setInterval(() => {
        this.playLevel--;
      }, 1440);//4 hours/240 minutes
    }

  setRest() {
      setInterval(() => {
        this.sleepLevel--;
      }, 2880);//8 hours/480 minutes
    }

  didYouGetEaten() {
  if (this.foodLevel > 0) {
    return false;
    } else {
    return true;
    }
  }

  // feed() {
  //   this.foodLevel = 10;
  // }


}
//what's the relationship of class/constructor/methods/prototype?
