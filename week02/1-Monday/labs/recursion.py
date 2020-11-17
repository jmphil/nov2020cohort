# 1. Write a function called power which accepts a base and an exponent.
# The function should return the power of the base to the exponent.

# def power(base, exponent):
    
#     if exponent == 0:
#         return 1
#     return base * power(base, exponent -1)

# result = power(2, 5)

# print(result)


# def loopNTimes(n):
#     if (n <= 1):
#         return 'complete'
    
#     return loopNTimes(n-1)

# result = loopNTimes(5)

# print(result)

# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.


# def factorial(n):
#     if (n<=0):
#         return 1
    
#     return n * factorial(n-1)

# num = int(input("Enter a number: "))      

# result = factorial(num)

# print(result)


# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function

# def recursiveRange(n):
#     if n== [0]:
#         return 0

#     return int(n + (recursiveRange + 1))


# num = int(input("Enter a number: "))      
  
# result = recursiveRange(num)

# print (result)

# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse

# def reverse(n)




# print(result)
# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.

# def isPalindrome(i):
#     length=len(i)   
#     if length < 2:
#         return True
#     elif i[0] != i[-1]:
#         return False
#     else:
#         return isPalindrome(i[1:length - 1])

# num = input("Chose a word: ")

# result = isPalindrome(num)

# print (result)





# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them all

# def product(arr):

#     if len(arr) == 1:
#         return arr[0]
    
#     return arr[0] * product(arr[1:])

# result = product([1, 2, 3])

# print(result)
# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in teh Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.

# def fib(n)

def fib(n):
    if n < 2:
        return n

    return fib(n-1) + fib (n - 2)

result = fib(8)

print(result)