let currentDeck = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let totalCount = 0;
let isAnswered = false;
let currentQuestion = null; // Глобальная переменная для текущего вопроса

// Запуск при загрузке страницы
function init() {
    const deckSelect = document.getElementById('deck-select');
    
    // Заполняем выпадающий список колодами
    decks.forEach(deck => {
        const option = document.createElement('option');
        option.value = deck.id;
        option.textContent = deck.name;
        deckSelect.appendChild(option);
    });

    // Когда меняем колоду
    deckSelect.addEventListener('change', (e) => loadDeck(e.target.value));
    
    // Загружаем первую колоду
    loadDeck('hsk1');

    // Кнопка "Следующий вопрос"
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
}

function loadDeck(deckId) {
    const deck = decks.find(d => d.id === deckId);
    
    // Фильтруем слова по тегу колоды
    if (deck.filterTag) {
        currentDeck = words.filter(w => w.tags.includes(deck.filterTag));
    } else {
        currentDeck = [...words];
    }
    
    // Перемешиваем
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
    currentQuestion = currentDeck[currentQuestionIndex]; // Сохраняем текущий вопрос
    
    const questionEl = document.getElementById('question');
    const optionsEl = document.getElementById('options');
    const feedbackEl = document.getElementById('feedback');
    const pinyinReveal = document.getElementById('pinyin-reveal');
    const nextBtn = document.getElementById('next-btn');
    
    // Показываем иероглиф
    questionEl.textContent = currentQuestion.hanzi;
    
    // Генерируем 4 варианта ответа
    const options = generateOptions(currentQuestion);
    
    // Создаём кнопки
    optionsEl.innerHTML = '';
    options.forEach(option => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => checkAnswer(btn, option, currentQuestion.translation));
        optionsEl.appendChild(btn);
    });
    
    // Сбрасываем обратную связь и пиньинь
    feedbackEl.textContent = '';
    feedbackEl.className = 'feedback';
    pinyinReveal.textContent = '';
    nextBtn.style.display = 'none';
}

function generateOptions(correctWord) {
    // Берём правильный ответ
    const correctAnswer = correctWord.translation;
    
    // Берём 3 случайных неправильных ответа из той же колоды
    const wrongOptions = currentDeck
        .filter(w => w.id !== correctWord.id)
        .map(w => w.translation);
    
    shuffle(wrongOptions);
    const selectedWrong = wrongOptions.slice(0, 3);
    
    // Собираем все 4 варианта и перемешиваем
    const allOptions = [correctAnswer, ...selectedWrong];
    shuffle(allOptions);
    
    return allOptions;
}

function checkAnswer(btn, selectedAnswer, correctAnswer) {
    if (isAnswered) return;
    isAnswered = true;
    
    const feedbackEl = document.getElementById('feedback');
    const pinyinReveal = document.getElementById('pinyin-reveal');
    const nextBtn = document.getElementById('next-btn');
    const allBtns = document.querySelectorAll('.option-btn');
    
    totalCount++;
    
    // Показываем пиньинь
    pinyinReveal.textContent = currentQuestion.pinyin;
    
    // Блокируем все кнопки
    allBtns.forEach(b => b.disabled = true);
    
    if (selectedAnswer === correctAnswer) {
        // Правильный ответ
        btn.classList.add('correct');
        feedbackEl.textContent = '✓ Правильно!';
        feedbackEl.className = 'feedback correct';
        correctCount++;
    } else {
        // Неправильный ответ
        btn.classList.add('incorrect');
        feedbackEl.textContent = `✗ Неправильно. Правильный ответ: ${correctAnswer}`;
        feedbackEl.className = 'feedback incorrect';
        
        // Подсвечиваем правильный ответ
        allBtns.forEach(b => {
            if (b.textContent === correctAnswer) {
                b.classList.add('correct');
            }
        });
    }
    
    updateStats();
    nextBtn.style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex = (currentQuestionIndex + 1) % currentDeck.length;
    showQuestion();
}

function updateStats() {
    document.getElementById('correct-count').textContent = `Правильно: ${correctCount}`;
    document.getElementById('total-count').textContent = `Всего: ${totalCount}`;
}

// Запускаем всё
init();