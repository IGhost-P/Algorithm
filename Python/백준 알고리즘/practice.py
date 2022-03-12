from unittest import result


def dfs(level, BeginWith):
    if level == r:
        print(result)
        return
    for i in range(BeginWith, len(n)):
        result[level] = n[i]
        dfs(level + 1, i + 1)


n = [i + 1for i in range(10)]
r = 3
result = [0] * r
dfs(0, 0)
