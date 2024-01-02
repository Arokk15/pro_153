AFRAME.registerComponent("movement", {
    schema: {

    },

    init: function () {
        window.addEventListener("keydown", e => {
            if (e.key == "j") {
                this.el.setAttribute("rotation", {
                    x: this.el.getAttribute("rotation").x ,
                    y: this.el.getAttribute("rotation").y - 1,
                    z: this.el.getAttribute("rotation").z ,
                }
                )
            }
        })

        window.addEventListener("keydown", e => {
            if (e.key == "l") {

                console.log(this.el.getAttribute("rotation").y)
                this.el.setAttribute("rotation", {
                    x: this.el.getAttribute("rotation").x ,
                    y: this.el.getAttribute("rotation").y + 1,
                    z: this.el.getAttribute("rotation").z ,
                    
                }
                )
            }
        })
        window.addEventListener("keydown", e => {
            if (e.key == "i") {
                this.el.setAttribute("position", {
                    x: this.el.getAttribute("position").x,
                    y: this.el.getAttribute("position").y,
                    z: this.el.getAttribute("position").z + 1
                })
            }
        })
        window.addEventListener("keydown", e => {
            if (e.key == "k") {
                this.el.setAttribute("position", {
                    x: this.el.getAttribute("position").x,
                    y: this.el.getAttribute("position").y,
                    z: this.el.getAttribute("position").z - 1
                })
            }
        })
    }

})