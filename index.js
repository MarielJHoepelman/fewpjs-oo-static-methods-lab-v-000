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

    for (const word of array){
      if(this.findWord(word) && titleizeString.length > 0) {
        titleizeString.push(word);
      }else{
        titleizeString.push(this.capitalize(word));
      }
    }
    return titleizeString.join(" ");
  }
}
