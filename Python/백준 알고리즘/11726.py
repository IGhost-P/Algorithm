# 2*n의 크기를  1*2 와 2*1로 채우는 방법을 구해라..
# 우선 크기를 정해보자, 2, 4, 6, 8 ,10 이라할때
# 2는 1*2 와 2*1이 있고
# 4는 1*2+ 1*2(가로, 세로) 또는 2*1 + 2*1(가로 세로) => 총 4번
# 6은 1*2 가 세번, 또는 2*1이 세번 , 1*2, 2*1 가 두번이면 => 4크기 방법과 똑같다,
# 왜
# 즉, 2 = 2가지 방법, 4 = 4가지 방법 6 = 2+4= > 6가지 방법
# 그렇담 f(1) = 2 , f(2) = 4 f(3) = 6으로 정하고 들어가도 되겠다

# 아 이게 2 * 1 이면 => 2개 크기 이게 크기가 아니라 해당 사이즈로 봐야하는건가봄,
# 2*1 => 가로 2 세로 1 인 것만
# 즉 f(1) 일땐 = 1개
# f(2) 일떈 2
# f(3) 일땐 3개
input_num = int(input())
input_list = [0 for num in range(input_num)]
input_list[0] = 1
if(input_num > 1):
    input_list[1] = 2
if(input_num > 2):
    input_list[2] = 3
if (input_num > 2):
    for idx in range(2, len(input_list)):
        input_list[idx] = input_list[idx - 1] + input_list[idx - 2]
result = int(input_list[input_num - 1]) % 10007
print(result)
