#declaramos variables
'''x = 4
x = "wendy"
print(x)'''

#casting
'''x = float(3)
print(x)'''

#get the type
'''x = 5
y = "Gonzalo"
print(type(x))
print(type(y))'''

'''print("por favor dig. Tu nombre ")
nombre = input()
print("Nombre del Usuario: ", nombre)'''

'''print("Numero 1")
v1 = int(input())
print("Numero 2")
v2 = int(input())
resultado = v1 + v2
print("El resultado es: " , resultado)'''

#identacion
'''numero = int(input('Favor digitar un numero '))
if numero > 0:
    print(f'El valor del numero es {numero} y es positivo')
else:
    print(f'El valor del numero es {numero} y es negativo')'''
    
    
'''print("ESTACIONAMIENTO")

dia = input("Ingrese el dia de la semana (lunes, martes, miercoles, jueves, viernes, sabado o domingo): ")
tiempo = input("Ingresa la cantidad de horas y minutos de estacionamiento (HH:MM): ")

#Vamos a convertir las horas y minutos en solo minutos para ser exactos
horas, minutos = tiempo.split(":")
tiempo_minutos = int(horas) * 60 + int(minutos)

#determinamos cuento seria el precio
if dia in ["lunes", "martes", "miercoles"]:
    precio_por_hora = 2.00
elif dia in ["jueves", "viernes"]:
    precio_por_hora = 2.50
elif dia in ["sabado", "domingo"]:
    precio_por_hora = 3.00
else:
    print("Error: dia de la semana incorrecto")
    exit()
    
precio_total = precio_por_hora * (tiempo_minutos // 60 + (1 if tiempo_minutos % 60 > 5 else 0))

print("El precio total del estacionamiento es: $" + str(precio_total))'''

    
"""a ='''es un lenguaje de programación ampliamente utilizado en las aplicaciones web,
el desarrollo de software, la ciencia de datos y el machine learning (ML).'''"""

'''a ="""es un lenguaje de programación ampliamente utilizado en las aplicaciones web,
el desarrollo de software, la ciencia de datos y el machine learning (ML)."""
print(a)'''

'''for x in range(6):
    print(x)'''

'''for x in range(2, 6):#inicia desde el 2 hasta el 6
    print(x)'''

'''for x in range(2, 30, 3):#incrementa de 3
    print(x)'''
    
'''for x in "banana":
    print(x)'''
    
'''for x in range(6):
    if x == 3:
        print(x)
        break
    else:
        print("Finally finihed!")'''
        
'''i = 1
while i < 6:
    print(i)
    if i == 3:
        break
    i += 1'''
    
'''i = 0
while i < 6:
    i += 1
    if i == 3:
        continue
    print(i)'''
    
'''i = 1
while i < 6:
    print(i)
    i += 1
else:
    print("i no es menor a 6")'''

#recorrer
'''txt = "the best things in life are free!"
print("free" in txt)'''

'''txt = "the best things in life are free!"
if "expenive" not in txt:
    print("No, 'expensive' is NOT present.")'''
    
'''b = "hello world!"
print(b[2:5])'''

'''b = "hello world!"
print(b[2:])'''

'''b = "hello world!"
print(b[:5])'''

'''b = "hello world!"
print(b[-2:-5])'''

'''age = 36
txt = "my name is Gonzalo, i am " + str(age)
print(txt)'''

#manejo de datos mediante listas

'''thislist = ["apple","banana","cherry"]
print(len(thislist))'''

'''thislist = ["apple","banana","cherry"]
print(thislist)'''

'''mylist = ["apple","banana","cherry"]
print(type(mylist))'''

'''fruits = ["apple","banana","cherry","kiwi","mango"]
newlist = [x for x in fruits if "a"in x]
print(newlist)'''

#manejo de datos mediante dictionaries

'''thisdict = {
            "brand": "Ford",
            "model": "Mustang",
            "year": 1964
            }

print(thisdict["brand"])
print(len(thisdict))
print(type(thisdict))

x = thisdict.get("model")
x = thisdict.keys()
print(x)'''








car = {
        "brand": "Ford",
        "model": "Mustang",
        "year": 1964
      }


#obtener las claves el diccionarios
x = car.keys()
print(x) #before the change
car["color"] = "white"
print(x)

#obtener los valores el diccionarios
x = car.values()
print(x) #before the change
car["year"] = 2020 #actualizar
car.update({"year": 2020})
print(x) #after the change
print(car)