word = input()
alphabet = list(range(97, 123))  # 아스키코드 숫자 범위

for x in alphabet:
    print(word.find(chr(x)), end=" ")
# word = input()
# for i in range(97,122):
#     print(word.find(chr(i)))