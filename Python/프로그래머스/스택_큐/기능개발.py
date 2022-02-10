progresses = [93, 30, 35]
speed = [1,30,5]

clear_day =[]
lunch_day = 0
answer = []

for p,s in zip(progresses, speed):
    clear_count = (100 - p) // s
    if(100 - p) % s > 0:
        clear_count += 1
    clear_day.append(clear_count)
while len(clear_day) != 0:
    max = clear_day.pop(0)
    lunch_day = 1
    while len(clear_day) != 0 and max >= clear_day[0]: 
        lunch_day += 1
        clear_day.pop(0)
    answer.append(lunch_day)
print(answer)
