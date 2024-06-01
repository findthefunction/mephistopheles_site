const flashcards = [
  {
    "你好": {
      "frequency": 10,
      "pinyin": "nǐ hǎo",
      "translation": "Hello",
      "example": "你好，李先生。",
      "example_translation": "Hello, Mr. Li.",
      "usage_notes": "Used as a common greeting."
    }
  },
  {
    "谢谢": {
      "frequency": 9,
      "pinyin": "xièxie",
      "translation": "Thank you",
      "example": "谢谢你的帮助。",
      "example_translation": "Thank you for your help.",
      "usage_notes": "Expresses gratitude."
    }
  },
  {
    "再见": {
      "frequency": 8,
      "pinyin": "zàijiàn",
      "translation": "Goodbye",
      "example": "我们明天再见。",
      "example_translation": "We will see you again tomorrow.",
      "usage_notes": "Used to bid farewell."
    }
  },
  {
    "请": {
      "frequency": 7,
      "pinyin": "qǐng",
      "translation": "Please",
      "example": "请进。",
      "example_translation": "Please come in.",
      "usage_notes": "Used to politely ask for something."
    }
  },
  {
    "对不起": {
      "frequency": 6,
      "pinyin": "duìbuqǐ",
      "translation": "Sorry",
      "example": "对不起，我迟到了。",
      "example_translation": "Sorry, I am late.",
      "usage_notes": "Used to apologize."
    }
  },
  {
    "我": {
      "frequency": 10,
      "pinyin": "wǒ",
      "translation": "I",
      "example": "我是学生。",
      "example_translation": "I am a student.",
      "usage_notes": "Pronoun for oneself."
    }
  },
  {
    "你": {
      "frequency": 10,
      "pinyin": "nǐ",
      "translation": "You",
      "example": "你好吗？",
      "example_translation": "How are you?",
      "usage_notes": "Pronoun for the person being spoken to."
    }
  },
  {
    "他": {
      "frequency": 9,
      "pinyin": "tā",
      "translation": "He",
      "example": "他是老师。",
      "example_translation": "He is a teacher.",
      "usage_notes": "Pronoun for a male person."
    }
  },
  {
    "她": {
      "frequency": 9,
      "pinyin": "tā",
      "translation": "She",
      "example": "她是医生。",
      "example_translation": "She is a doctor.",
      "usage_notes": "Pronoun for a female person."
    }
  },
  {
    "我们": {
      "frequency": 8,
      "pinyin": "wǒmen",
      "translation": "We",
      "example": "我们是朋友。",
      "example_translation": "We are friends.",
      "usage_notes": "Pronoun for oneself and others."
    }
  },
  {
    "他们": {
      "frequency": 7,
      "pinyin": "tāmen",
      "translation": "They",
      "example": "他们在学校。",
      "example_translation": "They are at school.",
      "usage_notes": "Pronoun for a group of people."
    }
  },
  {
    "什么": {
      "frequency": 6,
      "pinyin": "shénme",
      "translation": "What",
      "example": "这是什么？",
      "example_translation": "What is this?",
      "usage_notes": "Used to ask about something."
    }
  },
  {
    "哪": {
      "frequency": 5,
      "pinyin": "nǎ",
      "translation": "Which",
      "example": "你是哪国人？",
      "example_translation": "Which country are you from?",
      "usage_notes": "Used to ask for a specific item among options."
    }
  },
  {
    "为什么": {
      "frequency": 5,
      "pinyin": "wèishénme",
      "translation": "Why",
      "example": "你为什么不高兴？",
      "example_translation": "Why are you unhappy?",
      "usage_notes": "Used to ask for reasons."
    }
  },
  {
    "怎么": {
      "frequency": 5,
      "pinyin": "zěnme",
      "translation": "How",
      "example": "你怎么了？",
      "example_translation": "What happened to you?",
      "usage_notes": "Used to ask about the condition or manner."
    }
  },
  {
    "怎么样": {
      "frequency": 5,
      "pinyin": "zěnmeyàng",
      "translation": "How about",
      "example": "你觉得怎么样？",
      "example_translation": "What do you think?",
      "usage_notes": "Used to ask for an opinion."
    }
  },
  {
    "好": {
      "frequency": 10,
      "pinyin": "hǎo",
      "translation": "Good",
      "example": "这个很好。",
      "example_translation": "This is very good.",
      "usage_notes": "Used to describe something positive."
    }
  },
  {
    "不好": {
      "frequency": 9,
      "pinyin": "bù hǎo",
      "translation": "Not good",
      "example": "天气不好。",
      "example_translation": "The weather is not good.",
      "usage_notes": "Used to describe something negative."
    }
  },
  {
    "可以": {
      "frequency": 8,
      "pinyin": "kěyǐ",
      "translation": "Can",
      "example": "我可以帮你。",
      "example_translation": "I can help you.",
      "usage_notes": "Used to express ability or permission."
    }
  },
  {
    "不能": {
      "frequency": 7,
      "pinyin": "bù néng",
      "translation": "Cannot",
      "example": "我不能去。",
      "example_translation": "I cannot go.",
      "usage_notes": "Used to express inability or prohibition."
    }
  },
  {
    "喜欢": {
      "frequency": 6,
      "pinyin": "xǐhuan",
      "translation": "Like",
      "example": "我喜欢这个。",
      "example_translation": "I like this.",
      "usage_notes": "Used to express preference."
    }
  },
  {
    "知道": {
      "frequency": 6,
      "pinyin": "zhīdào",
      "translation": "Know",
      "example": "我知道这个。",
      "example_translation": "I know this.",
      "usage_notes": "Used to express knowledge of something."
    }
  },
  {
    "认识": {
      "frequency": 6,
      "pinyin": "rènshi",
      "translation": "Recognize",
      "example": "我认识他。",
      "example_translation": "I recognize him.",
      "usage_notes": "Used to express familiarity with someone."
    }
  },
  {
    "吃饭": {
      "frequency": 6,
      "pinyin": "chīfàn",
      "translation": "Eat",
      "example": "我们一起吃饭吧。",
      "example_translation": "Let’s eat together.",
      "usage_notes": "Used to refer to having a meal."
    }
  },
  {
    "喝水": {
      "frequency": 5,
      "pinyin": "hēshuǐ",
      "translation": "Drink water",
      "example": "我渴了，要喝水。",
      "example_translation": "I am thirsty and need to drink water.",
      "usage_notes": "Used to refer to drinking water."
    }
  },
  {
    "看书": {
      "frequency": 5,
      "pinyin": "kànshū",
      "translation": "Read",
      "example": "我喜欢看书。",
      "example_translation": "I like to read.",
      "usage_notes": "Used to refer to reading books."
    }
  },
  {
    "写字": {
      "frequency": 5,
      "pinyin": "xiězì",
      "translation": "Write",
      "example": "我在写字。",
      "example_translation": "I am writing.",
      "usage_notes": "Used to refer to writing characters."
    }
  },
  {
    "学习": {
      "frequency": 6,
      "pinyin": "xuéxí",
      "translation": "Study",
      "example": "我在学习中文。",
      "example_translation": "I am studying Chinese.",
      "usage_notes": "Used to refer to the act of learning."
    }
  },
  {
    "工作": {
      "frequency": 6,
      "pinyin": "gōngzuò",
      "translation": "Work",
      "example": "他在工作。",
      "example_translation": "He is working.",
      "usage_notes": "Used to refer to a job or task."
    }
  },
  {
    "休息": {
      "frequency": 5,
      "pinyin": "xiūxi",
      "translation": "Rest",
      "example": "我需要休息。",
      "example_translation": "I need to rest.",
      "usage_notes": "Used to refer to taking a break."
    }
  },
  {
    "旅游": {
      "frequency": 5,
      "pinyin": "lǚyóu",
      "translation": "Travel",
      "example": "我们去旅游吧。",
      "example_translation": "Let’s go travel.",
      "usage_notes": "Used to refer to going on a trip."
    }
  },
  {
    "买东西": {
      "frequency": 5,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我去买东西。",
      "example_translation": "I am going shopping.",
      "usage_notes": "Used to refer to shopping."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Used to refer to watching films."
    }
  },
  {
    "听音乐": {
      "frequency": 5,
      "pinyin": "tīng yīnyuè",
      "translation": "Listen to music",
      "example": "我喜欢听音乐。",
      "example_translation": "I like to listen to music.",
      "usage_notes": "Used to refer to listening to music."
    }
  },
  {
    "玩游戏": {
      "frequency": 5,
      "pinyin": "wán yóuxì",
      "translation": "Play games",
      "example": "他喜欢玩游戏。",
      "example_translation": "He likes to play games.",
      "usage_notes": "Used to refer to playing video games or other types of games."
    }
  },
  {
    "睡觉": {
      "frequency": 5,
      "pinyin": "shuìjiào",
      "translation": "Sleep",
      "example": "我很困，想睡觉。",
      "example_translation": "I am very sleepy and want to sleep.",
      "usage_notes": "Used to refer to sleeping."
    }
  },
  {
    "走路": {
      "frequency": 5,
      "pinyin": "zǒulù",
      "translation": "Walk",
      "example": "我们去走路吧。",
      "example_translation": "Let’s go for a walk.",
      "usage_notes": "Used to refer to walking."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Used to refer to running."
    }
  },
  {
    "运动": {
      "frequency": 5,
      "pinyin": "yùndòng",
      "translation": "Exercise",
      "example": "我每天运动。",
      "example_translation": "I exercise every day.",
      "usage_notes": "Used to refer to physical exercise."
    }
  },
  {
    "学习": {
      "frequency": 5,
      "pinyin": "xuéxí",
      "translation": "Study",
      "example": "我在学习汉语。",
      "example_translation": "I am studying Chinese.",
      "usage_notes": "Used to refer to learning or studying something."
    }
  },
  {
    "家": {
      "frequency": 6,
      "pinyin": "jiā",
      "translation": "Home",
      "example": "我回家了。",
      "example_translation": "I went home.",
      "usage_notes": "Refers to one’s place of residence."
    }
  },
  {
    "学校": {
      "frequency": 6,
      "pinyin": "xuéxiào",
      "translation": "School",
      "example": "我在学校学习。",
      "example_translation": "I study at school.",
      "usage_notes": "Refers to an educational institution."
    }
  },
  {
    "朋友": {
      "frequency": 6,
      "pinyin": "péngyǒu",
      "translation": "Friend",
      "example": "他是我的朋友。",
      "example_translation": "He is my friend.",
      "usage_notes": "Refers to a person with whom one has a bond of mutual affection."
    }
  },
  {
    "家人": {
      "frequency": 5,
      "pinyin": "jiārén",
      "translation": "Family",
      "example": "我爱我的家人。",
      "example_translation": "I love my family.",
      "usage_notes": "Refers to the members of one’s household."
    }
  },
  {
    "吃": {
      "frequency": 5,
      "pinyin": "chī",
      "translation": "Eat",
      "example": "我们一起吃饭吧。",
      "example_translation": "Let’s eat together.",
      "usage_notes": "Refers to the act of consuming food."
    }
  },
  {
    "喝": {
      "frequency": 5,
      "pinyin": "hē",
      "translation": "Drink",
      "example": "我喜欢喝茶。",
      "example_translation": "I like to drink tea.",
      "usage_notes": "Refers to the act of consuming liquids."
    }
  },
  {
    "看": {
      "frequency": 5,
      "pinyin": "kàn",
      "translation": "Look",
      "example": "你看见了吗？",
      "example_translation": "Did you see it?",
      "usage_notes": "Refers to the act of seeing or watching."
    }
  },
  {
    "写": {
      "frequency": 5,
      "pinyin": "xiě",
      "translation": "Write",
      "example": "我在写信。",
      "example_translation": "I am writing a letter.",
      "usage_notes": "Refers to the act of composing text."
    }
  },
  {
    "听": {
      "frequency": 5,
      "pinyin": "tīng",
      "translation": "Listen",
      "example": "请听我说。",
      "example_translation": "Please listen to me.",
      "usage_notes": "Refers to the act of hearing."
    }
  },
  {
    "说": {
      "frequency": 6,
      "pinyin": "shuō",
      "translation": "Speak",
      "example": "你会说中文吗？",
      "example_translation": "Can you speak Chinese?",
      "usage_notes": "Refers to the act of verbal communication."
    }
  },
  {
    "做": {
      "frequency": 5,
      "pinyin": "zuò",
      "translation": "Do",
      "example": "你在做什么？",
      "example_translation": "What are you doing?",
      "usage_notes": "Refers to the act of performing an activity."
    }
  },
  {
    "玩": {
      "frequency": 5,
      "pinyin": "wán",
      "translation": "Play",
      "example": "孩子们在玩游戏。",
      "example_translation": "The children are playing games.",
      "usage_notes": "Refers to the act of engaging in fun activities."
    }
  },
  {
    "买": {
      "frequency": 5,
      "pinyin": "mǎi",
      "translation": "Buy",
      "example": "我想买这本书。",
      "example_translation": "I want to buy this book.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "卖": {
      "frequency": 4,
      "pinyin": "mài",
      "translation": "Sell",
      "example": "他在卖水果。",
      "example_translation": "He is selling fruit.",
      "usage_notes": "Refers to the act of selling items."
    }
  },
  {
    "上班": {
      "frequency": 5,
      "pinyin": "shàngbān",
      "translation": "Go to work",
      "example": "他每天早上八点上班。",
      "example_translation": "He goes to work every day at 8 am.",
      "usage_notes": "Refers to the act of starting work."
    }
  },
  {
    "下班": {
      "frequency": 5,
      "pinyin": "xiàbān",
      "translation": "Get off work",
      "example": "我们五点下班。",
      "example_translation": "We get off work at 5 pm.",
      "usage_notes": "Refers to the act of finishing work."
    }
  },
  {
    "生病": {
      "frequency": 4,
      "pinyin": "shēngbìng",
      "translation": "Get sick",
      "example": "他生病了。",
      "example_translation": "He is sick.",
      "usage_notes": "Refers to the state of being unwell."
    }
  },
  {
    "看医生": {
      "frequency": 4,
      "pinyin": "kàn yīshēng",
      "translation": "See a doctor",
      "example": "他去看医生了。",
      "example_translation": "He went to see a doctor.",
      "usage_notes": "Refers to visiting a medical professional."
    }
  },
  {
    "打电话": {
      "frequency": 5,
      "pinyin": "dǎ diànhuà",
      "translation": "Make a phone call",
      "example": "我给你打电话。",
      "example_translation": "I will call you.",
      "usage_notes": "Refers to the act of calling someone on the phone."
    }
  },
  {
    "发邮件": {
      "frequency": 4,
      "pinyin": "fā yóujiàn",
      "translation": "Send an email",
      "example": "请给我发邮件。",
      "example_translation": "Please send me an email.",
      "usage_notes": "Refers to the act of sending electronic mail."
    }
  },
  {
    "洗澡": {
      "frequency": 5,
      "pinyin": "xǐzǎo",
      "translation": "Take a shower",
      "example": "我每天晚上洗澡。",
      "example_translation": "I take a shower every evening.",
      "usage_notes": "Refers to the act of bathing."
    }
  },
  {
    "穿衣服": {
      "frequency": 4,
      "pinyin": "chuān yīfu",
      "translation": "Get dressed",
      "example": "他穿衣服很快。",
      "example_translation": "He gets dressed quickly.",
      "usage_notes": "Refers to the act of putting on clothes."
    }
  },
  {
    "睡觉": {
      "frequency": 5,
      "pinyin": "shuìjiào",
      "translation": "Sleep",
      "example": "我很困，想睡觉。",
      "example_translation": "I am very sleepy and want to sleep.",
      "usage_notes": "Refers to the act of sleeping."
    }
  },
  {
    "起床": {
      "frequency": 5,
      "pinyin": "qǐchuáng",
      "translation": "Get up",
      "example": "我每天早上六点起床。",
      "example_translation": "I get up at 6 am every morning.",
      "usage_notes": "Refers to the act of getting out of bed."
    }
  },
  {
    "去": {
      "frequency": 6,
      "pinyin": "qù",
      "translation": "Go",
      "example": "我去学校。",
      "example_translation": "I am going to school.",
      "usage_notes": "Refers to the act of moving from one place to another."
    }
  },
  {
    "来": {
      "frequency": 6,
      "pinyin": "lái",
      "translation": "Come",
      "example": "他来我家。",
      "example_translation": "He is coming to my house.",
      "usage_notes": "Refers to the act of arriving at a place."
    }
  },
  {
    "回": {
      "frequency": 5,
      "pinyin": "huí",
      "translation": "Return",
      "example": "我晚上回家。",
      "example_translation": "I return home in the evening.",
      "usage_notes": "Refers to the act of going back to a place."
    }
  },
  {
    "走": {
      "frequency": 5,
      "pinyin": "zǒu",
      "translation": "Walk",
      "example": "我们去走路吧。",
      "example_translation": "Let’s go for a walk.",
      "usage_notes": "Refers to the act of moving by foot."
    }
  },
  {
    "跑": {
      "frequency": 5,
      "pinyin": "pǎo",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of moving quickly by foot."
    }
  },
  {
    "游泳": {
      "frequency": 4,
      "pinyin": "yóuyǒng",
      "translation": "Swim",
      "example": "她喜欢游泳。",
      "example_translation": "She likes to swim.",
      "usage_notes": "Refers to the act of moving through water."
    }
  },
  {
    "踢足球": {
      "frequency": 4,
      "pinyin": "tī zúqiú",
      "translation": "Play soccer",
      "example": "他们喜欢踢足球。",
      "example_translation": "They like to play soccer.",
      "usage_notes": "Refers to the act of playing the sport soccer."
    }
  },
  {
    "篮球": {
      "frequency": 4,
      "pinyin": "lánqiú",
      "translation": "Basketball",
      "example": "他是篮球运动员。",
      "example_translation": "He is a basketball player.",
      "usage_notes": "Refers to the sport of basketball."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of running."
    }
  },
  {
    "吃饭": {
      "frequency": 6,
      "pinyin": "chīfàn",
      "translation": "Eat",
      "example": "我们一起吃饭吧。",
      "example_translation": "Let’s eat together.",
      "usage_notes": "Refers to the act of eating a meal."
    }
  },
  {
    "喝水": {
      "frequency": 4,
      "pinyin": "hē shuǐ",
      "translation": "Drink water",
      "example": "多喝水对身体好。",
      "example_translation": "Drinking more water is good for health.",
      "usage_notes": "Refers to the act of drinking water."
    }
  },
  {
    "洗手": {
      "frequency": 4,
      "pinyin": "xǐ shǒu",
      "translation": "Wash hands",
      "example": "饭前要洗手。",
      "example_translation": "Wash your hands before meals.",
      "usage_notes": "Refers to the act of cleaning one’s hands."
    }
  },
  {
    "刷牙": {
      "frequency": 4,
      "pinyin": "shuā yá",
      "translation": "Brush teeth",
      "example": "早晚要刷牙。",
      "example_translation": "Brush your teeth in the morning and evening.",
      "usage_notes": "Refers to the act of cleaning one’s teeth."
    }
  },
  {
    "洗脸": {
      "frequency": 4,
      "pinyin": "xǐ liǎn",
      "translation": "Wash face",
      "example": "每天早上洗脸。",
      "example_translation": "Wash your face every morning.",
      "usage_notes": "Refers to the act of cleaning one’s face."
    }
  },
  {
    "上厕所": {
      "frequency": 4,
      "pinyin": "shàng cèsuǒ",
      "translation": "Go to the bathroom",
      "example": "我想上厕所。",
      "example_translation": "I want to go to the bathroom.",
      "usage_notes": "Refers to the act of using the restroom."
    }
  },
  {
    "上网": {
      "frequency": 4,
      "pinyin": "shàng wǎng",
      "translation": "Go online",
      "example": "我喜欢上网。",
      "example_translation": "I like to go online.",
      "usage_notes": "Refers to the act of accessing the internet."
    }
  },
  {
    "看书": {
      "frequency": 5,
      "pinyin": "kàn shū",
      "translation": "Read a book",
      "example": "他喜欢看书。",
      "example_translation": "He likes to read books.",
      "usage_notes": "Refers to the act of reading written material."
    }
  },
  {
    "写作业": {
      "frequency": 5,
      "pinyin": "xiě zuòyè",
      "translation": "Do homework",
      "example": "我在写作业。",
      "example_translation": "I am doing my homework.",
      "usage_notes": "Refers to the act of completing school assignments."
    }
  },
  {
    "看电视": {
      "frequency": 5,
      "pinyin": "kàn diànshì",
      "translation": "Watch TV",
      "example": "他们在看电视。",
      "example_translation": "They are watching TV.",
      "usage_notes": "Refers to the act of viewing television."
    }
  },
  {
    "玩电脑": {
      "frequency": 4,
      "pinyin": "wán diànnǎo",
      "translation": "Play on the computer",
      "example": "孩子们喜欢玩电脑。",
      "example_translation": "The children like to play on the computer.",
      "usage_notes": "Refers to the act of using a computer for entertainment."
    }
  },
  {
    "下棋": {
      "frequency": 4,
      "pinyin": "xiàqí",
      "translation": "Play chess",
      "example": "他喜欢下棋。",
      "example_translation": "He likes to play chess.",
      "usage_notes": "Refers to the act of playing chess."
    }
  },
  {
    "骑自行车": {
      "frequency": 4,
      "pinyin": "qí zìxíngchē",
      "translation": "Ride a bicycle",
      "example": "她每天骑自行车。",
      "example_translation": "She rides a bicycle every day.",
      "usage_notes": "Refers to the act of cycling."
    }
  },
  {
    "打篮球": {
      "frequency": 4,
      "pinyin": "dǎ lánqiú",
      "translation": "Play basketball",
      "example": "他们喜欢打篮球。",
      "example_translation": "They like to play basketball.",
      "usage_notes": "Refers to the act of playing basketball."
    }
  },
  {
    "踢足球": {
      "frequency": 4,
      "pinyin": "tī zúqiú",
      "translation": "Play soccer",
      "example": "他们喜欢踢足球。",
      "example_translation": "They like to play soccer.",
      "usage_notes": "Refers to the act of playing soccer."
    }
  },
  {
    "上课": {
      "frequency": 4,
      "pinyin": "shàngkè",
      "translation": "Attend class",
      "example": "我们现在上课。",
      "example_translation": "We are having class now.",
      "usage_notes": "Refers to attending a class or lesson."
    }
  },
  {
    "下课": {
      "frequency": 4,
      "pinyin": "xiàkè",
      "translation": "Finish class",
      "example": "我们五点下课。",
      "example_translation": "We finish class at 5.",
      "usage_notes": "Refers to the end of a class or lesson."
    }
  },
  {
    "考试": {
      "frequency": 4,
      "pinyin": "kǎoshì",
      "translation": "Take an exam",
      "example": "明天有一个考试。",
      "example_translation": "There is an exam tomorrow.",
      "usage_notes": "Refers to the act of taking a test."
    }
  },
  {
    "过生日": {
      "frequency": 4,
      "pinyin": "guò shēngrì",
      "translation": "Celebrate birthday",
      "example": "今天是他的生日。",
      "example_translation": "Today is his birthday.",
      "usage_notes": "Refers to celebrating one’s birthday."
    }
  },
  {
    "唱歌": {
      "frequency": 4,
      "pinyin": "chànggē",
      "translation": "Sing",
      "example": "她喜欢唱歌。",
      "example_translation": "She likes to sing.",
      "usage_notes": "Refers to the act of singing."
    }
  },
  {
    "跳舞": {
      "frequency": 4,
      "pinyin": "tiàowǔ",
      "translation": "Dance",
      "example": "她喜欢跳舞。",
      "example_translation": "She likes to dance.",
      "usage_notes": "Refers to the act of dancing."
    }
  },
  {
    "画画": {
      "frequency": 4,
      "pinyin": "huà huà",
      "translation": "Draw",
      "example": "他喜欢画画。",
      "example_translation": "He likes to draw.",
      "usage_notes": "Refers to the act of drawing."
    }
  },
  {
    "摄影": {
      "frequency": 4,
      "pinyin": "shèyǐng",
      "translation": "Photography",
      "example": "他喜欢摄影。",
      "example_translation": "He likes photography.",
      "usage_notes": "Refers to the act of taking photographs."
    }
  },
  {
    "写字": {
      "frequency": 4,
      "pinyin": "xiězì",
      "translation": "Write characters",
      "example": "他在写字。",
      "example_translation": "He is writing characters.",
      "usage_notes": "Refers to the act of writing Chinese characters."
    }
  },
  {
    "学中文": {
      "frequency": 5,
      "pinyin": "xué zhōngwén",
      "translation": "Study Chinese",
      "example": "他在学中文。",
      "example_translation": "He is studying Chinese.",
      "usage_notes": "Refers to the act of learning the Chinese language."
    }
  },
  {
    "做饭": {
      "frequency": 4,
      "pinyin": "zuòfàn",
      "translation": "Cook",
      "example": "他喜欢做饭。",
      "example_translation": "He likes to cook.",
      "usage_notes": "Refers to the act of preparing food."
    }
  },
  {
    "洗衣服": {
      "frequency": 4,
      "pinyin": "xǐ yīfu",
      "translation": "Do laundry",
      "example": "她在洗衣服。",
      "example_translation": "She is doing the laundry.",
      "usage_notes": "Refers to the act of washing clothes."
    }
  },
  {
    "打扫": {
      "frequency": 4,
      "pinyin": "dǎsǎo",
      "translation": "Clean",
      "example": "他在打扫房间。",
      "example_translation": "He is cleaning the room.",
      "usage_notes": "Refers to the act of tidying up a place."
    }
  },
  {
    "遛狗": {
      "frequency": 4,
      "pinyin": "liúgǒu",
      "translation": "Walk the dog",
      "example": "他在遛狗。",
      "example_translation": "He is walking the dog.",
      "usage_notes": "Refers to the act of taking a dog for a walk."
    }
  },
  {
    "遛猫": {
      "frequency": 3,
      "pinyin": "liúmāo",
      "translation": "Walk the cat",
      "example": "他在遛猫。",
      "example_translation": "He is walking the cat.",
      "usage_notes": "Refers to the act of taking a cat for a walk."
    }
  },
  {
    "去商店": {
      "frequency": 4,
      "pinyin": "qù shāngdiàn",
      "translation": "Go to the store",
      "example": "我们去商店买东西。",
      "example_translation": "We are going to the store to buy things.",
      "usage_notes": "Refers to the act of visiting a store."
    }
  },
  {
    "购物": {
      "frequency": 4,
      "pinyin": "gòuwù",
      "translation": "Shopping",
      "example": "她喜欢购物。",
      "example_translation": "She likes shopping.",
      "usage_notes": "Refers to the act of buying items."
    }
  },
  {
    "买东西": {
      "frequency": 4,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我们去买东西吧。",
      "example_translation": "Let’s go buy things.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "付钱": {
      "frequency": 4,
      "pinyin": "fù qián",
      "translation": "Pay money",
      "example": "他在付钱。",
      "example_translation": "He is paying money.",
      "usage_notes": "Refers to the act of making a payment."
    }
  },
  {
    "找钱": {
      "frequency": 4,
      "pinyin": "zhǎo qián",
      "translation": "Give change",
      "example": "她在找钱。",
      "example_translation": "She is giving change.",
      "usage_notes": "Refers to the act of returning the difference in a transaction."
    }
  },
  {
    "等": {
      "frequency": 5,
      "pinyin": "děng",
      "translation": "Wait",
      "example": "请等一下。",
      "example_translation": "Please wait a moment.",
      "usage_notes": "Refers to the act of pausing for something or someone."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch a movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Refers to the act of viewing a film."
    }
  },
  {
    "看比赛": {
      "frequency": 4,
      "pinyin": "kàn bǐsài",
      "translation": "Watch a game",
      "example": "他喜欢看比赛。",
      "example_translation": "He likes to watch games.",
      "usage_notes": "Refers to the act of viewing a sports competition."
    }
  },
  {
    "吃晚饭": {
      "frequency": 4,
      "pinyin": "chī wǎnfàn",
      "translation": "Have dinner",
      "example": "我们一起吃晚饭吧。",
      "example_translation": "Let’s have dinner together.",
      "usage_notes": "Refers to the act of eating the evening meal."
    }
  },
  {
    "喝咖啡": {
      "frequency": 4,
      "pinyin": "hē kāfēi",
      "translation": "Drink coffee",
      "example": "他喜欢喝咖啡。",
      "example_translation": "He likes to drink coffee.",
      "usage_notes": "Refers to the act of consuming coffee."
    }
  },
  {
    "喝茶": {
      "frequency": 4,
      "pinyin": "hē chá",
      "translation": "Drink tea",
      "example": "她喜欢喝茶。",
      "example_translation": "She likes to drink tea.",
      "usage_notes": "Refers to the act of consuming tea."
    }
  },
  {
    "吃水果": {
      "frequency": 4,
      "pinyin": "chī shuǐguǒ",
      "translation": "Eat fruit",
      "example": "多吃水果对身体好。",
      "example_translation": "Eating more fruit is good for health.",
      "usage_notes": "Refers to the act of consuming fruits."
    }
  },
  {
    "吃蔬菜": {
      "frequency": 4,
      "pinyin": "chī shūcài",
      "translation": "Eat vegetables",
      "example": "多吃蔬菜对身体好。",
      "example_translation": "Eating more vegetables is good for health.",
      "usage_notes": "Refers to the act of consuming vegetables."
    }
  },
  {
    "做运动": {
      "frequency": 5,
      "pinyin": "zuò yùndòng",
      "translation": "Do exercise",
      "example": "我们一起做运动吧。",
      "example_translation": "Let’s do exercise together.",
      "usage_notes": "Refers to the act of engaging in physical activity."
    }
  },
  {
    "跑步机": {
      "frequency": 3,
      "pinyin": "pǎobù jī",
      "translation": "Treadmill",
      "example": "他在跑步机上跑步。",
      "example_translation": "He is running on the treadmill.",
      "usage_notes": "Refers to the exercise equipment used for running indoors."
    }
  },
  {
    "打电话": {
      "frequency": 5,
      "pinyin": "dǎ diànhuà",
      "translation": "Make a phone call",
      "example": "我给你打电话。",
      "example_translation": "I will call you.",
      "usage_notes": "Refers to the act of calling someone on the phone."
    }
  },
  {
    "发短信": {
      "frequency": 4,
      "pinyin": "fā duǎnxìn",
      "translation": "Send a text message",
      "example": "请给我发短信。",
      "example_translation": "Please send me a text message.",
      "usage_notes": "Refers to the act of sending a text message."
    }
  },
  {
    "写信": {
      "frequency": 4,
      "pinyin": "xiě xìn",
      "translation": "Write a letter",
      "example": "他在写信。",
      "example_translation": "He is writing a letter.",
      "usage_notes": "Refers to the act of composing a letter."
    }
  },
  {
    "邮寄": {
      "frequency": 4,
      "pinyin": "yóujì",
      "translation": "Mail",
      "example": "他在邮寄包裹。",
      "example_translation": "He is mailing a package.",
      "usage_notes": "Refers to the act of sending something by post."
    }
  },
  {
    "寄信": {
      "frequency": 4,
      "pinyin": "jì xìn",
      "translation": "Send a letter",
      "example": "请寄信给我。",
      "example_translation": "Please send me a letter.",
      "usage_notes": "Refers to the act of posting a letter."
    }
  },
  {
    "看报纸": {
      "frequency": 4,
      "pinyin": "kàn bàozhǐ",
      "translation": "Read the newspaper",
      "example": "他每天早上看报纸。",
      "example_translation": "He reads the newspaper every morning.",
      "usage_notes": "Refers to the act of reading a printed publication."
    }
  },
  {
    "玩游戏": {
      "frequency": 5,
      "pinyin": "wán yóuxì",
      "translation": "Play games",
      "example": "孩子们喜欢玩游戏。",
      "example_translation": "The children like to play games.",
      "usage_notes": "Refers to the act of engaging in games for fun."
    }
  },
  {
    "过节": {
      "frequency": 4,
      "pinyin": "guò jié",
      "translation": "Celebrate a festival",
      "example": "他们在过节。",
      "example_translation": "They are celebrating a festival.",
      "usage_notes": "Refers to the act of observing a festive occasion."
    }
  },
  {
    "过年": {
      "frequency": 4,
      "pinyin": "guò nián",
      "translation": "Celebrate New Year",
      "example": "我们一起过年吧。",
      "example_translation": "Let’s celebrate New Year together.",
      "usage_notes": "Refers to the act of celebrating the new year."
    }
  },
  {
    "生日": {
      "frequency": 5,
      "pinyin": "shēngrì",
      "translation": "Birthday",
      "example": "今天是我的生日。",
      "example_translation": "Today is my birthday.",
      "usage_notes": "Refers to the annual celebration of the date of one’s birth."
    }
  },
  {
    "礼物": {
      "frequency": 4,
      "pinyin": "lǐwù",
      "translation": "Gift",
      "example": "这是我的礼物。",
      "example_translation": "This is my gift.",
      "usage_notes": "Refers to an item given to someone without expecting payment."
    }
  },
  {
    "蛋糕": {
      "frequency": 4,
      "pinyin": "dàngāo",
      "translation": "Cake",
      "example": "她喜欢吃蛋糕。",
      "example_translation": "She likes to eat cake.",
      "usage_notes": "Refers to a sweet baked dessert."
    }
  },
  {
    "唱歌": {
      "frequency": 4,
      "pinyin": "chànggē",
      "translation": "Sing",
      "example": "她喜欢唱歌。",
      "example_translation": "She likes to sing.",
      "usage_notes": "Refers to the act of producing musical sounds with the voice."
    }
  },
  {
    "跳舞": {
      "frequency": 4,
      "pinyin": "tiàowǔ",
      "translation": "Dance",
      "example": "她喜欢跳舞。",
      "example_translation": "She likes to dance.",
      "usage_notes": "Refers to the act of moving rhythmically to music."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch a movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Refers to the act of viewing a film."
    }
  },
  {
    "拍照": {
      "frequency": 4,
      "pinyin": "pāizhào",
      "translation": "Take photos",
      "example": "他喜欢拍照。",
      "example_translation": "He likes to take photos.",
      "usage_notes": "Refers to the act of capturing images with a camera."
    }
  },
  {
    "画画": {
      "frequency": 4,
      "pinyin": "huà huà",
      "translation": "Draw",
      "example": "他喜欢画画。",
      "example_translation": "He likes to draw.",
      "usage_notes": "Refers to the act of creating images with a pen, pencil, or crayon."
    }
  },
  {
    "摄影": {
      "frequency": 4,
      "pinyin": "shèyǐng",
      "translation": "Photography",
      "example": "他喜欢摄影。",
      "example_translation": "He likes photography.",
      "usage_notes": "Refers to the act of taking photographs."
    }
  },
  {
    "旅行": {
      "frequency": 5,
      "pinyin": "lǚxíng",
      "translation": "Travel",
      "example": "他们喜欢旅行。",
      "example_translation": "They like to travel.",
      "usage_notes": "Refers to the act of moving from one place to another, usually for leisure."
    }
  },
  {
    "登山": {
      "frequency": 4,
      "pinyin": "dēngshān",
      "translation": "Mountain climbing",
      "example": "他喜欢登山。",
      "example_translation": "He likes mountain climbing.",
      "usage_notes": "Refers to the act of climbing mountains."
    }
  },
  {
    "野餐": {
      "frequency": 4,
      "pinyin": "yěcān",
      "translation": "Picnic",
      "example": "我们去野餐吧。",
      "example_translation": "Let’s go for a picnic.",
      "usage_notes": "Refers to the act of eating outdoors."
    }
  },
  {
    "露营": {
      "frequency": 4,
      "pinyin": "lùyíng",
      "translation": "Camping",
      "example": "他们去露营了。",
      "example_translation": "They went camping.",
      "usage_notes": "Refers to the act of staying in a tent outdoors."
    }
  },
  {
    "游泳": {
      "frequency": 5,
      "pinyin": "yóuyǒng",
      "translation": "Swimming",
      "example": "她喜欢游泳。",
      "example_translation": "She likes swimming.",
      "usage_notes": "Refers to the act of moving through water."
    }
  },
  {
    "打球": {
      "frequency": 5,
      "pinyin": "dǎqiú",
      "translation": "Play ball",
      "example": "他喜欢打球。",
      "example_translation": "He likes to play ball.",
      "usage_notes": "Refers to the act of playing any kind of ball game."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of moving quickly on foot."
    }
  },
  {
    "骑车": {
      "frequency": 5,
      "pinyin": "qí chē",
      "translation": "Ride a bike",
      "example": "她喜欢骑车。",
      "example_translation": "She likes to ride a bike.",
      "usage_notes": "Refers to the act of riding a bicycle."
    }
  },
  {
    "做饭": {
      "frequency": 4,
      "pinyin": "zuòfàn",
      "translation": "Cook",
      "example": "他喜欢做饭。",
      "example_translation": "He likes to cook.",
      "usage_notes": "Refers to the act of preparing food."
    }
  },
  {
    "洗衣服": {
      "frequency": 4,
      "pinyin": "xǐ yīfu",
      "translation": "Do the laundry",
      "example": "她在洗衣服。",
      "example_translation": "She is doing the laundry.",
      "usage_notes": "Refers to the act of cleaning clothes."
    }
  },
  {
    "打扫": {
      "frequency": 4,
      "pinyin": "dǎsǎo",
      "translation": "Clean",
      "example": "他在打扫房间。",
      "example_translation": "He is cleaning the room.",
      "usage_notes": "Refers to the act of tidying up a place."
    }
  },
  {
    "遛狗": {
      "frequency": 4,
      "pinyin": "liúgǒu",
      "translation": "Walk the dog",
      "example": "他在遛狗。",
      "example_translation": "He is walking the dog.",
      "usage_notes": "Refers to the act of taking a dog for a walk."
    }
  },
  {
    "遛猫": {
      "frequency": 3,
      "pinyin": "liúmāo",
      "translation": "Walk the cat",
      "example": "他在遛猫。",
      "example_translation": "He is walking the cat.",
      "usage_notes": "Refers to the act of taking a cat for a walk."
    }
  },
  {
    "去商店": {
      "frequency": 4,
      "pinyin": "qù shāngdiàn",
      "translation": "Go to the store",
      "example": "我们去商店买东西。",
      "example_translation": "We are going to the store to buy things.",
      "usage_notes": "Refers to the act of visiting a store."
    }
  },
  {
    "购物": {
      "frequency": 4,
      "pinyin": "gòuwù",
      "translation": "Shopping",
      "example": "她喜欢购物。",
      "example_translation": "She likes shopping.",
      "usage_notes": "Refers to the act of buying items."
    }
  },
  {
    "买东西": {
      "frequency": 4,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我们去买东西吧。",
      "example_translation": "Let’s go buy things.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "付钱": {
      "frequency": 4,
      "pinyin": "fù qián",
      "translation": "Pay money",
      "example": "他在付钱。",
      "example_translation": "He is paying money.",
      "usage_notes": "Refers to the act of making a payment."
    }
  },
  {
    "找钱": {
      "frequency": 4,
      "pinyin": "zhǎo qián",
      "translation": "Give change",
      "example": "她在找钱。",
      "example_translation": "She is giving change.",
      "usage_notes": "Refers to the act of returning the difference in a transaction."
    }
  },
  {
    "等": {
      "frequency": 5,
      "pinyin": "děng",
      "translation": "Wait",
      "example": "请等一下。",
      "example_translation": "Please wait a moment.",
      "usage_notes": "Refers to the act of pausing for something or someone."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch a movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Refers to the act of viewing a film."
    }
  },
  {
    "看比赛": {
      "frequency": 4,
      "pinyin": "kàn bǐsài",
      "translation": "Watch a game",
      "example": "他喜欢看比赛。",
      "example_translation": "He likes to watch games.",
      "usage_notes": "Refers to the act of viewing a sports competition."
    }
  },
  {
    "吃晚饭": {
      "frequency": 4,
      "pinyin": "chī wǎnfàn",
      "translation": "Have dinner",
      "example": "我们一起吃晚饭吧。",
      "example_translation": "Let’s have dinner together.",
      "usage_notes": "Refers to the act of eating the evening meal."
    }
  },
  {
    "喝咖啡": {
      "frequency": 4,
      "pinyin": "hē kāfēi",
      "translation": "Drink coffee",
      "example": "他喜欢喝咖啡。",
      "example_translation": "He likes to drink coffee.",
      "usage_notes": "Refers to the act of consuming coffee."
    }
  },
  {
    "喝茶": {
      "frequency": 4,
      "pinyin": "hē chá",
      "translation": "Drink tea",
      "example": "她喜欢喝茶。",
      "example_translation": "She likes to drink tea.",
      "usage_notes": "Refers to the act of consuming tea."
    }
  },
  {
    "吃水果": {
      "frequency": 4,
      "pinyin": "chī shuǐguǒ",
      "translation": "Eat fruit",
      "example": "多吃水果对身体好。",
      "example_translation": "Eating more fruit is good for health.",
      "usage_notes": "Refers to the act of consuming fruits."
    }
  },
  {
    "吃蔬菜": {
      "frequency": 4,
      "pinyin": "chī shūcài",
      "translation": "Eat vegetables",
      "example": "多吃蔬菜对身体好。",
      "example_translation": "Eating more vegetables is good for health.",
      "usage_notes": "Refers to the act of consuming vegetables."
    }
  },
  {
    "做运动": {
      "frequency": 5,
      "pinyin": "zuò yùndòng",
      "translation": "Do exercise",
      "example": "我们一起做运动吧。",
      "example_translation": "Let’s do exercise together.",
      "usage_notes": "Refers to the act of engaging in physical activity."
    }
  },
  {
    "跑步机": {
      "frequency": 3,
      "pinyin": "pǎobù jī",
      "translation": "Treadmill",
      "example": "他在跑步机上跑步。",
      "example_translation": "He is running on the treadmill.",
      "usage_notes": "Refers to the exercise equipment used for running indoors."
    }
  },
  {
    "打电话": {
      "frequency": 5,
      "pinyin": "dǎ diànhuà",
      "translation": "Make a phone call",
      "example": "我给你打电话。",
      "example_translation": "I will call you.",
      "usage_notes": "Refers to the act of calling someone on the phone."
    }
  },
  {
    "发短信": {
      "frequency": 4,
      "pinyin": "fā duǎnxìn",
      "translation": "Send a text message",
      "example": "请给我发短信。",
      "example_translation": "Please send me a text message.",
      "usage_notes": "Refers to the act of sending a text message."
    }
  },
  {
    "写信": {
      "frequency": 4,
      "pinyin": "xiě xìn",
      "translation": "Write a letter",
      "example": "他在写信。",
      "example_translation": "He is writing a letter.",
      "usage_notes": "Refers to the act of composing a letter."
    }
  },
  {
    "邮寄": {
      "frequency": 4,
      "pinyin": "yóujì",
      "translation": "Mail",
      "example": "他在邮寄包裹。",
      "example_translation": "He is mailing a package.",
      "usage_notes": "Refers to the act of sending something by post."
    }
  },
  {
    "寄信": {
      "frequency": 4,
      "pinyin": "jì xìn",
      "translation": "Send a letter",
      "example": "请寄信给我。",
      "example_translation": "Please send me a letter.",
      "usage_notes": "Refers to the act of posting a letter."
    }
  },
  {
    "看报纸": {
      "frequency": 4,
      "pinyin": "kàn bàozhǐ",
      "translation": "Read the newspaper",
      "example": "他每天早上看报纸。",
      "example_translation": "He reads the newspaper every morning.",
      "usage_notes": "Refers to the act of reading a printed publication."
    }
  },
  {
    "玩游戏": {
      "frequency": 5,
      "pinyin": "wán yóuxì",
      "translation": "Play games",
      "example": "孩子们喜欢玩游戏。",
      "example_translation": "The children like to play games.",
      "usage_notes": "Refers to the act of engaging in games for fun."
    }
  },
  {
    "过节": {
      "frequency": 4,
      "pinyin": "guò jié",
      "translation": "Celebrate a festival",
      "example": "他们在过节。",
      "example_translation": "They are celebrating a festival.",
      "usage_notes": "Refers to the act of observing a festive occasion."
    }
  },
  {
    "过年": {
      "frequency": 4,
      "pinyin": "guò nián",
      "translation": "Celebrate New Year",
      "example": "我们一起过年吧。",
      "example_translation": "Let’s celebrate New Year together.",
      "usage_notes": "Refers to the act of celebrating the new year."
    }
  },
  {
    "生日": {
      "frequency": 5,
      "pinyin": "shēngrì",
      "translation": "Birthday",
      "example": "今天是我的生日。",
      "example_translation": "Today is my birthday.",
      "usage_notes": "Refers to the annual celebration of the date of one’s birth."
    }
  },
  {
    "礼物": {
      "frequency": 4,
      "pinyin": "lǐwù",
      "translation": "Gift",
      "example": "这是我的礼物。",
      "example_translation": "This is my gift.",
      "usage_notes": "Refers to an item given to someone without expecting payment."
    }
  },
  {
    "蛋糕": {
      "frequency": 4,
      "pinyin": "dàngāo",
      "translation": "Cake",
      "example": "她喜欢吃蛋糕。",
      "example_translation": "She likes to eat cake.",
      "usage_notes": "Refers to a sweet baked dessert."
    }
  },
  {
    "唱歌": {
      "frequency": 4,
      "pinyin": "chànggē",
      "translation": "Sing",
      "example": "她喜欢唱歌。",
      "example_translation": "She likes to sing.",
      "usage_notes": "Refers to the act of producing musical sounds with the voice."
    }
  },
  {
    "跳舞": {
      "frequency": 4,
      "pinyin": "tiàowǔ",
      "translation": "Dance",
      "example": "她喜欢跳舞。",
      "example_translation": "She likes to dance.",
      "usage_notes": "Refers to the act of moving rhythmically to music."
    }
  },
  {
    "拍照": {
      "frequency": 4,
      "pinyin": "pāizhào",
      "translation": "Take photos",
      "example": "他喜欢拍照。",
      "example_translation": "He likes to take photos.",
      "usage_notes": "Refers to the act of capturing images with a camera."
    }
  },
  {
    "画画": {
      "frequency": 4,
      "pinyin": "huà huà",
      "translation": "Draw",
      "example": "他喜欢画画。",
      "example_translation": "He likes to draw.",
      "usage_notes": "Refers to the act of creating images with a pen, pencil, or crayon."
    }
  },
  {
    "摄影": {
      "frequency": 4,
      "pinyin": "shèyǐng",
      "translation": "Photography",
      "example": "他喜欢摄影。",
      "example_translation": "He likes photography.",
      "usage_notes": "Refers to the act of taking photographs."
    }
  },
  {
    "旅行": {
      "frequency": 5,
      "pinyin": "lǚxíng",
      "translation": "Travel",
      "example": "他们喜欢旅行。",
      "example_translation": "They like to travel.",
      "usage_notes": "Refers to the act of moving from one place to another, usually for leisure."
    }
  },
  {
    "登山": {
      "frequency": 4,
      "pinyin": "dēngshān",
      "translation": "Mountain climbing",
      "example": "他喜欢登山。",
      "example_translation": "He likes mountain climbing.",
      "usage_notes": "Refers to the act of climbing mountains."
    }
  },
  {
    "野餐": {
      "frequency": 4,
      "pinyin": "yěcān",
      "translation": "Picnic",
      "example": "我们去野餐吧。",
      "example_translation": "Let’s go for a picnic.",
      "usage_notes": "Refers to the act of eating outdoors."
    }
  },
  {
    "露营": {
      "frequency": 4,
      "pinyin": "lùyíng",
      "translation": "Camping",
      "example": "他们去露营了。",
      "example_translation": "They went camping.",
      "usage_notes": "Refers to the act of staying in a tent outdoors."
    }
  },
  {
    "游泳": {
      "frequency": 5,
      "pinyin": "yóuyǒng",
      "translation": "Swimming",
      "example": "她喜欢游泳。",
      "example_translation": "She likes swimming.",
      "usage_notes": "Refers to the act of moving through water."
    }
  },
  {
    "打球": {
      "frequency": 5,
      "pinyin": "dǎqiú",
      "translation": "Play ball",
      "example": "他喜欢打球。",
      "example_translation": "He likes to play ball.",
      "usage_notes": "Refers to the act of playing any kind of ball game."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of moving quickly on foot."
    }
  },
  {
    "骑车": {
      "frequency": 5,
      "pinyin": "qí chē",
      "translation": "Ride a bike",
      "example": "她喜欢骑车。",
      "example_translation": "She likes to ride a bike.",
      "usage_notes": "Refers to the act of riding a bicycle."
    }
  },
  {
    "做饭": {
      "frequency": 4,
      "pinyin": "zuòfàn",
      "translation": "Cook",
      "example": "他喜欢做饭。",
      "example_translation": "He likes to cook.",
      "usage_notes": "Refers to the act of preparing food."
    }
  },
  {
    "洗衣服": {
      "frequency": 4,
      "pinyin": "xǐ yīfu",
      "translation": "Do the laundry",
      "example": "她在洗衣服。",
      "example_translation": "She is doing the laundry.",
      "usage_notes": "Refers to the act of cleaning clothes."
    }
  },
  {
    "打扫": {
      "frequency": 4,
      "pinyin": "dǎsǎo",
      "translation": "Clean",
      "example": "他在打扫房间。",
      "example_translation": "He is cleaning the room.",
      "usage_notes": "Refers to the act of tidying up a place."
    }
  },
  {
    "遛狗": {
      "frequency": 4,
      "pinyin": "liúgǒu",
      "translation": "Walk the dog",
      "example": "他在遛狗。",
      "example_translation": "He is walking the dog.",
      "usage_notes": "Refers to the act of taking a dog for a walk."
    }
  },
  {
    "遛猫": {
      "frequency": 3,
      "pinyin": "liúmāo",
      "translation": "Walk the cat",
      "example": "他在遛猫。",
      "example_translation": "He is walking the cat.",
      "usage_notes": "Refers to the act of taking a cat for a walk."
    }
  },
  {
    "去商店": {
      "frequency": 4,
      "pinyin": "qù shāngdiàn",
      "translation": "Go to the store",
      "example": "我们去商店买东西。",
      "example_translation": "We are going to the store to buy things.",
      "usage_notes": "Refers to the act of visiting a store."
    }
  },
  {
    "购物": {
      "frequency": 4,
      "pinyin": "gòuwù",
      "translation": "Shopping",
      "example": "她喜欢购物。",
      "example_translation": "She likes shopping.",
      "usage_notes": "Refers to the act of buying items."
    }
  },
  {
    "买东西": {
      "frequency": 4,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我们去买东西吧。",
      "example_translation": "Let’s go buy things.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "付钱": {
      "frequency": 4,
      "pinyin": "fù qián",
      "translation": "Pay money",
      "example": "他在付钱。",
      "example_translation": "He is paying money.",
      "usage_notes": "Refers to the act of making a payment."
    }
  },
  {
    "找钱": {
      "frequency": 4,
      "pinyin": "zhǎo qián",
      "translation": "Give change",
      "example": "她在找钱。",
      "example_translation": "She is giving change.",
      "usage_notes": "Refers to the act of returning the difference in a transaction."
    }
  },
  {
    "等": {
      "frequency": 5,
      "pinyin": "děng",
      "translation": "Wait",
      "example": "请等一下。",
      "example_translation": "Please wait a moment.",
      "usage_notes": "Refers to the act of pausing for something or someone."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch a movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Refers to the act of viewing a film."
    }
  },
  {
    "看比赛": {
      "frequency": 4,
      "pinyin": "kàn bǐsài",
      "translation": "Watch a game",
      "example": "他喜欢看比赛。",
      "example_translation": "He likes to watch games.",
      "usage_notes": "Refers to the act of viewing a sports competition."
    }
  },
  {
    "吃晚饭": {
      "frequency": 4,
      "pinyin": "chī wǎnfàn",
      "translation": "Have dinner",
      "example": "我们一起吃晚饭吧。",
      "example_translation": "Let’s have dinner together.",
      "usage_notes": "Refers to the act of eating the evening meal."
    }
  },
  {
    "喝咖啡": {
      "frequency": 4,
      "pinyin": "hē kāfēi",
      "translation": "Drink coffee",
      "example": "他喜欢喝咖啡。",
      "example_translation": "He likes to drink coffee.",
      "usage_notes": "Refers to the act of consuming coffee."
    }
  },
  {
    "喝茶": {
      "frequency": 4,
      "pinyin": "hē chá",
      "translation": "Drink tea",
      "example": "她喜欢喝茶。",
      "example_translation": "She likes to drink tea.",
      "usage_notes": "Refers to the act of consuming tea."
    }
  },
  {
    "吃水果": {
      "frequency": 4,
      "pinyin": "chī shuǐguǒ",
      "translation": "Eat fruit",
      "example": "多吃水果对身体好。",
      "example_translation": "Eating more fruit is good for health.",
      "usage_notes": "Refers to the act of consuming fruits."
    }
  },
  {
    "吃蔬菜": {
      "frequency": 4,
      "pinyin": "chī shūcài",
      "translation": "Eat vegetables",
      "example": "多吃蔬菜对身体好。",
      "example_translation": "Eating more vegetables is good for health.",
      "usage_notes": "Refers to the act of consuming vegetables."
    }
  },
  {
    "做运动": {
      "frequency": 5,
      "pinyin": "zuò yùndòng",
      "translation": "Do exercise",
      "example": "我们一起做运动吧。",
      "example_translation": "Let’s do exercise together.",
      "usage_notes": "Refers to the act of engaging in physical activity."
    }
  },
  {
    "跑步机": {
      "frequency": 3,
      "pinyin": "pǎobù jī",
      "translation": "Treadmill",
      "example": "他在跑步机上跑步。",
      "example_translation": "He is running on the treadmill.",
      "usage_notes": "Refers to the exercise equipment used for running indoors."
    }
  },
  {
    "打电话": {
      "frequency": 5,
      "pinyin": "dǎ diànhuà",
      "translation": "Make a phone call",
      "example": "我给你打电话。",
      "example_translation": "I will call you.",
      "usage_notes": "Refers to the act of calling someone on the phone."
    }
  },
  {
    "发短信": {
      "frequency": 4,
      "pinyin": "fā duǎnxìn",
      "translation": "Send a text message",
      "example": "请给我发短信。",
      "example_translation": "Please send me a text message.",
      "usage_notes": "Refers to the act of sending a text message."
    }
  },
  {
    "写信": {
      "frequency": 4,
      "pinyin": "xiě xìn",
      "translation": "Write a letter",
      "example": "他在写信。",
      "example_translation": "He is writing a letter.",
      "usage_notes": "Refers to the act of composing a letter."
    }
  },
  {
    "邮寄": {
      "frequency": 4,
      "pinyin": "yóujì",
      "translation": "Mail",
      "example": "他在邮寄包裹。",
      "example_translation": "He is mailing a package.",
      "usage_notes": "Refers to the act of sending something by post."
    }
  },
  {
    "寄信": {
      "frequency": 4,
      "pinyin": "jì xìn",
      "translation": "Send a letter",
      "example": "请寄信给我。",
      "example_translation": "Please send me a letter.",
      "usage_notes": "Refers to the act of posting a letter."
    }
  },
  {
    "看报纸": {
      "frequency": 4,
      "pinyin": "kàn bàozhǐ",
      "translation": "Read the newspaper",
      "example": "他每天早上看报纸。",
      "example_translation": "He reads the newspaper every morning.",
      "usage_notes": "Refers to the act of reading a printed publication."
    }
  },
  {
    "玩游戏": {
      "frequency": 5,
      "pinyin": "wán yóuxì",
      "translation": "Play games",
      "example": "孩子们喜欢玩游戏。",
      "example_translation": "The children like to play games.",
      "usage_notes": "Refers to the act of engaging in games for fun."
    }
  },
  {
    "过节": {
      "frequency": 4,
      "pinyin": "guò jié",
      "translation": "Celebrate a festival",
      "example": "他们在过节。",
      "example_translation": "They are celebrating a festival.",
      "usage_notes": "Refers to the act of observing a festive occasion."
    }
  },
  {
    "过年": {
      "frequency": 4,
      "pinyin": "guò nián",
      "translation": "Celebrate New Year",
      "example": "我们一起过年吧。",
      "example_translation": "Let’s celebrate New Year together.",
      "usage_notes": "Refers to the act of celebrating the new year."
    }
  },
  {
    "生日": {
      "frequency": 5,
      "pinyin": "shēngrì",
      "translation": "Birthday",
      "example": "今天是我的生日。",
      "example_translation": "Today is my birthday.",
      "usage_notes": "Refers to the annual celebration of the date of one’s birth."
    }
  },
  {
    "礼物": {
      "frequency": 4,
      "pinyin": "lǐwù",
      "translation": "Gift",
      "example": "这是我的礼物。",
      "example_translation": "This is my gift.",
      "usage_notes": "Refers to an item given to someone without expecting payment."
    }
  },
  {
    "蛋糕": {
      "frequency": 4,
      "pinyin": "dàngāo",
      "translation": "Cake",
      "example": "她喜欢吃蛋糕。",
      "example_translation": "She likes to eat cake.",
      "usage_notes": "Refers to a sweet baked dessert."
    }
  },
  {
    "唱歌": {
      "frequency": 4,
      "pinyin": "chànggē",
      "translation": "Sing",
      "example": "她喜欢唱歌。",
      "example_translation": "She likes to sing.",
      "usage_notes": "Refers to the act of producing musical sounds with the voice."
    }
  },
  {
    "跳舞": {
      "frequency": 4,
      "pinyin": "tiàowǔ",
      "translation": "Dance",
      "example": "她喜欢跳舞。",
      "example_translation": "She likes to dance.",
      "usage_notes": "Refers to the act of moving rhythmically to music."
    }
  },
  {
    "拍照": {
      "frequency": 4,
      "pinyin": "pāizhào",
      "translation": "Take photos",
      "example": "他喜欢拍照。",
      "example_translation": "He likes to take photos.",
      "usage_notes": "Refers to the act of capturing images with a camera."
    }
  },
  {
    "画画": {
      "frequency": 4,
      "pinyin": "huà huà",
      "translation": "Draw",
      "example": "他喜欢画画。",
      "example_translation": "He likes to draw.",
      "usage_notes": "Refers to the act of creating images with a pen, pencil, or crayon."
    }
  },
  {
    "摄影": {
      "frequency": 4,
      "pinyin": "shèyǐng",
      "translation": "Photography",
      "example": "他喜欢摄影。",
      "example_translation": "He likes photography.",
      "usage_notes": "Refers to the act of taking photographs."
    }
  },
  {
    "旅行": {
      "frequency": 5,
      "pinyin": "lǚxíng",
      "translation": "Travel",
      "example": "他们喜欢旅行。",
      "example_translation": "They like to travel.",
      "usage_notes": "Refers to the act of moving from one place to another, usually for leisure."
    }
  },
  {
    "登山": {
      "frequency": 4,
      "pinyin": "dēngshān",
      "translation": "Mountain climbing",
      "example": "他喜欢登山。",
      "example_translation": "He likes mountain climbing.",
      "usage_notes": "Refers to the act of climbing mountains."
    }
  },
  {
    "野餐": {
      "frequency": 4,
      "pinyin": "yěcān",
      "translation": "Picnic",
      "example": "我们去野餐吧。",
      "example_translation": "Let’s go for a picnic.",
      "usage_notes": "Refers to the act of eating outdoors."
    }
  },
  {
    "露营": {
      "frequency": 4,
      "pinyin": "lùyíng",
      "translation": "Camping",
      "example": "他们去露营了。",
      "example_translation": "They went camping.",
      "usage_notes": "Refers to the act of staying in a tent outdoors."
    }
  },
  {
    "游泳": {
      "frequency": 5,
      "pinyin": "yóuyǒng",
      "translation": "Swimming",
      "example": "她喜欢游泳。",
      "example_translation": "She likes swimming.",
      "usage_notes": "Refers to the act of moving through water."
    }
  },
  {
    "打球": {
      "frequency": 5,
      "pinyin": "dǎqiú",
      "translation": "Play ball",
      "example": "他喜欢打球。",
      "example_translation": "He likes to play ball.",
      "usage_notes": "Refers to the act of playing any kind of ball game."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of moving quickly on foot."
    }
  },
  {
    "骑车": {
      "frequency": 5,
      "pinyin": "qí chē",
      "translation": "Ride a bike",
      "example": "她喜欢骑车。",
      "example_translation": "She likes to ride a bike.",
      "usage_notes": "Refers to the act of riding a bicycle."
    }
  },
  {
    "做饭": {
      "frequency": 4,
      "pinyin": "zuòfàn",
      "translation": "Cook",
      "example": "他喜欢做饭。",
      "example_translation": "He likes to cook.",
      "usage_notes": "Refers to the act of preparing food."
    }
  },
  {
    "洗衣服": {
      "frequency": 4,
      "pinyin": "xǐ yīfu",
      "translation": "Do the laundry",
      "example": "她在洗衣服。",
      "example_translation": "She is doing the laundry.",
      "usage_notes": "Refers to the act of cleaning clothes."
    }
  },
  {
    "打扫": {
      "frequency": 4,
      "pinyin": "dǎsǎo",
      "translation": "Clean",
      "example": "他在打扫房间。",
      "example_translation": "He is cleaning the room.",
      "usage_notes": "Refers to the act of tidying up a place."
    }
  },
  {
    "遛狗": {
      "frequency": 4,
      "pinyin": "liúgǒu",
      "translation": "Walk the dog",
      "example": "他在遛狗。",
      "example_translation": "He is walking the dog.",
      "usage_notes": "Refers to the act of taking a dog for a walk."
    }
  },
  {
    "遛猫": {
      "frequency": 3,
      "pinyin": "liúmāo",
      "translation": "Walk the cat",
      "example": "他在遛猫。",
      "example_translation": "He is walking the cat.",
      "usage_notes": "Refers to the act of taking a cat for a walk."
    }
  },
  {
    "去商店": {
      "frequency": 4,
      "pinyin": "qù shāngdiàn",
      "translation": "Go to the store",
      "example": "我们去商店买东西。",
      "example_translation": "We are going to the store to buy things.",
      "usage_notes": "Refers to the act of visiting a store."
    }
  },
  {
    "购物": {
      "frequency": 4,
      "pinyin": "gòuwù",
      "translation": "Shopping",
      "example": "她喜欢购物。",
      "example_translation": "She likes shopping.",
      "usage_notes": "Refers to the act of buying items."
    }
  },
  {
    "买东西": {
      "frequency": 4,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我们去买东西吧。",
      "example_translation": "Let’s go buy things.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "付钱": {
      "frequency": 4,
      "pinyin": "fù qián",
      "translation": "Pay money",
      "example": "他在付钱。",
      "example_translation": "He is paying money.",
      "usage_notes": "Refers to the act of making a payment."
    }
  },
  {
    "找钱": {
      "frequency": 4,
      "pinyin": "zhǎo qián",
      "translation": "Give change",
      "example": "她在找钱。",
      "example_translation": "She is giving change.",
      "usage_notes": "Refers to the act of returning the difference in a transaction."
    }
  },
  {
    "等": {
      "frequency": 5,
      "pinyin": "děng",
      "translation": "Wait",
      "example": "请等一下。",
      "example_translation": "Please wait a moment.",
      "usage_notes": "Refers to the act of pausing for something or someone."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch a movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Refers to the act of viewing a film."
    }
  },
  {
    "看比赛": {
      "frequency": 4,
      "pinyin": "kàn bǐsài",
      "translation": "Watch a game",
      "example": "他喜欢看比赛。",
      "example_translation": "He likes to watch games.",
      "usage_notes": "Refers to the act of viewing a sports competition."
    }
  },
  {
    "吃晚饭": {
      "frequency": 4,
      "pinyin": "chī wǎnfàn",
      "translation": "Have dinner",
      "example": "我们一起吃晚饭吧。",
      "example_translation": "Let’s have dinner together.",
      "usage_notes": "Refers to the act of eating the evening meal."
    }
  },
  {
    "喝咖啡": {
      "frequency": 4,
      "pinyin": "hē kāfēi",
      "translation": "Drink coffee",
      "example": "他喜欢喝咖啡。",
      "example_translation": "He likes to drink coffee.",
      "usage_notes": "Refers to the act of consuming coffee."
    }
  },
  {
    "喝茶": {
      "frequency": 4,
      "pinyin": "hē chá",
      "translation": "Drink tea",
      "example": "她喜欢喝茶。",
      "example_translation": "She likes to drink tea.",
      "usage_notes": "Refers to the act of consuming tea."
    }
  },
  {
    "吃水果": {
      "frequency": 4,
      "pinyin": "chī shuǐguǒ",
      "translation": "Eat fruit",
      "example": "多吃水果对身体好。",
      "example_translation": "Eating more fruit is good for health.",
      "usage_notes": "Refers to the act of consuming fruits."
    }
  },
  {
    "吃蔬菜": {
      "frequency": 4,
      "pinyin": "chī shūcài",
      "translation": "Eat vegetables",
      "example": "多吃蔬菜对身体好。",
      "example_translation": "Eating more vegetables is good for health.",
      "usage_notes": "Refers to the act of consuming vegetables."
    }
  },
  {
    "做运动": {
      "frequency": 5,
      "pinyin": "zuò yùndòng",
      "translation": "Do exercise",
      "example": "我们一起做运动吧。",
      "example_translation": "Let’s do exercise together.",
      "usage_notes": "Refers to the act of engaging in physical activity."
    }
  },
  {
    "跑步机": {
      "frequency": 3,
      "pinyin": "pǎobù jī",
      "translation": "Treadmill",
      "example": "他在跑步机上跑步。",
      "example_translation": "He is running on the treadmill.",
      "usage_notes": "Refers to the exercise equipment used for running indoors."
    }
  },
  {
    "打电话": {
      "frequency": 5,
      "pinyin": "dǎ diànhuà",
      "translation": "Make a phone call",
      "example": "我给你打电话。",
      "example_translation": "I will call you.",
      "usage_notes": "Refers to the act of calling someone on the phone."
    }
  },
  {
    "发短信": {
      "frequency": 4,
      "pinyin": "fā duǎnxìn",
      "translation": "Send a text message",
      "example": "请给我发短信。",
      "example_translation": "Please send me a text message.",
      "usage_notes": "Refers to the act of sending a text message."
    }
  },
  {
    "写信": {
      "frequency": 4,
      "pinyin": "xiě xìn",
      "translation": "Write a letter",
      "example": "他在写信。",
      "example_translation": "He is writing a letter.",
      "usage_notes": "Refers to the act of composing a letter."
    }
  },
  {
    "邮寄": {
      "frequency": 4,
      "pinyin": "yóujì",
      "translation": "Mail",
      "example": "他在邮寄包裹。",
      "example_translation": "He is mailing a package.",
      "usage_notes": "Refers to the act of sending something by post."
    }
  },
  {
    "寄信": {
      "frequency": 4,
      "pinyin": "jì xìn",
      "translation": "Send a letter",
      "example": "请寄信给我。",
      "example_translation": "Please send me a letter.",
      "usage_notes": "Refers to the act of posting a letter."
    }
  },
  {
    "看报纸": {
      "frequency": 4,
      "pinyin": "kàn bàozhǐ",
      "translation": "Read the newspaper",
      "example": "他每天早上看报纸。",
      "example_translation": "He reads the newspaper every morning.",
      "usage_notes": "Refers to the act of reading a printed publication."
    }
  },
  {
    "玩游戏": {
      "frequency": 5,
      "pinyin": "wán yóuxì",
      "translation": "Play games",
      "example": "孩子们喜欢玩游戏。",
      "example_translation": "The children like to play games.",
      "usage_notes": "Refers to the act of engaging in games for fun."
    }
  },
  {
    "过节": {
      "frequency": 4,
      "pinyin": "guò jié",
      "translation": "Celebrate a festival",
      "example": "他们在过节。",
      "example_translation": "They are celebrating a festival.",
      "usage_notes": "Refers to the act of observing a festive occasion."
    }
  },
  {
    "过年": {
      "frequency": 4,
      "pinyin": "guò nián",
      "translation": "Celebrate New Year",
      "example": "我们一起过年吧。",
      "example_translation": "Let’s celebrate New Year together.",
      "usage_notes": "Refers to the act of celebrating the new year."
    }
  },
  {
    "生日": {
      "frequency": 5,
      "pinyin": "shēngrì",
      "translation": "Birthday",
      "example": "今天是我的生日。",
      "example_translation": "Today is my birthday.",
      "usage_notes": "Refers to the annual celebration of the date of one’s birth."
    }
  },
  {
    "礼物": {
      "frequency": 4,
      "pinyin": "lǐwù",
      "translation": "Gift",
      "example": "这是我的礼物。",
      "example_translation": "This is my gift.",
      "usage_notes": "Refers to an item given to someone without expecting payment."
    }
  },
  {
    "蛋糕": {
      "frequency": 4,
      "pinyin": "dàngāo",
      "translation": "Cake",
      "example": "她喜欢吃蛋糕。",
      "example_translation": "She likes to eat cake.",
      "usage_notes": "Refers to a sweet baked dessert."
    }
  },
  {
    "唱歌": {
      "frequency": 4,
      "pinyin": "chànggē",
      "translation": "Sing",
      "example": "她喜欢唱歌。",
      "example_translation": "She likes to sing.",
      "usage_notes": "Refers to the act of producing musical sounds with the voice."
    }
  },
  {
    "跳舞": {
      "frequency": 4,
      "pinyin": "tiàowǔ",
      "translation": "Dance",
      "example": "她喜欢跳舞。",
      "example_translation": "She likes to dance.",
      "usage_notes": "Refers to the act of moving rhythmically to music."
    }
  },
  {
    "拍照": {
      "frequency": 4,
      "pinyin": "pāizhào",
      "translation": "Take photos",
      "example": "他喜欢拍照。",
      "example_translation": "He likes to take photos.",
      "usage_notes": "Refers to the act of capturing images with a camera."
    }
  },
  {
    "画画": {
      "frequency": 4,
      "pinyin": "huà huà",
      "translation": "Draw",
      "example": "他喜欢画画。",
      "example_translation": "He likes to draw.",
      "usage_notes": "Refers to the act of creating images with a pen, pencil, or crayon."
    }
  },
  {
    "摄影": {
      "frequency": 4,
      "pinyin": "shèyǐng",
      "translation": "Photography",
      "example": "他喜欢摄影。",
      "example_translation": "He likes photography.",
      "usage_notes": "Refers to the act of taking photographs."
    }
  },
  {
    "旅行": {
      "frequency": 5,
      "pinyin": "lǚxíng",
      "translation": "Travel",
      "example": "他们喜欢旅行。",
      "example_translation": "They like to travel.",
      "usage_notes": "Refers to the act of moving from one place to another, usually for leisure."
    }
  },
  {
    "登山": {
      "frequency": 4,
      "pinyin": "dēngshān",
      "translation": "Mountain climbing",
      "example": "他喜欢登山。",
      "example_translation": "He likes mountain climbing.",
      "usage_notes": "Refers to the act of climbing mountains."
    }
  },
  {
    "野餐": {
      "frequency": 4,
      "pinyin": "yěcān",
      "translation": "Picnic",
      "example": "我们去野餐吧。",
      "example_translation": "Let’s go for a picnic.",
      "usage_notes": "Refers to the act of eating outdoors."
    }
  },
  {
    "露营": {
      "frequency": 4,
      "pinyin": "lùyíng",
      "translation": "Camping",
      "example": "他们去露营了。",
      "example_translation": "They went camping.",
      "usage_notes": "Refers to the act of staying in a tent outdoors."
    }
  },
  {
    "游泳": {
      "frequency": 5,
      "pinyin": "yóuyǒng",
      "translation": "Swimming",
      "example": "她喜欢游泳。",
      "example_translation": "She likes swimming.",
      "usage_notes": "Refers to the act of moving through water."
    }
  },
  {
    "打球": {
      "frequency": 5,
      "pinyin": "dǎqiú",
      "translation": "Play ball",
      "example": "他喜欢打球。",
      "example_translation": "He likes to play ball.",
      "usage_notes": "Refers to the act of playing any kind of ball game."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of moving quickly on foot."
    }
  },
  {
    "骑车": {
      "frequency": 5,
      "pinyin": "qí chē",
      "translation": "Ride a bike",
      "example": "她喜欢骑车。",
      "example_translation": "She likes to ride a bike.",
      "usage_notes": "Refers to the act of riding a bicycle."
    }
  },
  {
    "做饭": {
      "frequency": 4,
      "pinyin": "zuòfàn",
      "translation": "Cook",
      "example": "他喜欢做饭。",
      "example_translation": "He likes to cook.",
      "usage_notes": "Refers to the act of preparing food."
    }
  },
  {
    "洗衣服": {
      "frequency": 4,
      "pinyin": "xǐ yīfu",
      "translation": "Do the laundry",
      "example": "她在洗衣服。",
      "example_translation": "She is doing the laundry.",
      "usage_notes": "Refers to the act of cleaning clothes."
    }
  },
  {
    "打扫": {
      "frequency": 4,
      "pinyin": "dǎsǎo",
      "translation": "Clean",
      "example": "他在打扫房间。",
      "example_translation": "He is cleaning the room.",
      "usage_notes": "Refers to the act of tidying up a place."
    }
  },
  {
    "遛狗": {
      "frequency": 4,
      "pinyin": "liúgǒu",
      "translation": "Walk the dog",
      "example": "他在遛狗。",
      "example_translation": "He is walking the dog.",
      "usage_notes": "Refers to the act of taking a dog for a walk."
    }
  },
  {
    "遛猫": {
      "frequency": 3,
      "pinyin": "liúmāo",
      "translation": "Walk the cat",
      "example": "他在遛猫。",
      "example_translation": "He is walking the cat.",
      "usage_notes": "Refers to the act of taking a cat for a walk."
    }
  },
  {
    "去商店": {
      "frequency": 4,
      "pinyin": "qù shāngdiàn",
      "translation": "Go to the store",
      "example": "我们去商店买东西。",
      "example_translation": "We are going to the store to buy things.",
      "usage_notes": "Refers to the act of visiting a store."
    }
  },
  {
    "购物": {
      "frequency": 4,
      "pinyin": "gòuwù",
      "translation": "Shopping",
      "example": "她喜欢购物。",
      "example_translation": "She likes shopping.",
      "usage_notes": "Refers to the act of buying items."
    }
  },
  {
    "买东西": {
      "frequency": 4,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我们去买东西吧。",
      "example_translation": "Let’s go buy things.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "付钱": {
      "frequency": 4,
      "pinyin": "fù qián",
      "translation": "Pay money",
      "example": "他在付钱。",
      "example_translation": "He is paying money.",
      "usage_notes": "Refers to the act of making a payment."
    }
  },
  {
    "找钱": {
      "frequency": 4,
      "pinyin": "zhǎo qián",
      "translation": "Give change",
      "example": "她在找钱。",
      "example_translation": "She is giving change.",
      "usage_notes": "Refers to the act of returning the difference in a transaction."
    }
  },
  {
    "等": {
      "frequency": 5,
      "pinyin": "děng",
      "translation": "Wait",
      "example": "请等一下。",
      "example_translation": "Please wait a moment.",
      "usage_notes": "Refers to the act of pausing for something or someone."
    }
  },
  {
    "看电影": {
      "frequency": 5,
      "pinyin": "kàn diànyǐng",
      "translation": "Watch a movie",
      "example": "我们去看电影吧。",
      "example_translation": "Let’s go watch a movie.",
      "usage_notes": "Refers to the act of viewing a film."
    }
  },
  {
    "看比赛": {
      "frequency": 4,
      "pinyin": "kàn bǐsài",
      "translation": "Watch a game",
      "example": "他喜欢看比赛。",
      "example_translation": "He likes to watch games.",
      "usage_notes": "Refers to the act of viewing a sports competition."
    }
  },
  {
    "吃晚饭": {
      "frequency": 4,
      "pinyin": "chī wǎnfàn",
      "translation": "Have dinner",
      "example": "我们一起吃晚饭吧。",
      "example_translation": "Let’s have dinner together.",
      "usage_notes": "Refers to the act of eating the evening meal."
    }
  },
  {
    "喝咖啡": {
      "frequency": 4,
      "pinyin": "hē kāfēi",
      "translation": "Drink coffee",
      "example": "他喜欢喝咖啡。",
      "example_translation": "He likes to drink coffee.",
      "usage_notes": "Refers to the act of consuming coffee."
    }
  },
  {
    "喝茶": {
      "frequency": 4,
      "pinyin": "hē chá",
      "translation": "Drink tea",
      "example": "她喜欢喝茶。",
      "example_translation": "She likes to drink tea.",
      "usage_notes": "Refers to the act of consuming tea."
    }
  },
  {
    "吃水果": {
      "frequency": 4,
      "pinyin": "chī shuǐguǒ",
      "translation": "Eat fruit",
      "example": "多吃水果对身体好。",
      "example_translation": "Eating more fruit is good for health.",
      "usage_notes": "Refers to the act of consuming fruits."
    }
  },
  {
    "吃蔬菜": {
      "frequency": 4,
      "pinyin": "chī shūcài",
      "translation": "Eat vegetables",
      "example": "多吃蔬菜对身体好。",
      "example_translation": "Eating more vegetables is good for health.",
      "usage_notes": "Refers to the act of consuming vegetables."
    }
  },
  {
    "做运动": {
      "frequency": 5,
      "pinyin": "zuò yùndòng",
      "translation": "Do exercise",
      "example": "我们一起做运动吧。",
      "example_translation": "Let’s do exercise together.",
      "usage_notes": "Refers to the act of engaging in physical activity."
    }
  },
  {
    "跑步机": {
      "frequency": 3,
      "pinyin": "pǎobù jī",
      "translation": "Treadmill",
      "example": "他在跑步机上跑步。",
      "example_translation": "He is running on the treadmill.",
      "usage_notes": "Refers to the exercise equipment used for running indoors."
    }
  },
  {
    "打电话": {
      "frequency": 5,
      "pinyin": "dǎ diànhuà",
      "translation": "Make a phone call",
      "example": "我给你打电话。",
      "example_translation": "I will call you.",
      "usage_notes": "Refers to the act of calling someone on the phone."
    }
  },
  {
    "发短信": {
      "frequency": 4,
      "pinyin": "fā duǎnxìn",
      "translation": "Send a text message",
      "example": "请给我发短信。",
      "example_translation": "Please send me a text message.",
      "usage_notes": "Refers to the act of sending a text message."
    }
  },
  {
    "写信": {
      "frequency": 4,
      "pinyin": "xiě xìn",
      "translation": "Write a letter",
      "example": "他在写信。",
      "example_translation": "He is writing a letter.",
      "usage_notes": "Refers to the act of composing a letter."
    }
  },
  {
    "邮寄": {
      "frequency": 4,
      "pinyin": "yóujì",
      "translation": "Mail",
      "example": "他在邮寄包裹。",
      "example_translation": "He is mailing a package.",
      "usage_notes": "Refers to the act of sending something by post."
    }
  },
  {
    "寄信": {
      "frequency": 4,
      "pinyin": "jì xìn",
      "translation": "Send a letter",
      "example": "请寄信给我。",
      "example_translation": "Please send me a letter.",
      "usage_notes": "Refers to the act of posting a letter."
    }
  },
  {
    "看报纸": {
      "frequency": 4,
      "pinyin": "kàn bàozhǐ",
      "translation": "Read the newspaper",
      "example": "他每天早上看报纸。",
      "example_translation": "He reads the newspaper every morning.",
      "usage_notes": "Refers to the act of reading a printed publication."
    }
  },
  {
    "玩游戏": {
      "frequency": 5,
      "pinyin": "wán yóuxì",
      "translation": "Play games",
      "example": "孩子们喜欢玩游戏。",
      "example_translation": "The children like to play games.",
      "usage_notes": "Refers to the act of engaging in games for fun."
    }
  },
  {
    "过节": {
      "frequency": 4,
      "pinyin": "guò jié",
      "translation": "Celebrate a festival",
      "example": "他们在过节。",
      "example_translation": "They are celebrating a festival.",
      "usage_notes": "Refers to the act of observing a festive occasion."
    }
  },
  {
    "过年": {
      "frequency": 4,
      "pinyin": "guò nián",
      "translation": "Celebrate New Year",
      "example": "我们一起过年吧。",
      "example_translation": "Let’s celebrate New Year together.",
      "usage_notes": "Refers to the act of celebrating the new year."
    }
  },
  {
    "生日": {
      "frequency": 5,
      "pinyin": "shēngrì",
      "translation": "Birthday",
      "example": "今天是我的生日。",
      "example_translation": "Today is my birthday.",
      "usage_notes": "Refers to the annual celebration of the date of one’s birth."
    }
  },
  {
    "礼物": {
      "frequency": 4,
      "pinyin": "lǐwù",
      "translation": "Gift",
      "example": "这是我的礼物。",
      "example_translation": "This is my gift.",
      "usage_notes": "Refers to an item given to someone without expecting payment."
    }
  },
  {
    "蛋糕": {
      "frequency": 4,
      "pinyin": "dàngāo",
      "translation": "Cake",
      "example": "她喜欢吃蛋糕。",
      "example_translation": "She likes to eat cake.",
      "usage_notes": "Refers to a sweet baked dessert."
    }
  },
  {
    "唱歌": {
      "frequency": 4,
      "pinyin": "chànggē",
      "translation": "Sing",
      "example": "她喜欢唱歌。",
      "example_translation": "She likes to sing.",
      "usage_notes": "Refers to the act of producing musical sounds with the voice."
    }
  },
  {
    "跳舞": {
      "frequency": 4,
      "pinyin": "tiàowǔ",
      "translation": "Dance",
      "example": "她喜欢跳舞。",
      "example_translation": "She likes to dance.",
      "usage_notes": "Refers to the act of moving rhythmically to music."
    }
  },
  {
    "拍照": {
      "frequency": 4,
      "pinyin": "pāizhào",
      "translation": "Take photos",
      "example": "他喜欢拍照。",
      "example_translation": "He likes to take photos.",
      "usage_notes": "Refers to the act of capturing images with a camera."
    }
  },
  {
    "画画": {
      "frequency": 4,
      "pinyin": "huà huà",
      "translation": "Draw",
      "example": "他喜欢画画。",
      "example_translation": "He likes to draw.",
      "usage_notes": "Refers to the act of creating images with a pen, pencil, or crayon."
    }
  },
  {
    "摄影": {
      "frequency": 4,
      "pinyin": "shèyǐng",
      "translation": "Photography",
      "example": "他喜欢摄影。",
      "example_translation": "He likes photography.",
      "usage_notes": "Refers to the act of taking photographs."
    }
  },
  {
    "旅行": {
      "frequency": 5,
      "pinyin": "lǚxíng",
      "translation": "Travel",
      "example": "他们喜欢旅行。",
      "example_translation": "They like to travel.",
      "usage_notes": "Refers to the act of moving from one place to another, usually for leisure."
    }
  },
  {
    "登山": {
      "frequency": 4,
      "pinyin": "dēngshān",
      "translation": "Mountain climbing",
      "example": "他喜欢登山。",
      "example_translation": "He likes mountain climbing.",
      "usage_notes": "Refers to the act of climbing mountains."
    }
  },
  {
    "野餐": {
      "frequency": 4,
      "pinyin": "yěcān",
      "translation": "Picnic",
      "example": "我们去野餐吧。",
      "example_translation": "Let’s go for a picnic.",
      "usage_notes": "Refers to the act of eating outdoors."
    }
  },
  {
    "露营": {
      "frequency": 4,
      "pinyin": "lùyíng",
      "translation": "Camping",
      "example": "他们去露营了。",
      "example_translation": "They went camping.",
      "usage_notes": "Refers to the act of staying in a tent outdoors."
    }
  },
  {
    "游泳": {
      "frequency": 5,
      "pinyin": "yóuyǒng",
      "translation": "Swimming",
      "example": "她喜欢游泳。",
      "example_translation": "She likes swimming.",
      "usage_notes": "Refers to the act of moving through water."
    }
  },
  {
    "打球": {
      "frequency": 5,
      "pinyin": "dǎqiú",
      "translation": "Play ball",
      "example": "他喜欢打球。",
      "example_translation": "He likes to play ball.",
      "usage_notes": "Refers to the act of playing any kind of ball game."
    }
  },
  {
    "跑步": {
      "frequency": 5,
      "pinyin": "pǎobù",
      "translation": "Run",
      "example": "他喜欢跑步。",
      "example_translation": "He likes to run.",
      "usage_notes": "Refers to the act of moving quickly on foot."
    }
  },
  {
    "骑车": {
      "frequency": 5,
      "pinyin": "qí chē",
      "translation": "Ride a bike",
      "example": "她喜欢骑车。",
      "example_translation": "She likes to ride a bike.",
      "usage_notes": "Refers to the act of riding a bicycle."
    }
  },
  {
    "做饭": {
      "frequency": 4,
      "pinyin": "zuòfàn",
      "translation": "Cook",
      "example": "他喜欢做饭。",
      "example_translation": "He likes to cook.",
      "usage_notes": "Refers to the act of preparing food."
    }
  },
  {
    "洗衣服": {
      "frequency": 4,
      "pinyin": "xǐ yīfu",
      "translation": "Do the laundry",
      "example": "她在洗衣服。",
      "example_translation": "She is doing the laundry.",
      "usage_notes": "Refers to the act of cleaning clothes."
    }
  },
  {
    "打扫": {
      "frequency": 4,
      "pinyin": "dǎsǎo",
      "translation": "Clean",
      "example": "他在打扫房间。",
      "example_translation": "He is cleaning the room.",
      "usage_notes": "Refers to the act of tidying up a place."
    }
  },
  {
    "遛狗": {
      "frequency": 4,
      "pinyin": "liúgǒu",
      "translation": "Walk the dog",
      "example": "他在遛狗。",
      "example_translation": "He is walking the dog.",
      "usage_notes": "Refers to the act of taking a dog for a walk."
    }
  },
  {
    "遛猫": {
      "frequency": 3,
      "pinyin": "liúmāo",
      "translation": "Walk the cat",
      "example": "他在遛猫。",
      "example_translation": "He is walking the cat.",
      "usage_notes": "Refers to the act of taking a cat for a walk."
    }
  },
  {
    "去商店": {
      "frequency": 4,
      "pinyin": "qù shāngdiàn",
      "translation": "Go to the store",
      "example": "我们去商店买东西。",
      "example_translation": "We are going to the store to buy things.",
      "usage_notes": "Refers to the act of visiting a store."
    }
  },
  {
    "购物": {
      "frequency": 4,
      "pinyin": "gòuwù",
      "translation": "Shopping",
      "example": "她喜欢购物。",
      "example_translation": "She likes shopping.",
      "usage_notes": "Refers to the act of buying items."
    }
  },
  {
    "买东西": {
      "frequency": 4,
      "pinyin": "mǎi dōngxi",
      "translation": "Buy things",
      "example": "我们去买东西吧。",
      "example_translation": "Let’s go buy things.",
      "usage_notes": "Refers to the act of purchasing items."
    }
  },
  {
    "付钱": {
      "frequency": 4,
      "pinyin": "fù qián",
      "translation": "Pay money",
      "example": "他在付钱。",
      "example_translation": "He is paying money.",
      "usage_notes": "Refers to the act of making a payment."
    }
  },
  {
    "找钱": {
      "frequency": 4,
      "pinyin": "zhǎo qián",
      "translation": "Give change",
      "example": "她在找钱。",
      "example_translation": "She is giving change.",
      "usage_notes": "Refers to the act of returning the difference in a transaction."
    }
  },
  {
    "等": {
      "frequency": 5,
      "pinyin": "děng",
      "translation": "Wait",
      "example": "请等一下。",
      "example_translation": "Please wait a moment.",
      "usage_notes": "Refers to the act of pausing for something or someone."
    }
  },
  {
    "百闻不如一见": {
      "frequency": 5,
      "pinyin": "bǎi wén bù rú yī jiàn",
      "translation": "Seeing is believing",
      "example": "百闻不如一见，自己去看看吧。",
      "example_translation": "Seeing is believing; go see it for yourself.",
      "usage_notes": "Emphasizes that seeing something in person is more reliable than hearing about it many times."
    }
  },
  {
    "功夫不负有心人": {
      "frequency": 5,
      "pinyin": "gōngfū bù fù yǒuxīn rén",
      "translation": "Hard work pays off",
      "example": "只要你努力，功夫不负有心人。",
      "example_translation": "As long as you work hard, hard work will pay off.",
      "usage_notes": "Encourages perseverance and hard work."
    }
  },
  {
    "一寸光阴一寸金": {
      "frequency": 5,
      "pinyin": "yī cùn guāngyīn yī cùn jīn",
      "translation": "Time is money",
      "example": "一寸光阴一寸金，时间就是财富。",
      "example_translation": "Time is money; time is wealth.",
      "usage_notes": "Stresses the value of time and the importance of not wasting it."
    }
  },
  {
    "不入虎穴焉得虎子": {
      "frequency": 4,
      "pinyin": "bù rù hǔ xué yān dé hǔ zǐ",
      "translation": "Nothing ventured, nothing gained",
      "example": "想要成功，不入虎穴焉得虎子。",
      "example_translation": "If you want to succeed, nothing ventured, nothing gained.",
      "usage_notes": "Encourages taking risks to achieve success."
    }
  },
  {
    "滴水穿石": {
      "frequency": 4,
      "pinyin": "dī shuǐ chuān shí",
      "translation": "Dripping water penetrates stone",
      "example": "滴水穿石，持之以恒才能成功。",
      "example_translation": "Dripping water penetrates stone; perseverance leads to success.",
      "usage_notes": "Highlights the importance of persistence."
    }
  },
  {
    "早起的鸟儿有虫吃": {
      "frequency": 4,
      "pinyin": "zǎo qǐ de niǎo ér yǒu chóng chī",
      "translation": "The early bird catches the worm",
      "example": "早起的鸟儿有虫吃，早起才能有更多机会。",
      "example_translation": "The early bird catches the worm; waking up early gives you more opportunities.",
      "usage_notes": "Emphasizes the benefits of starting early."
    }
  },
  {
    "近朱者赤，近墨者黑": {
      "frequency": 4,
      "pinyin": "jìn zhū zhě chì, jìn mò zhě hēi",
      "translation": "You are who you associate with",
      "example": "近朱者赤，近墨者黑，所以要慎重交友。",
      "example_translation": "You are who you associate with, so choose your friends wisely.",
      "usage_notes": "Advises to choose companions carefully as they influence you."
    }
  },
  {
    "读万卷书，行万里路": {
      "frequency": 4,
      "pinyin": "dú wàn juǎn shū, xíng wàn lǐ lù",
      "translation": "Read ten thousand books and travel ten thousand miles",
      "example": "读万卷书，行万里路，才能增长见识。",
      "example_translation": "Reading ten thousand books and traveling ten thousand miles will broaden your knowledge.",
      "usage_notes": "Encourages both studying and experiencing the world for a well-rounded education."
    }
  },
  {
    "师傅领进门，修行在个人": {
      "frequency": 4,
      "pinyin": "shīfu lǐng jìn mén, xiū xíng zài gèrén",
      "translation": "A master can only lead you to the door, the rest is up to you",
      "example": "师傅领进门，修行在个人，自己要努力学习。",
      "example_translation": "A master can only lead you to the door, the rest is up to you, you must work hard on your own.",
      "usage_notes": "Highlights the importance of personal effort and initiative."
    }
  },
  {
    "塞翁失马，焉知非福": {
      "frequency": 4,
      "pinyin": "sài wēng shī mǎ, yān zhī fēi fú",
      "translation": "A blessing in disguise",
      "example": "塞翁失马，焉知非福，有些坏事可能是好事的开始。",
      "example_translation": "A blessing in disguise; some bad things might be the beginning of something good.",
      "usage_notes": "Suggests that apparent misfortune might be a blessing in disguise."
    }
  },
  {
    "一箭双雕": {
      "frequency": 4,
      "pinyin": "yī jiàn shuāng diāo",
      "translation": "Kill two birds with one stone",
      "example": "这次旅行不仅放松了心情，还增长了见识，真是一箭双雕。",
      "example_translation": "This trip not only relaxed me but also broadened my knowledge, truly killing two birds with one stone.",
      "usage_notes": "Describes achieving two things with a single action."
    }
  },
  {
    "远亲不如近邻": {
      "frequency": 4,
      "pinyin": "yuǎn qīn bù rú jìn lín",
      "translation": "A distant relative is not as helpful as a near neighbor",
      "example": "远亲不如近邻，有好邻居很重要。",
      "example_translation": "A distant relative is not as helpful as a near neighbor; having good neighbors is important.",
      "usage_notes": "Emphasizes the value of good neighbors and community support."
    }
  },
  {
    "千里之行，始于足下": {
      "frequency": 4,
      "pinyin": "qiān lǐ zhī xíng, shǐ yú zú xià",
      "translation": "A journey of a thousand miles begins with a single step",
      "example": "千里之行，始于足下，每一步都很重要。",
      "example_translation": "A journey of a thousand miles begins with a single step; every step is important.",
      "usage_notes": "Encourages starting a long journey or big task with a small, manageable step."
    }
  },
  {
    "三人行，必有我师": {
      "frequency": 4,
      "pinyin": "sān rén xíng, bì yǒu wǒ shī",
      "translation": "In a group of three, one can always learn something",
      "example": "三人行，必有我师，大家都有值得学习的地方。",
      "example_translation": "In a group of three, one can always learn something; everyone has something worth learning.",
      "usage_notes": "Highlights the idea that one can learn from others."
    }
  },
  {
    "入乡随俗": {
      "frequency": 4,
      "pinyin": "rù xiāng suí sú",
      "translation": "When in Rome, do as the Romans do",
      "example": "在国外生活，要入乡随俗，尊重当地的习惯。",
      "example_translation": "When living abroad, you should do as the Romans do and respect the local customs.",
      "usage_notes": "Encourages adapting to local customs and practices when in a different place."
    }
  },
  {
    "你好吗？": {
      "frequency": 10,
      "pinyin": "nǐ hǎo ma?",
      "translation": "How are you?",
      "example": "你好吗？我很久没见你了。",
      "example_translation": "How are you? I haven’t seen you for a long time.",
      "usage_notes": "Common greeting in casual conversation."
    }
  },
  {
    "我很好，谢谢。": {
      "frequency": 10,
      "pinyin": "wǒ hěn hǎo, xièxie.",
      "translation": "I am fine, thank you.",
      "example": "我很好，谢谢。你呢？",
      "example_translation": "I am fine, thank you. How about you?",
      "usage_notes": "Standard response to “How are you?”."
    }
  },
  {
    "你叫什么名字？": {
      "frequency": 9,
      "pinyin": "nǐ jiào shénme míngzi?",
      "translation": "What is your name?",
      "example": "你叫什么名字？",
      "example_translation": "What is your name?",
      "usage_notes": "Used to ask someone’s name."
    }
  },
  {
    "我叫李华。": {
      "frequency": 9,
      "pinyin": "wǒ jiào Lǐ Huá.",
      "translation": "My name is Li Hua.",
      "example": "我叫李华，很高兴认识你。",
      "example_translation": "My name is Li Hua. Nice to meet you.",
      "usage_notes": "Response to someone asking your name."
    }
  },
  {
    "请问洗手间在哪？": {
      "frequency": 8,
      "pinyin": "qǐng wèn xǐshǒujiān zài nǎ?",
      "translation": "Excuse me, where is the bathroom?",
      "example": "请问洗手间在哪？",
      "example_translation": "Excuse me, where is the bathroom?",
      "usage_notes": "Polite way to ask for the location of the bathroom."
    }
  },
  {
    "谢谢你的帮助。": {
      "frequency": 8,
      "pinyin": "xièxie nǐ de bāngzhù.",
      "translation": "Thank you for your help.",
      "example": "谢谢你的帮助。",
      "example_translation": "Thank you for your help.",
      "usage_notes": "Expressing gratitude for assistance."
    }
  },
  {
    "不客气。": {
      "frequency": 8,
      "pinyin": "bù kèqi.",
      "translation": "You’re welcome.",
      "example": "不客气。",
      "example_translation": "You’re welcome.",
      "usage_notes": "Response to someone thanking you."
    }
  },
  {
    "对不起。": {
      "frequency": 8,
      "pinyin": "duìbuqǐ.",
      "translation": "I’m sorry.",
      "example": "对不起，我迟到了。",
      "example_translation": "I’m sorry, I am late.",
      "usage_notes": "Apologizing for something."
    }
  },
  {
    "没关系。": {
      "frequency": 8,
      "pinyin": "méi guānxi.",
      "translation": "It’s okay.",
      "example": "没关系，我理解你的情况。",
      "example_translation": "It’s okay, I understand your situation.",
      "usage_notes": "Response to someone apologizing."
    }
  },
  {
    "请问，你会说英语吗？": {
      "frequency": 7,
      "pinyin": "qǐng wèn, nǐ huì shuō Yīngyǔ ma?",
      "translation": "Excuse me, do you speak English?",
      "example": "请问，你会说英语吗？",
      "example_translation": "Excuse me, do you speak English?",
      "usage_notes": "Asking someone if they speak English."
    }
  },
  {
    "我会一点中文。": {
      "frequency": 7,
      "pinyin": "wǒ huì yīdiǎn Zhōngwén.",
      "translation": "I can speak a little Chinese.",
      "example": "我会一点中文，但是不太流利。",
      "example_translation": "I can speak a little Chinese, but not fluently.",
      "usage_notes": "Telling someone about your Chinese language skills."
    }
  },
  {
    "请问多少钱？": {
      "frequency": 7,
      "pinyin": "qǐng wèn duōshǎo qián?",
      "translation": "Excuse me, how much does it cost?",
      "example": "请问多少钱？",
      "example_translation": "Excuse me, how much does it cost?",
      "usage_notes": "Asking for the price of an item."
    }
  },
  {
    "太贵了。": {
      "frequency": 7,
      "pinyin": "tài guì le.",
      "translation": "It’s too expensive.",
      "example": "这个太贵了，你能便宜点吗？",
      "example_translation": "This is too expensive. Can you make it cheaper?",
      "usage_notes": "Expressing that something is too expensive."
    }
  },
  {
    "便宜一点，好吗？": {
      "frequency": 7,
      "pinyin": "piányi yīdiǎn, hǎo ma?",
      "translation": "Can you make it cheaper?",
      "example": "便宜一点，好吗？",
      "example_translation": "Can you make it cheaper?",
      "usage_notes": "Asking for a discount."
    }
  },
  {
    "我要这个。": {
      "frequency": 7,
      "pinyin": "wǒ yào zhège.",
      "translation": "I want this one.",
      "example": "我要这个，请帮我包起来。",
      "example_translation": "I want this one, please wrap it up for me.",
      "usage_notes": "Indicating your choice of item."
    }
  },
  {
    "你喜欢这个吗？": {
      "frequency": 6,
      "pinyin": "nǐ xǐhuan zhège ma?",
      "translation": "Do you like this?",
      "example": "你喜欢这个吗？",
      "example_translation": "Do you like this?",
      "usage_notes": "Asking someone if they like something."
    }
  },
  {
    "我喜欢这个。": {
      "frequency": 6,
      "pinyin": "wǒ xǐhuan zhège.",
      "translation": "I like this.",
      "example": "我喜欢这个，这颜色很好看。",
      "example_translation": "I like this, the color looks nice.",
      "usage_notes": "Expressing your preference for something."
    }
  },
  {
    "我们走吧。": {
      "frequency": 6,
      "pinyin": "wǒmen zǒu ba.",
      "translation": "Let’s go.",
      "example": "电影要开始了，我们走吧。",
      "example_translation": "The movie is about to start, let’s go.",
      "usage_notes": "Indicating it is time to leave or start moving."
    }
  },
  {
    "请坐。": {
      "frequency": 6,
      "pinyin": "qǐng zuò.",
      "translation": "Please sit down.",
      "example": "请坐，慢慢聊。",
      "example_translation": "Please sit down, let’s chat.",
      "usage_notes": "Offering someone a seat."
    }
  },
  {
    "你在做什么？": {
      "frequency": 6,
      "pinyin": "nǐ zài zuò shénme?",
      "translation": "What are you doing?",
      "example": "你在做什么？要不要一起去吃饭？",
      "example_translation": "What are you doing? Do you want to go eat together?",
      "usage_notes": "Asking someone about their current activity."
    }
  },
  {
    "我在看电视。": {
      "frequency": 6,
      "pinyin": "wǒ zài kàn diànshì.",
      "translation": "I am watching TV.",
      "example": "我在看电视，这个节目很有意思。",
      "example_translation": "I am watching TV, this show is very interesting.",
      "usage_notes": "Describing your current activity."
    }
  },
  {
    "你想吃什么？": {
      "frequency": 6,
      "pinyin": "nǐ xiǎng chī shénme?",
      "translation": "What do you want to eat?",
      "example": "你想吃什么？我们去吃火锅吧。",
      "example_translation": "What do you want to eat? Let’s go eat hotpot.",
      "usage_notes": "Asking someone about their food preference."
    }
  },
  {
    "我想吃面条。": {
      "frequency": 6,
      "pinyin": "wǒ xiǎng chī miàntiáo.",
      "translation": "I want to eat noodles.",
      "example": "我想吃面条，去那家餐馆吧。",
      "example_translation": "I want to eat noodles, let’s go to that restaurant.",
      "usage_notes": "Expressing your food preference."
    }
  },
  {
    "今天的天气很好。": {
      "frequency": 6,
      "pinyin": "jīntiān de tiānqì hěn hǎo.",
      "translation": "The weather is nice today.",
      "example": "今天的天气很好，我们去公园吧。",
      "example_translation": "The weather is nice today, let’s go to the park.",
      "usage_notes": "Commenting on the weather."
    }
  },
  {
    "明天会下雨吗？": {
      "frequency": 5,
      "pinyin": "míngtiān huì xià yǔ ma?",
      "translation": "Will it rain tomorrow?",
      "example": "明天会下雨吗？我们要不要带伞？",
      "example_translation": "Will it rain tomorrow? Should we bring an umbrella?",
      "usage_notes": "Asking about the weather forecast."
    }
  },
  {
    "你家在哪里？": {
      "frequency": 5,
      "pinyin": "nǐ jiā zài nǎlǐ?",
      "translation": "Where is your home?",
      "example": "你家在哪里？我们可以一起回家。",
      "example_translation": "Where is your home? We can go home together.",
      "usage_notes": "Asking for someone’s home location."
    }
  },
  {
    "我住在北京。": {
      "frequency": 5,
      "pinyin": "wǒ zhù zài Běijīng.",
      "translation": "I live in Beijing.",
      "example": "我住在北京，你呢？",
      "example_translation": "I live in Beijing, how about you?",
      "usage_notes": "Telling someone where you live."
    }
  },
  {
    "你有兄弟姐妹吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu xiōngdì jiěmèi ma?",
      "translation": "Do you have siblings?",
      "example": "你有兄弟姐妹吗？",
      "example_translation": "Do you have siblings?",
      "usage_notes": "Asking someone if they have brothers or sisters."
    }
  },
  {
    "我有一个姐姐。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu yī gè jiějie.",
      "translation": "I have an older sister.",
      "example": "我有一个姐姐，她住在上海。",
      "example_translation": "I have an older sister, she lives in Shanghai.",
      "usage_notes": "Telling someone about your sibling."
    }
  },
  {
    "你喜欢做什么？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan zuò shénme?",
      "translation": "What do you like to do?",
      "example": "你喜欢做什么？",
      "example_translation": "What do you like to do?",
      "usage_notes": "Asking about someone’s hobbies or interests."
    }
  },
  {
    "我喜欢读书。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan dúshū.",
      "translation": "I like reading.",
      "example": "我喜欢读书，特别是小说。",
      "example_translation": "I like reading, especially novels.",
      "usage_notes": "Expressing your hobbies or interests."
    }
  },
  {
    "今天星期几？": {
      "frequency": 5,
      "pinyin": "jīntiān xīngqī jǐ?",
      "translation": "What day is it today?",
      "example": "今天星期几？",
      "example_translation": "What day is it today?",
      "usage_notes": "Asking about the day of the week."
    }
  },
  {
    "今天星期三。": {
      "frequency": 5,
      "pinyin": "jīntiān xīngqī sān.",
      "translation": "Today is Wednesday.",
      "example": "今天星期三，你有没有空？",
      "example_translation": "Today is Wednesday, do you have time?",
      "usage_notes": "Telling someone the day of the week."
    }
  },
  {
    "你喜欢看电影吗？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan kàn diànyǐng ma?",
      "translation": "Do you like watching movies?",
      "example": "你喜欢看电影吗？",
      "example_translation": "Do you like watching movies?",
      "usage_notes": "Asking about someone’s interest in movies."
    }
  },
  {
    "我喜欢看电影。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan kàn diànyǐng.",
      "translation": "I like watching movies.",
      "example": "我喜欢看电影，尤其是科幻片。",
      "example_translation": "I like watching movies, especially science fiction.",
      "usage_notes": "Expressing your interest in movies."
    }
  },
  {
    "你几点上班？": {
      "frequency": 5,
      "pinyin": "nǐ jǐ diǎn shàngbān?",
      "translation": "What time do you start work?",
      "example": "你几点上班？",
      "example_translation": "What time do you start work?",
      "usage_notes": "Asking about someone’s work schedule."
    }
  },
  {
    "我八点上班。": {
      "frequency": 5,
      "pinyin": "wǒ bā diǎn shàngbān.",
      "translation": "I start work at eight o’clock.",
      "example": "我八点上班，六点下班。",
      "example_translation": "I start work at eight o’clock and finish at six.",
      "usage_notes": "Telling someone your work start time."
    }
  },
  {
    "今天几号？": {
      "frequency": 5,
      "pinyin": "jīntiān jǐ hào?",
      "translation": "What is the date today?",
      "example": "今天几号？",
      "example_translation": "What is the date today?",
      "usage_notes": "Asking for the date."
    }
  },
  {
    "今天五月三号。": {
      "frequency": 5,
      "pinyin": "jīntiān wǔ yuè sān hào.",
      "translation": "Today is May third.",
      "example": "今天五月三号，明天是四号。",
      "example_translation": "Today is May third, tomorrow is the fourth.",
      "usage_notes": "Telling someone the date."
    }
  },
  {
    "你的电话号码是多少？": {
      "frequency": 5,
      "pinyin": "nǐ de diànhuà hàomǎ shì duōshǎo?",
      "translation": "What is your phone number?",
      "example": "你的电话号码是多少？",
      "example_translation": "What is your phone number?",
      "usage_notes": "Asking for someone’s phone number."
    }
  },
  {
    "我的电话号码是12345678。": {
      "frequency": 5,
      "pinyin": "wǒ de diànhuà hàomǎ shì yī èr sān sì wǔ liù qī bā.",
      "translation": "My phone number is 12345678.",
      "example": "我的电话号码是12345678，你可以随时打给我。",
      "example_translation": "My phone number is 12345678, you can call me anytime.",
      "usage_notes": "Giving someone your phone number."
    }
  },
  {
    "你喜欢喝茶吗？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan hē chá ma?",
      "translation": "Do you like drinking tea?",
      "example": "你喜欢喝茶吗？",
      "example_translation": "Do you like drinking tea?",
      "usage_notes": "Asking about someone’s preference for tea."
    }
  },
  {
    "我喜欢喝茶。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan hē chá.",
      "translation": "I like drinking tea.",
      "example": "我喜欢喝茶，尤其是绿茶。",
      "example_translation": "I like drinking tea, especially green tea.",
      "usage_notes": "Expressing your preference for tea."
    }
  },
  {
    "请给我一杯水。": {
      "frequency": 5,
      "pinyin": "qǐng gěi wǒ yī bēi shuǐ.",
      "translation": "Please give me a glass of water.",
      "example": "请给我一杯水。",
      "example_translation": "Please give me a glass of water.",
      "usage_notes": "Requesting a glass of water."
    }
  },
  {
    "我要买单。": {
      "frequency": 5,
      "pinyin": "wǒ yào mǎidān.",
      "translation": "I want to pay the bill.",
      "example": "服务员，我要买单。",
      "example_translation": "Waiter, I want to pay the bill.",
      "usage_notes": "Indicating that you want to pay the bill at a restaurant."
    }
  },
  {
    "我迷路了。": {
      "frequency": 5,
      "pinyin": "wǒ mílù le.",
      "translation": "I am lost.",
      "example": "我迷路了，你能帮我吗？",
      "example_translation": "I am lost, can you help me?",
      "usage_notes": "Telling someone that you are lost."
    }
  },
  {
    "你能帮我吗？": {
      "frequency": 5,
      "pinyin": "nǐ néng bāng wǒ ma?",
      "translation": "Can you help me?",
      "example": "你能帮我吗？我找不到我的钱包。",
      "example_translation": "Can you help me? I can’t find my wallet.",
      "usage_notes": "Asking for help."
    }
  },
  {
    "我不明白。": {
      "frequency": 5,
      "pinyin": "wǒ bù míngbai.",
      "translation": "I don’t understand.",
      "example": "我不明白，你能再说一遍吗？",
      "example_translation": "I don’t understand, can you say it again?",
      "usage_notes": "Expressing that you do not understand something."
    }
  },
  {
    "请说慢一点。": {
      "frequency": 5,
      "pinyin": "qǐng shuō màn yīdiǎn.",
      "translation": "Please speak slowly.",
      "example": "请说慢一点，我听不懂。",
      "example_translation": "Please speak slowly, I don’t understand.",
      "usage_notes": "Asking someone to speak slowly."
    }
  },
  {
    "请再说一遍。": {
      "frequency": 5,
      "pinyin": "qǐng zài shuō yī biàn.",
      "translation": "Please say it again.",
      "example": "请再说一遍，我没听清楚。",
      "example_translation": "Please say it again, I didn’t hear clearly.",
      "usage_notes": "Asking someone to repeat what they said."
    }
  },
  {
    "请写下来。": {
      "frequency": 5,
      "pinyin": "qǐng xiě xiàlái.",
      "translation": "Please write it down.",
      "example": "请写下来，我怕记不住。",
      "example_translation": "Please write it down, I’m afraid I won’t remember.",
      "usage_notes": "Asking someone to write something down for you."
    }
  },
  {
    "我明白了。": {
      "frequency": 5,
      "pinyin": "wǒ míngbai le.",
      "translation": "I understand.",
      "example": "我明白了，谢谢你的解释。",
      "example_translation": "I understand, thank you for your explanation.",
      "usage_notes": "Expressing that you understand something."
    }
  },
  {
    "请问，这里可以拍照吗？": {
      "frequency": 5,
      "pinyin": "qǐng wèn, zhèlǐ kěyǐ pāizhào ma?",
      "translation": "Excuse me, can I take photos here?",
      "example": "请问，这里可以拍照吗？",
      "example_translation": "Excuse me, can I take photos here?",
      "usage_notes": "Asking for permission to take photos."
    }
  },
  {
    "请给我看一下菜单。": {
      "frequency": 5,
      "pinyin": "qǐng gěi wǒ kàn yīxià càidān.",
      "translation": "Please show me the menu.",
      "example": "请给我看一下菜单。",
      "example_translation": "Please show me the menu.",
      "usage_notes": "Requesting to see the menu at a restaurant."
    }
  },
  {
    "这个怎么读？": {
      "frequency": 5,
      "pinyin": "zhège zěnme dú?",
      "translation": "How do you pronounce this?",
      "example": "这个怎么读？我不知道。",
      "example_translation": "How do you pronounce this? I don’t know.",
      "usage_notes": "Asking how to pronounce a word or character."
    }
  },
  {
    "你有空吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu kòng ma?",
      "translation": "Are you free?",
      "example": "你有空吗？我们一起去看电影吧。",
      "example_translation": "Are you free? Let’s go watch a movie together.",
      "usage_notes": "Asking if someone is available."
    }
  },
  {
    "对不起，我有事。": {
      "frequency": 5,
      "pinyin": "duìbuqǐ, wǒ yǒu shì.",
      "translation": "Sorry, I am busy.",
      "example": "对不起，我有事，不能去。",
      "example_translation": "Sorry, I am busy, I can’t go.",
      "usage_notes": "Politely declining an invitation due to being busy."
    }
  },
  {
    "你要去哪儿？": {
      "frequency": 5,
      "pinyin": "nǐ yào qù nǎr?",
      "translation": "Where are you going?",
      "example": "你要去哪儿？我们一起去吧。",
      "example_translation": "Where are you going? Let’s go together.",
      "usage_notes": "Asking about someone’s destination."
    }
  },
  {
    "我去学校。": {
      "frequency": 5,
      "pinyin": "wǒ qù xuéxiào.",
      "translation": "I am going to school.",
      "example": "我去学校，你呢？",
      "example_translation": "I am going to school, how about you?",
      "usage_notes": "Telling someone your destination."
    }
  },
  {
    "我饿了。": {
      "frequency": 5,
      "pinyin": "wǒ è le.",
      "translation": "I am hungry.",
      "example": "我饿了，我们去吃饭吧。",
      "example_translation": "I am hungry, let’s go eat.",
      "usage_notes": "Expressing that you are hungry."
    }
  },
  {
    "我渴了。": {
      "frequency": 5,
      "pinyin": "wǒ kě le.",
      "translation": "I am thirsty.",
      "example": "我渴了，给我一杯水吧。",
      "example_translation": "I am thirsty, please give me a glass of water.",
      "usage_notes": "Expressing that you are thirsty."
    }
  },
  {
    "今天是星期几？": {
      "frequency": 5,
      "pinyin": "jīntiān shì xīngqī jǐ?",
      "translation": "What day is it today?",
      "example": "今天是星期几？",
      "example_translation": "What day is it today?",
      "usage_notes": "Asking about the day of the week."
    }
  },
  {
    "今天是星期一。": {
      "frequency": 5,
      "pinyin": "jīntiān shì xīngqī yī.",
      "translation": "Today is Monday.",
      "example": "今天是星期一。",
      "example_translation": "Today is Monday.",
      "usage_notes": "Telling someone the day of the week."
    }
  },
  {
    "你住在哪里？": {
      "frequency": 5,
      "pinyin": "nǐ zhù zài nǎlǐ?",
      "translation": "Where do you live?",
      "example": "你住在哪里？",
      "example_translation": "Where do you live?",
      "usage_notes": "Asking about someone’s residence."
    }
  },
  {
    "我住在上海。": {
      "frequency": 5,
      "pinyin": "wǒ zhù zài Shànghǎi.",
      "translation": "I live in Shanghai.",
      "example": "我住在上海。",
      "example_translation": "I live in Shanghai.",
      "usage_notes": "Telling someone where you live."
    }
  },
  {
    "请问这是什么？": {
      "frequency": 5,
      "pinyin": "qǐng wèn zhè shì shénme?",
      "translation": "Excuse me, what is this?",
      "example": "请问这是什么？",
      "example_translation": "Excuse me, what is this?",
      "usage_notes": "Asking for information about an unknown item."
    }
  },
  {
    "这是我的书。": {
      "frequency": 5,
      "pinyin": "zhè shì wǒ de shū.",
      "translation": "This is my book.",
      "example": "这是我的书，不是你的。",
      "example_translation": "This is my book, not yours.",
      "usage_notes": "Identifying ownership of an item."
    }
  },
  {
    "请问怎么走？": {
      "frequency": 5,
      "pinyin": "qǐng wèn zěnme zǒu?",
      "translation": "Excuse me, how do I get there?",
      "example": "请问怎么走？",
      "example_translation": "Excuse me, how do I get there?",
      "usage_notes": "Asking for directions."
    }
  },
  {
    "你会开车吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì kāichē ma?",
      "translation": "Can you drive?",
      "example": "你会开车吗？",
      "example_translation": "Can you drive?",
      "usage_notes": "Asking if someone can drive a car."
    }
  },
  {
    "我不会开车。": {
      "frequency": 5,
      "pinyin": "wǒ bù huì kāichē.",
      "translation": "I can’t drive.",
      "example": "我不会开车。",
      "example_translation": "I can’t drive.",
      "usage_notes": "Expressing that you cannot drive a car."
    }
  },
  {
    "你能说中文吗？": {
      "frequency": 5,
      "pinyin": "nǐ néng shuō Zhōngwén ma?",
      "translation": "Can you speak Chinese?",
      "example": "你能说中文吗？",
      "example_translation": "Can you speak Chinese?",
      "usage_notes": "Asking if someone can speak Chinese."
    }
  },
  {
    "我在学习中文。": {
      "frequency": 5,
      "pinyin": "wǒ zài xuéxí Zhōngwén.",
      "translation": "I am learning Chinese.",
      "example": "我在学习中文，进步很快。",
      "example_translation": "I am learning Chinese, and I am making fast progress.",
      "usage_notes": "Expressing that you are currently learning Chinese."
    }
  },
  {
    "你有笔吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu bǐ ma?",
      "translation": "Do you have a pen?",
      "example": "你有笔吗？我忘了带。",
      "example_translation": "Do you have a pen? I forgot to bring one.",
      "usage_notes": "Asking if someone has a pen."
    }
  },
  {
    "我没有笔。": {
      "frequency": 5,
      "pinyin": "wǒ méiyǒu bǐ.",
      "translation": "I don’t have a pen.",
      "example": "我没有笔。",
      "example_translation": "I don’t have a pen.",
      "usage_notes": "Expressing that you do not have a pen."
    }
  },
  {
    "你吃饭了吗？": {
      "frequency": 5,
      "pinyin": "nǐ chīfàn le ma?",
      "translation": "Have you eaten?",
      "example": "你吃饭了吗？",
      "example_translation": "Have you eaten?",
      "usage_notes": "Asking if someone has eaten."
    }
  },
  {
    "我吃了。": {
      "frequency": 5,
      "pinyin": "wǒ chī le.",
      "translation": "I have eaten.",
      "example": "我吃了，谢谢。",
      "example_translation": "I have eaten, thank you.",
      "usage_notes": "Expressing that you have eaten."
    }
  },
  {
    "你累了吗？": {
      "frequency": 5,
      "pinyin": "nǐ lèi le ma?",
      "translation": "Are you tired?",
      "example": "你累了吗？休息一下吧。",
      "example_translation": "Are you tired? Take a rest.",
      "usage_notes": "Asking if someone is tired."
    }
  },
  {
    "我很累。": {
      "frequency": 5,
      "pinyin": "wǒ hěn lèi.",
      "translation": "I am very tired.",
      "example": "我很累，想休息一下。",
      "example_translation": "I am very tired, I want to take a rest.",
      "usage_notes": "Expressing that you are very tired."
    }
  },
  {
    "你忙吗？": {
      "frequency": 5,
      "pinyin": "nǐ máng ma?",
      "translation": "Are you busy?",
      "example": "你忙吗？我们聊一会儿吧。",
      "example_translation": "Are you busy? Let’s chat for a while.",
      "usage_notes": "Asking if someone is busy."
    }
  },
  {
    "我很忙。": {
      "frequency": 5,
      "pinyin": "wǒ hěn máng.",
      "translation": "I am very busy.",
      "example": "我很忙，没有时间休息。",
      "example_translation": "I am very busy, I don’t have time to rest.",
      "usage_notes": "Expressing that you are very busy."
    }
  },
  {
    "你看见我的手机了吗？": {
      "frequency": 5,
      "pinyin": "nǐ kànjiàn wǒ de shǒujī le ma?",
      "translation": "Have you seen my phone?",
      "example": "你看见我的手机了吗？",
      "example_translation": "Have you seen my phone?",
      "usage_notes": "Asking if someone has seen your phone."
    }
  },
  {
    "我没看见。": {
      "frequency": 5,
      "pinyin": "wǒ méi kànjiàn.",
      "translation": "I haven’t seen it.",
      "example": "我没看见。",
      "example_translation": "I haven’t seen it.",
      "usage_notes": "Expressing that you haven’t seen something."
    }
  },
  {
    "你要喝什么？": {
      "frequency": 5,
      "pinyin": "nǐ yào hē shénme?",
      "translation": "What do you want to drink?",
      "example": "你要喝什么？",
      "example_translation": "What do you want to drink?",
      "usage_notes": "Asking what someone wants to drink."
    }
  },
  {
    "我想喝咖啡。": {
      "frequency": 5,
      "pinyin": "wǒ xiǎng hē kāfēi.",
      "translation": "I want to drink coffee.",
      "example": "我想喝咖啡。",
      "example_translation": "I want to drink coffee.",
      "usage_notes": "Expressing your desire for a beverage."
    }
  },
  {
    "你饿了吗？": {
      "frequency": 5,
      "pinyin": "nǐ è le ma?",
      "translation": "Are you hungry?",
      "example": "你饿了吗？我们去吃饭吧。",
      "example_translation": "Are you hungry? Let’s go eat.",
      "usage_notes": "Asking if someone is hungry."
    }
  },
  {
    "我不饿。": {
      "frequency": 5,
      "pinyin": "wǒ bù è.",
      "translation": "I am not hungry.",
      "example": "我不饿，谢谢。",
      "example_translation": "I am not hungry, thank you.",
      "usage_notes": "Expressing that you are not hungry."
    }
  },
  {
    "请问，你叫什么名字？": {
      "frequency": 5,
      "pinyin": "qǐng wèn, nǐ jiào shénme míngzi?",
      "translation": "Excuse me, what is your name?",
      "example": "请问，你叫什么名字？",
      "example_translation": "Excuse me, what is your name?",
      "usage_notes": "Asking for someone’s name."
    }
  },
  {
    "我叫张三。": {
      "frequency": 5,
      "pinyin": "wǒ jiào Zhāng Sān.",
      "translation": "My name is Zhang San.",
      "example": "我叫张三。",
      "example_translation": "My name is Zhang San.",
      "usage_notes": "Telling someone your name."
    }
  },
  {
    "你会说英语吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì shuō Yīngyǔ ma?",
      "translation": "Can you speak English?",
      "example": "你会说英语吗？",
      "example_translation": "Can you speak English?",
      "usage_notes": "Asking if someone can speak English."
    }
  },
  {
    "我会说一点点。": {
      "frequency": 5,
      "pinyin": "wǒ huì shuō yīdiǎndiǎn.",
      "translation": "I can speak a little bit.",
      "example": "我会说一点点英语。",
      "example_translation": "I can speak a little bit of English.",
      "usage_notes": "Expressing your limited ability in a language."
    }
  },
  {
    "请问，洗手间在哪里？": {
      "frequency": 5,
      "pinyin": "qǐng wèn, xǐshǒujiān zài nǎlǐ?",
      "translation": "Excuse me, where is the bathroom?",
      "example": "请问，洗手间在哪里？",
      "example_translation": "Excuse me, where is the bathroom?",
      "usage_notes": "Asking for the location of the bathroom."
    }
  },
  {
    "洗手间在那边。": {
      "frequency": 5,
      "pinyin": "xǐshǒujiān zài nàbiān.",
      "translation": "The bathroom is over there.",
      "example": "洗手间在那边。",
      "example_translation": "The bathroom is over there.",
      "usage_notes": "Giving directions to the bathroom."
    }
  },
  {
    "你会游泳吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì yóuyǒng ma?",
      "translation": "Can you swim?",
      "example": "你会游泳吗？",
      "example_translation": "Can you swim?",
      "usage_notes": "Asking if someone can swim."
    }
  },
  {
    "我会游泳。": {
      "frequency": 5,
      "pinyin": "wǒ huì yóuyǒng.",
      "translation": "I can swim.",
      "example": "我会游泳。",
      "example_translation": "I can swim.",
      "usage_notes": "Expressing that you can swim."
    }
  },
  {
    "你累了吗？": {
      "frequency": 5,
      "pinyin": "nǐ lèi le ma?",
      "translation": "Are you tired?",
      "example": "你累了吗？",
      "example_translation": "Are you tired?",
      "usage_notes": "Asking if someone is tired."
    }
  },
  {
    "我累了。": {
      "frequency": 5,
      "pinyin": "wǒ lèi le.",
      "translation": "I am tired.",
      "example": "我累了，想休息一下。",
      "example_translation": "I am tired, I want to rest.",
      "usage_notes": "Expressing that you are tired."
    }
  },
  {
    "你有空吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu kòng ma?",
      "translation": "Are you free?",
      "example": "你有空吗？我们聊一会儿吧。",
      "example_translation": "Are you free? Let’s chat for a while.",
      "usage_notes": "Asking if someone is available."
    }
  },
  {
    "我有空。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu kòng.",
      "translation": "I am free.",
      "example": "我有空，我们去喝茶吧。",
      "example_translation": "I am free, let’s go have some tea.",
      "usage_notes": "Expressing that you are available."
    }
  },
  {
    "你看见我的手机了吗？": {
      "frequency": 5,
      "pinyin": "nǐ kànjiàn wǒ de shǒujī le ma?",
      "translation": "Have you seen my phone?",
      "example": "你看见我的手机了吗？",
      "example_translation": "Have you seen my phone?",
      "usage_notes": "Asking if someone has seen your phone."
    }
  },
  {
    "我没看见。": {
      "frequency": 5,
      "pinyin": "wǒ méi kànjiàn.",
      "translation": "I haven’t seen it.",
      "example": "我没看见。",
      "example_translation": "I haven’t seen it.",
      "usage_notes": "Expressing that you haven’t seen something."
    }
  },
  {
    "请帮我拍张照片。": {
      "frequency": 5,
      "pinyin": "qǐng bāng wǒ pāi zhāng zhàopiàn.",
      "translation": "Please take a photo for me.",
      "example": "请帮我拍张照片，好吗？",
      "example_translation": "Please take a photo for me, okay?",
      "usage_notes": "Requesting someone to take a photo for you."
    }
  },
  {
    "你喜欢看电影吗？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan kàn diànyǐng ma?",
      "translation": "Do you like watching movies?",
      "example": "你喜欢看电影吗？",
      "example_translation": "Do you like watching movies?",
      "usage_notes": "Asking if someone likes watching movies."
    }
  },
  {
    "我喜欢看电影。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan kàn diànyǐng.",
      "translation": "I like watching movies.",
      "example": "我喜欢看电影，尤其是喜剧片。",
      "example_translation": "I like watching movies, especially comedies.",
      "usage_notes": "Expressing your liking for watching movies."
    }
  },
  {
    "你想吃什么？": {
      "frequency": 5,
      "pinyin": "nǐ xiǎng chī shénme?",
      "translation": "What do you want to eat?",
      "example": "你想吃什么？",
      "example_translation": "What do you want to eat?",
      "usage_notes": "Asking what someone wants to eat."
    }
  },
  {
    "我想吃面条。": {
      "frequency": 5,
      "pinyin": "wǒ xiǎng chī miàntiáo.",
      "translation": "I want to eat noodles.",
      "example": "我想吃面条。",
      "example_translation": "I want to eat noodles.",
      "usage_notes": "Expressing your desire to eat a specific food."
    }
  },
  {
    "请问，厕所在哪里？": {
      "frequency": 5,
      "pinyin": "qǐng wèn, cèsuǒ zài nǎlǐ?",
      "translation": "Excuse me, where is the restroom?",
      "example": "请问，厕所在哪里？",
      "example_translation": "Excuse me, where is the restroom?",
      "usage_notes": "Asking for the location of the restroom."
    }
  },
  {
    "厕所在哪里？": {
      "frequency": 5,
      "pinyin": "cèsuǒ zài nǎlǐ?",
      "translation": "Where is the restroom?",
      "example": "厕所在哪里？",
      "example_translation": "Where is the restroom?",
      "usage_notes": "Asking for the location of the restroom."
    }
  },
  {
    "谢谢你。": {
      "frequency": 5,
      "pinyin": "xièxiè nǐ.",
      "translation": "Thank you.",
      "example": "谢谢你。",
      "example_translation": "Thank you.",
      "usage_notes": "Expressing gratitude."
    }
  },
  {
    "对不起。": {
      "frequency": 5,
      "pinyin": "duìbuqǐ.",
      "translation": "I am sorry.",
      "example": "对不起。",
      "example_translation": "I am sorry.",
      "usage_notes": "Apologizing."
    }
  },
  {
    "请。": {
      "frequency": 5,
      "pinyin": "qǐng.",
      "translation": "Please.",
      "example": "请。",
      "example_translation": "Please.",
      "usage_notes": "Polite request."
    }
  },
  {
    "请问。": {
      "frequency": 5,
      "pinyin": "qǐng wèn.",
      "translation": "Excuse me.",
      "example": "请问。",
      "example_translation": "Excuse me.",
      "usage_notes": "Polite way to get someone’s attention."
    }
  },
  {
    "再见。": {
      "frequency": 5,
      "pinyin": "zàijiàn.",
      "translation": "Goodbye.",
      "example": "再见。",
      "example_translation": "Goodbye.",
      "usage_notes": "Saying goodbye."
    }
  },
  {
    "你叫什么名字？": {
      "frequency": 5,
      "pinyin": "nǐ jiào shénme míngzi?",
      "translation": "What is your name?",
      "example": "你叫什么名字？",
      "example_translation": "What is your name?",
      "usage_notes": "Asking for someone’s name."
    }
  },
  {
    "我叫李华。": {
      "frequency": 5,
      "pinyin": "wǒ jiào Lǐ Huá.",
      "translation": "My name is Li Hua.",
      "example": "我叫李华。",
      "example_translation": "My name is Li Hua.",
      "usage_notes": "Telling someone your name."
    }
  },
  {
    "你会说中文吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì shuō Zhōngwén ma?",
      "translation": "Can you speak Chinese?",
      "example": "你会说中文吗？",
      "example_translation": "Can you speak Chinese?",
      "usage_notes": "Asking if someone can speak Chinese."
    }
  },
  {
    "我会说一点中文。": {
      "frequency": 5,
      "pinyin": "wǒ huì shuō yīdiǎn Zhōngwén.",
      "translation": "I can speak a little Chinese.",
      "example": "我会说一点中文。",
      "example_translation": "I can speak a little Chinese.",
      "usage_notes": "Expressing your limited ability in Chinese."
    }
  },
  {
    "你要去哪儿？": {
      "frequency": 5,
      "pinyin": "nǐ yào qù nǎr?",
      "translation": "Where are you going?",
      "example": "你要去哪儿？",
      "example_translation": "Where are you going?",
      "usage_notes": "Asking about someone’s destination."
    }
  },
  {
    "我去商店。": {
      "frequency": 5,
      "pinyin": "wǒ qù shāngdiàn.",
      "translation": "I am going to the store.",
      "example": "我去商店。",
      "example_translation": "I am going to the store.",
      "usage_notes": "Telling someone your destination."
    }
  },
  {
    "你渴了吗？": {
      "frequency": 5,
      "pinyin": "nǐ kě le ma?",
      "translation": "Are you thirsty?",
      "example": "你渴了吗？",
      "example_translation": "Are you thirsty?",
      "usage_notes": "Asking if someone is thirsty."
    }
  },
  {
    "我很渴。": {
      "frequency": 5,
      "pinyin": "wǒ hěn kě.",
      "translation": "I am very thirsty.",
      "example": "我很渴，想喝点水。",
      "example_translation": "I am very thirsty, I want to drink some water.",
      "usage_notes": "Expressing that you are very thirsty."
    }
  },
  {
    "你要喝什么？": {
      "frequency": 5,
      "pinyin": "nǐ yào hē shénme?",
      "translation": "What do you want to drink?",
      "example": "你要喝什么？",
      "example_translation": "What do you want to drink?",
      "usage_notes": "Asking what someone wants to drink."
    }
  },
  {
    "我想喝水。": {
      "frequency": 5,
      "pinyin": "wǒ xiǎng hē shuǐ.",
      "translation": "I want to drink water.",
      "example": "我想喝水。",
      "example_translation": "I want to drink water.",
      "usage_notes": "Expressing your desire to drink water."
    }
  },
  {
    "你会做饭吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì zuòfàn ma?",
      "translation": "Can you cook?",
      "example": "你会做饭吗？",
      "example_translation": "Can you cook?",
      "usage_notes": "Asking if someone can cook."
    }
  },
  {
    "我会做饭。": {
      "frequency": 5,
      "pinyin": "wǒ huì zuòfàn.",
      "translation": "I can cook.",
      "example": "我会做饭，做的很好吃。",
      "example_translation": "I can cook, and it is delicious.",
      "usage_notes": "Expressing that you can cook."
    }
  },
  {
    "请帮我一下。": {
      "frequency": 5,
      "pinyin": "qǐng bāng wǒ yīxià.",
      "translation": "Please help me.",
      "example": "请帮我一下，好吗？",
      "example_translation": "Please help me, okay?",
      "usage_notes": "Requesting someone’s help."
    }
  },
  {
    "你有空吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu kòng ma?",
      "translation": "Are you free?",
      "example": "你有空吗？我们聊一会儿吧。",
      "example_translation": "Are you free? Let’s chat for a while.",
      "usage_notes": "Asking if someone is available."
    }
  },
  {
    "我有空。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu kòng.",
      "translation": "I am free.",
      "example": "我有空，我们去喝茶吧。",
      "example_translation": "I am free, let’s go have some tea.",
      "usage_notes": "Expressing that you are available."
    }
  },
  {
    "你会开车吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì kāichē ma?",
      "translation": "Can you drive?",
      "example": "你会开车吗？",
      "example_translation": "Can you drive?",
      "usage_notes": "Asking if someone can drive."
    }
  },
  {
    "我会开车。": {
      "frequency": 5,
      "pinyin": "wǒ huì kāichē.",
      "translation": "I can drive.",
      "example": "我会开车。",
      "example_translation": "I can drive.",
      "usage_notes": "Expressing that you can drive."
    }
  },
  {
    "你有兄弟姐妹吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu xiōngdì jiěmèi ma?",
      "translation": "Do you have siblings?",
      "example": "你有兄弟姐妹吗？",
      "example_translation": "Do you have siblings?",
      "usage_notes": "Asking if someone has siblings."
    }
  },
  {
    "我有一个妹妹。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu yī gè mèimei.",
      "translation": "I have a younger sister.",
      "example": "我有一个妹妹。",
      "example_translation": "I have a younger sister.",
      "usage_notes": "Expressing that you have a sibling."
    }
  },
  {
    "请帮我开门。": {
      "frequency": 5,
      "pinyin": "qǐng bāng wǒ kāimén.",
      "translation": "Please help me open the door.",
      "example": "请帮我开门，好吗？",
      "example_translation": "Please help me open the door, okay?",
      "usage_notes": "Requesting someone to open the door for you."
    }
  },
  {
    "你饿了吗？": {
      "frequency": 5,
      "pinyin": "nǐ è le ma?",
      "translation": "Are you hungry?",
      "example": "你饿了吗？我们去吃饭吧。",
      "example_translation": "Are you hungry? Let’s go eat.",
      "usage_notes": "Asking if someone is hungry."
    }
  },
  {
    "我很饿。": {
      "frequency": 5,
      "pinyin": "wǒ hěn è.",
      "translation": "I am very hungry.",
      "example": "我很饿，想吃点东西。",
      "example_translation": "I am very hungry, I want to eat something.",
      "usage_notes": "Expressing that you are very hungry."
    }
  },
  {
    "你会骑自行车吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì qí zìxíngchē ma?",
      "translation": "Can you ride a bicycle?",
      "example": "你会骑自行车吗？",
      "example_translation": "Can you ride a bicycle?",
      "usage_notes": "Asking if someone can ride a bicycle."
    }
  },
  {
    "我会骑自行车。": {
      "frequency": 5,
      "pinyin": "wǒ huì qí zìxíngchē.",
      "translation": "I can ride a bicycle.",
      "example": "我会骑自行车。",
      "example_translation": "I can ride a bicycle.",
      "usage_notes": "Expressing that you can ride a bicycle."
    }
  },
  {
    "你去过北京吗？": {
      "frequency": 5,
      "pinyin": "nǐ qùguò Běijīng ma?",
      "translation": "Have you been to Beijing?",
      "example": "你去过北京吗？",
      "example_translation": "Have you been to Beijing?",
      "usage_notes": "Asking if someone has been to Beijing."
    }
  },
  {
    "我去过北京。": {
      "frequency": 5,
      "pinyin": "wǒ qùguò Běijīng.",
      "translation": "I have been to Beijing.",
      "example": "我去过北京。",
      "example_translation": "I have been to Beijing.",
      "usage_notes": "Expressing that you have been to Beijing."
    }
  },
  {
    "你喜欢吃什么？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan chī shénme?",
      "translation": "What do you like to eat?",
      "example": "你喜欢吃什么？",
      "example_translation": "What do you like to eat?",
      "usage_notes": "Asking about someone’s food preferences."
    }
  },
  {
    "我喜欢吃水果。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan chī shuǐguǒ.",
      "translation": "I like to eat fruits.",
      "example": "我喜欢吃水果。",
      "example_translation": "I like to eat fruits.",
      "usage_notes": "Expressing your preference for eating fruits."
    }
  },
  {
    "你会说汉语吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì shuō Hànyǔ ma?",
      "translation": "Can you speak Chinese?",
      "example": "你会说汉语吗？",
      "example_translation": "Can you speak Chinese?",
      "usage_notes": "Asking if someone can speak Chinese."
    }
  },
  {
    "我会说一点汉语。": {
      "frequency": 5,
      "pinyin": "wǒ huì shuō yīdiǎn Hànyǔ.",
      "translation": "I can speak a little Chinese.",
      "example": "我会说一点汉语。",
      "example_translation": "I can speak a little Chinese.",
      "usage_notes": "Expressing your limited ability in Chinese."
    }
  },
  {
    "请问，地铁站在哪里？": {
      "frequency": 5,
      "pinyin": "qǐng wèn, dìtiě zhàn zài nǎlǐ?",
      "translation": "Excuse me, where is the subway station?",
      "example": "请问，地铁站在哪里？",
      "example_translation": "Excuse me, where is the subway station?",
      "usage_notes": "Asking for the location of the subway station."
    }
  },
  {
    "地铁站在那边。": {
      "frequency": 5,
      "pinyin": "dìtiě zhàn zài nàbiān.",
      "translation": "The subway station is over there.",
      "example": "地铁站在那边。",
      "example_translation": "The subway station is over there.",
      "usage_notes": "Giving directions to the subway station."
    }
  },
  {
    "你喜欢运动吗？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan yùndòng ma?",
      "translation": "Do you like sports?",
      "example": "你喜欢运动吗？",
      "example_translation": "Do you like sports?",
      "usage_notes": "Asking if someone likes sports."
    }
  },
  {
    "我喜欢运动。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan yùndòng.",
      "translation": "I like sports.",
      "example": "我喜欢运动，尤其是篮球。",
      "example_translation": "I like sports, especially basketball.",
      "usage_notes": "Expressing your liking for sports."
    }
  },
  {
    "你会游泳吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì yóuyǒng ma?",
      "translation": "Can you swim?",
      "example": "你会游泳吗？",
      "example_translation": "Can you swim?",
      "usage_notes": "Asking if someone can swim."
    }
  },
  {
    "我会游泳。": {
      "frequency": 5,
      "pinyin": "wǒ huì yóuyǒng.",
      "translation": "I can swim.",
      "example": "我会游泳。",
      "example_translation": "I can swim.",
      "usage_notes": "Expressing that you can swim."
    }
  },
  {
    "请帮我拿一下。": {
      "frequency": 5,
      "pinyin": "qǐng bāng wǒ ná yīxià.",
      "translation": "Please help me take this.",
      "example": "请帮我拿一下，好吗？",
      "example_translation": "Please help me take this, okay?",
      "usage_notes": "Requesting someone’s help to take something."
    }
  },
  {
    "你要喝咖啡吗？": {
      "frequency": 5,
      "pinyin": "nǐ yào hē kāfēi ma?",
      "translation": "Do you want coffee?",
      "example": "你要喝咖啡吗？",
      "example_translation": "Do you want coffee?",
      "usage_notes": "Asking if someone wants coffee."
    }
  },
  {
    "我要喝咖啡。": {
      "frequency": 5,
      "pinyin": "wǒ yào hē kāfēi.",
      "translation": "I want coffee.",
      "example": "我要喝咖啡。",
      "example_translation": "I want coffee.",
      "usage_notes": "Expressing your desire for coffee."
    }
  },
  {
    "你会说英语吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì shuō Yīngyǔ ma?",
      "translation": "Can you speak English?",
      "example": "你会说英语吗？",
      "example_translation": "Can you speak English?",
      "usage_notes": "Asking if someone can speak English."
    }
  },
  {
    "我会说英语。": {
      "frequency": 5,
      "pinyin": "wǒ huì shuō Yīngyǔ.",
      "translation": "I can speak English.",
      "example": "我会说英语。",
      "example_translation": "I can speak English.",
      "usage_notes": "Expressing that you can speak English."
    }
  },
  {
    "你喜欢听音乐吗？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan tīng yīnyuè ma?",
      "translation": "Do you like listening to music?",
      "example": "你喜欢听音乐吗？",
      "example_translation": "Do you like listening to music?",
      "usage_notes": "Asking if someone likes listening to music."
    }
  },
  {
    "我喜欢听音乐。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan tīng yīnyuè.",
      "translation": "I like listening to music.",
      "example": "我喜欢听音乐，尤其是流行音乐。",
      "example_translation": "I like listening to music, especially pop music.",
      "usage_notes": "Expressing your liking for listening to music."
    }
  },
  {
    "你累了吗？": {
      "frequency": 5,
      "pinyin": "nǐ lèi le ma?",
      "translation": "Are you tired?",
      "example": "你累了吗？我们休息一下吧。",
      "example_translation": "Are you tired? Let’s take a break.",
      "usage_notes": "Asking if someone is tired."
    }
  },
  {
    "我很累。": {
      "frequency": 5,
      "pinyin": "wǒ hěn lèi.",
      "translation": "I am very tired.",
      "example": "我很累，想休息一下。",
      "example_translation": "I am very tired, I want to take a break.",
      "usage_notes": "Expressing that you are very tired."
    }
  },
  {
    "你有钱吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu qián ma?",
      "translation": "Do you have money?",
      "example": "你有钱吗？",
      "example_translation": "Do you have money?",
      "usage_notes": "Asking if someone has money."
    }
  },
  {
    "我有钱。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu qián.",
      "translation": "I have money.",
      "example": "我有钱。",
      "example_translation": "I have money.",
      "usage_notes": "Expressing that you have money."
    }
  },
  {
    "你有空调吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu kòngtiáo ma?",
      "translation": "Do you have air conditioning?",
      "example": "你有空调吗？",
      "example_translation": "Do you have air conditioning?",
      "usage_notes": "Asking if someone has air conditioning."
    }
  },
  {
    "我有空调。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu kòngtiáo.",
      "translation": "I have air conditioning.",
      "example": "我有空调。",
      "example_translation": "I have air conditioning.",
      "usage_notes": "Expressing that you have air conditioning."
    }
  },
  {
    "你会用电脑吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì yòng diànnǎo ma?",
      "translation": "Can you use a computer?",
      "example": "你会用电脑吗？",
      "example_translation": "Can you use a computer?",
      "usage_notes": "Asking if someone can use a computer."
    }
  },
  {
    "我会用电脑。": {
      "frequency": 5,
      "pinyin": "wǒ huì yòng diànnǎo.",
      "translation": "I can use a computer.",
      "example": "我会用电脑。",
      "example_translation": "I can use a computer.",
      "usage_notes": "Expressing that you can use a computer."
    }
  },
  {
    "你会弹钢琴吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì tán gāngqín ma?",
      "translation": "Can you play the piano?",
      "example": "你会弹钢琴吗？",
      "example_translation": "Can you play the piano?",
      "usage_notes": "Asking if someone can play the piano."
    }
  },
  {
    "我会弹钢琴。": {
      "frequency": 5,
      "pinyin": "wǒ huì tán gāngqín.",
      "translation": "I can play the piano.",
      "example": "我会弹钢琴。",
      "example_translation": "I can play the piano.",
      "usage_notes": "Expressing that you can play the piano."
    }
  },
  {
    "你有猫吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu māo ma?",
      "translation": "Do you have a cat?",
      "example": "你有猫吗？",
      "example_translation": "Do you have a cat?",
      "usage_notes": "Asking if someone has a cat."
    }
  },
  {
    "我有一只猫。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu yī zhī māo.",
      "translation": "I have a cat.",
      "example": "我有一只猫。",
      "example_translation": "I have a cat.",
      "usage_notes": "Expressing that you have a cat."
    }
  },
  {
    "你有狗吗？": {
      "frequency": 5,
      "pinyin": "nǐ yǒu gǒu ma?",
      "translation": "Do you have a dog?",
      "example": "你有狗吗？",
      "example_translation": "Do you have a dog?",
      "usage_notes": "Asking if someone has a dog."
    }
  },
  {
    "我有一只狗。": {
      "frequency": 5,
      "pinyin": "wǒ yǒu yī zhī gǒu.",
      "translation": "I have a dog.",
      "example": "我有一只狗。",
      "example_translation": "I have a dog.",
      "usage_notes": "Expressing that you have a dog."
    }
  },
  {
    "你喜欢茶还是咖啡？": {
      "frequency": 5,
      "pinyin": "nǐ xǐhuan chá háishì kāfēi?",
      "translation": "Do you like tea or coffee?",
      "example": "你喜欢茶还是咖啡？",
      "example_translation": "Do you like tea or coffee?",
      "usage_notes": "Asking if someone prefers tea or coffee."
    }
  },
  {
    "我喜欢喝茶。": {
      "frequency": 5,
      "pinyin": "wǒ xǐhuan hē chá.",
      "translation": "I like drinking tea.",
      "example": "我喜欢喝茶。",
      "example_translation": "I like drinking tea.",
      "usage_notes": "Expressing your preference for drinking tea."
    }
  },
  {
    "你会画画吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì huàhuà ma?",
      "translation": "Can you draw?",
      "example": "你会画画吗？",
      "example_translation": "Can you draw?",
      "usage_notes": "Asking if someone can draw."
    }
  },
  {
    "我会画画。": {
      "frequency": 5,
      "pinyin": "wǒ huì huàhuà.",
      "translation": "I can draw.",
      "example": "我会画画。",
      "example_translation": "I can draw.",
      "usage_notes": "Expressing that you can draw."
    }
  },
  {
    "你会唱歌吗？": {
      "frequency": 5,
      "pinyin": "nǐ huì chànggē ma?",
      "translation": "Can you sing?",
      "example": "你会唱歌吗？",
      "example_translation": "Can you sing?",
      "usage_notes": "Asking if someone can sing."
    }
  },
  {
    "我会唱歌。": {
      "frequency": 5,
      "pinyin": "wǒ huì chànggē.",
      "translation": "I can sing.",
      "example": "我会唱歌。",
      "example_translation": "I can sing.",
      "usage_notes": "Expressing that you can sing."
    }
  }
];