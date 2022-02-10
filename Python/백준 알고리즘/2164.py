
from collections import deque
n = int(input())
card_list = deque()
for i in range(1,n+1):
    card_list.append(i)

while (len(card_list)!= 1):
    card_list.popleft()
    card_list.append(card_list.popleft())
print(card_list[0])
