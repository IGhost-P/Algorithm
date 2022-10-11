import sys

rr = sys.stdin.readline
MM = 987654321

def update(node, l, r, target):
    if target < l or target > r: return seg[node]
    if l == r:
        if L[target]: seg[node] = target
        else:seg[node] = MM
        return seg[node]

    mid = (l+r)//2
    seg[node] = min(update(node*2, l, mid, target), update(node*2+1, mid+1, r, target))
    return seg[node]

def query(node, l, r, wl, wr):
    if (l > wr or r < wl): return MM
    if (wl <= l and r <= wr): return seg[node]
    mid = (l+r)//2
    return min(query(node*2, l, mid, wl, wr), query(node*2+1, mid+1, r, wl, wr))


N, Q = map(int, rr().split())
L = [0] + list(map(int, rr().split()))
seg = [MM]*(4*N)

print(N, Q, L, seg)

for i in range(1, N+1):
    if L[i]: update(1, 1, N, i)

now = 1

for _ in range(Q):
    cmd = list(map(int, rr().split()))
    if cmd[0] == 1:
        L[cmd[1]]^=1
        update(1, 1, N, cmd[1])
    elif cmd[0] == 2:
        now = (now+cmd[1])%N
        if now == 0: now = N
    elif cmd[0] == 3:
        a = query(1, 1, N, now, N)
        if a != MM:
            print(a-now)
            continue
        a = query(1, 1, N, 1, now)
        if a != MM:
            print(a-now+N)
            continue
        print(-1)
