function verificar() {
   var data = new Date()
   var ano = data.getFullYear() 
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || fano.value > ano) {
       alert('[ERRO] Verifique os dados e tente novamente')
   } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')

   }

}