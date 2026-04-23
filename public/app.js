const quizContainer = document.getElementById('quiz');
const submitBtn = document.getElementById('submitBtn');
const resultBox = document.getElementById('result');
let questions = [];

function createQuestionCard(question, index) {
  const card = document.createElement('div');
  card.className = 'question-card';

  const title = document.createElement('h2');
  title.textContent = `${index + 1}. ${question.question}`;

  const options = document.createElement('div');
  options.className = 'options';

  question.options.forEach((option) => {
    const label = document.createElement('label');
    label.className = 'option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = `question-${index}`;
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    options.appendChild(label);
  });

  card.appendChild(title);
  card.appendChild(options);
  return card;
}

async function fetchQuestions() {
  try {
    const response = await fetch('/api/questions');
    questions = await response.json();
    quizContainer.innerHTML = '';
    questions.forEach((question, idx) => {
      quizContainer.appendChild(createQuestionCard(question, idx));
    });
  } catch (error) {
    quizContainer.innerHTML = '<p>Failed to load questions. Please try again later.</p>';
    submitBtn.disabled = true;
  }
}

function collectAnswers() {
  return questions.reduce((answers, _, index) => {
    const choice = document.querySelector(`input[name="question-${index}"]:checked`);
    if (choice) answers[index] = choice.value;
    return answers;
  }, {});
}

async function submitQuiz() {
  const answers = collectAnswers();
  try {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers }),
    });
    const data = await response.json();
    showResults(data);
  } catch (error) {
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = '<strong>Unable to submit quiz. Please try again.</strong>';
  }
}

function showResults({ score, total, results }) {
  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `
    <strong>Your score: ${score} / ${total}</strong>
    ${results
      .map(
        (item, index) => `
      <div class="result-item">
        <div><strong>Q${index + 1}:</strong> ${item.question}</div>
        <div>Selected: ${item.selected || 'No answer'}</div>
        <div>Correct answer: ${item.correctAnswer}</div>
        <div class="${item.correct ? 'correct' : ''}">${item.correct ? 'Correct' : 'Wrong'}</div>
      </div>`
      )
      .join('')}
  `;
}

submitBtn.addEventListener('click', submitQuiz);
fetchQuestions();
