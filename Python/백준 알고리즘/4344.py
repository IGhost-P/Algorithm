test_case = int(input())
high_scoer = 0
sum = 0
for i in range(test_case):
    sum = 0
    student_average = 0
    scoer = 0
    high_scoer = 0
    student_average_high_socer = 0
    test_case_2 = list(map(int, input().split()))
    test_case_student = test_case_2[0]
    test_case_student_socer = test_case_2[1:test_case_student+1]
    for scoer in test_case_student_socer:
        sum += scoer
    student_average = sum/test_case_student
    for socer in test_case_student_socer:
        if student_average < socer:
            high_scoer += 1
    student_average_high_socer = high_scoer / len(test_case_student_socer) * 100
    print(f'{student_average_high_socer :.3f}%')
