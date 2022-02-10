'''
그니깐 0일때는 팝하고
아니면 계속 더하다가 더하면 되는거 아님?
'''

input_while = int(input())
answer = list()
while input_while:
    input_num = int(input())
    if input_num == 0:
        answer.pop()
    else:
        answer.append(input_num)
    input_while -= 1

print(sum(answer))
