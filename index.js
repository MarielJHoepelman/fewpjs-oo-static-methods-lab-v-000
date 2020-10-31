class Formatter {
  static capitalize(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str
  }

  static sanitize(string) {
    const regex = /[^A-Za-z0-9\s-\']+/g
    return string.replace(regex, '')
  }

  static titleize(string) {
    let array = string.split(" ");
    let titleizeString = [];
    let forbiddenWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    for (const word of array){
      titleizeString.push(this.capitalize(word));
    }
    console.log(titleizeString)
    return titleizeString.join(" ");
  }
}
