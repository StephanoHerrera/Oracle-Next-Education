        var introducido = '';
        var transformado
        var quitando1= document.getElementById("imagen1")
        var quitando2= document.getElementById("imagen2")
        var quitandoArea= document.getElementById("areaDeTexto")
        var quitandoT= document.getElementById("paraBorrar")
        var poniendoB= document.getElementById("botonCopiar")

        function scrambler(){

            introducido = document.getElementById("inputA").value;
            transformado = introducido.replaceAll('e','enter').replaceAll('i', 'imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat')

            document.getElementById("resultado").innerHTML = transformado
            
            introducido.value= "";
            

            if (transformado.length > 1){
                quitando1.style.visibility="hidden"
                quitando2.style.visibility="hidden"
                quitandoArea.placeholder=""
                quitandoT.innerHTML = ""
                poniendoB.style.visibility="visible"

        }

        }


        function desEncrypt(){

            introducido = document.getElementById("inputA").value;
            transformado = introducido.replaceAll('enter','e').replaceAll('imes', 'i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u')

            document.getElementById("resultado").innerHTML = transformado

            if (transformado.length > 1){
                quitando1.style.visibility="hidden"
                quitando2.style.visibility="hidden"
                quitandoArea.placeholder=""
                quitandoT.innerHTML = ""
                poniendoB.style.visibility="visible"
        }
        }

        function copiar(){

            navigator.clipboard.writeText(transformado);

            alert("Texto copiado: " + transformado);

            document.getElementById("inputA").value = "";
            document.getElementById("resultado").innerHTML = ""

            if (transformado.length > 1){
                quitando1.style.visibility="visible"
                quitando2.style.visibility="visible"
                quitandoArea.placeholder="Ingresa un mensaje"
                quitandoT.innerHTML = "Ningún mensaje encontrado"
                poniendoB.style.visibility="hidden"

        }

        }