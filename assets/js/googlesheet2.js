const scriptURL = 'https://script.google.com/macros/s/AKfycbzaN66loTLse6asbbPnTzh3ShzrS5FAcexC2Qhszx8TZihP1UoQuc-4VohZP5zal3wJqg/exec'


const form = document.forms['contact-form1']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
