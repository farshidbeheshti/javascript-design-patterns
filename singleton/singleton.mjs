let instance;
export class Singleton {
  constructor() {
    if (instance == undefined) {
      instance = this;
    }
    return instance;
  }
}
