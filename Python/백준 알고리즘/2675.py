a, b = input().split()
a = int(a)
b = list(b)
P = ''
for x in b:
    for r in range(0, a):
        P += x

print(P)
