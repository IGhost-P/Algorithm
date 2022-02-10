from collections import Counter
import re
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
text = [word for word in re.sub('[^0-9a-zA-Zㄱ-힗]', ' ', paragraph)
.lower().split()
    if word not in banned]
word_counter = Counter(text)
print(word_counter)
