'''
계수정렬을 이용
'''

import sys

test_case = int(input())
answer_li = [0]*10001
for i in range(test_case):
    input_num = int(sys.stdin.readline())
    answer_li[input_num] += 1

for i in range(10001):
    if (answer_li[i] != 0):
        for idx in range(answer_li[i]):
            print(i)
