# 🚀 Portfolio Personal — [Tu Nombre]

Portfolio personal de desarrollador de software, con diseño **Clean Tech**: minimalista, oscuro por defecto y con detalles inspirados en interfaces de desarrollador.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![Lucide](https://img.shields.io/badge/Lucide_Icons-000000?logo=lucide&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/license-MIT-slategray?style=flat-square)

🔗 **Demo en vivo:** [tu-portfolio.vercel.app](https://tu-portfolio.vercel.app) _(reemplazar tras el deploy)_

---

## 📋 Descripción

Sitio web de una sola página (SPA) que presenta mi perfil como **Desarrollador de Software / Técnico Universitario en Programación (UNAHUR)**. Incluye presentación, proyectos destacados, stack técnico, formación académica y contacto directo.

Construido con foco en:
- Código limpio y componentes desacoplados.
- Diseño responsive (mobile-first).
- Rendimiento: sin dependencias innecesarias, build liviano con Vite.

---

## 📁 Estructura de carpetas

```
mi-portfolio/
├── public/
│   └── CV-Tu-Nombre.pdf        # CV descargable desde el Hero
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navegación fija + scroll suave
│   │   ├── Hero.jsx             # Presentación principal + CTAs
│   │   ├── Projects.jsx         # Grid de tarjetas de proyectos
│   │   ├── Skills.jsx           # Paneles de stack técnico
│   │   ├── About.jsx            # Sobre mí + formación UNAHUR
│   │   └── Contact.jsx          # Contacto (mailto) + footer
│   ├── data/
│   │   └── projects.js          # Array de proyectos (editable)
│   ├── App.jsx                  # Ensamblado de secciones
│   ├── main.jsx                 # Entry point de React
│   └── index.css                # Tailwind + fuentes + estilos base
├── index.html
├── tailwind.config.js
├── vercel.json
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución local

**Requisitos:** Node.js 18+ y npm.

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/mi-portfolio.git
cd mi-portfolio

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

**Build de producción:**

```bash
npm run build   # Genera la carpeta /dist
npm run preview # Previsualiza el build localmente
```

---

## ✏️ Cómo personalizar tus datos

Antes de publicar el sitio como propio, revisá y editá lo siguiente:

| Archivo | Qué reemplazar |
|---|---|
| `src/data/projects.js` | Agregá, quitá o editá tus propios proyectos (título, problema/solución, tags, links de GitHub y demo). |
| `src/components/Hero.jsx` | `[Tu Nombre]`, links de GitHub/LinkedIn y la ruta del CV (`SOCIAL_LINKS`). |
| `src/components/Navbar.jsx` | Logo con tu nombre y links sociales (`SOCIAL_LINKS`). |
| `src/components/Contact.jsx` | Email real, GitHub y LinkedIn (`CONTACT`). |
| `public/CV-Tu-Nombre.pdf` | Reemplazar por tu CV real, manteniendo el mismo nombre de archivo o actualizando la ruta en `Hero.jsx`. |

> 💡 Tip: buscá el texto `tu-usuario`, `[Tu Nombre]` y `tu.email@ejemplo.com` en todo el proyecto para no olvidarte ningún placeholder.

---

## 🛠️ Stack técnico

- **React 18** — librería de UI.
- **Vite** — bundler y servidor de desarrollo.
- **Tailwind CSS** — estilos utilitarios.
- **lucide-react** — set de íconos.

---

## 📄 Licencia

Este proyecto está bajo licencia MIT. Sentite libre de usarlo como base para tu propio portfolio.
