import sys
import random
import os

# Add the /data directory to the Python path
script_dir = os.path.dirname(os.path.abspath(__file__))
data_dir = os.path.join(script_dir, '../data')
sys.path.append(data_dir)

from data import data

# Flatten the list of dictionaries to a single dictionary
flash_cards = {list(item.keys())[0]: list(item.values())[0] for item in data}

# Generate a list of characters based on their frequency
characters = [char for char, details in flash_cards.items() for _ in range(details['frequency'])]

# Initialize the counter
counter = 0
num_iterations = 3  # Set the number of iterations you want to run

for _ in range(num_iterations):
    # Randomly select a character/phrase
    flash_card = random.choice(characters)

    # Extract details from the dictionary
    card_details = flash_cards[flash_card]

    # Increment the counter
    counter += 1

    # Display the character/phrase, pinyin, example, translation, example translation, and usage notes
    print("=" * 50)
    print(f"Flashcard #{counter}")
    print(f"Character/Phrase  : {flash_card}")
    print(f"Pinyin            : {card_details['pinyin']}")
    print(f"Translation       : {card_details['translation']}")
    print(f"Example           : {card_details['example']}")
    print(f"Example Translation: {card_details['example_translation']}")
    print(f"Usage Notes       : {card_details['usage_notes']}")
    print("=" * 50 + "\n")
