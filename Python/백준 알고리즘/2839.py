input_num = int(input())
r_num = 0

num = 0
five_num = 0
three_num = 0
while input_num != r_num:
    r_num = 5 * five_num + 3 * three_num
    if(r_num > input_num):
        five_num -= 1
        if(five_num < 0):
            five_num = -1
            three_num = 0
            break
        three_num += 1
    elif(r_num < input_num):
        five_num += 1

print(five_num + three_num)

# 일차방정식에 five가 우선적으로 할당이 되고, 초과 할 경우 five를 지운뒤, three를 올린다
# 하지만 five 가 음수가 되었는데도, three로 해결이 안되면, 맞는 무게가 아니다 라고 생각하고 품