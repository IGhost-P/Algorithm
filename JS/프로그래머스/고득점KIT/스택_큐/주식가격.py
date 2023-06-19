#
# * 1. prices를 순차적으로 스택에다 담는다
# * 2. 순차적으로 담을때 만약 담겨질 값이 최상단 값보다 작은 경우 최상단값의 인덱스에다가 최상단값 인덱스 - 비교 인덱스를 넣어준다.
# * 3. 모든 스택이 담겨질 값보다 작은경우까지 반복한다.
# * 4. 마지막까지 담겨지지 않은 스택은 prices.length - 1 - 스택 인덱스를 넣어준다.
#

def solution(prices):
    answer = [0] * len(prices)
    stack = []
    for i in range(len(prices)):
        while stack and prices[stack[-1]] > prices[i]:
            top = stack.pop()
            answer[top] = i - top
        stack.append(i)
    while stack:
        top = stack.pop()
        answer[top] = len(prices) - 1 - top
    return answer

print(solution([1, 2, 3, 2, 3]))
