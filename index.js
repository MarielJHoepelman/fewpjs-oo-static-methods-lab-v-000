class Formatter {
  static capitalize(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str
  }

  static sanitize(string) {
    const regex = /[^A-Za-z0-9\s-\']+/g
    return string.replace(regex, '')
  }

  const findWord = word => {
    let word = array.find(element => element === "W")
    return
  }

  static titleize(string) {
    let array = string.split(" ");
    let titleizeString = [];

    for (const word of array){

      titleizeString.push(this.capitalize(word));
    }
    console.log(titleizeString)
    return titleizeString.join(" ");
  }
}
