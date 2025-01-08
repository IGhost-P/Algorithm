'''
p를 for문으로 돌리면서 나눠지는걸 보면 될듯
'''

input_num, idx = list(map(int, input().split()))
answer = list()
for num in range(1, input_num+1):
    if input_num % num == 0:
        answer.append(num)
try:
    print(answer[idx-1])
except:
    print(0)
