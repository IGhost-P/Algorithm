T = int(input())
for _ in range(T):
    M, N, K = map(int, input().split(" "))
    Map = [[0] * N for _ in range(M)]
    cnt = 0
    for _ in range(K):
        row, col = map(int, input().split(" "))
        Map[row][col] = 1
    for row in range(M):
        for col in range(N):
            if Map[row][col] == 1:
                queue = []
                queue.append((row, col))
                while queue:
                    r, c = queue.pop(0)
                    if Map[r][c] == 1:
                        Map[r][c] = 0
                        if r - 1 >= 0:
                            queue.append((r - 1, c))
                        if r + 1 < M:
                            queue.append((r + 1, c))
                        if c - 1 >= 0:
                            queue.append((r, c - 1))
                        if c + 1 < N:
                            queue.append((r, c + 1))
                cnt += 1
    print(cnt)
