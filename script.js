const panels = document.querySelectorAll('.panel')

panels.forEach(panel =>{

    ///THIS IS FOR EACH PANNEL WE CAN SEE ON CONSOLE ALL DIV
    // console.log(panel);

    panel.addEventListener('click', ()=>{
        // console.log(123);  we can see in console


        //// IT WILL APPLY THIS CSS AND CLASS

        // .panel.active{
        //     flex: 5;
        // }
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}