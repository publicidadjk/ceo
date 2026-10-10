# ⚡ ELECTROBOX — Tarjeta de Presentación Digital Ejecutiva

Landing page oficial de tarjeta de presentación digital corporativa diseñada para el **Gerente General / CEO de ELECTROBOX**, concebida especialmente para su uso en misiones comerciales internacionales y viajes de negocios a **China**.

El sitio está optimizado para dispositivos móviles (**Mobile First**), pensado para ser abierto instantáneamente al escanear un código QR impreso en una tarjeta física corporativa.

---

## 📁 Estructura del Proyecto

```text
landing_page_ceo/
│
├── index.html           # Estructura semántica, meta tags SEO/OpenGraph y accesibilidad
├── style.css            # Diseño visual (Dark Obsidian, acentos #64FF01, Glassmorphism)
├── script.js            # Configuración centralizada del gerente y traducción dinámica (ES/EN/ZH)
├── contacto.vcf         # Archivo vCard 3.0 para guardar contacto en iPhone y Android
├── README.md            # Documentación completa de configuración y despliegue
│
└── assets/              # Carpeta de recursos gráficos
    ├── logo.png         # Logo oficial de ELECTROBOX
    ├── slogan.png       # Imagen oficial del eslogan de la empresa
    ├── profile.jpg      # Fotografía profesional del Gerente General
    └── wechat-qr.png    # Código QR oficial del perfil de WeChat
```

---

## 🎨 Identidad Visual y Tecnologías

* **Paleta:**
  * Fondo: *Obsidian Dark* (`#07080a`, `#0f1218`)
  * Acento Oficial: **Verde ELECTROBOX** (`#64FF01`) utilizado estratégicamente en anillos, bordes y botones clave.
  * Tipografía y Detalles: Blanco puro (`#ffffff`) y tonos plata/grafito de alta legibilidad.
* **Tecnología:** HTML5 + CSS3 + Vanilla JavaScript (100% libre de frameworks pesados o dependencias externas que puedan fallar en China).
* **Multi-idioma:** Español (`ES`), Inglés (`EN`) y Chino Simplificado (`中文`) sin recarga de página y persistente en `localStorage`.

---

## 🖼️ Dónde Colocar y Cómo Reemplazar las Imágenes

Para sustituir los archivos por tus imágenes oficiales de alta resolución, guárdalas dentro de la carpeta `assets/` manteniendo exactamente estos nombres:

| Archivo | Ubicación exacta | Descripción y Recomendación |
| :--- | :--- | :--- |
| **`logo.png`** | `assets/logo.png` | **Logo oficial de ELECTROBOX**. Formato PNG con fondo transparente o fondo oscuro. Se recomienda proporción horizontal (aprox. 800×220 px). |
| **`slogan.png`** | `assets/slogan.png` | **Imagen oficial del eslogan** (*"ELECTROBOX... RENUEVA TU HOGAR."*). PNG con fondo transparente para el pie de la tarjeta (aprox. 800×180 px). |
| **`profile.jpg`** | `assets/profile.jpg` | **Fotografía profesional del Gerente**. Formato JPG/PNG cuadrado (1:1, ej. 600×600 px o superior). |
| **`wechat-qr.png`** | `assets/wechat-qr.png` | **Código QR de WeChat**. Exportado directamente desde la app WeChat (*Yo > Mi perfil de QR / My QR Code*). Formato PNG cuadrado (mínimo 600×600 px). |

> **Nota:** La plantilla ya incluye imágenes provisionales de alta calidad para pruebas. Al copiar tus imágenes oficiales sobreescribiendo estos nombres, la página se actualizará automáticamente.

---

## ⚙️ Cómo Modificar los Datos del Gerente

Toda la información del ejecutivo se gestiona de forma centralizada en un solo archivo: [`script.js`](file:///d:/Pictures/FRANCISCO/ELECTROBOX/Repositorios/landing_page_ceo/script.js).

Abre `script.js` y localiza el bloque superior `CONFIG`:

```javascript
const CONFIG = {
  // Reemplaza por el nombre real del Gerente
  name: "NOMBRE_COMPLETO", 
  
  title: {
    es: "Gerente General / CEO",
    en: "General Manager / CEO",
    zh: "总经理 / 首席执行官"
  },
  
  company: "ELECTROBOX",
  
  // Teléfono y WhatsApp
  phoneFormatted: "+57 311 4445868",
  phoneRaw: "573114445868", // Sin símbolos para enlaces directos wa.me y tel:
  
  // Correo electrónico
  email: "Comercializadorajk.contabilidad@gmail.com",
  
  // Sitio web corporativo
  website: "https://electrobox.com.co",
  websiteDisplay: "electrobox.com.co",
  
  // WeChat ID para viaje a China
  wechatId: "electrobox_col",
  
  location: {
    es: "🇨🇴 Cúcuta · Norte de Santander · Colombia",
    en: "🇨🇴 Cúcuta · Norte de Santander · Colombia",
    zh: "🇨🇴 库库塔 · 北桑坦德省 · 哥伦比亚"
  },
  
  vcfFilename: "contacto.vcf"
};
```

Al cambiar cualquier valor en `CONFIG`, automáticamente se actualizan:
* Los botones táctiles de **Llamar**, **WhatsApp** y **Correo**.
* El enlace al **Sitio Web**.
* El identificador y botón de copia rápida de **WeChat**.
* La generación dinámica del contacto descargable (`.vcf`).

### Actualizar el archivo `contacto.vcf`
También debes actualizar las líneas correspondientes dentro de [`contacto.vcf`](file:///d:/Pictures/FRANCISCO/ELECTROBOX/Repositorios/landing_page_ceo/contacto.vcf) con el nombre real para garantizar compatibilidad con navegadores que opten por la descarga estática directa:

```vcf
BEGIN:VCARD
VERSION:3.0
FN:TU_NOMBRE_REAL
TITLE:Gerente General / CEO
ORG:ELECTROBOX
TEL;TYPE=CELL,VOICE:+573114445868
EMAIL;TYPE=WORK:Comercializadorajk.contabilidad@gmail.com
URL:https://electrobox.com.co
X-SOCIALPROFILE;TYPE=wechat:electrobox_col
END:VCARD
```

---

## 🚀 Publicación en GitHub Pages

Este proyecto es 100% estático (no requiere servidor Node, PHP ni base de datos). Para publicarlo en GitHub Pages:

### 1. Subir los cambios a GitHub
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git add .
git commit -m "feat: landing page tarjeta ejecutiva electrobox"
git push -u origin main
```

### 2. Activar GitHub Pages en el Repositorio
1. Ve a tu repositorio en GitHub: `https://github.com/publicidadjk/landing_page_ceo`
2. Haz clic en **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
4. En **Branch**, selecciona `main` y la carpeta `/(root)`.
5. Haz clic en **Save** (Guardar).

### 3. Obtener la URL Pública Final
En aproximadamente 1 o 2 minutos, GitHub Pages publicará tu sitio y mostrará el enlace oficial:

```text
https://publicidadjk.github.io/landing_page_ceo/
```

*(Si configuras un dominio personalizado como `contacto.electrobox.com.co`, también puedes vincularlo en esa misma sección).*

---

## 📱 Cómo Generar el Código QR para la Tarjeta Física

Una vez que tengas la URL final de GitHub Pages:

1. Ingresa a una plataforma generadora de códigos QR en alta resolución para imprenta (como [QR Code Generator](https://www.qr-code-generator.com/) o directamente desde Adobe Illustrator / CorelDraw / Canva).
2. Pega la URL completa de tu página (ejemplo: `https://publicidadjk.github.io/landing_page_ceo/`).
3. **Recomendaciones de Impresión:**
   * Utiliza corrección de error **Nivel H** (30%) o **Nivel Q** (25%).
   * Tamaño físico mínimo en la tarjeta: **2.0 cm × 2.0 cm**.
   * Asegura un contraste alto (código oscuro sobre fondo claro o código blanco sobre fondo negro mate).
   * Puedes incluir el logo de ELECTROBOX o un icono de smartphone en el centro del QR si lo deseas.

---

## 🇨🇳 Consideraciones Especiales para el Viaje a China

1. **WeChat (微信):** WeChat es el canal primordial de comunicación y negocios en China. La tarjeta cuenta con:
   * Exhibición destacada del **Código QR de WeChat** para ser escaneado con la cámara de WeChat.
   * Botón táctil **"Copiar ID"** (`electrobox_col`) que permite copiar el usuario con un solo toque y pegarlo en el buscador de contactos de WeChat.
   * Botón directo **"Abrir WeChat"** (`weixin://`).
2. **Independencia de Redes Externas:** Todos los iconos están integrados en formato SVG vectorial interno. El sitio no depende de Google CDN ni librerías externas que puedan experimentar bloqueos por el *Great Firewall* en China.