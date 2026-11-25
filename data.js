// data.js — наша база знаний (Версия 2.0: Расширенная)

const words = [
  // === Урок 1-10 (Старая база) ===
  { id: 1,  hanzi: "你",     pinyin: "nǐ",       translation: "ты",            example: "你好。",                  examplePinyin: "Nǐ hǎo.",           exampleRu: "Здравствуй.",                  tags: ["HSK1", "Boya1", "Урок1", "Приветствия", "Местоимения"] },
  { id: 2,  hanzi: "好",     pinyin: "hǎo",      translation: "хорошо",        example: "你好。",                  examplePinyin: "Nǐ hǎo.",           exampleRu: "Здравствуй.",                  tags: ["HSK1", "Boya1", "Урок1", "Приветствия", "Прилагательные"] },
  { id: 3,  hanzi: "我",     pinyin: "wǒ",       translation: "я",             example: "我是学生。",              examplePinyin: "Wǒ shì xuésheng.",  exampleRu: "Я студент.",                   tags: ["HSK1", "Boya1", "Урок1", "Местоимения"] },
  { id: 4,  hanzi: "是",     pinyin: "shì",      translation: "быть (есть)",   example: "我是中国人。",            examplePinyin: "Wǒ shì Zhōngguó rén.", exampleRu: "Я китаец.",                    tags: ["HSK1", "Boya1", "Урок1", "Глаголы"] },
  { id: 5,  hanzi: "人",     pinyin: "rén",      translation: "человек",       example: "我是中国人。",            examplePinyin: "Wǒ shì Zhōngguó rén.", exampleRu: "Я китаец.",                    tags: ["HSK1", "Boya1", "Урок1", "Люди"] },
  { id: 6,  hanzi: "中国",   pinyin: "Zhōngguó", translation: "Китай",         example: "我是中国人。",            examplePinyin: "Wǒ shì Zhōngguó rén.", exampleRu: "Я китаец.",                    tags: ["HSK1", "Boya1", "Урок1", "Страны", "Места"] },
  { id: 7,  hanzi: "名字",   pinyin: "míngzi",   translation: "имя",           example: "你叫什么名字？",          examplePinyin: "Nǐ jiào shénme míngzi?", exampleRu: "Как тебя зовут?",              tags: ["HSK1", "Boya1", "Урок1", "Люди"] },
  { id: 8,  hanzi: "叫",     pinyin: "jiào",     translation: "называться",    example: "我叫小明。",              examplePinyin: "Wǒ jiào Xiǎo Míng.",  exampleRu: "Меня зовут Сяомин.",           tags: ["HSK1", "Boya1", "Урок1", "Глаголы"] },
  { id: 9,  hanzi: "什么",   pinyin: "shénme",   translation: "что",           example: "你叫什么名字？",          examplePinyin: "Nǐ jiào shénme míngzi?", exampleRu: "Как тебя зовут?",              tags: ["HSK1", "Boya1", "Урок1", "Вопросы"] },
  { id: 35, hanzi: "呢",     pinyin: "ne",       translation: "(частица)",     example: "你呢？",                  examplePinyin: "Nǐ ne?",                exampleRu: "А ты?",                        tags: ["HSK1", "Boya1", "Урок5", "Частицы"] },

  { id: 10, hanzi: "哪",     pinyin: "nǎ",       translation: "какой",         example: "你是哪国人？",            examplePinyin: "Nǐ shì nǎ guó rén?",  exampleRu: "Из какой ты страны?",          tags: ["HSK1", "Boya1", "Урок2", "Вопросы"] },
  { id: 11, hanzi: "国",     pinyin: "guó",      translation: "страна",        example: "你是哪国人？",            examplePinyin: "Nǐ shì nǎ guó rén?",  exampleRu: "Из какой ты страны?",          tags: ["HSK1", "Boya1", "Урок2", "Места"] },
  { id: 12, hanzi: "谁",     pinyin: "shéi",     translation: "кто",           example: "他是谁？",                examplePinyin: "Tā shì shéi?",          exampleRu: "Кто он?",                      tags: ["HSK1", "Boya1", "Урок2", "Вопросы"] },
  { id: 13, hanzi: "你们",   pinyin: "nǐmen",    translation: "вы",            example: "你们好吗？",              examplePinyin: "Nǐmen hǎo ma?",       exampleRu: "Как у вас дела?",              tags: ["HSK1", "Boya1", "Урок2", "Местоимения"] },
  { id: 14, hanzi: "他们",   pinyin: "tāmen",    translation: "они",           example: "他们是学生。",            examplePinyin: "Tāmen shì xuésheng.", exampleRu: "Они студенты.",                tags: ["HSK1", "Boya1", "Урок2", "Местоимения"] },
  { id: 15, hanzi: "我们",   pinyin: "wǒmen",    translation: "мы",            example: "我们是朋友。",            examplePinyin: "Wǒmen shì péngyou.",  exampleRu: "Мы друзья.",                   tags: ["HSK1", "Boya1", "Урок2", "Местоимения"] },
  { id: 16, hanzi: "也",     pinyin: "yě",       translation: "тоже",          example: "我也是学生。",            examplePinyin: "Wǒ yě shì xuésheng.", exampleRu: "Я тоже студент.",               tags: ["HSK1", "Boya1", "Урок2", "Наречия"] },

  { id: 17, hanzi: "这",     pinyin: "zhè",      translation: "это",           example: "这是我的书。",            examplePinyin: "Zhè shì wǒ de shū.",  exampleRu: "Это моя книга.",               tags: ["HSK1", "Boya1", "Урок3", "Указатели"] },
  { id: 18, hanzi: "那",     pinyin: "nà",       translation: "то",            example: "那是你的书吗？",          examplePinyin: "Nà shì nǐ de shū ma?", exampleRu: "Это твоя книга?",              tags: ["HSK1", "Boya1", "Урок3", "Указатели"] },
  { id: 19, hanzi: "书",     pinyin: "shū",      translation: "книга",         example: "那是你的书吗？",          examplePinyin: "Nà shì nǐ de shū ma?", exampleRu: "Это твоя книга?",              tags: ["HSK1", "Boya1", "Урок3", "Вещи"] },
  { id: 20, hanzi: "的",     pinyin: "de",       translation: "(частица притяж.)", example: "我的书",              examplePinyin: "Wǒ de shū",           exampleRu: "моя книга",                    tags: ["HSK1", "Boya1", "Урок3", "Частицы"] },
  { id: 21, hanzi: "吗",     pinyin: "ma",       translation: "(вопр. частица)", example: "那是你的书吗？",        examplePinyin: "Nà shì nǐ de shū ma?", exampleRu: "Это твоя книга?",              tags: ["HSK1", "Boya1", "Урок3", "Частицы", "Вопросы"] },
  { id: 22, hanzi: "不",     pinyin: "bù",       translation: "не",            example: "这不是我的书。",          examplePinyin: "Zhè bú shì wǒ de shū.", exampleRu: "Это не моя книга.",            tags: ["HSK1", "Boya1", "Урок3", "Наречия"] },

  { id: 23, hanzi: "哪儿",   pinyin: "nǎr",      translation: "где",           example: "图书馆在哪儿？",          examplePinyin: "Túshūguǎn zài nǎr?",  exampleRu: "Где библиотека?",              tags: ["HSK1", "Boya1", "Урок4", "Вопросы", "Места"] },
  { id: 24, hanzi: "在",     pinyin: "zài",      translation: "находиться в",  example: "图书馆在学校。",          examplePinyin: "Túshūguǎn zài xuéxiào.", exampleRu: "Библиотека в школе.",          tags: ["HSK1", "Boya1", "Урок4", "Глаголы", "Места"] },
  { id: 25, hanzi: "图书馆", pinyin: "túshūguǎn",translation: "библиотека",    example: "图书馆在哪儿？",          examplePinyin: "Túshūguǎn zài nǎr?",  exampleRu: "Где библиотека?",              tags: ["HSK1", "Boya1", "Урок4", "Места"] },
  { id: 26, hanzi: "学校",   pinyin: "xuéxiào",  translation: "школа",         example: "我是学校的学生。",        examplePinyin: "Wǒ shì xuéxiào de xuésheng.", exampleRu: "Я школьный ученик.",           tags: ["HSK1", "Boya1", "Урок4", "Места"] },
  { id: 27, hanzi: "大学",   pinyin: "dàxué",    translation: "университет",   example: "清华大学在哪儿？",        examplePinyin: "Qīnghuá Dàxué zài nǎr?", exampleRu: "Где Университет Цинхуа?",      tags: ["HSK1", "Boya1", "Урок4", "Места"] },

  { id: 28, hanzi: "很",     pinyin: "hěn",      translation: "очень",         example: "学校很大。",              examplePinyin: "Xuéxiào hěn dà.",     exampleRu: "Школа очень большая.",         tags: ["HSK1", "Boya1", "Урок5", "Наречия"] },
  { id: 29, hanzi: "大",     pinyin: "dà",       translation: "большой",       example: "学校很大。",              examplePinyin: "Xuéxiào hěn dà.",     exampleRu: "Школа очень большая.",         tags: ["HSK1", "Boya1", "Урок5", "Прилагательные"] },
  { id: 30, hanzi: "小",     pinyin: "xiǎo",     translation: "маленький",     example: "我的房间很小。",          examplePinyin: "Wǒ de fángjiān hěn xiǎo.", exampleRu: "Моя комната маленькая.",       tags: ["HSK1", "Boya1", "Урок5", "Прилагательные"] },
  { id: 31, hanzi: "学生",   pinyin: "xuésheng", translation: "студент",       example: "我是学生。",              examplePinyin: "Wǒ shì xuésheng.",    exampleRu: "Я студент.",                   tags: ["HSK1", "Boya1", "Урок5", "Люди"] },
  { id: 32, hanzi: "老师",   pinyin: "lǎoshī",   translation: "учитель",       example: "他是老师。",              examplePinyin: "Tā shì lǎoshī.",        exampleRu: "Он учитель.",                  tags: ["HSK1", "Boya1", "Урок5", "Люди"] },
  { id: 33, hanzi: "同学",   pinyin: "tóngxué",  translation: "одноклассник",  example: "她是我的同学。",          examplePinyin: "Tā shì wǒ de tóngxué.", exampleRu: "Она моя одноклассница.",       tags: ["HSK1", "Boya1", "Урок5", "Люди"] },
  { id: 34, hanzi: "朋友",   pinyin: "péngyou",  translation: "друг",          example: "我们是朋友。",            examplePinyin: "Wǒmen shì péngyou.",  exampleRu: "Мы друзья.",                   tags: ["HSK1", "Boya1", "Урок5", "Люди"] },

  { id: 36, hanzi: "现在",   pinyin: "xiànzài",  translation: "сейчас",        example: "现在几点？",              examplePinyin: "Xiànzài jǐ diǎn?",    exampleRu: "Который сейчас час?",          tags: ["HSK1", "Boya1", "Урок6", "Время"] },
  { id: 37, hanzi: "几点",   pinyin: "jǐ diǎn",  translation: "сколько часов", example: "现在几点？",              examplePinyin: "Xiànzài jǐ diǎn?",    exampleRu: "Который сейчас час?",          tags: ["HSK1", "Boya1", "Урок6", "Время"] },
  { id: 38, hanzi: "点",     pinyin: "diǎn",     translation: "часов (время)", example: "八点。",                  examplePinyin: "Bā diǎn.",            exampleRu: "8 часов.",                     tags: ["HSK1", "Boya1", "Урок6", "Время", "Числа"] },
  { id: 39, hanzi: "早上",   pinyin: "zǎoshang", translation: "утро",          example: "早上好。",                examplePinyin: "Zǎoshang hǎo.",       exampleRu: "Доброе утро.",                 tags: ["HSK1", "Boya1", "Урок6", "Время"] },
  { id: 40, hanzi: "明天",   pinyin: "míngtiān", translation: "завтра",        example: "明天你有课吗？",          examplePinyin: "Míngtiān nǐ yǒu kè ma?", exampleRu: "Завтра у тебя есть занятия?",  tags: ["HSK1", "Boya1", "Урок7", "Время"] },
  { id: 41, hanzi: "今天",   pinyin: "jīntiān",  translation: "сегодня",       example: "今天我很忙。",            examplePinyin: "Jīntiān wǒ hěn máng.", exampleRu: "Сегодня я очень занят.",       tags: ["HSK1", "Boya1", "Урок7", "Время"] },
  { id: 42, hanzi: "有",     pinyin: "yǒu",      translation: "иметь (есть)",  example: "我有书。",                examplePinyin: "Wǒ yǒu shū.",         exampleRu: "У меня есть книга.",           tags: ["HSK1", "Boya1", "Урок7", "Глаголы"] },
  { id: 43, hanzi: "课",     pinyin: "kè",       translation: "урок/занятие",  example: "明天你有课吗？",          examplePinyin: "Míngtiān nǐ yǒu kè ma?", exampleRu: "Завтра у тебя есть занятия?",  tags: ["HSK1", "Boya1", "Урок7", "Учеба"] },
  { id: 44, hanzi: "电话",   pinyin: "diànhuà",  translation: "телефон",       example: "你的电话号码是多少？",    examplePinyin: "Nǐ de diànhuà hàomǎ shì duōshao?", exampleRu: "Какой у тебя номер телефона?", tags: ["HSK1", "Boya1", "Урок8", "Вещи"] },
  { id: 45, hanzi: "多少",   pinyin: "duōshao",  translation: "сколько",       example: "多少钱？",                examplePinyin: "Duōshao qián?",         exampleRu: "Сколько стоит?",               tags: ["HSK1", "Boya1", "Урок8", "Вопросы", "Деньги"] },
  { id: 46, hanzi: "钱",     pinyin: "qián",     translation: "деньги",        example: "多少钱？",                examplePinyin: "Duōshao qián?",         exampleRu: "Сколько стоит?",               tags: ["HSK1", "Boya1", "Урок9", "Деньги"] },
  { id: 47, hanzi: "家",     pinyin: "jiā",      translation: "семья/дом",     example: "我家有五口人。",          examplePinyin: "Wǒ jiā yǒu wǔ kǒu rén.", exampleRu: "В моей семье 5 человек.",      tags: ["HSK1", "Boya1", "Урок10", "Семья", "Места"] },
  { id: 48, hanzi: "爸爸",   pinyin: "bàba",     translation: "папа",          example: "他是我爸爸。",            examplePinyin: "Tā shì wǒ bàba.",     exampleRu: "Он мой папа.",                 tags: ["HSK1", "Boya1", "Урок10", "Семья"] },
  { id: 49, hanzi: "妈妈",   pinyin: "māma",     translation: "мама",          example: "她是我妈妈。",            examplePinyin: "Tā shì wǒ māma.",     exampleRu: "Она моя мама.",                tags: ["HSK1", "Boya1", "Урок10", "Семья"] },
  { id: 50, hanzi: "口",     pinyin: "kǒu",      translation: "(счетное слово для семьи)", example: "五口人",      examplePinyin: "wǔ kǒu rén",        exampleRu: "5 человек (в семье)",          tags: ["HSK1", "Boya1", "Урок10", "Семья", "Частицы"] },

  // === Урок 11-15 (Новые слова: Погода, Планы, Покупки) ===
  { id: 51, hanzi: "北京",   pinyin: "Běijīng",  translation: "Пекин",         example: "北京很大。",              examplePinyin: "Běijīng hěn dà.",     exampleRu: "Пекин очень большой.",         tags: ["HSK1", "Boya1", "Урок11", "Места"] },
  { id: 52, hanzi: "冬天",   pinyin: "dōngtiān", translation: "зима",          example: "冬天很冷。",              examplePinyin: "Dōngtiān hěn lěng.",    exampleRu: "Зимой очень холодно.",         tags: ["HSK1", "Boya1", "Урок11", "Время", "Погода"] },
  { id: 53, hanzi: "冷",     pinyin: "lěng",     translation: "холодный",      example: "今天很冷。",              examplePinyin: "Jīntiān hěn lěng.",     exampleRu: "Сегодня холодно.",             tags: ["HSK1", "Boya1", "Урок11", "Погода", "Прилагательные"] },
  { id: 54, hanzi: "热",     pinyin: "rè",       translation: "жаркий",        example: "夏天很热。",              examplePinyin: "Xiàtiān hěn rè.",       exampleRu: "Летом очень жарко.",           tags: ["HSK1", "Boya1", "Урок11", "Погода", "Прилагательные"] },
  { id: 55, hanzi: "怎么样", pinyin: "zěnmeyàng",translation: "как/какой",     example: "天气怎么样？",            examplePinyin: "Tiānqì zěnmeyàng?",   exampleRu: "Какая погода?",                tags: ["HSK1", "Boya1", "Урок11", "Вопросы"] },
  { id: 56, hanzi: "干",     pinyin: "gàn",      translation: "делать",        example: "你在干什么？",            examplePinyin: "Nǐ zài gàn shénme?",  exampleRu: "Что ты делаешь?",              tags: ["HSK1", "Boya1", "Урок12", "Глаголы"] },
  { id: 57, hanzi: "星期",   pinyin: "xīngqī",   translation: "неделя",        example: "一个星期有七天。",        examplePinyin: "Yī gè xīngqī yǒu qī tiān.", exampleRu: "В неделе 7 дней.",             tags: ["HSK1", "Boya1", "Урок12", "Время"] },
  { id: 58, hanzi: "打算",   pinyin: "dǎsuàn",   translation: "планировать",   example: "你打算去哪儿？",          examplePinyin: "Nǐ dǎsuàn qù nǎr?",   exampleRu: "Куда ты планируешь пойти?",    tags: ["HSK1", "Boya1", "Урок13", "Глаголы"] },
  { id: 59, hanzi: "商店",   pinyin: "shāngdiàn",translation: "магазин",       example: "我去商店买东西。",        examplePinyin: "Wǒ qù shāngdiàn mǎi dōngxi.", exampleRu: "Я иду в магазин покупать вещи.", tags: ["HSK1", "Boya1", "Урок13", "Места"] },
  { id: 60, hanzi: "买",     pinyin: "mǎi",      translation: "покупать",      example: "我想买一本书。",          examplePinyin: "Wǒ xiǎng mǎi yī běn shū.", exampleRu: "Я хочу купить книгу.",         tags: ["HSK1", "Boya1", "Урок13", "Глаголы"] },
  { id: 61, hanzi: "喜欢",   pinyin: "xǐhuan",   translation: "нравиться/любить", example: "我喜欢红色。",         examplePinyin: "Wǒ xǐhuan hóngsè.",   exampleRu: "Мне нравится красный цвет.",   tags: ["HSK1", "Boya1", "Урок14", "Глаголы"] },
  { id: 62, hanzi: "颜色",   pinyin: "yánsè",    translation: "цвет",          example: "你喜欢什么颜色？",        examplePinyin: "Nǐ xǐhuan shénme yánsè?", exampleRu: "Какой цвет тебе нравится?",    tags: ["HSK1", "Boya1", "Урок14", "Вещи"] },
  { id: 63, hanzi: "红",     pinyin: "hóng",     translation: "красный",       example: "这是红色的书。",          examplePinyin: "Zhè shì hóngsè de shū.", exampleRu: "Это красная книга.",           tags: ["HSK1", "Boya1", "Урок14", "Цвета"] },
  { id: 64, hanzi: "生日",   pinyin: "shēngrì",  translation: "день рождения", example: "明天是我的生日。",        examplePinyin: "Míngtiān shì wǒ de shēngrì.", exampleRu: "Завтра мой день рождения.",    tags: ["HSK1", "Boya1", "Урок15", "Время"] },

  // === Урок 16-20 (Новые слова: Выходные, Здоровье, Привычки) ===
  { id: 65, hanzi: "周末",   pinyin: "zhōumò",   translation: "выходные",      example: "周末你做什么？",          examplePinyin: "Zhōumò nǐ zuò shénme?", exampleRu: "Что ты делаешь на выходных?",  tags: ["HSK1", "Boya1", "Урок16", "Время"] },
  { id: 66, hanzi: "太",     pinyin: "tài",      translation: "слишком",       example: "太好了！",                examplePinyin: "Tài hǎo le!",           exampleRu: "Отлично! (Слишком хорошо!)",   tags: ["HSK1", "Boya1", "Урок16", "Наречия"] },
  { id: 67, hanzi: "会",     pinyin: "huì",      translation: "уметь/мочь",    example: "你会说汉语吗？",          examplePinyin: "Nǐ huì shuō Hànyǔ ma?", exampleRu: "Ты умеешь говорить по-китайски?", tags: ["HSK1", "Boya1", "Урок17", "Глаголы"] },
  { id: 68, hanzi: "得",     pinyin: "děi",      translation: "должен/нужно",  example: "我得走了。",              examplePinyin: "Wǒ děi zǒu le.",        exampleRu: "Мне нужно идти.",              tags: ["HSK1", "Boya1", "Урок18", "Глаголы"] },
  { id: 69, hanzi: "还",     pinyin: "hái",      translation: "всё ещё/также", example: "你还忙吗？",              examplePinyin: "Nǐ hái máng ma?",       exampleRu: "Ты всё ещё занят?",            tags: ["HSK1", "Boya1", "Урок19", "Наречия"] },
  { id: 70, hanzi: "看病",   pinyin: "kànbìng",  translation: "болеть/лечиться", example: "他去医院看病。",        examplePinyin: "Tā qù yīyuàn kànbìng.", exampleRu: "Он пошёл в больницу лечиться.", tags: ["HSK1", "Boya1", "Урок20", "Здоровье"] },
  { id: 71, hanzi: "感冒",   pinyin: "gǎnmào",   translation: "простуда",      example: "我感冒了。",              examplePinyin: "Wǒ gǎnmào le.",         exampleRu: "Я простудился.",               tags: ["HSK1", "Boya1", "Урок20", "Здоровье"] }
];

const decks = [
  { id: "hsk1",  name: "HSK 1",            filterTag: "HSK1" },
  { id: "hsk2",  name: "HSK 2",            filterTag: "HSK2" },
  { id: "hsk3",  name: "HSK 3",            filterTag: "HSK3" },
  { id: "hsk4",  name: "HSK 4",            filterTag: "HSK4" },
  { id: "boya1", name: "Boya Chinese 1",   filterTag: "Boya1" },
  { id: "sentences", name: "Предложения",  filterTag: "SENTENCE" },
  { id: "all",   name: "Все слова",        filterTag: null }
];

const allTags = [...new Set(words.flatMap(w => w.tags))].sort();

// === Тексты для раздела "Читай" ===
const texts = [
  {
    title: "Знакомство (Уроки 1-5)",
    translationPinyin: "Nǐ hǎo. Wǒ shì xuésheng. Nǐ shì nǎ guó rén? Wǒ shì Zhōngguó rén. Zhè shì wǒ de shū. Nà shì nǐ de shū ma? Bù, zhè bú shì wǒ de shū.",
    translation: "Здравствуй. Я студент. Из какой ты страны? Я китаец. Это моя книга. Это твоя книга? Нет, это не моя книга.",
    content: [
      { h: "你", p: "nǐ", t: "ты" }, { h: "好", p: "hǎo", t: "хорошо" }, { h: "。", p: "", t: "" },
      { h: "我", p: "wǒ", t: "я" }, { h: "是", p: "shì", t: "есть" }, { h: "学生", p: "xuésheng", t: "студент" }, { h: "。", p: "", t: "" },
      { h: "你", p: "nǐ", t: "ты" }, { h: "是", p: "shì", t: "есть" }, { h: "哪", p: "nǎ", t: "какой" }, { h: "国", p: "guó", t: "страна" }, { h: "人", p: "rén", t: "человек" }, { h: "？", p: "", t: "" },
      { h: "我", p: "wǒ", t: "я" }, { h: "是", p: "shì", t: "есть" }, { h: "中国", p: "Zhōngguó", t: "Китай" }, { h: "人", p: "rén", t: "человек" }, { h: "。", p: "", t: "" },
      { h: "这", p: "zhè", t: "это" }, { h: "是", p: "shì", t: "есть" }, { h: "我", p: "wǒ", t: "я" }, { h: "的", p: "de", t: "(притяж.)" }, { h: "书", p: "shū", t: "книга" }, { h: "。", p: "", t: "" },
      { h: "那", p: "nà", t: "то" }, { h: "是", p: "shì", t: "есть" }, { h: "你", p: "nǐ", t: "ты" }, { h: "的", p: "de", t: "(притяж.)" }, { h: "书", p: "shū", t: "книга" }, { h: "吗", p: "ma", t: "(вопр.)" }, { h: "？", p: "", t: "" },
      { h: "不", p: "bù", t: "не" }, { h: "，", p: "", t: "" }, { h: "这", p: "zhè", t: "это" }, { h: "不", p: "bù", t: "не" }, { h: "是", p: "shì", t: "есть" }, { h: "我", p: "wǒ", t: "я" }, { h: "的", p: "de", t: "(притяж.)" }, { h: "书", p: "shū", t: "книга" }, { h: "。", p: "", t: "" }
    ]
  },
  {
    title: "Мой день (Уроки 6-10)",
    translationPinyin: "Xiànzài jǐ diǎn? Xiànzài shì zǎoshang bā diǎn. Míngtiān nǐ yǒu kè ma? Wǒ yǒu kè. Wǒ jiā yǒu wǔ kǒu rén: bàba, māma hé wǒ.",
    translation: "Сколько сейчас часов? Сейчас 8 часов утра. Завтра у тебя есть занятия? У меня есть занятия. В моей семье 5 человек: папа, мама и я.",
    content: [
      { h: "现在", p: "xiànzài", t: "сейчас" }, { h: "几点", p: "jǐ diǎn", t: "сколько часов" }, { h: "？", p: "", t: "" },
      { h: "现在", p: "xiànzài", t: "сейчас" }, { h: "是", p: "shì", t: "есть" }, { h: "早上", p: "zǎoshang", t: "утро" }, { h: "八", p: "bā", t: "8" }, { h: "点", p: "diǎn", t: "часов" }, { h: "。", p: "", t: "" },
      { h: "明天", p: "míngtiān", t: "завтра" }, { h: "你", p: "nǐ", t: "ты" }, { h: "有", p: "yǒu", t: "иметь" }, { h: "课", p: "kè", t: "урок" }, { h: "吗", p: "ma", t: "(вопр.)" }, { h: "？", p: "", t: "" },
      { h: "我", p: "wǒ", t: "я" }, { h: "有", p: "yǒu", t: "иметь" }, { h: "课", p: "kè", t: "урок" }, { h: "。", p: "", t: "" },
      { h: "我", p: "wǒ", t: "я" }, { h: "家", p: "jiā", t: "семья" }, { h: "有", p: "yǒu", t: "иметь" }, { h: "五", p: "wǔ", t: "5" }, { h: "口", p: "kǒu", t: "(счетн. сл.)" }, { h: "人", p: "rén", t: "человек" }, { h: "：", p: "", t: "" },
      { h: "爸爸", p: "bàba", t: "папа" }, { h: "、", p: "", t: "" }, { h: "妈妈", p: "māma", t: "мама" }, { h: "和", p: "hé", t: "и" }, { h: "我", p: "wǒ", t: "я" }, { h: "。", p: "", t: "" }
    ]
  },
  {
    title: "Погода и планы (Уроки 11-13)",
    translationPinyin: "Běijīng de dōngtiān hěn lěng. Nǐ dǎsuàn qù nǎr? Wǒ dǎsuàn qù shāngdiàn mǎi dōngxi. Tiānqì zěnmeyàng?",
    translation: "Зима в Пекине очень холодная. Куда ты планируешь пойти? Я планирую пойти в магазин покупать вещи. Какая погода?",
    content: [
      { h: "北京", p: "Běijīng", t: "Пекин" }, { h: "的", p: "de", t: "(притяж.)" }, { h: "冬天", p: "dōngtiān", t: "зима" }, { h: "很", p: "hěn", t: "очень" }, { h: "冷", p: "lěng", t: "холодный" }, { h: "。", p: "", t: "" },
      { h: "你", p: "nǐ", t: "ты" }, { h: "打算", p: "dǎsuàn", t: "планировать" }, { h: "去", p: "qù", t: "идти" }, { h: "哪儿", p: "nǎr", t: "где/куда" }, { h: "？", p: "", t: "" },
      { h: "我", p: "wǒ", t: "я" }, { h: "打算", p: "dǎsuàn", t: "планировать" }, { h: "去", p: "qù", t: "идти" }, { h: "商店", p: "shāngdiàn", t: "магазин" }, { h: "买", p: "mǎi", t: "покупать" }, { h: "东西", p: "dōngxi", t: "вещи" }, { h: "。", p: "", t: "" },
      { h: "天气", p: "tiānqì", t: "погода" }, { h: "怎么样", p: "zěnmeyàng", t: "какой" }, { h: "？", p: "", t: "" }
    ]
  },
  {
    title: "Покупки и цвета (Уроки 14-16)",
    translationPinyin: "Nǐ xǐhuan shénme yánsè? Wǒ xǐhuan hóngsè. Zhōumò nǐ zuò shénme? Tài hǎo le!",
    translation: "Какой цвет тебе нравится? Мне нравится красный. Что ты делаешь на выходных? Отлично!",
    content: [
      { h: "你", p: "nǐ", t: "ты" }, { h: "喜欢", p: "xǐhuan", t: "нравиться" }, { h: "什么", p: "shénme", t: "что" }, { h: "颜色", p: "yánsè", t: "цвет" }, { h: "？", p: "", t: "" },
      { h: "我", p: "wǒ", t: "я" }, { h: "喜欢", p: "xǐhuan", t: "нравиться" }, { h: "红", p: "hóng", t: "красный" }, { h: "色", p: "sè", t: "цвет" }, { h: "。", p: "", t: "" },
      { h: "周末", p: "zhōumò", t: "выходные" }, { h: "你", p: "nǐ", t: "ты" }, { h: "做", p: "zuò", t: "делать" }, { h: "什么", p: "shénme", t: "что" }, { h: "？", p: "", t: "" },
      { h: "太", p: "tài", t: "слишком" }, { h: "好", p: "hǎo", t: "хорошо" }, { h: "了", p: "le", t: "(частица)" }, { h: "！", p: "", t: "" }
    ]
  }
];

// === Грамматика для раздела "Запомни" ===
const grammar = [
  {
    id: "shi",
    title: "Глагол-связка 是 (shì)",
    intro: "В китайском языке нет привычных нам спряжений глагола «быть». Вместо этого используется иероглиф 是. Он работает как знак равенства (=).",
    rules: [
      "Формула: Кто + 是 + Кто/Что.",
      "Отрицание: добавляем 不 (bù) перед 是. (Обрати внимание: 不 + 是 читается как bú shì).",
      "Вопрос: добавляем 吗 (ma) в конец предложения."
    ],
    examples: [
      { h: "我是学生。", p: "Wǒ shì xuésheng.", r: "Я студент." },
      { h: "他不是老师。", p: "Tā bú shì lǎoshī.", r: "Он не учитель." },
      { h: "你是中国人吗？", p: "Nǐ shì Zhōngguó rén ma?", r: "Ты китаец?" }
    ]
  },
  {
    id: "de",
    title: "Притяжательная частица 的 (de)",
    intro: "Частица 的 — это аналог нашего родительного падежа (чей? чья? чьё?). Она связывает владельца и предмет.",
    rules: [
      "Формула: Владелец + 的 + Предмет.",
      "Если владелец — это местоимение (я, ты, он), 的 обязательна.",
      "Если владелец — близкий родственник (мама, папа), 的 часто можно опустить."
    ],
    examples: [
      { h: "我的书", p: "Wǒ de shū", r: "Моя книга." },
      { h: "你的电话", p: "Nǐ de diànhuà", r: "Твой телефон." },
      { h: "我妈妈", p: "Wǒ māma", r: "Моя мама (без 的)." }
    ]
  },
  {
    id: "ma",
    title: "Вопросительная частица 吗 (ma)",
    intro: "Чтобы превратить обычное утверждение в общий вопрос (требующий ответа «да» или «нет»), не нужно менять порядок слов. Просто добавь 吗 в конец!",
    rules: [
      "Формула: Утверждение + 吗？",
      "Интонация в конце обычно понижается.",
      "Ответ «да» — это повторение глагола (是, 有). Ответ «нет» — 不 + глагол."
    ],
    examples: [
      { h: "你好吗？", p: "Nǐ hǎo ma?", r: "Как дела? (Ты хороший?)" },
      { h: "这是你的书吗？", p: "Zhè shì nǐ de shū ma?", r: "Это твоя книга?" },
      { h: "是。/ 不是。", p: "Shì. / Bú shì.", r: "Да. / Нет." }
    ]
  },
  {
    id: "men",
    title: "Суффикс множественного числа 们 (men)",
    intro: "В китайском языке нет изменения слов по числам. Чтобы показать, что речь идёт о нескольких людях, добавь 们 после местоимения или слова, обозначающего человека.",
    rules: [
      "我 (я) → 我们 (мы)",
      "你 (ты) → 你们 (вы)",
      "他/她 (он/она) → 他们/她们 (они)",
      "朋友 (друг) → 朋友们 (друзья)",
      "⚠️ 们 используется только с одушевлёнными существительными (людьми)."
    ],
    examples: [
      { h: "我们是朋友。", p: "Wǒmen shì péngyou.", r: "Мы друзья." },
      { h: "你们好吗？", p: "Nǐmen hǎo ma?", r: "Как у вас дела?" },
      { h: "他们是学生。", p: "Tāmen shì xuésheng.", r: "Они студенты." }
    ]
  },
  {
    id: "ye",
    title: "Наречие 也 (yě) — «тоже»",
    intro: "Наречие 也 ставится перед глаголом и означает «тоже» или «также». Оно всегда стоит между подлежащим и сказуемым.",
    rules: [
      "Формула: Подлежащее + 也 + Глагол/Прилагательное.",
      "⚠️ 也 никогда не ставится в самом начале предложения.",
      "⚠️ 也 не используется в отрицаниях (вместо неё — 也 + 不)."
    ],
    examples: [
      { h: "我是学生，他也是学生。", p: "Wǒ shì xuésheng, tā yě shì xuésheng.", r: "Я студент, он тоже студент." },
      { h: "我也不是老师。", p: "Wǒ yě bú shì lǎoshī.", r: "Я тоже не учитель." },
      { h: "她也很忙。", p: "Tā yě hěn máng.", r: "Она тоже очень занята." }
    ]
  },
  {
    id: "ne",
    title: "Фразовая частица 呢 (ne) — «а ты?»",
    intro: "Частица 呢 используется в конце короткого вопроса, когда контекст уже понятен из предыдущей фразы. Это способ спросить «а у тебя?», «а он?» без повторения всего предложения.",
    rules: [
      "Используется после местоимения или существительного.",
      "Часто переводится как «А ты?», «А он?», «А что насчёт...?»",
      "Также может выражать удивление: «Где же...?»"
    ],
    examples: [
      { h: "我是学生，你呢？", p: "Wǒ shì xuésheng, nǐ ne?", r: "Я студент, а ты?" },
      { h: "他是中国人，她呢？", p: "Tā shì Zhōngguó rén, tā ne?", r: "Он китаец, а она?" },
      { h: "我的书呢？", p: "Wǒ de shū ne?", r: "А где моя книга?" }
    ]
  },
  {
    id: "zhenane",
    title: "Указательные местоимения 这 и 那",
    intro: "В китайском есть два основных указательных слова: 这 (это, здесь) и 那 (то, там). Они работают как наши «этот/тот».",
    rules: [
      "这 (zhè) — указывает на что-то близкое (это, здесь).",
      "那 (nà) — указывает на что-то далёкое (то, там).",
      "Могут сочетаться с 里 (внутри): 这里 (здесь), 那里 (там).",
      "С существительными: 这个人 (этот человек), 那本书 (та книга)."
    ],
    examples: [
      { h: "这是我的书。", p: "Zhè shì wǒ de shū.", r: "Это моя книга." },
      { h: "那是你的电话吗？", p: "Nà shì nǐ de diànhuà ma?", r: "Это твой телефон? (тот)" },
      { h: "这里很大。", p: "Zhèlǐ hěn dà.", r: "Здесь очень большая." }
    ]
  },
  {
    id: "zai",
    title: "Глагол 在 (zài) — «находиться»",
    intro: "Глагол 在 означает «находиться в каком-то месте». Он используется, чтобы сказать, где что-то или кто-то расположен.",
    rules: [
      "Формула: Кто/Что + 在 + Где.",
      "Для вопроса «где?» используется 哪儿 (nǎr).",
      "⚠️ Не путать с предлогом 在 (в, на) — это другое употребление."
    ],
    examples: [
      { h: "图书馆在哪儿？", p: "Túshūguǎn zài nǎr?", r: "Где библиотека?" },
      { h: "我在学校。", p: "Wǒ zài xuéxiào.", r: "Я в школе." },
      { h: "清华大学在北京。", p: "Qīnghuá Dàxué zài Běijīng.", r: "Университет Цинхуа находится в Пекине." }
    ]
  },
  {
    id: "hen",
    title: "Наречие 很 (hěn) — «очень»",
    intro: "很 — самое частое наречие в китайском. Оно означает «очень», но часто используется просто как связка между подлежащим и прилагательным, без сильного значения «очень».",
    rules: [
      "Формула: Подлежащее + 很 + Прилагательное.",
      "В утверждении 很 часто обязательно (иначе звучит как сравнение).",
      "В отрицании: 不 + Прилагательное (很 не нужно).",
      "В вопросе: 很 + Прилагательное + 吗？"
    ],
    examples: [
      { h: "学校很大。", p: "Xuéxiào hěn dà.", r: "Школа большая." },
      { h: "我的房间很小。", p: "Wǒ de fángjiān hěn xiǎo.", r: "Моя комната маленькая." },
      { h: "他不忙。", p: "Tā bù máng.", r: "Он не занят." }
    ]
  },
  {
    id: "you",
    title: "Глагол 有 (yǒu) — «иметь / есть»",
    intro: "Глагол 有 означает «иметь» или «существовать». Он используется, чтобы сказать, что у кого-то что-то есть, или что что-то где-то существует.",
    rules: [
      "Формула: Кто + 有 + Что (у кого-то есть что-то).",
      "Отрицание: 没有 (méiyǒu) — «не иметь / нет».",
      "⚠️ Нельзя сказать 不有 — только 没有!",
      "Вопрос: 有...吗？"
    ],
    examples: [
      { h: "我有书。", p: "Wǒ yǒu shū.", r: "У меня есть книга." },
      { h: "我没有电话。", p: "Wǒ méiyǒu diànhuà.", r: "У меня нет телефона." },
      { h: "你有课吗？", p: "Nǐ yǒu kè ma?", r: "У тебя есть занятия?" }
    ]
  },
  {
    id: "liangci",
    title: "Счётные слова (量词)",
    intro: "В китайском языке между числом и существительным всегда стоит счётное слово. Нельзя сказать «три книги» — нужно «три [счётное слово для книг] книги».",
    rules: [
      "Самое универсальное счётное слово — 个 (gè).",
      "Для книг — 本 (běn): 一本书 (одна книга).",
      "Для людей — 口 (kǒu) в контексте семьи: 五口人 (5 человек в семье).",
      "⚠️ Формула: Число + Счётное слово + Существительное."
    ],
    examples: [
      { h: "一本书", p: "yī běn shū", r: "одна книга" },
      { h: "三个学生", p: "sān gè xuésheng", r: "три студента" },
      { h: "我家有五口人。", p: "Wǒ jiā yǒu wǔ kǒu rén.", r: "В моей семье 5 человек." }
    ]
  },
  {
    id: "adj_predicate",
    title: "Прилагательные в роли сказуемого",
    intro: "В китайском языке прилагательные могут выступать в роли сказуемого без глагола «быть». Но между подлежащим и прилагательным почти всегда нужно наречие 很.",
    rules: [
      "Формула: Подлежащее + 很 + Прилагательное.",
      "Нельзя сказать: 天气冷 (Tiānqì lěng) — это звучит как сравнение.",
      "Правильно: 天气很冷 (Tiānqì hěn lěng) — Погода холодная."
    ],
    examples: [
      { h: "北京冬天很冷。", p: "Běijīng dōngtiān hěn lěng.", r: "Зимой в Пекине холодно." },
      { h: "夏天很热。", p: "Xiàtiān hěn rè.", r: "Летом очень жарко." }
    ]
  },
  {
    id: "zhengzai",
    title: "Конструкция 正在...呢 (действие в процессе)",
    intro: "Чтобы сказать, что действие происходит прямо сейчас (как английское Present Continuous), используется конструкция 正在...呢.",
    rules: [
      "Формула: Подлежащее + 正在 + Глагол + 呢.",
      "正在 (zhèngzài) — «в процессе».",
      "呢 (ne) — частица в конце, подчеркивает длительность."
    ],
    examples: [
      { h: "我正在学习呢。", p: "Wǒ zhèngzài xuéxí ne.", r: "Я сейчас учусь." },
      { h: "他在干什么呢？", p: "Tā zài gàn shénme ne?", r: "Что он делает (прямо сейчас)?" }
    ]
  },
  {
    id: "tai_le",
    title: "Конструкция 太...了 (слишком... / очень...)",
    intro: "Используется, чтобы выразить сильную эмоцию или оценку. Часто переводится как «Как же...!» или «Слишком...».",
    rules: [
      "Формула: 太 + Прилагательное/Глагол + 了.",
      "Может иметь как положительный, так и отрицательный оттенок.",
      "Часто используется в восклицаниях."
    ],
    examples: [
      { h: "太好了！", p: "Tài hǎo le!", r: "Отлично! (Слишком хорошо!)" },
      { h: "太冷了！", p: "Tài lěng le!", r: "Слишком холодно!" },
      { h: "这本书太贵了。", p: "Zhè běn shū tài guì le.", r: "Эта книга слишком дорогая." }
    ]
  },
  {
    id: "color_de",
    title: "Определительный оборот с 的 (цвета и свойства)",
    intro: "Когда мы хотим описать предмет по цвету или свойству, мы используем конструкцию с 的. Это как сказать «красная книга» или «большая школа».",
    rules: [
      "Формула: Описание + 的 + Предмет.",
      "颜色 (цвет) + 的 + 书 (книга) = 颜色的书 (цветная книга).",
      "红 (красный) + 的 + 书 = 红色的书 (красная книга)."
    ],
    examples: [
      { h: "红色的书", p: "hóngsè de shū", r: "красная книга" },
      { h: "大的学校", p: "dà de xuéxiào", r: "большая школа" },
      { h: "我的好朋友", p: "wǒ de hǎo péngyou", r: "мой хороший друг" }
    ]
  }
];

// === Предложения для раздела "Пиши" ===
const sentences = [
  { id: "s1", hanzi: "你好。", pinyin: "Nǐ hǎo.", translation: "Здравствуй." },
  { id: "s2", hanzi: "我是学生。", pinyin: "Wǒ shì xuésheng.", translation: "Я студент." },
  { id: "s3", hanzi: "你是哪国人？", pinyin: "Nǐ shì nǎ guó rén?", translation: "Из какой ты страны?" },
  { id: "s4", hanzi: "这是我的书。", pinyin: "Zhè shì wǒ de shū.", translation: "Это моя книга." },
  { id: "s5", hanzi: "图书馆在哪儿？", pinyin: "Túshūguǎn zài nǎr?", translation: "Где библиотека?" },
  { id: "s6", hanzi: "今天我很忙。", pinyin: "Jīntiān wǒ hěn máng.", translation: "Сегодня я очень занят." },
  { id: "s7", hanzi: "明天你有课吗？", pinyin: "Míngtiān nǐ yǒu kè ma?", translation: "Завтра у тебя есть занятия?" },
  { id: "s8", hanzi: "我喜欢红色。", pinyin: "Wǒ xǐhuan hóngsè.", translation: "Мне нравится красный цвет." }
];