# 오름 차순 sort
test_case = int(input())
answer = list()

for _ in range(test_case):
    num = int(input())
    answer.append(num)
answer.sort()
for _ in range(test_case):
    print(answer[_])
