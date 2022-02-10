def solution(distance, rocks, n):
    answer = 0
    # 출발지점 -> 도착지점 사이에 바위
    # 2, 14 , 11 ,21, 17이라면 => 0:출발~ 27: 도착지점
    # 이중에서 21,17을 지우면
    # 0 : 2, 11, 14 - 25 도착지점 => 다음 바위까지의 거리 는? 2, 9 , 3, 11
    # 이중 거리의 최솟값은 2
    # 이렇게 제거해야할 바위 n개를 주어지고, 그중 가장 값이 적은것을 탐색해야한다.
    # 근데 이 최솟값을 구하는게 mid쪽으로 가야하고
    # 어떻게 이진탐색을 해야하는가..

    # 접근 방법 1 : 돌을 치우고 -> 바위간의 거리 이진 탐색
    # 접근 방법 2 : 가장 작은 거리 <-> 가장 큰 거리 , 그리고 mid보다 작은 바위들을 제거, 하지만 제거한게 n 보다 크면 안됨
    rocks.sort()
    left, right = 1, distance
    while left <= right:
        cnt = 0
        prev = 0
        mid = (left + right) // 2
        distance_li = list()
        for rock in rocks:
            if mid > rock - prev:
                cnt += 1
            else:
                prev = rock
        if n < cnt:
            right = mid - 1
        else:
            left = mid + 1
            answer = mid
    return answer
