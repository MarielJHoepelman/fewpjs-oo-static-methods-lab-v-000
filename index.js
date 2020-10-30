class Formatter {
  static capitalize(string) {
    let str = string.charAt(0).toUpperCase() + string.slice(1)
    return str
  }

  static sanitize(string) {
    let str = string.replaceAll("[^\\w\\s\\$]", "");
    return str
  }
}
