

# 🎣 E-commerce de Pesca

Un e-commerce moderno para amantes de la pesca, desarrollado con React y Vite. La aplicación permite a los usuarios explorar y comprar equipos de pesca, con funcionalidades como filtrado de productos, carrito de compras y más.

## 🚀 Características

- Catálogo de productos de pesca
- Filtrado y búsqueda de productos
- Carrito de compras
- Detalles de productos
- Páginas informativas (Sobre Nosotros, Contacto)
- Diseño responsivo con Tailwind CSS

## 🛠️ Tecnologías

- **Frontend**: React 19
- **Estilización**: Tailwind CSS
- **Enrutamiento**: React Router DOM
- **Gestión de estado**: Context API
- **Iconos**: React Icons
- **Bundler**: Vite

## 📦 Dependencias principales

```json
"dependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.9.4",
  "tailwindcss": "^4.1.15"
}
```

## 🚀 Cómo empezar

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd e-commerce
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Estructura del proyecto

```
src/
├── assets/         # Recursos estáticos
├── auth/           # Lógica de autenticación
├── components/     # Componentes reutilizables
├── context/        # Contextos de React
├── mock/           # Datos de prueba
└── pages/          # Componentes de páginas
```

## 🎨 Componentes principales

- **Card**: Muestra la información básica de un producto
- **Navbar**: Barra de navegación principal
- **Footer**: Pie de página
- **ItemListContainer**: Contenedor de la lista de productos
- **ItemDetailContainer**: Detalle de un producto específico

## 🌐 Rutas

- `/` - Página de inicio
- `/category/:id` - Categorías de productos
- `/item/:id` - Detalle de producto
- `/about` - Sobre nosotros
- `/contact` - Contacto
- `/cart` - Carrito de compras

## 🛠️ Próximas mejoras

- [ ] Sistema de autenticación de usuarios
- [ ] Integración con pasarela de pago
- [ ] Sistema de reseñas de productos
- [ ] Filtros avanzados de búsqueda
- [ ] Lista de deseos
