# 도둑이 훔칠 수 있는 돈의 최댓값을 저장하는 dp 테이블을 생성합니다. dp[i]는 1번부터 i번째 집까지 털었을 때 훔칠 수 있는 돈의 최댓값입니다.

# 만약 이전 집을 털었다면 현재 집은 털지 못하므로 dp[i]는 (바로 전 집까지 훔칠 수 있는 최댓값)와 (전전집까지의 훔칠 수 있는 최댓값 + 현재 집의 money) 두 가지 경우로 나뉩니다.

# 동적 계획법의 점화식은  dp[i] = max(dp[i-1], money[i] + dp[i-2])

# 1번 집을 털면 마지막 집은 털지 못한다
# 1번 집을 털지 않으면 마지막 집까지 털 수 있다

def solution(money):
    answer = 0
    # 1번집을 턴다는 가정의 동적 계획법
    dp1: list = [0]*len(money)
    # 1번집을 털지 않는다는 가정의 동적 계획법
    dp2: list = [0]*len(money)

    # 1번 집부터 털었을때
    for idx in range(1, len(money)-1):
        dp1[0] = money[0]
        dp1[idx] = max(dp1[idx-1], money[idx] + dp1[idx-2])

    # 1번 집부터 털지 않았을때
    for idx in range(1, len(money)):
        dp2[0] = 0
        dp2[idx] = max(dp2[idx-1], money[idx] + dp2[idx-2])

    return max(dp1[-2], dp2[-1])


money = [1, 2, 3, 4, 5]
print(solution(money))
# print(money[0::-2])
