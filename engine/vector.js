class Vector {

    constructor(x, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    x() {return this.x;}

    y() {return this.y;}

    z() {return this.z;}

    module() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalized() {
        let module = this.module();
        return new Vector(this.x / module, this.y / module, this.z / module);
    }

    add(vector) {
        return new Vector(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }

    dotProduct(scalar) {
        return new Vector(this.x * scalar, this.y * scalar, this.z * scalar);
    }

}