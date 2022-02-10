def solution(answers):
    answer = []
    # 1번 수포자는 1->5번까지 반복
    # 2번 수포자는 2 <-> 1,3,4,5 반복
    # 3번 수포자는 3 -> 1 -> 2 -> 4 -> 5 방식으로 2번씩
    # 간단하게 인덱스를 포인터로?
    fir_math_dropper = [1, 2, 3, 4, 5]
    fir = 0
    sec_math_dropper = [2, 1, 2, 3, 2, 4, 2, 5]
    sec = 0
    thr_math_dropper = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    thr = 0
    scored = list()
    for idx, answer in enumerate(answers):
        if (fir_math_dropper[idx % 5] == answer):
            fir += 1
        if (sec_math_dropper[idx % 8] == answer):
            sec += 1
        if (thr_math_dropper[idx % 10] == answer):
            thr += 1
    scores = [fir, sec, thr]
    for idx, score in enumerate(scores):
        if (score == max(scores)):
            scored.append(idx+1)
    return scored
