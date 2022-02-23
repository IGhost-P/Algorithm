from collections import defaultdict
import math


def getDist(point1, point2):
    X = abs(point1[0] - point2[0])
    Y = abs(point1[1] - point2[1])
    return math.sqrt((X*X) + (Y*Y))


def find(node):
    if parent[node] != node:
        parent[node] = find(parent[node])
    return parent[node]


def union(node_v, node_u):
    root1 = find(node_v)
    root2 = find(node_u)

    if rank[root1] > rank[root2]:
        parent[root2] = root1
    else:
        parent[root1] = root2
        if rank[root1] == rank[root2]:
            rank[root2] += 1


def make_set(node):
    parent[node] = node
    rank[node] = 0


god_num, alreay = list(map(int, input().split()))

parent = dict()
rank = dict()
point = list()
graph = defaultdict(list)
mst = list()
answer = 0

for _ in range(god_num):
    x, y = list(map(int, input().split()))
    point.append([x, y])

length = len(point)

for i in range(length):
    graph['vertices'].append(i)

[al_p1, al_p2] = list(map(int, input().split()))
al_p1 -= 1
al_p2 -= 1
for i in range(god_num):
    for j in range(god_num):
        graph['edges'].append([getDist(point[i], point[j]), i, j])
edges = graph['edges']


for node in graph['vertices']:
    make_set(node)

union(al_p1, al_p2)
edges.sort()
for edge in edges:
    weight, node_v, node_u = edge
    if find(node_v) != find(node_u):
        union(node_v, node_u)
        mst.append(edge)
        answer += edge[0]
print('%.2f' % answer)
