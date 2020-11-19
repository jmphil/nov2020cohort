

# 1. Create an empty class called "Student"
# class Student:
#     def __inti__(self, name):
#         self.name = name
        
#     def greeting(self, name):
        
#         return f'Good morning, {self.name}'

# 2. Create 5 students objects (instances of the class "Student") of "Student" types
    
# Matt = Student("Matt")
# Zach = Student("Zach")
# Matthew = Student("Matthew")
# Kim = Student("Kim")
# Ian = Student("Ian")

# print(Matt.greeting()
# print(Zach.greeting()
# print(Matthew.greeting()
# print(Kim.greeting()
# print(Ian.greeting()

# 3a. Create a "greeting" method inside of the class "Student" class that
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}"


# 4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

# 5a. Create a constructor for the Student class.
# 5b. Create a print statement inside of the constructor
# 5c. Run your lab.py again and you should see a print statement for each student object
# That you created

#  def __init__(self, name):
#         self.name = name

# 6a. Pass in "name" as a parameter to your Student constructor.
# 6b. Create an instance variable for name
# 6c. Refactor your greeting method by removing the name parameter and
# adding a "self" in front of the printed "name" variable in the return statement
# 6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated

# 7. Class Methods
# 7a. Create a "Class" method inside of the "Student" called "campus" that returns the
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument.
# 7b. call the campus method by invoking Student.campus()
# 7c. Call the campus method on each of the student objects
# 7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

# 8. Class Variables
# 8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
# 8b. Print to the console each class variable for each of the student objects, i.e.
# Michah.cohort
# 8c. Refactor your class method to print out the class variable when it is called
# 8d. Call the class method on the class (i.e. Student.campus())
# 8e. Call the class method on each object (i.e. Dan.campus())

# 9. Accessor Modifiers
# Refactor your constructor to take a parameter for studentID
# 9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
# 9b. Print the studentID value to the console
# Change the value of studentID to __studentID
# Print the value to the console (you should get an error)


# . Inheritance

# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"
class Car:
    def __inti__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    def car_type(self):
        print("Here are the details for this car")

# my_car = Car("2012", "Ford", "Explorer", "Gas")





# Create a new class called Hybrid that inherits from the Car class
#  with the following method: CarType which prints "I am a hybrid car"


class Hybrid(Car):


    def car_type(self):
        print("I am a hyrid car")


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car"

class Electric(Car):


    def car_type(self):
        print("I am an electric car")



prius = Hybrid("Toyota", "rius", "Blue")

tesla = Electric("Tesla", "ModelS", "white")


print(Prius.make)
prius.car_type
# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance
# Call the method Car Details on each instance


# Add the following instance variables to the Car class :
# - make
# - model
# - color


# Implicit Inheritance

# . Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION
