'''
union find를 이용해서, 네트워크 수를 더해줌
'''


from re import X


def find(node):
    if parent[node] != node:
        parent[node] = find(parent[node])
    return parent[node]


def union(node_x, node_y):
    x = find(node_x)
    y = find(node_y)

    if x != y:
        parent[y] = x
        net_num[x] += net_num[y]


test_case = int(input())

for _ in range(test_case):
    parent = dict()
    net_num = dict()
    friend_num = int(input())

    for num in range(friend_num):
        node_x, node_y = input().split(' ')

        if node_x not in parent:
            parent[node_x] = node_x
            net_num[node_x] = 1
        if node_y not in parent:
            parent[node_y] = node_y
            net_num[node_y] = 1
        union(node_x, node_y)

        print(net_num[find(node_x)])
