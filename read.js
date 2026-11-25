function init() {
    const container = document.getElementById('texts-container');
    
    texts.forEach((text, index) => {
        const block = document.createElement('div');
        block.className = 'text-block';
        
        const title = document.createElement('h2');
        title.className = 'text-title';
        title.textContent = text.title;
        block.appendChild(title);
        
        const sentenceDiv = document.createElement('div');
        sentenceDiv.className = 'sentence';
        
        text.content.forEach(item => {
            const wordSpan = document.createElement('span');
            
            if (item.p === "" && item.t === "") {
                wordSpan.className = 'punctuation';
                wordSpan.textContent = item.h;
            } else {
                wordSpan.className = 'word';
                wordSpan.innerHTML = `
                    <span class="word-hanzi">${item.h}</span>
                    <span class="word-hint">${item.p} — ${item.t}</span>
                `;
                wordSpan.addEventListener('click', () => {
                    document.querySelectorAll('.word.active').forEach(w => w.classList.remove('active'));
                    wordSpan.classList.toggle('active');
                });
            }
            sentenceDiv.appendChild(wordSpan);
        });
        
        block.appendChild(sentenceDiv);

        // === ДОБАВЛЯЕМ КНОПКУ И ПЕРЕВОД ===
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = 'Показать перевод';
        
                const transDiv = document.createElement('div');
        transDiv.className = 'full-translation';
        transDiv.id = 'trans-' + index;

        const pinyinDiv = document.createElement('div');
        pinyinDiv.className = 'full-translation-pinyin';
        pinyinDiv.textContent = text.translationPinyin;

        const textDiv = document.createElement('div');
        textDiv.className = 'full-translation-text';
        textDiv.textContent = text.translation;

        transDiv.appendChild(pinyinDiv);
        transDiv.appendChild(textDiv);
        
        // Логика кнопки
        toggleBtn.addEventListener('click', () => {
            transDiv.classList.toggle('visible');
            if (transDiv.classList.contains('visible')) {
                toggleBtn.textContent = 'Скрыть перевод';
            } else {
                toggleBtn.textContent = 'Показать перевод';
            }
        });

        block.appendChild(toggleBtn);
        block.appendChild(transDiv);
        // ====================================

        container.appendChild(block);
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.word')) {
            document.querySelectorAll('.word.active').forEach(w => w.classList.remove('active'));
        }
    });
}

init();