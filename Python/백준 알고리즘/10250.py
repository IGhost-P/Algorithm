# 일단 호텔 층수가 가장 큰 for문일 테고
# 그다음 방수만큼 돌려야한는데
# 근데 채워지는건 세로로 채워지겠지..? 가까운걸 좋아한다고 하니깐
# 101 -> 201 -> 301 -> 102호 순으로
# 아 그럼, 방수를 가장 큰 for문으로 보고, 층수를 그다음 for문으 채워야할듯
input_test = int(input())
for testcase in range(input_test):
    input_H, input_W, input_N = list(map(int, input().split()))

    for W in range(1, input_W + 1):
        for H in range(1, input_H + 1):
            input_N -= 1
            if(input_N == 0):
                print(H*100+W)