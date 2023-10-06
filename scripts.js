// JavaScript para la navegación responsiva en pantallas pequeñas
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// JavaScript para el desplazamiento suave a las secciones
const navLinksArray = document.querySelectorAll('.nav-links a');

navLinksArray.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
    navLinks.classList.remove('active');
  });
});

// JavaScript para validar el formulario de contacto (reemplaza "enviar.php" con tu archivo de procesamiento real)
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.querySelector('input[name="nombre"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const mensaje = document.querySelector('textarea[name="mensaje"]').value;

  // Realiza la validación de los campos aquí si es necesario

  // Envía el formulario (reemplaza "enviar.php" con tu archivo de procesamiento real)
  // Aquí puedes agregar código para enviar los datos del formulario a tu servidor o servicio de correo electrónico
  // Por ejemplo, puedes usar la función fetch() para enviar una solicitud POST al servidor.

  // Ejemplo de solicitud fetch para enviar el formulario
  /*
  fetch('enviar.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nombre, email, mensaje }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Maneja la respuesta del servidor aquí
      console.log(data);
    })
    .catch((error) => {
      console.error('Error al enviar el formulario:', error);
    });
  */

  // Limpia el formulario después de enviarlo (puedes personalizar esto según tus necesidades)
  document.querySelector('input[name="nombre"]').value = '';
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="mensaje"]').value = '';

  alert('¡Formulario enviado con éxito!'); // Puedes personalizar este mensaje
});