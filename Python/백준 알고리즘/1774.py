# from collections import defaultdict
# import math


# def getDist(point1, point2):
#     X = abs(point1[0] - point2[0])
#     Y = abs(point1[1] - point2[1])
#     return math.sqrt((X*X) + (Y*Y))


# def find(node):
#     if parent[node] != node:
#         parent[node] = find(parent[node])
#     return parent[node]


# def union(node_v, node_u):
#     root1 = find(node_v)
#     root2 = find(node_u)

#     if rank[root1] > rank[root2]:
#         parent[root2] = root1
#     else:
#         parent[root1] = root2
#         if rank[root1] == rank[root2]:
#             rank[root2] += 1


# def make_set(node):
#     parent[node] = node
#     rank[node] = 0


# god_num, alreay = list(map(int, input().split()))

# parent = dict()
# rank = dict()
# point = list()
# graph = defaultdict(list)
# mst = list()
# answer = 0

# for _ in range(god_num):
#     x, y = list(map(int, input().split()))
#     point.append([x, y])

# length = len(point)

# for i in range(length):
#     graph['vertices'].append(i)

# [al_p1, al_p2] = list(map(int, input().split()))
# al_p1 -= 1
# al_p2 -= 1
# for i in range(god_num):
#     for j in range(god_num):
#         graph['edges'].append([getDist(point[i], point[j]), i, j])
# edges = graph['edges']


# for node in graph['vertices']:
#     make_set(node)


# union(al_p1, al_p2)
# print(parent, rank)
# edges.sort()
# for edge in edges:
#     weight, node_v, node_u = edge
#     if find(node_v) != find(node_u):
#         union(node_v, node_u)
#         mst.append(edge)
#         answer += edge[0]
#         print(edge)
# # print('%.2f' % answer)


import sys
input = sys.stdin.readline


def find(c):
    if par[c] == c:
        return c
    else:
        par[c] = find(par[c])
    return par[c]


def union(a, b):
    a, b = find(a), find(b)
    par[max(a, b)] = min(a, b)


def check(a, b):
    return find(a) == find(b)

# a통로와 b통로의 거리를 구하는 함수


def dist(a, b):
    return ((a[0] - b[0])**2 + (a[1] - b[1])**2)**(1/2)


N, M = map(int, input().split())
par = [i for i in range(N)]
coordinate, graph = [], []
answer = 0
for _ in range(N):
    x, y = map(int, input().split())
    coordinate.append((x, y))
# 이미 연결되어 있는 통로 union해주기
for _ in range(M):
    x, y = map(int, input().split())
    union(x-1, y-1)

# 각 통로들 사이의 거리를 구해서 graph에 넣는 과정
for i in range(N-1):
    for j in range(i+1, N):
        graph.append((i, j, dist(coordinate[i], coordinate[j])))
# 거리순으로 오름차순 정렬
graph.sort(key=lambda x: x[2])
print(graph)
for i in graph:
    if not check(i[0], i[1]):
        union(i[0], i[1])
        answer += i[2]
print('%.2f' % (answer))
