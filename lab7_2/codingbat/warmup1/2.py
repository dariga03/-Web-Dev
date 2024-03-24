def monkey_trouble(a_smile, b_smile):
    if (a_smile and b_smile) or (not a_smile and not b_smile):
        return True
    return False

# Test cases
print(monkey_trouble(True, True))    # Output: True
print(monkey_trouble(False, False))  # Output: True
print(monkey_trouble(True, False))   # Output: False