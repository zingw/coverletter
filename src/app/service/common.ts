export class Common {

  static upperFirstLetter(str: string) {
    let upperFirstLetter: string = str.charAt(0).toUpperCase()
    const tail: string = str?.substring(1, str?.length);
    return upperFirstLetter + tail;
  }
}
