up, down, total = map(int, input().split())
go = up - down

day = (total-down)/(up-down)
print(int(day) if day == int(day) else int(day)+1)
