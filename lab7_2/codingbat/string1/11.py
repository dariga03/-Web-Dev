def non_start(a, b):
    return a[1:] + b[1:]

print(non_start('Hello', 'There'))  # Вывод: 'ellohere'
print(non_start('java', 'code'))    # Вывод: 'avaode'
print(non_start('shotl', 'java'))   # Вывод: 'hotlava'