N = int(input())
arr = []
for _ in range(N):
    arr.append(input())
canArr = [[0] * N for _ in range(N)]
cantArr = [[0] * N for _ in range(N)]


for i in range(N):
    for j in range(N):
        canArr[i][j] = arr[i][j]
        cantArr[i][j] = arr[i][j].replace('R', 'G')


can_count = 0
cant_count = 0
for i in range(N):
    for j in range(N):
        if canArr[i][j] == 'R' or canArr[i][j] == 'G' or canArr[i][j] == 'B':
            r = i
            c = j
            main_color = canArr[r][c]
            queue = []
            queue.append((r, c))
            while queue:
                r, c = queue.pop(0)
                if canArr[r][c] == main_color:
                    canArr[r][c] = 'X'
                    if r - 1 >= 0:
                        queue.append((r - 1, c))
                    if r + 1 < N:
                        queue.append((r + 1, c))
                    if c - 1 >= 0:
                        queue.append((r, c - 1))
                    if c + 1 < N:
                        queue.append((r, c + 1))

            can_count += 1

        if cantArr[i][j] == 'G' or cantArr[i][j] == 'B':
            r = i
            c = j
            main_color = cantArr[r][c]
            queue = []
            queue.append((r, c))
            while queue:
                r, c = queue.pop(0)
                if cantArr[r][c] == main_color:
                    cantArr[r][c] = 'X'
                    if r - 1 >= 0:
                        queue.append((r - 1, c))
                    if r + 1 < N:
                        queue.append((r + 1, c))
                    if c - 1 >= 0:
                        queue.append((r, c - 1))
                    if c + 1 < N:
                        queue.append((r, c + 1))

            cant_count += 1

print(can_count, cant_count)
