def make_bricks(small, big, goal):
    max_big_inches = big * 5
    remaining_inches = goal - min(goal // 5, big) * 5
    
    return remaining_inches <= small