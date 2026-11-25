function init() {
    const container = document.getElementById('grammar-container');
    
    grammar.forEach(topic => {
        const card = document.createElement('div');
        card.className = 'grammar-card';
        
        const title = document.createElement('h2');
        title.className = 'grammar-title';
        title.textContent = topic.title;
        card.appendChild(title);
        
        const intro = document.createElement('p');
        intro.className = 'grammar-intro';
        intro.textContent = topic.intro;
        card.appendChild(intro);
        
        const rulesDiv = document.createElement('div');
        rulesDiv.className = 'grammar-rules';
        const rulesList = document.createElement('ul');
        topic.rules.forEach(rule => {
            const li = document.createElement('li');
            li.textContent = rule;
            rulesList.appendChild(li);
        });
        rulesDiv.appendChild(rulesList);
        card.appendChild(rulesDiv);
        
        if (topic.examples && topic.examples.length > 0) {
            const examplesDiv = document.createElement('div');
            examplesDiv.className = 'grammar-examples';
            
            topic.examples.forEach(ex => {
                const exItem = document.createElement('div');
                exItem.className = 'example-item';
                
                const hanzi = document.createElement('div');
                hanzi.className = 'example-hanzi';
                hanzi.textContent = ex.h;
                
                const pinyin = document.createElement('div');
                pinyin.className = 'example-pinyin';
                pinyin.textContent = ex.p;
                
                const ru = document.createElement('div');
                ru.className = 'example-ru';
                ru.textContent = ex.r;
                
                exItem.appendChild(hanzi);
                exItem.appendChild(pinyin);
                exItem.appendChild(ru);
                examplesDiv.appendChild(exItem);
            });
            
            card.appendChild(examplesDiv);
        }
        
        container.appendChild(card);
    });
}

init();

// Кнопка наверх — видна всегда
const topBtn = document.getElementById("scrollToTopBtn");
topBtn.style.display = "block"; // Показываем кнопку

topBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});