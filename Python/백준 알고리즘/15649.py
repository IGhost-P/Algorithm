N, M = list(map(int, (input().split())))

result = [0]*M
is_visited = [False]*N

print(result, is_visited)


def combination(level):
    if level == M:
        return print(' '.join(map(str, result)))
    for i in range(0, N):
        if is_visited[i]:
            continue
        result[level] = i + 1
        is_visited[i] = True
        combination(level+1)
        is_visited[i] = False


combination(0)
