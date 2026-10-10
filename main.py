import pandas as pd
import matplotlib.pyplot as plt

data = pd.read_csv("students.csv")
print("data")

data.plot(x="name", y="marks",
kind="bar")
plt.show()