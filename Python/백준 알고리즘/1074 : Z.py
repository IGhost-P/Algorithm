def recursive(n, x, y):
    global result
    if (n == 2):
        if x == X and y == Y:
            print(result)
            return
        result += 1
        if x == X and y+1 == Y:
            print(result)
            return
        result += 1
        if x + 1 == X and y == Y:
            print(result)
            return
        result += 1
        if x + 1 == X and y + 1 == Y:
            print(result)
            return
        result += 1
        return
    recursive(n/2, x, y)
    recursive(n/2, x, y + n/2)
    recursive(n/2, x + n/2, y)
    recursive(n/2, x + n/2, y + n/2)


result = 0
N, X, Y = map(int, input().split(' '))
recursive(2**N, 0, 0)
