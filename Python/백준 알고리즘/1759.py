

L, C = list(map(int, input().split(' ')))
arr = list(map(str, input().split(' ')))
answer = [0]*L
vowel = ['a', 'e', 'i', 'o', 'u']
arr.sort()


def dfs_combination(level, begin):

    if(level == L):
        count = 0
        flag = False
        for i in answer:
            if i in vowel:
                flag = True
            if not i in vowel:
                count += 1
        # print(flag, count)
        if not flag or count < 2:
            return
        return print(''.join(answer))

    for i in range(begin, C):
        answer[level] = arr[i]
        dfs_combination(level+1, i+1)


dfs_combination(0, 0)
