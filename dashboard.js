let icn01 = document.querySelector(".icn1")
console.log(icn01);
let box = document.querySelector(".box")
console.log(box);
let box5 = document.querySelector(".box5")
let logodiv = document.querySelector(".logo-div")
console.log(logodiv);
     
 function right() {
    
     if(  icn01.classList.contains("bi-list")){
         icn01.classList.remove("bi-list")
         icn01.classList.add("bi-x-lg")
         box.classList.add("right")
         logodiv.classList.add("right1")
         box5.classList.add("increase")
     }
     else{
         icn01.classList.remove("bi-x-lg")
         icn01.classList.add("bi-list")
         box.classList.remove("right")
         logodiv.classList.remove("right1")
         box5.classList.remove("increase")

     }
 }

 let inputdiv = document.querySelector(".input-div")
//  console.log(inputdiv)
 let inp = document.querySelector(".inp")
//  console.log(inp);
 let icon5 = document.querySelector(".icn5")
//  console.log(icon5);
 let icon4 = document.querySelector(".icn4")
//  console.log(icon4);

 function inc( ) {

        inputdiv.classList.add("inc")
        inp.classList.add("inc1")
        icon4.classList.add("dis")
        // icon5.classList.add("rotate") 
 }
 function disp(){
    inputdiv.classList.remove("inc")
    inp.classList.remove("inc1")
    icon4.classList.remove("dis")
    // icon5.classList.remove("rotate")
 }


 let selects = document.querySelectorAll(".select")
 let DropDowns = document.querySelectorAll(".dropD")

//  console.log(selects);
//  console.log(DropDowns);

 for(   let [idx, ele] of selects.entries()  ){

    ele.addEventListener("click", function(){

        console.log("click");

        if(  DropDowns[idx].classList.contains("show")    ){

            DropDowns[idx].classList.remove("show")

        }
        else{

            for( let drp of DropDowns  ){
    
                
                drp.classList.remove("show")
            }
            
            DropDowns[idx].classList.add("show")
        }



    })

}
let sidebar1=document.querySelector(".side-bar1")

function mv(){

    console.log("hellow");
    sidebar1.classList.add("left")
}
function cl(){
    sidebar1.classList.remove("left")
}



 let iconcircle =document.querySelector(".icon-circle")
 let sidebar = document.querySelector(".side-bar")
 function side(){
        sidebar.classList.toggle("side") 
        iconcircle.classList.toggle("left")  
}


let bx0 = document.querySelectorAll(".bx0")
let drop1 = document.querySelectorAll(".drop1")
for(let elements of bx0){
    
    elements.addEventListener("click", function(){

        console.log("Clickning");


    let icon = this.getElementsByTagName("i")[1]
    // console.log(icon);
    let drop1=this.nextElementSibling
    console.log(drop1);
    if( icon.classList.contains("bi-chevron-down")  ){
        removeAll()
    
        icon.classList.remove("bi-chevron-down")
        icon.classList.add("bi-chevron-up")
        
        drop1.classList.add("show0")
        
    }
    else{
        icon.classList.add("bi-chevron-down")
        icon.classList.remove("bi-chevron-up")
        drop1.classList.remove("show0")
    
    }
    
    })
}

function removeAll(){

    for(  let [indx, dropElements] of drop1.entries()  ){


        let icon = bx0[indx].getElementsByTagName("i")[1]

        icon.classList.remove("bi-chevron-up")
        icon.classList.add("bi-chevron-down")

        dropElements.classList.remove("show0")

        // console.log(icon);


    }


}
let navbar=document.querySelector(".navbar")
let minicir= document.querySelectorAll(".mini-cir")
minicir.forEach(function(element,index){
    element.addEventListener("click",function(){
        let clr = getComputedStyle(this).background
        navbar.style.background= clr

    })
})

// let bd =document.querySelector(".bd")
let bd1 =document.querySelector(".bd1")
let bx13 =document.querySelector(".bx13")
let navbar0=document.querySelector(".navbar")
let main=document.querySelector(".main")
function move( ) {
    bd1.classList.add("move")
    navbar.classList.add("fix")
    main.classList.add("margin")    
}
function clse(){
    bd1.classList.remove("move")
    navbar.classList.remove("fix")
    main.classList.remove("margin")    

}




let bluediv= document.querySelector(".blue-div")
let boxx = document.querySelector(".boxx")
bluediv.addEventListener("click", function(){
let bluebox =document.createElement("div")
        boxx.appendChild(bluebox)
        bluebox.style.height= "max-content"
        bluebox.style.width="300px"
        bluebox.style.marginTop="20px"
        bluebox.style.backgroundColor="rgb(45,178,255)"
        bluebox.style.color="white"
        bluebox.style.padding="10px"
        bluebox.style.color="white"


let icon = document.createElement("div")
bluebox.appendChild(icon)
// icon.style.color="white"   
let heading = document.createElement("h5")
bluebox.appendChild(heading)
heading.innerHTML="Exapmle Troastr"

let text = document.createElement("p")
bluebox.appendChild(text)
text.innerHTML="You don't have any new items in your calendar today!"




        setTimeout(  function() {


            bluebox.style.display= "none"
 
         }, 2000)  
})











    




//  let dropdown1=document.querySelector(".dropdown1")
//  console.log(dropdown1);
// //  let lst = document.querySelector(".lst")
// //  console.log(lst);
//  function show( ) {
//            dropdown1.classList.toggle("show")
//  }


//  let dropdown2=document.querySelector(".dropdown2")
//  console.log(dropdown2);
//  function show1( ) {
//            dropdown2.classList.toggle("show1")
//  }

//  let dropdown3=document.querySelector(".dropdown3")
//  console.log(dropdown3);
//  function show2( ) {
//     dropdown3.classList.toggle("show2")            
//  }

//  let dropdown4=document.querySelector(".dropdown4")
//  console.log(dropdown4);
//  function show3( ) {
//     dropdown4.classList.toggle("show3")            
//  }
//  let dropdown5=document.querySelector(".dropdown5")
//  function show4( ) {
//     dropdown5.classList.toggle("show4")            
//  }
//  let dropdown6= document.querySelector(".dropdown6")
// //  function show5( ) {
// //     dropdown6.classList.add("show5")
    
// //  }

