# C:\py_venv\kivy_venv\scripts\activate

from kivy.app import App
from kivy.properties import ObjectProperty
from kivy.core.window import Window
from kivy.lang import Builder

from kivy.uix.widget import Widget

Builder.load_file('gui.kv')

class Main(Widget):
    pass

class AnimeQuoteApp(App):
    def build(self):
        Window.size = (500, 1000)
        return Main()

if __name__ == '__main__':
    AnimeQuoteApp().run()
