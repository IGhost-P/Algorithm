'''
문제
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 정점 번호는 1번부터 N번까지이다.
'''
# 노드의 개수 , 연결된 간선의 개수, 탐색을 시작할 정점의 번호를 준다
# 예제를 파악해보면
'''
4 5 1
1 2
1 3
1 4
2 4
3 4
이런식으로 예제가 들어왔는데, 대충 보면 1이라는 노드에 연결되어 있는 노드는 2,3,4 이고 2는 4, 3은 4이런식인것 같다
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


def DFS(graph, start_node):
    visited, need_visit = list(), list()
    need_visit.append(start_node)

    while need_visit:
        node = need_visit.pop()
        if node not in visited:
            visited.append(node)
            need_visit.extend(graph[node])

    return visited


N, M, V = list(map(int, input().split()))
i = 0
keyed = 0
graph = [[] for _ in range(N+1)]
value_list = list()
new_graph = dict()
bfs_graph = dict()

while i < M:
    key, value = map(int, input().split())
    graph[key-1].append(value)
    graph[value-1].append(key)
    i += 1
for idx, value in enumerate(graph):
    value.sort(reverse=True)
    new_graph[idx+1] = value

print(new_graph)

answers = DFS(new_graph, V)
print(*answers, sep=' ')
for idx, value in enumerate(graph):
    value.sort()
    bfs_graph[idx+1] = value
answers = BFS(new_graph, V)
print(*answers, sep=' ')

# 아 알았다
'''
graph = dict()
graph['1'] = ['2']
graph['2'] = []
graph['3'] = ['4', '1']
graph['4'] = []
graph['5'] = ['4', '2']
이거봐 좀 이상하잖아
분명 5는 4,2 랑 연결되어있는데, 4에는 아무런게 없네?
'''
