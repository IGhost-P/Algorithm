# 패턴을 찾아보자
# N = 1 => 1 (1한개) , N = 2 => 2 m N = 4 => 5개
# 정리해보면 f(1) = > 1 , f(2) => 2, f(3) => 3 개네.. f(4)=>5 개 f(6) =>
import sys
input_N = int(sys.stdin.readline())
f_list = [0] * 1000001
f_list[1] = 1
f_list[2] = 2
for idx in range(3, input_N+1):
    f_list[idx] = (f_list[idx-1] + f_list[idx-2]) % 15746
print(f_list[input_N])
