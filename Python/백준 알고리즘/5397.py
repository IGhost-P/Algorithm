input_num = int(input())

for _ in range(input_num):
    test_case = input()
    left = list()
    right = list()
    for txt in test_case:
        if txt == '<':
            try:
                right_soon = left.pop()
                right.append(right_soon)
            except:
                pass
        elif txt == '>':
            try:
                left_soon = right.pop()
                left.append(left_soon)
            except:
                pass
        elif txt == '-':
            try:
                left.pop()
            except:
                pass
        else:
            left.append(txt)
    print(''.join(left + right[::-1]))
