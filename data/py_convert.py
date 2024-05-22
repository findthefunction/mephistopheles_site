import json

data = [
    {'你好': {'frequency': 10, 'pinyin': 'nǐ hǎo', 'translation': 'Hello', 'example': '你好，李先生。', 'example_translation': 'Hello, Mr. Li.', 'usage_notes': 'Used as a common greeting.'}},
    {'谢谢': {'frequency': 9, 'pinyin': 'xièxie', 'translation': 'Thank you', 'example': '谢谢你的帮助。', 'example_translation': 'Thank you for your help.', 'usage_notes': 'Expresses gratitude.'}},
    {'再见': {'frequency': 8, 'pinyin': 'zàijiàn', 'translation': 'Goodbye', 'example': '我们明天再见。', 'example_translation': 'We will see you again tomorrow.', 'usage_notes': 'Used to bid farewell.'}},
    {'请': {'frequency': 7, 'pinyin': 'qǐng', 'translation': 'Please', 'example': '请进。', 'example_translation': 'Please come in.', 'usage_notes': 'Used to politely ask for something.'}},
    {'对不起': {'frequency': 6, 'pinyin': 'duìbuqǐ', 'translation': 'Sorry', 'example': '对不起，我迟到了。', 'example_translation': 'Sorry, I am late.', 'usage_notes': 'Used to apologize.'}},
    # Add more entries as needed
]

# Convert the Python dictionary to a JSON string
json_data = json.dumps(data, ensure_ascii=False, indent=2)

# Save the JSON string to a file
with open('flashcards.js', 'w', encoding='utf-8') as file:
    file.write(f'const flashcards = {json_data};')

print("Data converted to JavaScript format and saved to flashcards.js")
