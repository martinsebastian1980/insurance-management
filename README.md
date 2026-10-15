# Insurance Management

Sistema de gestión de clientes y pólizas de seguros desarrollado con **Node.js, Express, MongoDB y Handlebars**.

La aplicación permite administrar clientes, crear y gestionar pólizas, y mantener la relación entre cada cliente y sus pólizas asociadas.

Este proyecto forma parte de mi portfolio de desarrollo Backend y tiene como objetivo aplicar conceptos de desarrollo web, operaciones CRUD, persistencia de datos y organización de una aplicación con Node.js.

## 🚀 Tecnologías

- **Node.js** — entorno de ejecución de JavaScript.
- **Express** — framework para el servidor y las rutas.
- **MongoDB** — base de datos NoSQL.
- **Mongoose** — modelado y gestión de datos en MongoDB.
- **Express Handlebars** — motor de plantillas para las vistas.
- **JavaScript** — lenguaje de programación.
- **Git y GitHub** — control de versiones y alojamiento del código.

## 📋 Funcionalidades

### 👤 Gestión de clientes

- Crear clientes.
- Listar clientes.
- Consultar el detalle de un cliente.
- Editar la información de los clientes.
- Cambiar el estado de un cliente.
- Visualizar las pólizas asociadas a cada cliente.

### 📄 Gestión de pólizas

- Crear pólizas.
- Listar pólizas.
- Editar pólizas.
- Activar pólizas.
- Dar de baja pólizas.
- Asociar pólizas a clientes.
- Consultar el estado de cada póliza.

## 🔗 Relación entre clientes y pólizas

Cada póliza está asociada a un cliente mediante el campo `accountId`.

Desde el detalle de un cliente es posible consultar sus pólizas asociadas y crear una nueva póliza directamente desde ese cliente.

Esta relación permite organizar la información y consultar las pólizas correspondientes a cada registro de cliente.

## 🗄️ Base de datos

El proyecto utiliza **MongoDB** como sistema de almacenamiento y **Mongoose** para definir los modelos y gestionar las operaciones con la base de datos.

La conexión se configura mediante variables de entorno.

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/martinsebastian1980/insurance-management.git
```

### 2. Ingresar al directorio del proyecto

```bash
cd insurance-management
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las variables que requiere la aplicación para conectarse a MongoDB.

Usar los nombres de variables definidos en el código del proyecto. No publicar credenciales ni datos sensibles en GitHub.

### 5. Iniciar la aplicación

Ejecutar el comando configurado en `package.json`. Por ejemplo, si el proyecto tiene el script `dev`:

```bash
npm run dev
```

Si utiliza otro script de inicio, ejecutar el que esté definido en el proyecto.

## 🎯 Objetivo del proyecto

Este proyecto busca poner en práctica conceptos fundamentales del desarrollo Backend:

- Desarrollo de aplicaciones con Node.js y Express.
- Implementación de operaciones CRUD.
- Modelado de datos con MongoDB y Mongoose.
- Relación entre entidades.
- Organización y gestión de rutas.
- Renderizado de vistas con Handlebars.
- Uso de Git y GitHub para el control de versiones.

## 👨‍💻 Autor

**Martin Espindola**

Portfolio de proyectos Backend en desarrollo.

GitHub: [martinsebastian1980](https://github.com/martinsebastian1980)
