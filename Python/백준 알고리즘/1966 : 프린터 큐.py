'''
순서대로 => enumerate를 이용해서 index를 이용하자
1 0
5
는 문서 1이 있고, 0번째로 뽑히는걸 찾고 싶음, 1개 있는문서는 5의 가중치를 가짐

돌리면서, 가중치가 max이면 내보내고, 아니면 max가 나올떄까지 돌림
'''

from collections import deque


input_while = int(input())

while input_while:
    doc, idx = list(input().split())
    priority = list(input().split())
    priority_li = list()
    answer = int()
    for pri_idx, pri_dox in enumerate(priority):
        priority_li.append([int(pri_dox), pri_idx])
    priority_li = deque(priority_li)
    while priority_li:
        if priority_li[0][0] == max(priority_li)[0]:
            if priority_li[0][1] == int(idx):
                print(answer+1)
                break
            else:
                priority_li.popleft()
                answer += 1
        else:
            new_num = priority_li.popleft()
            priority_li.append(new_num)
    input_while -= 1
