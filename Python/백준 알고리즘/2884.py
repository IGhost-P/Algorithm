hour, minute = map(int, input().split())
if minute < 45:
    minute = 60 + (minute - 45)
    if hour > 0:
        hour = hour - 1
        print(hour, minute)  
    else:
        hour = 23
        print(hour, minute)
else:
    minute = minute - 45
    print(hour, minute)

##31233123
hour, minute = map(int, input().split()) 

if minute < 45 :	# 분단위가 45분보다 작을 때 
    if hour == 0 :	# 0 시이면
        hour = 23
        minute += 60 
    else :	# 0시가 아니면 (0시보다 크면)
        hour -= 1	
        minute += 60
        
print(hour, minute-45)	
