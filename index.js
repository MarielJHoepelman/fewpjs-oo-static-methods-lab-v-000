class Formatter {
  static capitalize(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1);
    return str
  }

  static sanitize(string) {
    const regex = "/[^A-Za-z0-9-']+/g"
    string.replace(regex, '')
  }
}
