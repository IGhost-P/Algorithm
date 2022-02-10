phone_book = ["119", "97674223", "1195524421"]
length = len(phone_book)
dul = 0
# for index in range(length):
#     for check in range(length):
#         print(index)
#         if phone_book[check].startswith((phone_book[index])):
#             print(phone_book[check],phone_book[index])
#             dul += 1
def solution(phone_book):
    hash_table = {}
    for phone in phone_book:
        hash_table[phone] =1
    for phone in phone_book:
        check =''
        for number in phone:
            check += number
            if check in hash_table and check !=phone:
                return False
    return True

print(solution(phone_book))