import hashlib


test_case = input()

result = hashlib.sha256(test_case.encode())
print(result.hexdigest())
