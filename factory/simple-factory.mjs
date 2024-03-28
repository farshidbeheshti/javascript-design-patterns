export class Factory {
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
