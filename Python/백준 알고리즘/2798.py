N, M = map(int, input().split())
input_list = list(map(int, input().split()))
answer = list()

for idx in range(N-2):
    for idx_2 in range(idx+1, N-1):  # range는 해당 부분에서 시작한다는것을 생각 안했음 ㅠ
        for idx_3 in range(idx_2+1, N):
            input_sum = input_list[idx] + input_list[idx_2] + input_list[idx_3]
            # print(input_list[idx], input_list[idx_2],
            #   input_list[idx_3], input_sum)
            if (input_sum <= M):
                answer.append(input_sum)
print(max(answer))
# print(answer)
