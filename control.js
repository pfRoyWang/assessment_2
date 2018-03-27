var disp =document.getElementById("display"),
    prev =document.getElementById("preview"),
    hair =document.getElementById("hair"),
    hairr =document.getElementById("hairr"),
    eyes = document.getElementById("eyes"),
    eyesr =document.getElementById("eyesr"),
    mouth =document.getElementById("mouth"),
    mouthr =document.getElementById("mouthr"),
    nose =document.getElementById("nose"),
    noser =document.getElementById("noser");
    
document.getElementById("ColorInp").addEventListener("change",function(){
    prev.style.backgroundColor = document.getElementById("ColorInp").value;
});

function changeType(type){
    hairr.type = type; 
    eyesr.type = type;
    noser.type = type;
    mouthr.type = type;
};

document.getElementById("NumBut").addEventListener("click",function(){
    changeType("number");
});

document.getElementById("RangeBut").addEventListener("click",function(){
    changeType("range");
});

hairr.addEventListener("change",function(){
    hair.style.width = hairr.value+"%";
});

noser.addEventListener("change",function(){
    nose.style.width = noser.value+"%";
});

mouthr.addEventListener("change",function(){
    mouth.style.width = mouthr.value+"%";
});

eyesr.addEventListener("change",function(){
    eyes.style.width = eyesr.value+"%";
});

var num = 1;
hair.addEventListener("click",function(){
    hair.src = "img/hair"+num+".png";
    if (num>=3){
        num =0;
    }
    num++;
});

var num2 = 1;
eyes.addEventListener("click",function(){
    eyes.src = "img/eyes"+num2+".png";
    if (num2>=3){
        num2 =0;
    }
    num2++;
});

var num3 =1;
nose.addEventListener("click",function(){
    nose.src = "img/nose"+num3+".png";
    if (num3>=3){
        num3 =0;
    }
    num3++;
});

var num4 =1;
mouth.addEventListener("click",function(){
    mouth.src = "img/mouth"+num4+".png";
    if (num4>=3){
        num4 =0;
    }
    num4++;
});

function createFace(){
     var newd = document.createElement("div"),
        newh = document.createElement("img"),
        newm = document.createElement("img"),
        newn = document.createElement("img"),
        newe = document.createElement("img");
    
    newd.style.backgroundColor = prev.style.backgroundColor;
    newd.style.width ="100px";
    newd.style.height ="100px";
    
    newh.src = hair.src;
    newn.src = nose.src;
    newe.src = eyes.src;
    newm.src = mouth.src;
    
    newh.style.width = hair.style.width;
    newn.style.width = nose.style.width;
    newe.style.width = eyes.style.width;
    newm.style.width = mouth.style.width;
    
    newh.style.top = hair.style.top;
    newn.style.top = nose.style.top;
    newe.style.top = eyes.style.top;
    newm.style.top = mouth.style.top;
    
    newd.style.position = "relative";
    
    newe.style.position = "absolute";
    newh.style.position = "absolute";
    newm.style.position = "absolute";
    newn.style.position = "absolute";
    
    newe.style.margin = "auto";
    newh.style.margin = "auto";
    newm.style.margin = "auto";
    newn.style.margin = "auto";
    
    newh.style.left="0px";
    newe.style.left="0px";
    newn.style.left="0px";
    newm.style.left="0px";
    
    newh.style.right="0px";
    newe.style.right="0px";
    newn.style.right="0px";
    newm.style.right="0px";
    
    newd.appendChild(newh);
    newd.appendChild(newe);
    newd.appendChild(newm);
    newd.appendChild(newn);
    
    newd.style.float = "left";
    newd.className ="col-xl-12 col-lg-8 col-md-6 col-sm-4";
    
    disp.appendChild(newd);
    
};

document.getElementById("AddBut").addEventListener("click",function(){
    createFace();
});

function randomFace(){
    var randomn1 = Math.floor((Math.random()*3)+1),
        randomn2 = Math.floor((Math.random()*3)+1),
        randomn3 = Math.floor((Math.random()*3)+1),
        randomn4 = Math.floor((Math.random()*3)+1),
        randomr1 = Math.floor((Math.random()*70)+1),
        randomr2 = Math.floor((Math.random()*40)+1),
        randomr3 = Math.floor((Math.random()*30)+1),
        randomr4 = Math.floor((Math.random()*35)+1),
        randomred = Math.floor((Math.random()*255)+1),
        randomgreen = Math.floor((Math.random()*255)+1),
        randomblue = Math.floor((Math.random()*255)+1);
 
    nose.src = "img/nose"+randomn1+".png";
    eyes.src = "img/eyes"+randomn2+".png";
    mouth.src = "img/mouth"+randomn3+".png";
    hair.src = "img/hair"+randomn4+".png";
    
    hairr.value = randomr1;
    eyesr.value = randomr2;
    noser.value = randomr3;
    mouthr.value = randomr4;
    
    hair.style.width = randomr1+"%";
    eyes.style.width = randomr2+"%";
    nose.style.width = randomr3+"%";
    mouth.style.width = randomr4+"%";
    
    prev.style.backgroundColor = "rgb("+randomred+","+randomgreen+","+randomblue+")";
};

document.getElementById("RandomBut").addEventListener("click",function(){
    randomFace();
});

document.getElementById("AutoCreBut").addEventListener("click",function(){
    var spd = 500;
    auto=setInterval(function(){
        randomFace();
    },spd);
});

document.getElementById("StopBut").addEventListener("click",function(){
    clearInterval(auto);
});