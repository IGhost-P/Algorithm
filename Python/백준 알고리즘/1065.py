
one_num = 0
inputNum = int(input())

for i in range(1, inputNum+1):
    if i < 100:
        one_num += 1
    else:
        compare_num = list(map(int, str(i)))
        if compare_num[2] - compare_num[1] == compare_num[1] - compare_num[0]:
            one_num += 1
print(one_num)
