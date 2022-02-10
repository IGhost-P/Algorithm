test_case = int(input())
for i in range(test_case):
    floor = int(input())
    room= int(input())
    live_bottom_list = [ x for x in range(1,room+1)]
    for floor_num in range(floor):
        result = floor_num
        for room_num in range(1,room):
            live_bottom_list[room_num] += live_bottom_list[room_num-1]
    print(live_bottom_list[-1])