class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __repr__(self):
        return f"Dog(name={self.name}, age={self.age})"
    
# Object instantiation
my_dog = Dog(name="Buddy", age=3)
