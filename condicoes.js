var txtvel = document.querySelector('input#txtvel')
var res = document.querySelector('div#res')
var vel = Number(txtvel.value)
res.innerHTML = `<p>Sua velocidade atual é de ${vel} Km/h</p>`;


