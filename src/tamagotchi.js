
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
      }, 720); //each 12 minutes/720 seconds -1; 2 hours/120 minutes/7200seconds will be 0
    }

  didYouGetEaten() {
  if (this.foodLevel >= 0) {
    return `I'm happy`;//No, I'm not hungry.
  } else if ((this.foodLevel < 0) && (this.foodLevel >= -10)) {
    return `I'm hungry! Could you give me some pasta?`;
  } else if ((this.foodLevel < -10) && (this.foodLevel >= -30)) {
    return `Alive but angry and hungry!`;
  } else {
    return `I'm mad and leave to find food!`;//Yes, feed me please.
    }
  }


  feed() {
    this.foodLevel = 10;
  }

  setActivity() {
      setInterval(() => {
        this.playLevel--;
      }, 1440);//4 hours/240 minutes
    }

  didYouGetActivity() {
  if (this.playLevel > 0) {
    return false;//No, I don't need to get out.
    } else {
    return true;//Yes, bring me out.
    }
  }

  play() {
    this.playLevel = 10;
  }

  setRest() {
      setInterval(() => {
        this.sleepLevel--;
      }, 2880);//8 hours/480 minutes
    }

  needsSleep() {
  if (this.sleepLevel > 0) {
    return false;//No, I don't need to sleep now.
    } else {
    return true;//Yes, I really want to sleep.
    }
  }

  sleep() {
    this.sleepLevel = 10;
  }



}
//what's the relationship of class/constructor/methods/prototype?
