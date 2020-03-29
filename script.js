var frases = []

frases[0] = "Por que nos caemos bruce? Para aprender a levantarnos.-Alfred Pennyworth"

frases[1] = "El triangulo del exito: Perseverancia, perseverancia y perseverancia, que esperabas magia?.-Desconocido"

frases[2] = "Lo unico que hace algo imposible, es pensar que es imposible.-Desconocido"

frases[4] = "La unica diferencia entre el exito y el fracaso es la capacidad de actuar.-Alexander Graham Bell"

frases[5] = "Es mejor ser rey de tu silenco que esclavo de tus palabras.-William Shakespeare"

frases[6] = "Porque, sin buscarte te ando encontrando por todos lados, principalmente cuando cierro los ojos.-Julio Cortazar"

frases[7] = "Y todos los consejos que me dan me ayudan pero solo no puedo.-Pity Alvarez"

frases[8] = "Realmente no importa lo que otros piensen que deberias estar haciendo con tu vida, lo unico que importa es que tu sepas lo que estas haciendo con TU vida.-Muhammad Alí"

frases[9] = "Nunca es demasiado tarde para ser la persona que podrías haber sido.-George Eliot"

function numeroAleatorio() {
        var numeroFrase = Math.floor(Math.random()*(frases.length))
        return numeroFrase
}

function cambiarFrase() {
        var frase = frases[numeroAleatorio()]
        var fraseSeparada = frase.split("-")

        document.getElementById("frase").textContent = fraseSeparada[0]
        document.getElementById("autor").textContent = fraseSeparada[1]
}

window.setInterval(cambiarFrase,600000)

document.getElementById("cambiar").addEventListener("click",function(){
        cambiarFrase()
})
