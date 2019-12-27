//Función para refrescar la pàgina.
function refresh () {
    window.location.replace("./index.html");
}

//Función para mostrar la clave.
function show_key() {
    var x = document.getElementById("key");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//Función para encriptar o desencriptar el texto.
function valor() {
    
    //Se guarda el valor de la selección actual. (Opción predeterminada "encrypt")
    var option = document.getElementById("select_option").value;
    
    //Se guarda en una constante el HTML del botón de "Save".
    const save_button = document.getElementById("button_save");
    
    //Condición en caso de que la opción sea "encrypt".
    if (option == "encrypt") {
        
        //Guardamos en variables el valor del texto y la clave.
        var text = document.getElementById("text").value;
        var key = document.getElementById("key").value;
        
        //Guardamos en variables el valor de los inputs del texto y la clave però sin espacios.
        var text_val = text.trim();
        var key_val = key.trim();
        
        //Se guarda en una constante el HTML de la <a> con la id "link".
        const download_encrypt = document.getElementById("link");
        
        //Condición en caso de que tengamos valores existentes en el input del texto y la clave.
        if ( key_val && text_val ) {
            
            //Añadimos el atributo de descarga, con el nombre del fitxero a la constante, que corresponde al botón de guardar.
            download_encrypt.setAttribute("download","text.txt");
            
            //Guardamos en una variable el HASH.
            var text_encrypt = CryptoJS.AES.encrypt(text,key);
            
            //Con el mètodo "blob", para sobreescribir en un fitxero, guardamos el HASH creado anteriormente.
            let blob_encrypt = new Blob([text_encrypt],{type: 'text/plain'});
            
            link.href = URL.createObjectURL(blob_encrypt);
            
        //En caso de no tener valor en el input del texto, o de la clave no añade el atributo de descarga.
        } else if (key_val == "" || text_val == "" ) {
                        
            download_encrypt.setAttribute("class","text-decoration-none");
            
            download_encrypt.removeAttribute("download");
            download_encrypt.removeAttribute("href");
            
        }
    } 
    
    //Condición en caso de que la opción sea "decrypt".
    if (option == "decrypt") {
        
        //Guardamos en variables el valor del texto y la clave.
        var text = document.getElementById("text").value;
        var key = document.getElementById("key").value;
        
        //Guardamos en variables el valor de los inputs del texto y la clave però sin espacios.
        var text_val = text.trim();
        var key_val = key.trim();
        
        //Se guarda en una constante el HTML de la <a> con la id "link".
        const download_decrypt = document.getElementById("link");
        
        //Condición en caso de que tengamos valores existentes en el input del texto y la clave.
        if ( key_val && text_val ) {
            
            //Añadimos el atributo de descarga, con el nombre del fitxero a la constante, que corresponde al botón de guardar.
            download_decrypt.setAttribute("download","text_decrypt.txt");
            
            //Guardamos en una variable el HASH desencriptado.
            var text_decrypt = CryptoJS.AES.decrypt(text,key);
            
            //Traducimos la variable anteriora tipo String.
            var text_final = text_decrypt.toString(CryptoJS.enc.Utf8);
            
            //Con el mètodo "blob", para sobreescribir en un fitxero, guardamos el HASH creado anteriormente.
            let blob_decrypt = new Blob([text_final],{type: 'text/plain'});

            link.href = URL.createObjectURL(blob_decrypt);
        
        //En caso de no tener valor en el input del texto, o de la clave no añade el atributo de descarga.
        } else if (key_val == "" || text_val == "" ) {
                        
            download_decrypt.setAttribute("class","text-decoration-none");
            
            download_decrypt.removeAttribute("download");
            download_decrypt.removeAttribute("href");
            
        }
    }
}