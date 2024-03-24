def parrot_trouble(talking, hour):
   
    if talking and (hour < 7 or hour > 20):
        return True

    return False

# Test cases
print(parrot_trouble(True, 6))   # Output: True
print(parrot_trouble(True, 7))   # Output: False
print(parrot_trouble(False, 6))  # Output: False