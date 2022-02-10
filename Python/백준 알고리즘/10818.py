num = int(input())
list_num = list(map(int, input().split()))
list_num.sort()
print(list_num[0], list_num[-1])