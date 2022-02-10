# elif로 경우의 수를 모두 만들면 될것 같은데?
input_str = input()
answer = 0

if ( 'c=' in input_str ):
    answer += 1
if ( 'c-' in input_str):
    answer += 1
if ( 'dz=' in input_str):
    answer += 1
if ( 'd-' in input_str):
    answer += 1
if ( 'lj' in input_str):
    answer += 1
if ( 'nj' in input_str):
    answer += 1
if ( 's=' in input_str):
    answer += 1
if ( 'z=' in input_str):
    answer += 1
print(answer)
# 보기랑 좀 다른데..???