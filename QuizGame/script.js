const correctAnswers = {
    q1: 'Paris',
    q2: 'Pacific Ocean',
    q3: 'William Shakespeare',
    q4: 'Tokyo'
};

function submitQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;
    const feedbackContainer = document.getElementById('quizFeedback');
    feedbackContainer.innerHTML = ''; 
    
    for (let i = 1; i <= 4; i++) {
        const questionName = 'q' + i;
        const selectedAnswer = form.elements[questionName].value;

        if (selectedAnswer === correctAnswers[questionName]) {
            score++;
            feedbackContainer.innerHTML += `<p>Question ${i}: Correct!</p>`;
        } else {
            const correctAnswer = correctAnswers[questionName];
            feedbackContainer.innerHTML += `<p>Question ${i}: Incorrect. Correct answer: ${correctAnswer}</p>`;
        }
    }

    feedbackContainer.innerHTML += `<p>Your total score is ${score} out of 4.</p>`;
}