dwarf_list: list = []

while True:
    input_num = int(input())
    dwarf_list.append(input_num)
    if len(dwarf_list) == 9:
        break
length = len(dwarf_list)
total = sum(dwarf_list)
for idx in range(length):
    for dwaf_2 in dwarf_list[idx+1:]:
        dwarf = dwarf_list[idx]
        faker = dwarf + dwaf_2
        if faker == (total-100):
            dwarf_list.pop(idx)
            dwarf_list.pop(dwarf_list.index(dwaf_2))
            answer_list= sorted(dwarf_list)
            for answer in answer_list:
                print(answer)
            break
                
# remove로 풀었으면 더 깔끔했을듯. 어차피 브루투 포스 인건 같다
# list = [int(input()) for i in range(9)] 이렇게 입력을 받았으면 더욱 깔끔했겠다.