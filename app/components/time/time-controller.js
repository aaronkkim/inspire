new Vue({
el:"#time",
data:{
    time:new Date(),
},
computed: {
    prettyTime: function(){
    var t =this.time
    var minutes = t.getMinutes().toString()
    minutes = (minutes.length>1)? minutes : "0" + minutes
    if(minutes<10){
    return ` ${t.getHours()%12 || 12}:0${t.getMinutes()}`
    }
    return ` ${t.getHours()%12 || 12}:${t.getMinutes()}`
    }
    },
    mounted: function(){
        var tm = this 
        var interval = setInterval(function(){
            tm.time = new Date()
        },1000)
        }
    


})