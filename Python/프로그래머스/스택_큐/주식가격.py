# 그니깐 총 시간이 끝날ㄷ을때, 주가를 생각해보는거지
# 뒤에 있는 애들로 인해 바뀌게 되겠네
from collections import deque
prices = [5, 4, 1, 0, 1]
prices_life_time =[]


while len(prices) != 0 :
    max_num = prices.pop(0)
    life = len(prices)
    for i in prices:
        if max_num > i: 
            life = prices.index(i) + 1
            break
    prices_life_time.append(life)
answer = prices_life_time
print(answer)