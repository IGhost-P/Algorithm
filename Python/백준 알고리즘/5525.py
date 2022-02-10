# IOI_pn = int(input())
# IOI_input_IOI_len = int(input())
# IOI_input = input()
# I = IOI_pn + 1
# O = IOI_pn
# IOI_cycle = I+O
# IOI = 'IOI'
# count = 0
# for i in range(IOI_input_IOI_len-IOI_cycle):
#     if IOI_pn > 1:
#         IOI += 'OI'
#         IOI_pn -= 1
        
#     elif IOI_pn == 0:
#         break
#     elif IOI_pn == 1:
#         if IOI in IOI_input[i:i+IOI_cycle]:
#             count += 1
#     print(IOI)
# print(count)

IOI_pn = int(input())
IOI_input_IOI_len = int(input())
IOI_input = input()
count = 0
pattern = 0
i = 1
while i < IOI_input_IOI_len-1:
  if IOI_input[i-1] == 'I' and IOI_input[i] == 'O' and IOI_input[i+1] == 'I':
    pattern += 1
    if pattern == IOI_pn:
      pattern -= 1
      count += 1   
    i += 1
  else:
    pattern = 0
  i += 1
  
print(count)
