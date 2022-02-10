VPSs = int(input())
for num in range(VPSs):
    VPS = list(input())
    idx = 0
    checkVPS = 0
    for idx in range(len(VPS)):
        if VPS[idx] == '(':
            checkVPS += 1
        elif VPS[idx] == ')':
            checkVPS -= 1
        if checkVPS < 0:
            messge = 'NO'
            break
    messge = 'YES' if not checkVPS else 'NO' 
    print(messge)