import co  from  './decorator/index'

let plane = new co.Plane();
let atomPlane = new co.AtomDecorator(plane)
plane.fire()
atomPlane.fire()