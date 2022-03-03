# string = input("7문자 이상 문자열을 입력하시오")
string = "Hello World"
m = string[:3] + string[-3:-1]  # -1 전까지..
print(m)
