N = int(input())
answer = int()
for _ in range(N):
    string = input()
    stack = list()
    for char in string:
        if len(stack) == 0:
            stack.append(char)
        else:
            if stack[-1] == char:
                stack.pop()
            else:
                stack.append(char)
    if len(stack) == 0:
        answer += 1
print(answer)
