N = int(input())

col = [0]*(N+1)
count = 0


def check(x):
    for i in range(x):
        if col[x] == col[i]:
            return False
        if abs(col[x]-col[i]) == x - i:
            return False
    return True


def solution(x):
    global count
    if x == N:
        count += 1
    for i in range(N):
        col[x] = i
        if check(x):
            solution(x+1)


solution(0)
print(count)
