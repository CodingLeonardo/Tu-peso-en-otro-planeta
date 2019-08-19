const $inputPeso = document.getElementById('peso')
const $buttonMarte = document.getElementById('marte')
const $buttonMercurio = document.getElementById('mercurio')
const $buttonVenus = document.getElementById('venus')
const $buttonJupiter = document.getElementById('jupiter')
const $buttonSaturno = document.getElementById('saturno')
const $buttonUrano = document.getElementById('urano')
const $buttonNeptuno = document.getElementById('neptuno')

var g_marte = 3.7
var g_mercurio = 3.7
var g_venus = 8.8
var g_jupiter = 24.8
var g_saturno = 10.44
var g_urano = 8.7
var g_neptuno = 11.15
var g_tierra = 9.8

const calcularPeso = function (gravedad, peso) {
    var peso_final = gravedad * peso / g_tierra
    var peso_final = peso_final.toFixed(1)
    return peso_final
}

const crearEstructuraPeso = function (planeta, peso) {
    return(
        `
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tu peso en otro Planeta</title>
        <link rel="stylesheet" href="css/styles.css">
        </head>
        <div class="container">
        <h1 class="title">Tu peso en ${planeta} es de ${peso}kg</h1>
        </div>
        `
    )
}

const imprimirResultado = function (estructura) {
    document.write(estructura)
}

$buttonMarte.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Marte' ,calcularPeso(g_marte, peso)))
})
$buttonMercurio.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Mercurio' ,calcularPeso(g_mercurio, peso)))
})
$buttonVenus.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Venus' ,calcularPeso(g_venus, peso)))
})
$buttonJupiter.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Jupiter' ,calcularPeso(g_jupiter, peso)))
})
$buttonSaturno.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Saturno' ,calcularPeso(g_saturno, peso)))
})
$buttonUrano.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Urano' ,calcularPeso(g_urano, peso)))
})
$buttonNeptuno.addEventListener('click', function() {
    var peso = $inputPeso.value
    imprimirResultado(crearEstructuraPeso('Neptuno' ,calcularPeso(g_neptuno, peso)))
})