# input_Num : int = int(input())
# n_list : list  = [0,1]
# rand_list : list = []
# for idx in range(input_Num):
#     rand = int(input())
#     rand_list.append(rand)

# answer_list : list = []
# # 되는지 먼저 확인
# max_num = max(rand_list)
# max_num_idx = rand_list.index(max_num)
# is_sorted = (sorted(rand_list[max_num_idx:])[::-1] == rand_list[max_num_idx:])

# i = 0
# j = 1

# if not is_sorted: print("NO")
# else:
#     while len(rand_list) > i:
#         if rand_list[i] <= n_list[-1]:
#             n_list.pop()
#             print("-")
#             i += 1
#         else:
#             n_list.append(j)
#             print("+")
#             j += 1
input_num : int = int(input())
count = 0
result = []
stack = []
no_message = True

for i in range(input_num):
    input_data : int = int(input())
    
    while count < input_data:
        count +=1
        stack.append(count)
        result.print("+")

    if stack[-1] == input_data:
        stack.pop()
        result.append("-")
    else:
        no_message = False
        break
if no_message == False:
    print("No")
else:
    print("\n".join(result))        
