document.getElementById("formulario").addEventListener('submit', validarFormulario); 

function validarFormulario(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    let apellido = document.getElementById('apellido').value;
    if(apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    let correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert('No has escrito nada en el correo');
      return;
    }
    let telefono = document.getElementById('telefono').value;
    if(telefono.length == 0) {
      alert('No has escrito nada en el telefono');
      return;
    }
    let mensaje = document.getElementById('mensaje').value;
    if(mensaje.length == 0) {
      alert('No has escrito nada en el mensaje');
      return;
    }
    this.submit();
  }