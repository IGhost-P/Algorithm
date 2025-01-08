
import sys


def recursive(n, x, y):
    global result
    print("정상", "n:", n, "x:", x, "y:", y, "result:", result)
    if x == X and y == Y:
        print(result)
        exit(0)
    if n == 1:
        result += 1
        return
    # 크게 4등분중에 1~4사분면에 없으면 다음 사분면으로 넘어간다
    # 점차 다음 사분면을 찾아가는것
    # 1사분면을 다 뒤졌는데 없네? => result에 넘기고 2사분면으로
    # 2사분면을 다 뒤졌는데 없네? => result에 넘기고 3사분면으로

    if not (x <= X < x + n and y <= Y < y + n):

        result += n * n
        print("이거 뭐", "n:", n, "x:", x, "y:", y, "result:", result)
        return
    recursive(n/2, x, y)
    recursive(n/2, x, y + n/2)
    recursive(n/2, x + n/2, y)
    recursive(n/2, x + n/2, y + n/2)


result = 0
N, X, Y = map(int, sys.stdin.readline().split(' '))
recursive(2**N, 0, 0)
