const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // evita que a página seja recarregada
    alert('Nenhum Carro encontrato!'); // exibe um alerta com a mensagem
});

document.getElementById("image1").innerHTML = "<img src= 'images/image1.jpg'>";
document.getElementById("image2").innerHTML = "<img src= 'images/image2.jpg'>";
document.getElementById("image3").innerHTML = "<img src= 'images/image3.jpg'>";
document.getElementById("image4").innerHTML = "<img src= 'images/image4.jpg'>";
