def solution(triangle):
    # 밑에 있는건 위에걸 더해서 생성이된다
    # 즉 새로운 2차원 배열을 만들면된다, 그러면서 큰값만 채워주면됨
    # [[7],[10,15],[18,16,15]] .. 이런식으로 배열을 만들어나간뒤에, 마지막 배열에서 가장 큰 수를 뽑으면된다
    answer = 0
    new_number: int = 0
    new_number_list: list = []
    new_triangle: list = []
    for level, number_list in enumerate(triangle):
        for idx, number in enumerate(number_list):
            if level < 1:
                new_number += number
            # 맨 왼쪽일때
            elif idx == 0:
                new_number = new_triangle[level-1][0] + number
            # 맨 오른쪽일때
            elif idx == level:
                new_number = new_triangle[level-1][-1] + number
            else:
                number += new_triangle[level-1][idx] if new_triangle[level -
                                                                     1][idx] > new_triangle[level-1][idx-1] else new_triangle[level-1][idx-1]
                new_number = number
            new_number_list.append(new_number)
        if level == len(triangle) - 1:
            answer = max(new_number_list)
        new_triangle.append(new_number_list)
        new_number = 0
        new_number_list = []

    return answer


triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
print(solution(triangle))
