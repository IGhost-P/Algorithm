# 나선 수열
# 정삼각형의 변의 길이 이다. 111 세번있고 나서
# 여튼 결국 변 2를 만들기 위해서 1 1 이 필요했었고
# 3은 2+1이 필요하고
# 4는 3+1이 필요하다
# 5는 4+ 1
# 7은 5(4+1)+2 => 여기서부터 중복이 발생한다 즉, 차이는 총 4칸 차이
input_T = int(input())
i = 0
while i < input_T:
    input_N = int(input())
    N_list = [1, 1, 1, 2, 2, 3, 4, 5]
    for idx in range(8, 100):
        N_list.append(N_list[idx-1] + N_list[idx-5])
    i += 1
    print(N_list[input_N-1])
