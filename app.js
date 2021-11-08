fetch('https://randomuser.me/api/')
  .then(function(respuesta){return respuesta.json()})
  .then(data => crearTarjeta(data.results['0']))

  function crearTarjeta(persona) {
    let body = document.getElementById('main');
    body.innerHTML = `
            <section class="tarjeta">
              <div class="perfil"><img src="${persona.picture.large}" alt="">
              <h1>Hola soy <span>${persona.name.first} ${persona.name.last}</span></h1>
              <h4>Desarrollador Web Frontend</h4>
              </div>
              <hr>
              <div class="contacto">
              <a href="${persona.picture}">${persona.email}</a>
              <h6>Localidad:</h6>
              <h5>${persona.location.city}, ${persona.location.country}</h5>
              <h6>Teléfono:</h6>
              <h5>${persona.phone}</h5>
              </div>
            </section>
              `;
  };
  

