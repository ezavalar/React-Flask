from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas las rutas, se recomienda especificar orígenes en producción, solo a donde se permite el acceso

@app.route('/') 
def holaMundo():
    return '¡Hola Mundo!'

@app.route('/api/usuarios')
def obtenerUsuarios():
    return {
        'users': ['Alice', 'Bob', 'Charlie']
    }

@app.route('/api/frutas')
def obtenerFrutas():
    return {
        'frutas': ['Manzana', 'Banana', 'Cereza']
    }

if __name__ == '__main__':
    app.run(debug=True) #Por defecto corre en el puerto 5000