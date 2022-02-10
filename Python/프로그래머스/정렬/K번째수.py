array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]

def solution(array, commands):
    answer = []
    for command in commands:
        start = command[0] - 1
        end = command[1] 
        idx  = command[2] - 1
        sliced_array = array[start:end]
        # 정렬
        for index1 in range(len(sliced_array)+1):
            swap = False
            for index2 in range(len(sliced_array) - index1- 1):
                if sliced_array[index2] > sliced_array[index2+1]:
                    sliced_array[index2], sliced_array[index2+1] = sliced_array[index2+1], sliced_array[index2]
                    swap = True
            if swap == False:
                break
        # 확인
        print("만들어진것", sliced_array)
        result_value = sliced_array[idx]
        answer.append(result_value)
    return answer
print(solution(array,commands))