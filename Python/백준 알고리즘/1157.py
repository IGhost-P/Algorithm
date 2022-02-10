put_str=input().upper()
alpabet =list(range(65,91))
list_will_append = 0
list_num =[]
highest_num = 0
for count_alpa in alpabet:
    list_will_append = put_str.count(chr(count_alpa))
    list_num.append(list_will_append)
for compare_num in list_num:
    if (int(compare_num) == int(max(list_num))  and (int(compare_num) > 0)):
        highest_num += 1
if highest_num > 1:
    print('?')
else :
    for count_alpa in alpabet:
        if put_str.count(chr(count_alpa)) == int(max(list_num)):
            print(chr(count_alpa))
# print('최고 숫자: ', highest_num)
# print('list_num :',list_num)
# print(max(list_num))