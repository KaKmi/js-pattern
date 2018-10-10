class Plane {
    constructor() {

    }
    fire(): void {
        console.log('发射子弹')
    }
}
class AtomDecorator {
    private plane: Plane
    constructor(plane: Plane) {
        this.plane = plane
    }
    fire(): void {
        this.plane.fire();
        console.log('发射原子弹')
    }
}

//4 things can decorate in es2016 or typescript:
// constructors,methods,properties and parameters

// Class decorators
function logClass(target: any) {
 
    // save a reference to the original constructor
    var original = target;
   
    // a utility function to generate instances of a class
    function construct(constructor:any, args:any) {
      var c : any = function () {
        return constructor.apply(this, args);
      }
      c.prototype = constructor.prototype;
      return new c();
    }
   
    // the new constructor behaviour
    var f : any = function (...args:any[]) {
      console.log("New: " + original.name);
      return construct(original, args);
    }
   
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
   
    // return new constructor (will override original)
    return f;
  }
  
  @logClass
  class Person { 
  
    public name: string;
    public surname: string;
  
    constructor(name : string, surname : string) { 
      this.name = name;
      this.surname = surname;
    }
  }
  
  var p = new Person("remo", "jansen");

//methods decorators

const logMethod = (target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>) => {
    return {
        value: function (...args: any[]) {
            console.log('Arguments:', args.join(', '));
            const result = descriptor.value.apply(target, args);
            console.log('Result:', result);
            return result
        }
    }
}

class Calculator {
    @logMethod
    addEventListener(x: number, y: number) {
        return x + y
    }
}

export default { Plane, AtomDecorator }
