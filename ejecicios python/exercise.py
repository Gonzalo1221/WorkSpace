#multiplicar sin el Simbolo *
'''a = 0
b = 0
r = 0

a = int(input("Dig.n1: "))
b = int(input("Dig.n2: "))

for item in range(b):
    
    r += a

print(r) '''

#como saber el Fibonaci de un numero

a = 0
fibonacci_0 = 0
fibonacci_1 = 1
a = int(input("Dig.n1: "))

if a == 0 or a == 1:
    fibonacci_n = a
else:

    for i in range(2, a+1):
        fibonacci_n = fibonacci_0 + fibonacci_1
        fibonacci_0 = fibonacci_1
        fibonacci_1 = fibonacci_n
print("El número de Fibonacci de", a, "es", fibonacci_n)