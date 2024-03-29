const MORNING = 'morning';
const AFTERNOON = 'afternoon';
const NIGHT = 'night';

const greetings = {
  morning: 'Buenos días',
  afternoon: 'Buenas tardes',
  night: 'Buenos días',
};

const keyWords = {
  palindromeResp: '¡Bonita Palabra!',
  stop: 'Stop!',
  bye: 'Adios',
  noNameError: 'You must introduce before',
};


class Ohce {
  constructor() {
    this.name = undefined;
  }

  static isPalindrome({ str }) {
    if (str.trim().length < 3) {
      return false;
    }
    const regEx = /[^A-Za-z0-9]/g;
    const cleanStr = str.toLowerCase().replace(regEx, '');
    const revStr = cleanStr.split('').reverse().join('');
    return revStr === cleanStr;
  }

  static getDaytime({ time }) {
    const hour = time.getHours();
    if (hour >= 6 && hour < 12) {
      return MORNING;
    }
    if (hour >= 12 && hour < 20) {
      return AFTERNOON;
    }
    return NIGHT;
  }

  init({ time, input }) {
    this.name = input;
    return { output: [`${greetings[Ohce.getDaytime({ time })]} ${this.name}`], stop: false };
  }

  talk({ word }) {
    if (!this.name) {
      throw new Error(keyWords.noNameError);
    }
    let output = '';
    if (word === keyWords.stop) {
      output = [`${keyWords.bye} ${this.name}`];
      return { output, stop: true };
    }
    output = [word.split('').reverse().join('')];
    if (Ohce.isPalindrome({ str: word })) {
      output.push(keyWords.palindromeResp);
    }
    return { output, stop: false };
  }
}


module.exports = {
  greetings,
  keyWords,
  Ohce,
};
