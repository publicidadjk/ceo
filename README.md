# ⚡ ELECTROBOX — Tarjeta de Presentación Digital Ejecutiva

Landing page oficial de tarjeta de presentación digital corporativa diseñada para **JEAN CARLOS OMAÑA MORENO**, **Gerente General / CEO de ELECTROBOX**, concebida especialmente para su uso en misiones comerciales internacionales y viajes de negocios a **China**.

El sitio está optimizado para dispositivos móviles (**Mobile First**), pensado para ser abierto instantáneamente al escanear un código QR impreso en una tarjeta física corporativa.

> **Idioma Predeterminado:** La página abre por defecto en **Chino Simplificado (中文)** para brindar una experiencia inmediata y localizada a contrapartes y socios comerciales en China, permitiendo cambiar en cualquier momento a **Español (ES)** o **Inglés (EN)** mediante el selector superior.

---

## 📁 Estructura del Proyecto

```text
landing_page_ceo/
│
├── index.html           # Estructura semántica, accesibilidad y meta tags SEO/OpenGraph
├── style.css            # Diseño visual (Dark Obsidian, acentos #64FF01, Glassmorphism)
├── script.js            # Configuración centralizada del gerente y traducción dinámica (ES/EN/ZH)
├── contacto.vcf         # Archivo vCard 3.0 para guardar contacto en iPhone y Android
├── README.md            # Documentación completa de configuración y despliegue
│
├── img/                 # Recursos gráficos oficiales de alta resolución
│   ├── img_foto_ceo.webp            # Fotografía oficial de JEAN CARLOS OMAÑA MORENO
│   ├── logo_electrobox2_verde.webp  # Logo oficial horizontal con acento verde
│   ├── logo_electrobox2_blanco.webp # Logo oficial horizontal en blanco puro
│   ├── logo_electrobox_brocha.webp  # Logo oficial con textura de brocha verde
│   └── qr_wechat.webp               # Código QR oficial del perfil de WeChat
│
└── assets/              # Copia de respaldo de recursos gráficos
```

---

## 🎨 Identidad Visual y Tecnologías

* **Paleta:**
  * Fondo: *Obsidian Dark* (`#07080a`, `#0f1218`)
  * Acento Oficial: **Verde ELECTROBOX** (`#64FF01`) utilizado estratégicamente en anillos, bordes y botones clave.
  * Tipografía y Detalles: Blanco puro (`#ffffff`) y tonos plata/grafito de alta legibilidad.
* **Tecnología:** HTML5 + CSS3 + Vanilla JavaScript (100% libre de frameworks pesados o dependencias externas que puedan fallar en China).
* **Multi-idioma:** Chino Simplificado (`中文`, predeterminado), Español (`ES`) e Inglés (`EN`) sin recarga de página y persistente en `localStorage`.

---

## 📞 Canales de Contacto Directo

1. **Llamar:** Enlace directo `tel:+573114445868`.
2. **WhatsApp:** Enlace directo oficial `https://wa.me/573114445868`.
3. **Correo Electrónico:** Enlace `mailto:Comercializadorajk.contabilidad@gmail.com`.
4. **WeChat (微信):** Sección especial para China con QR oficial, ID `electrobox_col`, botón de copia rápida y enlace `weixin://`.
5. **Redes Sociales Oficiales:**
   * **TikTok:** [https://www.tiktok.com/@electrobox.cucuta](https://www.tiktok.com/@electrobox.cucuta)
   * **Facebook:** [https://www.facebook.com/Electrobox.Cucuta](https://www.facebook.com/Electrobox.Cucuta)
   * **Instagram:** [https://www.instagram.com/electrobox.cucuta/](https://www.instagram.com/electrobox.cucuta/)

---

## ⚙️ Datos del Gerente General / CEO

Toda la información del ejecutivo se gestiona de forma centralizada en [`script.js`](file:///d:/Pictures/FRANCISCO/ELECTROBOX/Repositorios/landing_page_ceo/script.js):

```javascript
const CONFIG = {
  name: "JEAN CARLOS OMAÑA MORENO", 

  title: {
    es: "Gerente General / CEO",
    en: "General Manager / CEO",
    zh: "总经理 / 首席执行官"
  },

  company: "ELECTROBOX",
  phoneFormatted: "+57 311 4445868",
  phoneRaw: "573114445868",
  email: "Comercializadorajk.contabilidad@gmail.com",

  social: {
    tiktok: "https://www.tiktok.com/@electrobox.cucuta",
    facebook: "https://www.facebook.com/Electrobox.Cucuta",
    instagram: "https://www.instagram.com/electrobox.cucuta/"
  },

  wechatId: "electrobox_col",

  location: {
    es: "Cúcuta · Norte de Santander · Colombia",
    en: "Cúcuta · Norte de Santander · Colombia",
    zh: "库库塔 · 北桑坦德省 · 哥伦比亚"
  },

  vcfFilename: "contacto.vcf"
};
```

---

## 🚀 Publicación en GitHub Pages

Para publicar o actualizar los cambios en GitHub Pages:

### 1. Subir los cambios a GitHub
Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
git add .
git commit -m "feat: nombre del CEO Jean Carlos Omaña Moreno e idioma chino por defecto"
git push origin main
```

### 2. URL Pública Final
GitHub Pages actualiza automáticamente el sitio en:

```text
https://publicidadjk.github.io/landing_page_ceo/
```