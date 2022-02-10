clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]
answer = 0
hash_table = {}
value = 1


for item, kind in clothes:
    if kind in hash_table:
        hash_table[kind] += 1 
    else:
        hash_table[kind] = 1
for kind, idx in hash_table.items():
    value = value  * (idx + 1)
answer = value - 1

print(answer)
