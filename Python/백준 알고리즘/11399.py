# 분해 할수 없고
# 최소로 걸리는 시간으로
# 더해가면서 하면 될거 같은데?

input_N = input()
input_li = list(map(int, input().split()))
total = int()
sum_num = int()
input_li.sort()
for time in input_li:
    total += time
    sum_num += total
print(sum_num)
