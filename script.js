const otpInputs = document.querySelectorAll('input');

// window.onload = ()=>otpInputs[0].focus()

otpInputs.forEach((input)=>{
    input.addEventListener('input',()=>{
        const currentInput = input
        const nextInput = currentInput.nextElementSibling

        if(currentInput.value.length > 1 && 
        currentInput.value.length == 2){
            currentInput.value = ""
        }
        if(nextInput !==null &&
         nextInput.hasAttribute('disabled')
         && currentInput.value !== "")
         {
             nextInput.removeAttribute('disabled')
             nextInput.focus()
        }
    })

    input.addEventListener('keyup',(e)=>{
        if(e.key == "Backspace" || e.key == "Delete"){
          e.target.value = ""
            if(input.previousElementSibling != null){
                e.target.value = ""
                e.target.setAttribute("disabled",true)
                input.previousElementSibling.focus()
            }
            
        }
    })
})