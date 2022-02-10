'''
그니깐 즉, 어떤 값을 주었을때, 생성자를 찾아라?
생성자는 M + M을 이루는 각 자리수를 더한것
시간 제한은 충분하니깐, 각 순서대로 분해합을 하면서, target과 맞으면 될것 같은데

198 + 1 + 9 + 8 = 216 
211 + 2+ 1+ 1 = 216
이중에서 가장 작은것

근데 없으면 0
'''
input_num = int(input())
answer = False

for num in range(input_num):
    target = num
    for num_detail in str(num):
        target += int(num_detail)
    if target == input_num:
        print(num)
        answer = True
        break
    else:
        target = 0
if not answer:
    print(0)
