binary_number = input()
decimal_number = 0 

for i in range(len(binary_number)):
    digit = int(binary_number[len(binary_number) - i - 1])  # Получаем цифру
    decimal_number += digit * (2 ** i)  # Умножаем цифру на 2 в степени ее позиции и добавляем к общей сумме

print(decimal_number)