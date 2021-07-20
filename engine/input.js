class Input {

    constructor() {
        this.keyDown = {
            W: false,
            A: false,
            S: false,
            D: false
        }

        document.addEventListener("keydown", (event) => {
            this.onKeyStateChange(event.code, true);
        });

        document.addEventListener("keyup", (event) => {
            this.onKeyStateChange(event.code, false);
        });
    }

    onKeyStateChange(code, status) {
        Object.keys(this.keyDown).forEach(key => {
            if("Key" + key == code) {
                this.keyDown[key] = status;
                if(status == false) 
                    if(this[key + 'U']) this[key + 'U']();
            } 
        });
    }

    processInput() {
        Object.keys(this.keyDown).forEach(key => {
            if(this.keyDown[key]) this[key + 'D']();
        });
    }

}