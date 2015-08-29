
export default class Abstract {
  distBetween(target) {
    let a = target.x - this.x;
    let b = target.y - this.y;
    return Math.sqrt(a*a + b*b);
  }

  getCanonName() {
    return _.startCase(this.constructor.name).toLowerCase();
  }

  getType() {
    return this.constructor.name.toLowerCase();
  }

  getParentType() {
    return Object.getPrototypeOf(Object.getPrototypeOf(this)).constructor.name.toLowerCase();
  }
}