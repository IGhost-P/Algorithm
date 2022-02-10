# input_num = input()
import math
input_num= list(input())
result = 0

def floor_num(num): 
    group_num= ord(num) - 65
    if (group_num == 18) or (group_num == 21) or (group_num == 24) or (group_num == 25):
        group = math.floor(group_num/3) + 2
    else : 
        group = math.floor(group_num/3) + 3
    return group

for num in input_num:
    result += floor_num(num)

print(result)

number = ['ABC','DEF','GHI','JKL','MNO','PQRS','TUV','WXYZ']
alphabet = list(input())
time = 0
for i in alphabet : 
    for j in number :
        if i in j :
            time = time + (number.index(j) + 3)
print(time)
print(alphabet)