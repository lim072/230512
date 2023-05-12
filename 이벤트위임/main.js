// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three = document.querySelector(".three");

// one.addEventListener("click",(e)=>{
//     console.log(e.currentTarget.className);
// })
// two.addEventListener("click",(e)=>{
//     console.log(e.currentTarget.className);
// })
// three.addEventListener("click",(e)=>{
//     console.log(e.currentTarget.className);
// })

let divs = document.querySelectorAll('div')

divs.forEach((el, index)=>{
    el.addEventListener("mouseenter",(e)=>{
        console.log(e.currentTarget.className)
        // e.stopPropagation() //이벤트 버블링을 막아주는 역할
    })
})