(static, variable, price ) = map(int, input().split())
if (variable - price) < 0:
    divi_num = price - variable
    result = static//divi_num
    print(result+1)
elif (variable - price) > 0:
    print(-1)
   

