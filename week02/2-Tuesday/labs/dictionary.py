# 1. Create a dictionary called zodiac with the following inforation.
# Each key is the name of the zodiac

# myDictionary = {

#     "Aries" : "The Warrior",
#     "Taurus" : "The Builder",
#     "Gemini" : "The Messenger",
#     "Cancer" : "The Mother",
#     "Leo" : "The King",
#     "Virgo"  : "The Analyst",
#     "Libra" : "The Judge",
#     "Scorpio" : "The Magician",
#     "Sagittarius" : "the Gypsy",
#     "Capricorn" : "the Father",
#     "Aquarius" : "The Thinker",
#     "Pisces" : "TheMystic"
# }

# 1a. Retrieve information about your zodiac from the zodiac dictionary

# name = myDictionary["Leo"]

# print(name)

# 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }



# 2a. Print Elizabeth's phone number

# liz = phonebook_dict["Elizabeth"]

# print(liz)
# 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.


# phonebook_dict["Kareem"] = "938-489-1234"

# print(phonebook_dict)

# 2c. Delete Alice's phone entry.

# del phonebook_dict["Alice"]  

# print(phonebook_dict)
# 2d. Change Bob's phone number to '968-345-2345'.

# phonebook_dict["Bob"] = '968-345-2345'

# print(phonebook_dict)
# 2e. Print all the phone entries.

# for key, value in phonebook_dict.items():
#     print(key)
#     print(value)






# 3. Nested dictionaries

# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }
# 3a. Write a python expression that gets the email address of Ramit.

# result = ramit["email"]
# print(result)

# 3b. Write a python expression that gets the first of Ramit's interests.

# result = ramit["interests"][0]
# print(result)


# 3c. Write a python expression that gets the email address of Jasmine.

# result = ramit['friends']

# print(result)
# 3d. Write a python expression that gets the second of Jan's two interests.



# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary 
# containing the tally of how many times each word in the alphabet was used in the text. For example:



# def word_histogram(string):
#     result = {}
#     for n in string:
#         result[n] = result.get(n, 0) + 1
#     return result

        
# print(word_histogram("hotdog"))

def word_histogram(string):
    result = {}
    for n in string:
        result[n] = result.get(n, 0) + 1
    return result

        
print(word_histogram("hotdog"))


import pickle



# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }


# with open('ramit.pickle', 'wb') as fh:
#   pickle.dump(ramit, fh)


# with open('ramit.pickle.txt', 'rb') as fx:
#     pickle.load(fx)



# print(name)


