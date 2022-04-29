const inputEventElement = document.querySelector('form#input')
const inputElement = document.querySelector('form#input input')
const inputFeedbackElement = document.querySelector('div#input-feedback')

inputEventElement.addEventListener('submit', (event) => {
    console.log('submit')
    event.preventDefault()
    const value = inputElement.value
    
        const feedbackElement = document.createElement('p')
        feedbackElement.innerHTML = "to-do: " + value

    inputFeedbackElement.appendChild(feedbackElement)

    inputElement.value = ""

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<input type="checkbox" id="myCheck">';
    completedButton.classList.add("completed-btn");
    inputFeedbackElement.appendChild(completedButton);
})