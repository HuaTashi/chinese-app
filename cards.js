let currentDeck = [];
let currentCardIndex = 0;
let isFlipped = false;

// Загружаем прогресс из localStorage или создаём пустой
let progress = JSON.parse(localStorage.getItem('chineseProgress')) || {};

// Запуск при загрузке страницы
function init() {
    const deckSelect = document.getElementById('deck-select');
    
    // Заполняем выпадающий список колодами из data.js
    decks.forEach(deck => {
        const option = document.createElement('option');
        option.value = deck.id;
        option.textContent = deck.name;
        deckSelect.appendChild(option);
    });

    // Когда меняем колоду в списке
    deckSelect.addEventListener('change', (e) => loadDeck(e.target.value));
    
    // Загружаем первую колоду по умолчанию
    loadDeck('hsk1');

    // Клик по карточке переворачивает её
    document.getElementById('card-container').addEventListener('click', flipCard);
}

function loadDeck(deckId) {
    const deck = decks.find(d => d.id === deckId);
    
    // Фильтруем слова по тегу колоды
    if (deck.filterTag) {
        currentDeck = words.filter(w => w.tags.includes(deck.filterTag));
    } else {
        currentDeck = [...words]; // Если тег null, берём всё
    }
    
    // Сортируем: сначала слова, которые нужно повторить
    sortDeckByProgress();
    currentCardIndex = 0;
    showCard();
}

// Сортировка карточек по прогрессу
function sortDeckByProgress() {
    currentDeck.sort((a, b) => {
        const progressA = progress[a.id] || { level: 0, lastSeen: 0 };
        const progressB = progress[b.id] || { level: 0, lastSeen: 0 };
        
        // Если уровень одинаковый, сортируем по времени последнего просмотра
        if (progressA.level === progressB.level) {
            return progressA.lastSeen - progressB.lastSeen;
        }
        
        // Карточки с низким уровнем (не знаем) идут первыми
        return progressA.level - progressB.level;
    });
}

// Алгоритм тасовки (перемешивания)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showCard() {
    if (currentDeck.length === 0) return;
    const card = currentDeck[currentCardIndex];
    const cardEl = document.getElementById('card');
    const frontEl = document.getElementById('card-front');
    const backEl = document.getElementById('card-back');
    const buttonsEl = document.getElementById('buttons');

    // Сбрасываем переворот
    cardEl.classList.remove('flipped');
    isFlipped = false;
    buttonsEl.style.display = 'none';

    // Передняя сторона: только иероглиф
    frontEl.innerHTML = `<h2 class="hanzi">${card.hanzi}</h2>`;

    // Задняя сторона: всё остальное
    backEl.innerHTML = `
        <div class="pinyin">${card.pinyin}</div>
        <div class="translation">${card.translation}</div>
        <div class="example">${card.example}</div>
        <div class="example-pinyin">${card.examplePinyin}</div>
        <div class="example-ru">${card.exampleRu}</div>
        <div class="tags">${card.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;
}

function flipCard() {
    if (isFlipped) return; // Чтобы не переворачивалась обратно по клику
    const cardEl = document.getElementById('card');
    const buttonsEl = document.getElementById('buttons');
    
    cardEl.classList.add('flipped');
    isFlipped = true;
    buttonsEl.style.display = 'flex'; // Показываем кнопки оценки
}

function rateCard(rating) {
    const card = currentDeck[currentCardIndex];
    
    // Получаем текущий прогресс или создаём новый
    const cardProgress = progress[card.id] || { level: 0, lastSeen: 0, correct: 0, incorrect: 0 };
    
    // Обновляем прогресс
    cardProgress.lastSeen = Date.now();
    
    if (rating === 'good') {
        cardProgress.level = Math.min(cardProgress.level + 1, 5); // Максимум уровень 5
        cardProgress.correct++;
    } else if (rating === 'mid') {
        cardProgress.level = Math.max(cardProgress.level - 1, 0); // Не опускаем ниже 0
    } else if (rating === 'bad') {
        cardProgress.level = 0; // Сбрасываем уровень
        cardProgress.incorrect++;
    }
    
    // Сохраняем прогресс
    progress[card.id] = cardProgress;
    localStorage.setItem('chineseProgress', JSON.stringify(progress));
    
    // Переходим к следующей карточке
    currentCardIndex = (currentCardIndex + 1) % currentDeck.length;
    showCard();
}

// Запускаем всё
init();