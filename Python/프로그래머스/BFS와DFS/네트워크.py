

network = int()


def BFS(graph, start_node):
    global network
    network += 1
    need_visit = list()
    visited = list()
    need_visit.append(start_node)
    node = ''
    print(graph)
    while need_visit:
        node = need_visit.pop()
        if node not in visited:
            visited.append(node)
            need_visit.extend(graph[node])
            del graph[node]
    if need_visit == [] and graph:
        # 더 큰값이 생기면 문제각 생김 1->3 하고 3다음은 4, 근데 봐야할껀 2이기 때문
        start_node = next(iter(graph))
        return BFS(graph, str(start_node))
    return network


def solution(n, computers):
    # 백준에서 풀었던 문제 같은데, 여기는 자기가 누군가와 연결되어있다면 연결 되었다고함
    # 네트워크를 적어도 1개의 간선이 있다면 네트워크라하고 하는것 같다
    # 딕셔너리를 통해서 서로 반대편에 있다면 +1 없으면 0으로 하면 될..? 안된다, 그냥 BFS를 통해서 연결이 되어있는지 확인해야한다
    # BFS로 돌리면서 vistied가 없다면 +1을 해주고, 다음 인덱스를 돌리면됨(이걸할려면, 들어갈때마다 pop해주고 딕셔너리의 1번째 인덱스를 사용)
    answer = 0
    graph = dict()
    value = list()
    for idx, computer in enumerate(computers):
        for idx_2, com in enumerate(computer):
            if(com != 0):
                value.append(str(idx_2))
        graph[str(idx)] = value
        value = []
    answer = BFS(graph, '0')
    return answer


# n = 3
# computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
# print(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]), 2)
# print(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]), 1)
print(solution(3, [[1, 0, 1], [0, 1, 0], [1, 0, 1]]), 2)
# print(solution(4, [[1, 1, 0, 1], [1, 1, 0, 0], [0, 0, 1, 1], [1, 0, 1, 1]]), 1)
# print(solution(4, [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]), 4)
