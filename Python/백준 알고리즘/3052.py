i = 0
remainder_num= []
while i < 10:
    num =int(input())
    remainder_num.append(num%42)
    set_num = set(remainder_num)
    i += 1
print(len(set_num))
