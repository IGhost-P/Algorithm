genres = ["classic", "pop", "classic", "classic", "pop"]
plays =[500, 600, 150, 800, 2500]
answer = []

hash_table = {}
genres_tabel = {}
check_table ={}

for idx, (song, play) in enumerate(zip(genres, plays)):
    hash_table[idx] = song , play
    print(hash_table)
genres_tabel = sorted(hash_table.items(), key=lambda x: x[1], reverse=True)
for idx , (song, play) in genres_tabel:
    if song in check_table and check_table[song] < 2:
        answer.append(idx)
        check_table[song] += 1 
    elif song not in check_table:
        answer.append(idx)
        check_table[song] = 1
print(answer)


# 베스트 앨범
def solution(genres, plays):
    answer = []
    song_ea = len(genres)
    total_dic = {}
    for i in range(song_ea):
        if genres[i] not in total_dic.keys():
            total_dic[genres[i]] = {'total': plays[i], i: plays[i]}
        else:
            total_dic[genres[i]]['total'] += plays[i]
            total_dic[genres[i]][i] = plays[i]
    sorted_genres_list = sorted(
        total_dic.items(), key=lambda x: x[1]['total'], reverse=True)

    for j in range(len(sorted_genres_list)):
        genre_dic = sorted_genres_list[j][1]
        sorted_songs_list = sorted(
            genre_dic.items(), key=lambda x: x[1], reverse=True)
        k = 1
        while k <= 2:
            answer.append(sorted_songs_list[k][0])
            if (len(sorted_songs_list) < 3):
                break
            k += 1
    return answer

print(solution(genres,plays))