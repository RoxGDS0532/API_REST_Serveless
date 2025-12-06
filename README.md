# API_REST_Serveless
Este proyecto es una API REST para gestionar usuarios (crear, listar y obtener por ID).
Los datos se almacenan en memoria en un archivo local JSON, y la API está construida con Node.js y Serverless Framework.

---

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/RoxGDS0532/API_REST_Serveless.git
cd api-user
```

2. Instalar las dependencias:

```bash
npm install
```

3. Asegurarse de tener Serverless Framework instalado globalmente:

```bash
npm install -g serverless
```

---

## Ejecución local

Puede ejecutar la API localmente usando **serverless-offline**:

```bash
serverless offline
```

Esto iniciará un servidor local y mostrará los endpoints disponibles, generalmente en:

```
http://localhost:3000
```

---

## Endpoints

### 1. Crear un usuario

* **Método:** POST
* **URL:** `/dev/users`
* **Body JSON:**

```json
{
  "name": "José",
  "email": "jose@gmail.com",
  "phone": "4364581254",
  "address": "Colima 12"
}
```

* **Respuestas:**

  * `201 Created` → Usuario creado exitosamente.
  * `400 Bad Request` → Si falta algún campo o el formato es incorrecto.

---

### 2. Listar todos los usuarios

* **Método:** GET

* **URL:** `/dev/users`

* **Respuestas:**

  * `200 OK` → Devuelve un array con todos los usuarios.

---

### 3. Obtener un usuario por ID

* **Método:** GET

* **URL:** `/dev/users/{id}`

* **Respuestas:**

  * `200 OK` → Devuelve el usuario correspondiente.
  * `404 Not Found` → Si no se encuentra el usuario con el ID proporcionado.

---

## Pruebas

Puede probar los endpoints usando **Postman** siguiendo estos pasos:

### 1. Crear un usuario

* Método: **POST**
* URL: `http://localhost:3000/dev/users`
* Body: selecciona `raw` y `JSON`, luego ingresa:

```json
{
  "name": "José",
  "email": "jose@gmail.com",
  "phone": "4364581254",
  "address": "Colima 12"
}
```

### 2. Listar todos los usuarios

* Método: **GET**
* URL: `http://localhost:3000/dev/users`

### 3. Obtener un usuario por ID

* Método: **GET**
* URL: `http://localhost:3000/dev/users/1`
* Cambia `1` por el ID del usuario que quieras consultar.


---

## Estructura del proyecto

```
src/
├─ data/
│  └─ usersDB.js        # Lógica de almacenamiento de usuarios
├─ functions/           # Función Lambda independiente que se expone como un endpoint HTTP
│  ├─ createUser.js     
│  ├─ listUsers.js
│  └─ getUser.js
├─ libs/
│  └─ response.js       # Funciones de respuesta (success / error)
serverless.yml           # Configuración de Serverless Framework
package.json
README.md
```

---

## Notas

* Los datos se almacenan **temporalmente en memoria o JSON local**, por lo que se perderán al reiniciar la API.
