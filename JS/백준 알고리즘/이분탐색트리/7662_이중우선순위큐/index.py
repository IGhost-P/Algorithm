import sys
import heapq
input = sys.stdin.readline

test= int(input())
for _ in range(test):
    k = int(input())
    min_heap = []
    max_heap = []
    vistied = [False] * 1000001
    for idx in range(k):
        op, num = input().split()
        if op == 'I':
            heapq.heappush(min_heap, (int(num), idx))
            heapq.heappush(max_heap, (-int(num), idx))
            vistied[idx] = True
        
        else:
            if num == '1':
                while max_heap and not vistied[max_heap[0][1]]:
                    heapq.heappop(max_heap)
                if max_heap:
                    vistied[max_heap[0][1]] = False
                    heapq.heappop(max_heap)
            else:
                while min_heap and not vistied[min_heap[0][1]]:
                    heapq.heappop(min_heap)
                if min_heap:
                    vistied[min_heap[0][1]] = False
                    heapq.heappop(min_heap)
                
    while max_heap and not vistied[max_heap[0][1]]:
        heapq.heappop(max_heap)
    while min_heap and not vistied[min_heap[0][1]]:
        heapq.heappop(min_heap)

    if max_heap and min_heap:
        print(-max_heap[0][0], min_heap[0][0])
    else:
        print('EMPTY')

