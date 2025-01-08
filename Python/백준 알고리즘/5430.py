'''
R은 정렬로 뒤집고
D는 pop을 하면 될것 같은데, 그렇게 쉽게 하지 않겠지..?
'''

from collections import deque
import sys

t = int(input())

for i in range(t):
    operator = sys.stdin.readline().rstrip()
    num_len = int(input())
    arr = sys.stdin.readline().rstrip()[1:-1].split(",")
    queue = deque(arr)

    rev = 0
    flag = 0
    if num_len == 0:
        queue = []

    for oper in operator:
        if oper == 'R':
            rev += 1
        elif oper == 'D':
            if len(queue) < 1:
                flag = 1
                print("error")
                break
            else:
                if rev % 2 == 0:
                    queue.popleft()
                else:
                    queue.pop()
    if flag == 0:
        if rev % 2 == 0:
            print("[" + ",".join(queue) + "]")
        else:
            queue.reverse()
            print("[" + ",".join(queue) + "]")
