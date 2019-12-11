
function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto')

    var data = new Date();
    var hora = data.getHours();
 
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        // Bom dia
        img.src = 'morning.jpg'
        document.body.style.background = '#000'
    }else if( hora >= 12 && hora <= 18){
        // Boa tarde
        img.src = 'afternoon.jpg'
        document.body.style.background = '#000';
    }else{
        // Boa noite
        img.src = 'night.jpg'
        document.body.style.background = '#515154';
    }

}