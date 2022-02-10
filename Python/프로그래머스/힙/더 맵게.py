# import collections
# from typing import Deque
# def solution(scoville, K):
#     answer = 0
#     i = 0
#     while True:
#         scoville = Deque(scoville)
#         fstSco = scoville.popleft()
#         secSco = scoville.popleft()
#         newSco = fstSco + (secSco * 2)
#         scoville.appendleft(newSco)
#         i += 1
#         print("섞어진 스코필", newSco)
#         if (newSco >= K):
#             return i
#         else:
#             # 앗 시발 데큐는 sort를 못쓰자너
#             # 힙큐를 사용해봐야겠다
# scoville: list = [1, 2, 3, 9, 10, 12]
# K : int = 7
# print("정답",solution(scoville,K))

# 두번째 코드 정확도는 100% 이지만 효율성에서 시간 초과가 난다.
import heapq
def solution(scoville, K):
    lenght = len(scoville)
    heapq.heapify(scoville)
    answer = 0

    while lenght >= 2:
        fstSco = heapq.heappop(scoville)
        lenght -= 1
        if fstSco >= K:
            return answer
        answer += 1
        secSco = heapq.heappop(scoville)
        newSco = fstSco + (secSco * 2)
        heapq.heappush(scoville, newSco)
    if heapq.heappop(scoville) >= K:
        return answer
    else:
        return -1
scoville: list = [1, 2, 3, 9, 10, 12]
K : int = 1000
print("정답",solution(scoville,K))

## 세번째 코드 , 그냥 리스트로 해보자
# def solution(scoville, K):
#     answer = 0
#     scoville : list
#     i = 0
#     while True:
#         fstSco = scoville.pop(0)
#         secSco = scoville.pop(0)
#         newSco = fstSco + (secSco * 2)
#         scoville.append(newSco)
#         scoville.sort()
#         i += 1
#         if (newSco >= K and scoville[0] >= K):
#             return i
#         if (newSco < K) and len(scoville) == 1:
#             return -1
# scoville: list = [1, 2, 3, 9, 10, 12]
# K : int = 1000
# print("정답",solution(scoville,K))