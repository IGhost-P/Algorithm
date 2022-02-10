from collections import deque

from collections import deque

priorities = [1, 1, 9, 1, 1, 1]
location = 0

# index = [idx for idx in range(len(priorities))]
# priorities = deque([ (v,i) for v,i in zip(priorities,index)])
# while len(priorities) !=0:
#     checker = priorities.popleft()
#     if len(priorities) !=0 and checker < max(priorities):
#         print("큰값: ",max(priorities))
#         priorities.append(checker)
#         location -= 1
#         continue
#     priorities.insert(0,checker)
#     break
# if (location <0):
#     answer = len(priorities) + location + 1
# else:
#     answer = location + 1
# print(priorities)
# print(answer)
prior_list = [(prior, idx) for idx, prior in enumerate(priorities)]

for (idx, prior) in prior_list:
    checker = prior_list.pop(0)
    if checker < max(prior_list):
        prior_list.append(checker)
    else:
        prior_list.insert(0, checker)
