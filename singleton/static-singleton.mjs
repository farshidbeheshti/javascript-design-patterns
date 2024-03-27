/* This is the second alyernative imlementation of the StaticSingleton pattern */

export class StaticSingleton {
  static #instance = null;
  constructor(...args) {
    if (StaticSingleton.#instance) {
      throw new Error("There is already an instance of StaticSingleton");
    }
    this.args = [...args];
    StaticSingleton.#instance = this;
    return StaticSingleton.#instance;
  }

  static init(...args) {
    StaticSingleton.#instance = new StaticSingleton(...args);
  }

  static getInstance() {
    return StaticSingleton.#instance;
  }

  state() {
    console.log(
      "The args with which the StaticSingleton is initialized = ",
      this.args
    );
  }
}
