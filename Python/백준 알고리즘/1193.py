input_num = int(input())
line = 1
while input_num > line:
    input_num -=line
    line += 1

if (line+1)%2 == 1 :
    head = input_num
    body = line-input_num + 1
    
else :
    head = line-input_num + 1
    body = input_num

print(head,"/",body, sep="")