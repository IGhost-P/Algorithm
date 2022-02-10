# 문자열을 내림치순으로 정렬
test_case = input()
answer = list()
for _ in test_case:
    answer.append(_)
answer.sort(reverse=True)
print(''.join(answer))
