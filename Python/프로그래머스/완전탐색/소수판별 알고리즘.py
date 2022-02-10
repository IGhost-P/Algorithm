from itertools import *


def is_prime_number(x):
    # 2부터 (x - 1)까지의 모든 수를 확인하며
    for i in range(2, x):
        # x가 해당 수로 나누어떨어진다면
        if x % i == 0:
            return False  # 소수가 아님
    return True  # 소수임


def solution(numbers):
    # 넘버를 리스트로 나눈뒤에 해당 숫자들을 조합으로 바꾸고
    # 문자열로 더하고, 숫자로 바꾼뒤에
    # 소수 조건에 맞추면 될것 같은데
    # 소수란 ? 자기 자신으로 밖에 나누지 못하는것 즉, n을 소인수 분해 했을때 1,n 밖에 없음
    # 근데 이걸 조건으로 어떻게 받을까..? => 1이상 7 이하이니깐 쉽게 for문을 돌리면될듯
    # 17 이면 1,7 17, 71
    # 011 이면 , 0, 1, 10, 11 101, 110 이렇게..?
    # 소수를 for문으로 돌리면서, => 그 안에 해당 number가 있으면 될거 같은데..?
    answer = 0
    for x in range(1, len(numbers)+1):
        perms = [''.join(p) for p in permutations(numbers, x)]
        for perm in set(perms):
            if(perm[0] != '0' and int(perm) != 1):
                if(is_prime_number(int(perm))):
                    answer += 1
    return answer


numbers = "011"
print(solution(numbers))
