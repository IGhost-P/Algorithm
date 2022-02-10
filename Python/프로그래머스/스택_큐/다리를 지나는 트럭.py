# 모든 트럭이 다리를 건널러면 몇초?
# 트럭 길이 -> 다리 길이, 트럭 무게 -> 다리 무게(완전히 오르지 않으면 ㄱㅊ)
from collections import deque
bridge_length = 100
weight = 100
truck_weights = [10]
truck_weights = deque(truck_weights)
passing_bridge = deque([0 for x in range(bridge_length)])
bridge_weight = 0
time = 0

while len(passing_bridge) !=0:
    arrived = passing_bridge.popleft()
    bridge_weight -= arrived
    time += 1
    if truck_weights:
        if bridge_weight + truck_weights[0] <= weight:
            left = truck_weights.popleft()
            bridge_weight += left
            passing_bridge.append(left)
        else:
            passing_bridge.append(0)
print(time)