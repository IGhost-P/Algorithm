participant = ["mislav","stanko","stanko","mislav"]
completion = ["mislav", "mislav", "stanko"]
answer = ''
dic ={}

for person in completion:
    if person in dic:
        dic[person] = dic[person] +1
    else:
        dic[person] = 1
for person in participant:
    if person not in dic:
        answer = person
    if dic[person] == 0:
        answer = person
    dic[person] = dic[person] -1 
print(answer)