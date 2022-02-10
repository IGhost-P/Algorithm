# 첫번쨰 입력값에 맞게 연산자를 해야햔다 => swith 문을 사용해야하는걸까?
# 어쩔떈 최대 어쩔떈 최소, 현재 heapq 는 우선 순위 이기 떄문에 
# ? 근데 그냥 지우면 되는거 아님?
# operations = ["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]
operations =["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]

import heapq
def solution(operations):
    answer = []
    i = 0
    for oper in operations:
        l_v, r_v = oper.split()
        int(r_v)
        if(l_v == 'I'):
            heapq.heappush(answer,int(r_v))
        elif(l_v == 'D') and (r_v == '1'):
            if(len(answer) != 0):
                answer.remove(max(answer))
        elif(l_v == 'D') and (r_v == '-1'):
            if(len(answer) != 0):
                heapq.heappop(answer)
    if (len(answer) == 0):
        answer = [0,0]
    else:
        max_num = max(answer)
        min_num = min(answer)
        answer = [max_num,min_num]
    return answer

print(solution(operations))
