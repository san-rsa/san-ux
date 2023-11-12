    let me = document.getElementById("me");
    let nav = document.getElementById("nav");
    let head = document.getElementById("head");
    let nme = document.getElementById("nme");
    let nam = document.getElementById("name");
    let years = document.getElementById("date");
    let mep = document.getElementById("mep");

    var date = new Date();

    date.getYear("");
console.log(date);

years.innerHTML = "2023";
    
let skill =[ 
    {"name": "Interaction Design", "rate":"70%" },
    {"name": "Wireframing", "rate":"100%" },
    {"name": "Product Design", "rate": "70%"},
    {"name": "UI Design",  "rate":"100%" },
    {"name": "Web Design", "rate": "100%"},
    {"name": "Visual Design", "rate": "70%"},
    {"name": "Prototyping", "rate": "90%"},
    {"name": "Mobile Design", "rate": "100%"},
    {"name": "UX Design", "rate": "80%"},
    {"name": "Branding", "rate": "60%"},
    {"name": "Design Strategy", "rate": "90%"},
    {"name": "Design Thinking", "rate": "80%"},
    {"name": "User Research", "rate": "30%"},
    {"name": "Coding", "rate": "70%"},


]

function addNavLogo() {
    let p = me.paraElement
    nav.style.transition = "2s"
    me.style.transition = "2s"
    nav.insertBefore(me, p);
    me.classList.add("navm");
    nav.classList.add("navb");
    nam.classList.add("name");
    // mep.classList.remove("mew");
    mep.style.minWidth = "0"
   
 

}

function removeNavLogo() {
    let p = me.parentElement;
    nav.style.transition = "2s"
    me.style.transition = "2s"
    nme.appendChild(me);
    me.classList.remove("navm");
    nav.classList.remove("navb");
    nam.classList.remove("name");
    // mep.classList.add("mew");
    mep.style.minWidth = "300px"


}

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 500) {
    addNavLogo();
  } else if (y < 650) {
    removeNavLogo();
  }
};

window.addEventListener("scroll", myScrollFunc);


function back() {
 var bodyb = document.querySelector("body");
 var stle = bodyb.style;
 var value = window.getComputedStyle(bodyb).getPropertyValue('background-color');


    // styles1 ="linear-gradient(170deg, rgb(22, 53, 57) 36.75%, rgba(40, 71, 132, 0.96) 61.09%, rgba(49, 165, 81, 0.92) 92.43%)"


    // styles2 = "linear-gradient(170deg, rgba(49, 165, 81, 0.92) 36.75%, rgb(22, 53, 57) 61.09%, rgba(40, 71, 132, 0.96) 92.43%)"


    // styles3 = "linear-gradient(170deg, rgba(40, 71, 132, 0.96) 36.75%, rgba(49, 165, 81, 0.92) 61.09%, rgb(22, 53, 57) 92.43%)"

    styles1 ="rgb(22, 53, 57)"


    styles2 = "rgba(49, 165, 81, 0.92)"


    styles3 = "rgba(40, 71, 132, 0.96)"
    
    console.log(value);
    



    if (value == styles1) {
       stle.background = styles2

    }  else if (value == styles2) {
      stle.background = styles3

    } else if (value == styles3) {
      stle.background = styles1     
    }
    
setTimeout(back, 5000);
}

back()






function ss() {
    skill.forEach(e => {

        var skills = document.getElementsByClassName("skills");
        let skil = document.createElement("div");
        skil.classList.add("skill"); 
    
        var h4 = document.createElement("h4");
        h4.innerHTML = e.name
           skil.appendChild(h4);
        skills[0].appendChild(skil);

        
        var percent = document.createElement("div");
        percent.classList.add("percent");
    
       var  progress = document.createElement("div");
       progress.classList.add("progress");

       progress.style.width = e.rate

       skil.appendChild(percent);
        percent.appendChild(progress);


    
        var p = document.createElement("p");
        p.classList.add("percent");
    
        p.innerHTML = e.rate
        progress.appendChild(p)

    });
}

ss();

