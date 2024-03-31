export class Factory {
  constructor() {
    if (new.target == Factory)
      throw new TypeError(
        `
        It seems that this simple factory does not need a contractor,
        so we prevent instantiating an instance of the it
        `.replace(/\s+/g, " ")
      );
  }
  static createInstance(options) {
    const { type, ...args } = options;
    // TODO: Check if `type` exists in FactoryTypes

    return new type(args);
  }
}

class Foo {}
class Bar {}
export const FactoryTypes = {
  foo: Foo,
  bar: Bar,
};
