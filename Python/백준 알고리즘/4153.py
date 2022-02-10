( a, b, c ) = list(map(int,input().split()))
vaild = False
result = False
if(a**2 + b**2 == c**2 or a**2 == b**2 + c**2 or b**2 == a**2 + c**2 ):
    result = True
if (a >0 and b >0 and c >0):
    if(result):
        print('right')
    else:
        print('wrong')

