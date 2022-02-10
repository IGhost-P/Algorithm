num = int(input()) # 26
originNum = num # 26
cycle = 1 # 얼마나 반복했나?
while True:
    first = num//10 # 2
    second = num % 10 # 6 
    addNum = first+second # 8
    newNum = second*10 + addNum%10 # 68
    if originNum == newNum:
        print(cycle)
        break
    num = newNum
    cycle +=1