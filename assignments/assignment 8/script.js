const inputEventElement = document.querySelector('form#input')
const inputElement = document.querySelector('form#input input')
const inputFeedbackElement = document.querySelector('div#input-feedback')

inputEventElement.addEventListener('submit', (event) => {
    console.log('submit')
    event.preventDefault()
    const value = inputElement.value
    const containerElement = document.createElement('div')
    containerElement.className = "to-do-item"

        const feedbackElement = document.createElement('p')
        feedbackElement.innerHTML = "to-do: " + value
    containerElement.appendChild(feedbackElement)
    // inputFeedbackElement.appendChild(feedbackElement)

    inputElement.value = ""

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<input type="checkbox" id="myCheck">';
    completedButton.classList.add("completed-btn");
    // inputFeedbackElement.appendChild(completedButton);
    containerElement.appendChild(completedButton)
    inputFeedbackElement.appendChild(containerElement)
})