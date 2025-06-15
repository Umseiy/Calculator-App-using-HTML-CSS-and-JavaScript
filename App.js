import tkinter as tk

# Create the main application window
app = tk.Tk()
app.title("Click Counter App")

# Initialize the score (counter)
score = 0

# Function to increase the score
def increase():
    global score
    score += 1
    label.config(text=f"Score: {score}")

# Function to decrease the score
def decrease():
    global score
    score -= 1
    label.config(text=f"Score: {score}")

# Display label for the score
label = tk.Label(app, text=f"Score: {score}", font=("Arial", 24))
label.pack(pady=20)

# Increase button
increase_button = tk.Button(app, text="Increase", command=increase, font=("Arial", 16), bg="lightgreen")
increase_button.pack(pady=10)

# Decrease button
decrease_button = tk.Button(app, text="Decrease", command=decrease, font=("Arial", 16), bg="tomato")
decrease_button.pack(pady=10)

# Run the application
app.mainloop()
