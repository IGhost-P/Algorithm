setNumber = input()

useNum = [ 0 for x in range(10)] 

for num in setNumber: 
    if num =='6' or num =='9':
        if useNum[6] == useNum[9]: 
            useNum[6] += 1
        else:
            useNum[9] += 1
    else: 
        useNum[int(num)] += 1
print(max(useNum))
