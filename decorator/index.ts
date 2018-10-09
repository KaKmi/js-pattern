class Plane {
    constructor() {

    }
    fire():void {
        console.log('发射子弹')
    }
}
class AtomDecorator{
    private plane:Plane
    constructor(plane:Plane){
        this.plane = plane
    }
    fire():void{
        this.plane.fire();
        console.log('发射原子弹')
    }
}

export default {Plane,AtomDecorator}
