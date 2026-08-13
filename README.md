# Insurance Management

Sistema de gestión de clientes y pólizas de seguros desarrollado con Node.js, Express, MongoDB y Handlebars.

El proyecto permite administrar clientes, crear y gestionar pólizas y relacionar cada póliza con su cliente correspondiente.

## 🚀 Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- Express Handlebars
- JavaScript
- Git
- GitHub

## 📋 Funcionalidades

### 👤 Clientes

- Crear clientes
- Listar clientes
- Consultar detalle de un cliente
- Editar clientes
- Cambiar estado del cliente
- Visualizar las pólizas asociadas a cada cliente

### 📄 Pólizas

- Crear pólizas
- Listar pólizas
- Editar pólizas
- Activar pólizas
- Dar de baja pólizas
- Asociar pólizas a clientes
- Consultar el estado de cada póliza

## 🔗 Relación Clientes - Pólizas

Cada póliza está asociada a un cliente mediante su `accountId`.

Desde el detalle de un cliente se pueden visualizar sus pólizas asociadas y crear una nueva póliza directamente para ese cliente.

## 🗄️ Base de datos

El proyecto utiliza MongoDB como base de datos mediante Mongoose.

La conexión se configura mediante variables de entorno.

## ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/martinsebastian1980/insurance-management.git
