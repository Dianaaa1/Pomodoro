
function Timer(obj){
    this.timeWork=obj.timeWork;
    this.timeBreak=obj.timeBreak;
    this.time=obj.timeWork*60*1000;
    this.breakSession=false;
    this.stop=()=>{clearTimeout(this.intherval)};
    
    this.start=()=>{
    this.stop();
    this.tick=()=>{
    this.time=this.time-1000;
    document.getElementById("output").innerHTML=this.get(this.time);
    this.slider=()=>{
        document.getElementById('slider').style.width=this.time/(obj.timeWork*60*1000)*100+'%';
    }
    this.slider()
    if(this.time>=0){
    this.intherval=setTimeout(this.tick, 1000);
    }
    else if (this.time<0 && this.breakSession==false){ 
     this.time=this.timeBreak*60*1000;
     this.breakSession=true;
     this.start(); 
     }
     else if(this.time<0 && this.breakSession==true){
     document.getElementById("output").innerHTML=this.get(0);
     return;
     }
    }
    this.tick();
    }
    
    this.restart=()=>{
        this.stop();
      this.time=obj.timeWork*60*1000;
      this.start();
    }
    this.get=(num)=>
    {
        let a = Math.floor(num / 1000);
        let b = Math.floor(a / 60);
         a %= 60;
         return two(b) + " : " + two(a);
    }
    function two(a) {
            return (9 < a ? "" : "0") + a
        }
    }
    let x=new Timer({
    timeWork: 25,
    timeBreak: 5,
    });
    