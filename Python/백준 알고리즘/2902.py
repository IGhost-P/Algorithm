input_num = list(input().split())
ascending = False
descending = False
for idx in range(1, len(input_num)):
    if input_num[idx] > input_num[idx-1]:
        ascending = True
    elif input_num[idx] < input_num[idx-1]:
        descending = True
if ascending and not descending:
    print('ascending')
elif not ascending and descending:
    print('descending')
else:
    print('mixed')
