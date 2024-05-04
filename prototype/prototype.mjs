function clone(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

class asPrototype {
  /* Here we need to define the prototype props  */
}

class SubClass {
  constructor({ ...args }) {
    this.args = args;
  }
}

const prototype = clone(asPrototype);
prototype.constructor = SubClass;
// The downside of using a prototype like this is that I have to rewrite
// `Subclass` prototype, so we miss the Subclass members.
SubClass.prototype = prototype;

/* Here we should define Subclass members, after overwriting the Subclass prototype. 
    SubClass.prototype.aProp = () => {}
*/

export default new SubClass({
  /* ...props */
});
