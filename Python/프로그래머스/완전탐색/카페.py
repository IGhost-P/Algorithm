import math


def solution(brown, yellow):
    # 10 ,2 = 12칸 = 4*3
    # 24, 24= 48칸 = 8*6 인데 , 12*4는 안됨? => ㅇㅇ 24칸이 가질수없는 수
    # 아하 소인수 분해를 한뒤에, = 가로 크기 // 옐로우가, 높이 -2보다 크면 소인수분해를 더 해야함, 이렇게 구하면 될듯
    answer = []
    total = brown + yellow
    for col in range(3, total+1):
        row = total // col  # 1(col),48(row) , 2, 24 , 3,16, 4, 12, 6,8
        if total % col != 0:
            continue
        if yellow <= (row-2)*(col-2):
            return [row, col]
    return answer
