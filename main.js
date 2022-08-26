// Global Variables
const addBtn = document.querySelector('.add-button');
const clearBtn = document.querySelector('.clear-button');
const createBtn = document.querySelector('.create-button');
const form = document.querySelector('.form');
let flashCardContainer = document.querySelector('.flashcard-container');
let myFlashCards = [];

// Event Listeners
addBtn.addEventListener('click', openForm);
createBtn.addEventListener('click', createFlashCard);

class Flashcard {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }
}

function openForm() {
    form.classList.add('form-visible');
}

function clearCards(allCards) {
    for (let allCards = 0; allCards < flashCardContainer.children.length; allCards++) {
       flashCardContainer.remove(allCards);
    }
    flashCardContainer = document.createElement('div');
    document.body.appendChild(flashCardContainer);
    flashCardContainer.classList.add('flashcard-container');
    myFlashCards = [];
}

function removeCard(card) {
    flashCardContainer.removeChild(card);
}

function showAnswer(answer) {
    answer.classList.toggle('answer-visible');
}

function createFlashCard(e) {
    e.preventDefault();

    const questionInput = document.querySelector('.question-input');
    const answerInput = document.querySelector('.answer-input');
    let newFlashCard = new Flashcard(questionInput.value, answerInput.value);
    myFlashCards.push(newFlashCard);

    const flashCard = document.createElement('div');
    flashCardContainer.appendChild(flashCard);
    flashCard.classList.add('flashcard');
    
    const closeCard = document.createElement('button');
    flashCard.appendChild(closeCard);
    closeCard.textContent = 'X';
    closeCard.classList.add('close-card');

    const question = document.createElement('h3');
    flashCard.appendChild(question);
    question.textContent = questionInput.value;
    question.classList.add('question');

    const answer = document.createElement('p');
    flashCard.appendChild(answer);
    answer.textContent = answerInput.value;
    answer.classList.add('answer');

    const allCards = flashCardContainer.childNodes;

    flashCard.addEventListener('click', function() {
        showAnswer(answer);
    })

    closeCard.addEventListener('click', function() {
        removeCard(flashCard);
        myFlashCards.splice(myFlashCards.indexOf(newFlashCard), 1);
    })

    clearBtn.addEventListener('click', function() {
        clearCards(allCards);
    })

    form.reset();
}
