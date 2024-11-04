const scriptURL = 'https://script.google.com/macros/s/AKfycbzgLpXcUd4ecEW3fMFQxktnKW-QOUJcXCquZQgBKBwV1xWui8AWGi5DgGxE_O4yMJH0cg/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
