
# m = 4
# n = 3
# puddles = [[2, 2]]
# row = [0]*m
# map_li = [row]*n
# map_go = map_li # 갹체 복사가 되네
# # print(map_li == [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
# # for puddle in puddles:
# # puddle_row = puddle[0] - 1
# # puddle_col = puddle[1] - 1
# # map_li = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
# map_go[0][0] = 100
# # print(puddle_col, puddle_row)

# print(map_go)
# a = [[10, 20], [30, 40], [50, 60]]
# a[0][0] = 100
# print(a)


m = 4
n = 3
puddles = [[2, 2]]


def solution(m, n, puddles):
    answer = 0

    arr = [[0 for y in range(m+1)] for x in range(n+1)]
    puddles_arr = [[0 for y in range(m+1)] for x in range(n+1)]
    for puddle in puddles:
        puddles_arr[puddle[1]][puddle[0]] = 1

    arr[1][1] = 1
    for x in range(1, n+1):
        for y in range(1, m+1):
            if x == 1 and y == 1:
                arr[x][y] = 1
                continue
            if puddles_arr[x][y] == 1:
                continue
            else:
                arr[x][y] = (arr[x-1][y] + arr[x][y-1]) % 1000000007

    return arr


print(solution(m, n, puddles))
