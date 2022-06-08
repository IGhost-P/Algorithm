# 10799 : 쇠막대기
arr = input()
stack = list()
answer = int(0)
for idx in range(len(arr)):
    if arr[idx] == ')':
        stack.pop()
        if arr[idx - 1] == '(':
            answer += len(stack)
        else:
            answer += 1
    else:
        stack.append(arr[idx])
print(answer)
