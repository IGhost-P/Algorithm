input_num = int(input())
for i in range(input_num):
    print_str = ''
    input_str = list(map(str, input().split()))
    for string in input_str[::-1]:
        print_str += string + ' ' 
    print("Case #%d:"%(i+1),print_str)
# 입력 받고,
# 리스트로 받은 뒤에, for문을 거꾸로 주면서 다시 하나하나 조합 해준뒤에
# 문자열 포멧팅을 이용해 제출함