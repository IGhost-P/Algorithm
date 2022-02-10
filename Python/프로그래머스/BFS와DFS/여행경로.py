from collections import defaultdict


def dfs(graph, start_node, lenght):
    need_visit, visited = list(), list()
    need_visit.append(start_node)
    while len(visited) < lenght+1:
        node = need_visit.pop()
        if node not in visited:
            visited.append(node)
            need_visit.extend(graph[node])
        else:
            visited.append(node)
            graph[node].remove(graph[node][0])
            need_visit.clear()
            need_visit.extend()
        print(graph)
    return visited


def solution(tickets):
    # 이건 리얼 BFS인데?
    # 동일한 경우 2번째 알파벳이 우선
    answer = []
    # 딕셔너리와 아주 조합이 좋은 defauldict를 발견
    graph = defaultdict(list)
    # 동일한 경우 알파벳 우선을 위해 먼저 정렬을 함
    sort_tickets = sorted(tickets, key=lambda x: x[1], reverse=True)
    for ticket in sort_tickets:
        graph[ticket[0]].append(ticket[1])
    # print(graph)
    stack = ['ICN']
    while stack:
        tmp = stack[-1]
        print("그래프", graph)
        print("stack", stack)
        print("answer", answer)
        if not graph[tmp]:
            answer.append(stack.pop())
        else:
            stack.append(graph[tmp].pop())
    answer.reverse()

    return answer


# def solution(tickets):
#     answer = []
#     routes = defaultdict(list)

#     for ticket in tickets:
#         routes[ticket[0]].append(ticket[1])

#     for key in routes.keys():
#         routes[key].sort(reverse=True)

#     stack = ['ICN']
#     while stack:
#         tmp = stack[-1]

#         if not routes[tmp]:
#             answer.append(stack.pop())
#         else:
#             stack.append(routes[tmp].pop())
#     answer.reverse()

#     return answer


tickets = [["ICN", "B"], ["B", "ICN"], ["ICN", "A"], ["A", "D"], ["D", "A"]]
# ["ICN", "B", "ICN", "A", "D", "A"]
print(solution(tickets))
