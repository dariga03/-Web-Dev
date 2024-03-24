N = int(input())
array = map(int, input().split())

count = 0
for num in array:
    if num > 0:
        count += 1

print(count)