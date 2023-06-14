import gridmap
from dash import Dash, callback, html, Input, Output
import random
import pandas as pd
def generate_color(colors):
    color = "#{:06x}".format(random.randint(0, 0xFFFFFF))
    while color in colors:
        color = "#{:06x}".format(random.randint(0, 0xFFFFFF))
    colors.add(color)
    return color

colors = set()
data = []
categories = [i for i in range(1,28)]
months = ['January','February','April','March',
'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']#, 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
years=['2020']
for i in range(500):
    x=random.choice(categories)
    y=random.choice(months)+'-'+random.choice(years)
    timestamp=str(x)+'-'+y
    data_point = {
        'x': x,
        'y': y,
        'timestamp':timestamp,
        'value': random.randint(0, 100),
        'color': generate_color(colors)
    }
    data.append(data_point)

df=pd.DataFrame.from_dict(data)
df['timestamp']=pd.to_datetime(df['timestamp'],format='mixed')
df=df.sort_values(by='timestamp')
df['timestamp']=df['timestamp'].dt.strftime('%d-%m-%Y')
df=df.drop_duplicates()
app = Dash(__name__)

app.layout = html.Div([
    gridmap.GridMap(
        id='input',
       data=df.to_dict('records'),
       height=500,
       width=1000,
       show_axes=False

    ),
])


if __name__ == '__main__':
    app.run_server(debug=True)
