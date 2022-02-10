IOI_pn = int(input())
IOI_input_IOI_len = int(input())
IOI_input = input()
I = IOI_pn + 1
O = IOI_pn
IOI_cycle = I+O
origin = 'I'
plus = 'OI'
P = origin + plus*IOI_pn
count = 0
for i in range(IOI_input_IOI_len-IOI_cycle): # 생성된 IOI패턴과 일치하는지 확인하는 문
    if P in IOI_input[i:i+IOI_cycle]:
        count += 1
print(count)
