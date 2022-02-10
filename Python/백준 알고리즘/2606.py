'''
탐색 알고리즘은 만들었으니,
딕셔너를 넣고 출력을 하면 되지 않을까?
'''


def BFS(graph, start_node):
    need_visit = list()
    visited = list()
    need_visit.append(start_node)
    while need_visit:
        node = need_visit.pop(0)
        if node not in visited:
            visited.append(node)
            need_visit.extend(graph[node])
    return visited


com_num = int(input())
start_node = int(input())
i = 0
graph = [[] for _ in range(com_num)]
new_graph = dict()


while i < start_node:
    key, value = map(int, input().split())
    graph[key-1].append(value)
    graph[value-1].append(key)
    i += 1

for idx, value in enumerate(graph):
    new_graph[idx+1] = value

print(len(BFS(new_graph, 1))-1)
