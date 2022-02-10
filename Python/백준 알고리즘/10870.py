inputNum = int(input())
fibo : list = [0,1]
i = 2
while len(fibo) <= inputNum:
    put_num = fibo[i-2] + fibo[i-1]
    fibo.append(put_num)
    i += 1
print(fibo[inputNum])
# 재귀 돌리고
# -1로 하면 0,1 일때 에러 나니깐, 걍 입력 n으로 넣었다