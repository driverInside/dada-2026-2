def bigger(arr):
    if not arr:
        return None
        
    bigger_val = arr[0]
    
    for i in range(1, len(arr)):
        if arr[i] > bigger_val:
            bigger_val = arr[i]
            
    return bigger_val
