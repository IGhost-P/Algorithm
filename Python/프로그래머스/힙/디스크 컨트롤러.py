# 힙을 이용하게 된다면, 요청 부터 종료까지지를 생각해야하는데.
# 가장 좋은 스케줄링을 사용해야하는지, 아니면, 계산이후 가장 좋은 계산일 경우로 고정해야하는가 고민.
# 첫번째와 두번째로만 생각해보자, 첫번째가 들어오면, 두번쨰는 첫번째가 끝나야 실행할수있다.
# 그렇담 두번째 실행시간은, 첫번쨰작업의 종료 - 두번쨰 시작 시간 = 대기시간 + 두번쨰 작업시간을 하면 구할수 있따
# 이때 첫번쨰작업의 종료 - 두번쨰 시작 시간이 음수가 나온다면, 두번째 작업은 요청이 늦게 온거니 = 작업시간만 구하면 된다
# 자 이렇게 실행 시간을 구해 요청 작업 (길이) 만큼 나누면 평균을 구할수 있을것 같다

# 힙으로 생각해보자,, 부모 노드가 가장 빨리 시작해야한다, 그 이후에 자식 노드 중, 작업시간이 더 ?
# 힙은 단순히 자식 보다 큰게 부모인 경우만 생각하면 되는것인데
# 앗 그럼 순서를 아무렇게 바꾸면서, 평균을 구해서 그 평균을 힙에다가 넣으면, 루트 노드는 가장 최소가 나오지 않을까?
# 아니다 근데, 0을 루트 노드로 생각하고 이후에 하는게 맞는거 같은데

# 지금 여기서 사용하는 로직은 단순히 최소 소요시간만 보는것 같다.
jobs=[[0, 3], [1, 9], [2, 6]]
import heapq
def solution(jobs):
    heap_jobs : list = []
    heapq.heapify(heap_jobs)
    answer, end, pro_time , i = 0 , 0 , 0 , 0
    start = -1
    idx = len(jobs)
    while i < idx:
        for job in jobs:
            if start < job[0] <= end :
                heapq.heappush(heap_jobs,[job[1], job[0]])
        if len(heap_jobs) > 0 : # 3,0
            root_node= heapq.heappop(heap_jobs) # 없어
            start = end
            end += root_node[0]
            pro_time += end - root_node[1] # 실행 시간, 
            i += 1
        else:
            end += 1
    answer = pro_time
    return int(answer / idx)
print(solution(jobs))
# for job in jobs:
#     print(job) 