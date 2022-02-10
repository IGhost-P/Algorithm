import sys
input_N = sys.stdin.readline()
input_N_list = list(map(int, input().split()))
input_M = sys.stdin.readline()
input_M_list = list(map(int, input().split()))


input_N_list.sort()


# def binary_search(value, start, end):
#     if start > end:
#         return False
#     median = (start + end) // 2
#     if input_N_list[median] > value:
#         return binary_search(value, start, median - 1)
#     elif input_N_list[median] < value:
#         return binary_search(value, median + 1, end)
#     else:
#         return True

# for item in input_M_list:
#     if binary_search(item, 0, input_N - 1):
#         print (1)
#     else:
# print (0)

def binary_search(data, search):
    if len(data) == 1 and search == data[0]:
        return print(1)
    if len(data) == 1 and search != data[0]:
        return print(0)
    if len(data) == 0:  # 데이터가 없는 경우
        return print(0)

    medium = len(data) // 2
    if search == data[medium]:
        return print(1)
    else:
        if search > data[medium]:
            return binary_search(data[medium+1:], search)
        else:
            return binary_search(data[:medium], search)


for M in input_M_list:
    binary_search(input_N_list, M)
