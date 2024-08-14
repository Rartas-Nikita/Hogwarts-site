const modalElem = document.querySelector('.modal');
const closeModal = () => {
    modalElem.style.visibility = 'hidden';
    modalElem.style.opacity = 0;
}

const formsButton = document.querySelectorAll('.contacts_button')
const inputs = document.querySelectorAll('input');
const popupAlert = document.querySelector('.popup-alert')
const popupInner = document.querySelector('.popup-alert__inner')
const form = document.querySelectorAll('.form')

formsButton.forEach (formsButton => {
    formsButton.disabled = true;
})

let msg
function serializeForm(event) {
    let buttonEvent = event
    let name = event.target.querySelector('[name="name"]').value
    let child_name = event.target.querySelector('[name="child_name"]').value
    let child_age = event.target.querySelector('[name="child_age"]').value
    let phone_number = event.target.querySelector('[name="phone_number"]').value
    return {'name': name, 'child_name': child_name, 'child_age': child_age, 'phone_number': phone_number}
}

function clearForm(){
    inputs.forEach(inp => {
        inp.value='';
    })
    formsButton.forEach (formsButton => {
        formsButton.value = "Отправить"
        formsButton.style.color = 'gray';
        formsButton.style.boxShadow = 'none';
    })
}

async function popupForm(msg, visibility, opacity) {
    popupInner.innerHTML = msg;
    popupAlert.style.visibility = visibility;
    popupAlert.style.opacity = opacity;
    
}

async function popupFormClose() {
    setTimeout("popupForm(msg, 'hidden', 0);", 3000);
}

async function sendData(data) {
    return await fetch('https://school-hogwarts.online/api/v1/request/call', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
}

async function handleFormSubmit(event) {
    event.preventDefault()
    let data = serializeForm(event)
    formsButton.forEach (formsButton => {
        formsButton.disabled = true;
    })

    formsButton.forEach (formsButton => {
        formsButton.value = "Отправка..."
    })
    const response = await sendData(data)
    formsButton.forEach (formsButton => {
        formsButton.value = "Отправить"
    })

    if (response.status === 200) {
        msg = 'Благодарим за заявку! Мы свяжемся с Вами в ближайшее время!';
        popupForm(msg, 'visible', 1);
        popupFormClose();
        clearForm();
        closeModal();
        
    } else {
        msg = 'Ошибка отправки. Попробуйте еще раз.';
        popupForm(msg, 'visible', 1);
        popupFormClose();
    }
}

function checkValidity(event) {
    const formNode = event.target.form;
    const isValid = formNode.checkValidity();
    formsButton.forEach (formsButton => {
        formsButton.disabled = !isValid;
    })

    if (isValid == true) {
        formsButton.forEach (formsButton => {
            formsButton.style.color = '#000';
            formsButton.style.boxShadow = '0px 4px 15px 0px rgba(0, 0, 0, 0.35)';
        })
    } else {
        formsButton.forEach (formsButton => {
            formsButton.style.color = 'gray';
            formsButton.style.boxShadow = 'none';
        })
    }
  
    formsButton.forEach (formsButton => {
        formsButton.disabled = !isValid;
    })
}

form.forEach (form =>{
    form.addEventListener('input', checkValidity)
    form.addEventListener('submit', handleFormSubmit)
})