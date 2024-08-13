function updateClock() {
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes

    var timeString = hours + ':' + minutes
    if (hours >=12){
        time = " PM"
    }else{
        time = " AM"
    }
    document.querySelector('.clock').textContent = timeString + time
}
setInterval(updateClock, 1000) 

function closeMyComputerContent() {
    indexContent.style.display = "none"
}

function lazy() {
    alert("Not an added feature.")
}

document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault()

    const form = event.target
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        alert('Your message has been sent successfully!')
        form.reset()  
      } else {
        alert('There was a problem with your submission. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('There was a problem with your submission. Please try again.')
    }
  })