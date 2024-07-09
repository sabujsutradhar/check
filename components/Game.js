AFRAME.registerComponent("game-play",{
    schema:{
        ElementId:{type:"string",default:"#ring1"}
    },
    init:function(){
        var duration=120
        const timerEl=document.querySelector("#timer")
        this.startTimer(duration,timerEl)

    },
    startTimer:function(duration,timerEl){
        var min,sec;
        var timer=setInterval(countdown,1000)
        function countdown(){
            if (duration>=0){
                min=parseInt(duration/60)
                sec=parseInt(duration%60)
                if (min<10){
                    min="0"+min
                }
                if (sec<10){
                    sec="0"+sec
                }
                timerEl.setAttribute("text",{value:min+":"+sec})
                duration=duration-1
            }
            else {
                clearInterval(timer)
            }
            
        }
    },
    update:function(){
        this.isCollided(this.data.ElementId)
    },
    isCollided:function(ElementId){
        const Element=document.querySelector(ElementId)
        Element.addEventListener("collide",(e)=>{
            if(ElementId.includes("#ring")){
                console.log(ElementId+"collide")
            }
            else if(ElementId.includes("#hurdle")){
                console.log("bird collison")
            }
        })
    }
})
