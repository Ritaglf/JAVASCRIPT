function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22 // teste mudança de hora acima hs real
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'manha1.jpg'
        document.body.style.background = '#546c88'  
    } 
    else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'tarde1.jpg'
        document.body.style.background = '#2e7c7b' 
    }
    else {
        // BOA NOITE
        img.src = 'noite1.jpg'
        document.body.style.background = '#061164' 
    }
}