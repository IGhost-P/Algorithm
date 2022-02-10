
# def solution(N, number):
# 가지수를 생각해보자면
# 5를 1번만 쓰먄 => 5 , -5 를 생각
# 5를 2번만 쓴다면 => 55, 5+5 5-5 5/5 5*5
# 5를 3번만 쓴다면 => 555, 바로뒤 55와 바로 2번뒤 5의 사칙연산이 이루어진다
# 이것을 계속 반복하게되는데
# 그렇담 5를 연속적으로 사용하는 숫자들 따로
# 그리고 바로 전 5를 연속적으로 사용한 숫자와, 바로 2번째전 5의 사칙연산이
# answer = -1
# if number == N:
#     return 1

# _li = [set() for i in range(8)]
# print(len(_li))
# for i in range(len(_li)):
#     _li[i].add(int(str(N)*(i+1)))

# for i in range(1, 8):  # i가 2 이면?
#     for j in range(i):  # j는 0과 1을
#         for op1 in _li[j]:  # 여기선 처음엔 _list[0]의 5가 오고
#             # 여기선 _li[1]의 op2 5+5 5-5 5*5 5//5 가 들어있을텐데 여기서 5+5가 먼저 들어가겠지,  끝나면 다음 5-5가 들어간다
#             for op2 in _li[i-j-1]:
#                 _li[i].add(op1+op2)  # 연산을수행한다, 5+5+5 , 5-5+5
#                 _li[i].add(op1-op2)  # 5-5+5 , 5-5-5
#                 # 5*5. .. 이런식으로 _li[2] 다음번쨰 수에 들어가게 된다, 이런식으로 리스트를 만들어나가고
#                 _li[i].add(op1*op2)
#                 if op2 != 0:
#                     _li[i].add(op1//op2)
#     if number in _li[i]:  # 해당 넘버값이 되는 수를 찾으면 바로 리턴하면 된다.
#         answer = i+1
#         break

# return answer

# 저녁에 다시 풀어보자
def solution(N, number):
    dp_list = [set() for x in range(8)]
    for idx in range(8):
        dp_list[idx].add(int(str(N)*(idx+1)))
    for idx_1 in range(1, 8):  # 3
        for idx_2 in range(idx_1):  # 0,1,2 -> 1라 생각하자
            # 3번째 리스트는 를 이전 1칸 뒤에 있는 operator1 과 2칸 뒤에 있는 operator들과 반복해서 생긴걸 더 추가해줘야함 dp_list[1]에 있는 operatro는 ,555, 55+5, 55-5 .. .등등 반복,
            for operator_1 in dp_list[idx_2]:
                # 그릭 dp_list[0] 번째에 있는
                for operator_2 in dp_list[idx_1 - idx_2 - 1]:  # 3-1 = 2 - 1 = 1
                    dp_list[idx_1].add(operator_1+operator_2)
                    dp_list[idx_1].add(operator_1-operator_2)
                    dp_list[idx_1].add(operator_1*operator_2)
                    if operator_2 != 0:  # 나눌때 0이면 안됨
                        dp_list[idx_1].add(operator_1//operator_2)

        if number in dp_list[idx_1]:
            answer = idx_1 + 1
            break
    return answer


N = 5
number = 12
print(solution(N, number))
