document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por suscribirte a la preventa de la Colección Invierno en Hogwarts!');
    this.reset();
  });
  