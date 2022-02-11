test_case = int(input())
arr = list(map(int, input().split()))
set_arr = sorted(set(arr))
answer = {set_arr[i]: i for i in range(len(set_arr))}


for idx in arr:
    print(answer[idx], end=' ')
