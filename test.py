# Define a Node class to represent each element in the linked list
class Node:
    def __init__(self, data):
        self.data = data  # Data stored in the node
        self.next = None  # Reference to the next node in the list

# Define a LinkedList class to represent the linked list and its operations
class LinkedList:
    def __init__(self):
        self.head = None  # Initialize an empty linked list with no head

    def is_empty(self):
        return self.head is None  # Check if the linked list is empty

    def append(self, data):
        new_node = Node(data)  # Create a new node with the given data
        if self.head is None:
            self.head = new_node  # If the list is empty, set the new node as the head
            return
        last_node = self.head
        while last_node.next: # until the last node is met (with Node.next = None)
            last_node = last_node.next # Set the next of the new node to the current head
        last_node.next = new_node  # Append the new node at the end of the list

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head  # Set the next of the new node to the current head
        self.head = new_node  # Set the new node as the new head

    def delete(self, data):
        if self.head is None:
            return

        if self.head.data == data:
            self.head = self.head.next  # If the head contains the data, move the head to the next node
            return

        current_node = self.head
        while current_node.next and current_node.next.data != data:
            current_node = current_node.next

        if current_node.next:
            current_node.next = current_node.next.next  # Skip the node containing the data to delete it

    def display(self):
        current_node = self.head
        while current_node:
            print(current_node.data, end=" -> ")  # Print the data in the current node
            current_node = current_node.next
        print("None")  # Print None to indicate the end of the list

# Example usage:
linked_list = LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.prepend(0)
linked_list.display()

linked_list.delete(2)
linked_list.display()