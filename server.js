const express = require('express');
const path = require('path');
const questions = require('./quiz-data');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/questions', (req, res) => {
  res.json(questions);
});

app.post('/api/submit', (req, res) => {
  const answers = req.body.answers || {};
  let score = 0;
  const results = questions.map((question, index) => {
    const answer = answers[index];
    const correct = question.correctAnswer === answer;
    if (correct) score += 1;
    return {
      question: question.question,
      selected: answer,
      correctAnswer: question.correctAnswer,
      correct,
    };
  });
  res.json({ score, total: questions.length, results });
});

app.listen(PORT, () => {
  console.log(`Quiz app backend running on http://localhost:${PORT}`);
});
