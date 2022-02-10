inputNum = int(input())
i = 1
six = 1
temp = inputNum
roomNum = 0
while True:
    inputNum = temp
    if(inputNum > i):
        inputNum -= i
        roomNum += 1
        i = i + six * 6
        six += 1
        print(i)
    else:
        print(roomNum + 1)
        break
