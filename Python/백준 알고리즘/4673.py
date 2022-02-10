natural_num = set(range(1, 10001))  # 중복이 없는 전체 자연수
overlapping_num = set()  # 생성자가 있는 수들 (39는 33으로 만들어진다)

for i in range(1, 10001):
    for j in str(i):
        i += int(j)
    overlapping_num.add(i)  # 생성자에의해 만들어지는 수
self_num = sorted(natural_num - overlapping_num)  # 전체에서 - 생성자에의해 만들어진수 = 셀프 넘버
for view in self_num:
    print(view)  # 보여주자
