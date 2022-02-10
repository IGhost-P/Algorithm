first_num = int(input())
second_num = int(input())
third_num = int(input())
result_num =list(str(first_num * second_num * third_num))
for i in range(10):
    print(result_num.count(str(i)))
# 커밋 용임