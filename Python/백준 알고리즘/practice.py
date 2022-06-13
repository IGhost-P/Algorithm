
from xml.etree.ElementInclude import include

n = 5
W = 0
w = [0, -7, -3, -2, 5, 8]
totla = sum(w)
include = [False] * (n + 1)


def promising(i, weight, total):
    if ((weight + total >= W) and (weight == W or weight + w[i+1] <= W)):
        return True
    else:
        return False


def sum_of_subsets(i, weight, total):
    n = len(w) - 1
    if(promising(i, weight, total)):
        if weight == W:
            print(include[1:n + 1])
        else:
            include[i + 1] = True
            sum_of_subsets(i+1, weight + w[i+1], total - w[i+1])
            include[i + 1] = False
            sum_of_subsets(i + 1, weight, total - w[i+1])


print(totla)
sum_of_subsets(0, 0, totla)
