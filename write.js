let currentDeck = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let totalCount = 0;
let isAnswered = false;
let currentQuestion = null;

function init() {
    const deckSelect = document.getElementById('deck-select');
    
    decks.forEach(deck => {
        const option = document.createElement('option');
        option.value = deck.id;
        option.textContent = deck.name;
        deckSelect.appendChild(option);
    });

    deckSelect.addEventListener('change', (e) => loadDeck(e.target.value));
    loadDeck('hsk1');

    document.getElementById('check-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    
    document.getElementById('answer-input').addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && !isAnswered) {
            checkAnswer();
        } else if (e.key === 'Enter' && isAnswered) {
            nextQuestion();
        }
    });
}

function loadDeck(deckId) {
    // === НОВОЕ: Проверка на предложения ===
    if (deckId === 'sentences') {
        currentDeck = [...sentences];
    } else {
        const deck = decks.find(d => d.id === deckId);
        if (deck.filterTag) {
            currentDeck = words.filter(w => w.tags.includes(deck.filterTag));
        } else {
            currentDeck = [...words];
        }
    }
    // =======================================

    shuffle(currentDeck);
    currentQuestionIndex = 0;
    correctCount = 0;
    totalCount = 0;
    updateStats();
    showQuestion();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showQuestion() {
    if (currentDeck.length === 0) return;
    isAnswered = false;
    currentQuestion = currentDeck[currentQuestionIndex];
    
    document.getElementById('question').textContent = currentQuestion.translation;
    
    const input = document.getElementById('answer-input');
    input.value = '';
    input.disabled = false;
    input.focus();
    
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').className = 'feedback';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('check-btn').style.display = 'inline-block';
}

function checkAnswer() {
    if (isAnswered) return;
    const input = document.getElementById('answer-input');
    const userAnswer = input.value.trim();
    
    if (userAnswer === '') return; 
    
    isAnswered = true;
    input.disabled = true;
    totalCount++;
    
    const feedbackEl = document.getElementById('feedback');
    
    if (userAnswer === currentQuestion.hanzi) {
        feedbackEl.innerHTML = '✓ Отлично! Всё верно.';
        feedbackEl.className = 'feedback correct';
        correctCount++;
    } else {
        feedbackEl.innerHTML = `
            ✗ Не совсем. Правильно писать так:
            <div class="correct-answer-reveal">${currentQuestion.hanzi}</div>
            <div class="pinyin-reveal">${currentQuestion.pinyin}</div>
        `;
        feedbackEl.className = 'feedback incorrect';
    }
    
    updateStats();
    document.getElementById('check-btn').style.display = 'none';
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('next-btn').focus();
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % currentDeck.length;
    showQuestion();
}

function updateStats() {
    document.getElementById('correct-count').textContent = `Правильно: ${correctCount}`;
    document.getElementById('total-count').textContent = `Всего: ${totalCount}`;
}

init();