const scriptURL = 'https://script.google.com/macros/s/AKfycbynE-azuI77zXMIibwVs65pP1MH7NJJk893RJyhV_Tnxh_5CYwAi7ZwtouGzhog5X5C/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('text')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully "
            setTimeout(() => {
                msg.innerHTML = ""
            }, 5000);
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
