let inputCPF = document.getElementById("cpfPaciente")
let inputCrm= document.getElementById("crm")
let inputenviar=document.getElementById("enviar")

inputCPF.addEventListener("keyup",(event)=>{  
    if(isNaN(inputCPF.value)){              
    inputCPF.value= inputCPF.value.substring(0,(inputCPF.value.length-1));     // so digita numeros

    }    if(inputCPF.value.length>=11){
    inputCPF.value=inputCPF.value.substring (0,11); 
}
})

inputCrm.addEventListener("keyup",(event)=>{  
    if(isNaN(inputCrm.value)){              
    inputCrm.value= inputCrm.value.substring(0,(inputCrm.value.length-1));     // so digita numeros

    }    if(inputCrm.value.length>=6){
    inputCrm.value=inputCrm.value.substring (0,6); 
}
})