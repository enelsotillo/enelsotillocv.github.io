const btn = document.getElementById('button'); /* se captura el elemento submit */

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando....';

   const serviceID = 'default_service';
   const templateID = 'template_4tffdx4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Mensaje Enviado';
      alert('Enviado!');
    }, (err) => {
      btn.value = 'Mensaje Enviado';
      alert(JSON.stringify(err));
    });
});

/*
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_4tffdx4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      form.reset();
      alert('Mensaje enviado con exito');
    }, (err) => {
      btn.value = 'Enviar Mensanje';
      alert(JSON.stringify(err));
    });
});
*/