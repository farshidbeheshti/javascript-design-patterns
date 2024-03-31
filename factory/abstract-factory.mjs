export class AbstractFactory {
  constructor() {
    this.types = [];
  }

  registerType(newTypeName, newType) {
    if (this.types.find((type) => !!type[newTypeName])) return;
    this.types = [...this.types, { [newTypeName]: newType }];
  }
  getTypeInstance(typeName, ...args) {
    const existedType = this.types.find((type) => !!type[typeName]);
    if (!existedType) {
      throw new TypeError(
        `There is no already the type \`${typeName}\` registered.`
      );
    }
    return new existedType[typeName](...args);
  }
}
