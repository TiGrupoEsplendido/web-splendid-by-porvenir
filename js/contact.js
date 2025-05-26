const $form = document.querySelector('#formularioContacto');

$form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData($form);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const mailtoLink = `mailto:info@splendidbyporvenir.com?subject=Contacto: ${name} - ${email}&body=Datos:%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

    window.location.href = mailtoLink;
});
