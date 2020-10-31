class Formatter {
  static capitalize(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str
  }

  static sanitize(string) {
    const regex = /[^A-Za-z0-9\s-\']+/g
    return string.replace(regex, '')
  }

  static findWord(word) {
    let forbiddenWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return forbiddenWords.some(element => element === word)
  }

  static titleize(string) {
    let array = string.split(" ");
    let titleizeString = [];

    // for (const word of array){
    //   if(titleizeString.length > 0 && this.findWord(word)) {
    //     titleizeString.push(word);
    //   }else{
    //     titleizeString.push(this.capitalize(word));
    //   }
    // }

    // array.forEach((word, index) => {
    //   if(index > 0 && this.findWord(word)) {
    //     titleizeString.push(word);
    //   }else{
    //     titleizeString.push(this.capitalize(word));
    //   }
    // })

    // for (let i = 0; i < array.length; i++) {
    //   if(i > 0 && this.findWord(array[i])) {
    //     titleizeString.push(array[i]);
    //   }else{
    //     titleizeString.push(this.capitalize(array[i]));
    //   }
    // }

    // titleizeString = array.map((word, index) => {
    //   if(index > 0 && this.findWord(word)) {
    //     return word
    //   }else{
    //     return this.capitalize(word);
    //   }
    // });

    return array.map((word, index) => index > 0 && this.findWord(word)) ? word : this.capitalize(word)).join(" ")

    // return titleizeString.join(" ");
  }
}
