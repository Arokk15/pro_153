AFRAME.registerComponent("move",{
    schema:{

    },


    

    init:function(){
        window.addEventListener("keydown",e=>{
            console.log("pos_x =  "+this.el.getAttribute("position").x)
            console.log("pos_y =  "+this.el.getAttribute("position").y)
            console.log("pos_z =  "+this.el.getAttribute("position").z)
            console.log("rot_x =  "+this.el.getAttribute("rotation").x)
            console.log("rot_y =  "+this.el.getAttribute("rotation").y)
            console.log("rot_z =  "+this.el.getAttribute("rotation").z)
            if(e.key=="j"){
                console.log("hello"),
                this.el.setAttribute("position",{
                    x:this.el.getAttribute("position").x-0.2,
                    y:this.el.getAttribute("position").y,
                    z:this.el.getAttribute("position").z
                })
                if(this.el.getAttribute("rotation").y>=-45){
                    console.log(this.el.getAttribute("rotation").y)
                    this.el.setAttribute("rotation",{
                    y:this.el.getAttribute("rotation").y-5
                }
                )
                }
            }
        })
        window.addEventListener("keydown",e=>{
            console.log("pos_x =  "+this.el.getAttribute("position").x)
            console.log("pos_y =  "+this.el.getAttribute("position").y)
            console.log("pos_z =  "+this.el.getAttribute("position").z)
            console.log("rot_x =  "+this.el.getAttribute("rotation").x)
            console.log("rot_y =  "+this.el.getAttribute("rotation").y)
            console.log("rot_z =  "+this.el.getAttribute("rotation").z)
            if(e.key=="l"){
                console.log("hello"),
                this.el.setAttribute("position",{
                    x:this.el.getAttribute("position").x+0.2,
                    y:this.el.getAttribute("position").y,
                    z:this.el.getAttribute("position").z
                })
                if(this.el.getAttribute("rotation").y<=45){
                    console.log(this.el.getAttribute("rotation").y)
                    this.el.setAttribute("rotation",{
                    y:this.el.getAttribute("rotation").y+5
                }
                )
                }
            }
        })
        window.addEventListener("keydown",e=>{
            console.log("pos_x =  "+this.el.getAttribute("position").x)
            console.log("pos_y =  "+this.el.getAttribute("position").y)
            console.log("pos_z =  "+this.el.getAttribute("position").z)
            console.log("rot_x =  "+this.el.getAttribute("rotation").x)
            console.log("rot_y =  "+this.el.getAttribute("rotation").y)
            console.log("rot_z =  "+this.el.getAttribute("rotation").z)
            if(e.key=="i"){
                console.log("hello"),
                this.el.setAttribute("position",{
                    x:this.el.getAttribute("position").x,
                    y:this.el.getAttribute("position").y,
                    z:this.el.getAttribute("position").z-0.2
                })

                
                if(this.el.getAttribute("rotation").y>=0 && this.el.getAttribute("rotation").y<=180){
                    console.log(this.el.getAttribute("rotation").y)
                    this.el.setAttribute("rotation",{
                    y:this.el.getAttribute("rotation").y+5
                }
                )
                }
                if(this.el.getAttribute("rotation").y<0 && this.el.getAttribute("rotation").y>=-180){
                    console.log(this.el.getAttribute("rotation").y)
                    this.el.setAttribute("rotation",{
                    y:this.el.getAttribute("rotation").y-5
                }
                )
                }
    
            }
        })
        window.addEventListener("keydown",e=>{
            console.log("pos_x =  "+this.el.getAttribute("position").x)
            console.log("pos_y =  "+this.el.getAttribute("position").y)
            console.log("pos_z =  "+this.el.getAttribute("position").z)
            console.log("rot_x =  "+this.el.getAttribute("rotation").x)
            console.log("rot_y =  "+this.el.getAttribute("rotation").y)
            console.log("rot_z =  "+this.el.getAttribute("rotation").z)
            if(e.key=="k"){
                console.log("hello"),
                this.el.setAttribute("position",{
                    x:this.el.getAttribute("position").x,
                    y:this.el.getAttribute("position").y,
                    z:this.el.getAttribute("position").z+0.2
                })
                if(this.el.getAttribute("rotation").y>0 && this.el.getAttribute("rotation").y<=360){
                    console.log(this.el.getAttribute("rotation").y)
                    this.el.setAttribute("rotation",{
                    y:this.el.getAttribute("rotation").y-5
                }
                )}
                if(this.el.getAttribute("rotation").y<0 && this.el.getAttribute("rotation").y>=-360){
                    console.log(this.el.getAttribute("rotation").y)
                    this.el.setAttribute("rotation",{
                    y:this.el.getAttribute("rotation").y+5
                }
                )}

                
            }
        })
    }
    
    
})