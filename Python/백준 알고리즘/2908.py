(first, second) = input().split()
reverse_first = first[::-1]
reverse_second = second[::-1]

print(int(reverse_first)) if int(reverse_first) > int(reverse_second) else print(int(reverse_second))
