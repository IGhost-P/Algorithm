
def solution(begin, target, words):
    # 우선 dict를 만든다 => 값은 비교해서 1자리만 다른 경우
    # 만들어진 dict 그래프롤 BFS를 돌리고, 돌리다가 visited가 target이 되면 해당 visited 리스트의 길이 -1를 반환하면될듯
    # 그리고 해당 값과 꺼낸 값과 한번 돌때마다 한글자 차이여야함
    # hit -> hot -> dot
    if target not in words:
        return 0

    answer = 0
    word_list = list()
    dif = int()
    dif_word = list()
    word_list.append(begin)
    while True:
        for word in word_list:
            dif_word.clear()
            for word_cp in words:
                dif = 0
                for idx in range(0, len(begin)):
                    if word[idx] != word_cp[idx]:
                        dif += 1
                    if dif > 1:
                        break
                if dif == 1:
                    dif_word.append(word_cp)
                    words.remove(word_cp)
        answer += 1
        if target in dif_word:
            return answer
        else:
            word_list = dif_word


begin = "hit"
target = "cog"
words = ["hot", "dot", "dog", "lot", "log", "cog"]
print(solution(begin, target, words))
