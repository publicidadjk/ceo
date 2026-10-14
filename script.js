/**
 * ============================================================================
 * ELECTROBOX - TARJETA DE PRESENTACIÓN DIGITAL EJECUTIVA
 * Configuración Centralizada y Lógica Multilingüe (Vanilla JS)
 * ============================================================================
 */

const CONFIG = {
  // --- DATOS PERSONALES DEL GERENTE ---
  name: "JEAN CARLOS OMAÑA MORENO",
  
  // Cargo en los 3 idiomas requeridos
  title: {
    es: "Gerente General / CEO",
    en: "General Manager / CEO",
    zh: "总经理 / 首席执行官"
  },
  
  // Empresa
  company: "ELECTROBOX",
  
  // Teléfono y WhatsApp
  phoneFormatted: "+57 311 4445868",
  phoneRaw: "573114445868", // Formato internacional sin símbolos para enlaces wa.me y tel:
  
  // Correo electrónico
  email: "Comercializadorajk.contabilidad@gmail.com",
  
  // Redes Sociales Oficiales
  social: {
    tiktok: "https://www.tiktok.com/@electrobox.cucuta",
    facebook: "https://www.facebook.com/Electrobox.Cucuta",
    instagram: "https://www.instagram.com/electrobox.cucuta/"
  },

  // WeChat ID para viaje de negocios a China
  wechatId: "electrobox_col",
  
  // Ubicación corporativa (la bandera de Colombia está integrada por SVG)
  location: {
    es: "Cúcuta · Norte de Santander · Colombia",
    en: "Cúcuta · Norte de Santander · Colombia",
    zh: "库库塔 · 北桑坦德省 · 哥伦比亚"
  },
  
  // Nombre del archivo de contacto descargable
  vcfFilename: "contacto.vcf"
};

/**
 * DICCIONARIO DE TRADUCCIÓN MULTILINGÜE (ES | EN | 中文)
 */
const TRANSLATIONS = {
  es: {
    metaTitle: `${CONFIG.name} — ${CONFIG.title.es} | ${CONFIG.company}`,
    metaDesc: `Tarjeta de presentación digital oficial de ${CONFIG.name}, ${CONFIG.title.es} en ${CONFIG.company}. Contacto directo, WhatsApp, correo y WeChat.`,
    statusBadge: "Tarjeta Digital Oficial",
    title: CONFIG.title.es,
    location: CONFIG.location.es,
    saveContact: "Guardar contacto",
    callLabel: "Llamar",
    whatsappLabel: "WhatsApp",
    emailLabel: "Correo",
    wechatSectionTitle: "WeChat",
    wechatBadge: "Directo China",
    wechatSubtitle: "Conéctate conmigo en WeChat",
    wechatIdCaption: "WeChat ID",
    copyId: "Copiar ID",
    openWechat: "Abrir WeChat",
    wechatFootnote: "Escanea el código QR desde la app WeChat o copia el ID para buscar en WeChat.",
    aboutTitle: "Sobre ELECTROBOX",
    aboutText: "ELECTROBOX es una empresa colombiana especializada en electrodomésticos, tecnología, línea blanca y soluciones integrales para el hogar, comprometida con la innovación, la calidad y el confort.",
    socialTitle: "Redes Sociales",
    socialSubtitle: "Conéctate y sigue a ELECTROBOX",
    toastCopied: "¡WeChat ID copiado al portapapeles!",
    toastSaved: "Preparando descarga de contacto...",
    copyError: "No se pudo copiar automáticamente. ID: " + CONFIG.wechatId
  },
  en: {
    metaTitle: `${CONFIG.name} — ${CONFIG.title.en} | ${CONFIG.company}`,
    metaDesc: `Official digital business card of ${CONFIG.name}, ${CONFIG.title.en} at ${CONFIG.company}. Direct contact, WhatsApp, email, and WeChat.`,
    statusBadge: "Official Digital Pass",
    title: CONFIG.title.en,
    location: CONFIG.location.en,
    saveContact: "Save Contact",
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    wechatSectionTitle: "WeChat",
    wechatBadge: "China Direct",
    wechatSubtitle: "Connect with me on WeChat",
    wechatIdCaption: "WeChat ID",
    copyId: "Copy ID",
    openWechat: "Open WeChat",
    wechatFootnote: "Scan the QR code within the WeChat app or copy the ID to find me directly.",
    aboutTitle: "About ELECTROBOX",
    aboutText: "ELECTROBOX is a Colombian enterprise specializing in home appliances, consumer technology, major appliances, and modern home solutions, committed to innovation, quality, and living comfort.",
    socialTitle: "Social Media",
    socialSubtitle: "Connect and follow ELECTROBOX",
    toastCopied: "WeChat ID copied to clipboard!",
    toastSaved: "Preparing contact download...",
    copyError: "Could not copy automatically. ID: " + CONFIG.wechatId
  },
  zh: {
    metaTitle: `${CONFIG.name} — ${CONFIG.title.zh} | ${CONFIG.company}`,
    metaDesc: `${CONFIG.company} ${CONFIG.title.zh} ${CONFIG.name} 的官方商务名片。支持一键拨号、WhatsApp、电子邮件及微信直连。`,
    statusBadge: "官方电子名片",
    title: CONFIG.title.zh,
    location: CONFIG.location.zh,
    saveContact: "保存联系人",
    callLabel: "拨打电话",
    whatsappLabel: "WhatsApp",
    emailLabel: "电子邮箱",
    wechatSectionTitle: "微信联系",
    wechatBadge: "中国直连",
    wechatSubtitle: "通过微信与我联系",
    wechatIdCaption: "微信号",
    copyId: "复制微信号",
    openWechat: "打开微信",
    wechatFootnote: "请使用微信扫描上方二维码，或点击上方按钮复制微信号并在微信中添加。",
    aboutTitle: "关于 ELECTROBOX",
    aboutText: "ELECTROBOX是一家哥伦比亚领先企业，专注于家用电器、智能科技、白色家电及全屋家居解决方案，始终致力于品质创新与卓越客户体验。",
    socialTitle: "社交媒体",
    socialSubtitle: "关注 ELECTROBOX 官方社交媒体",
    toastCopied: "微信号已成功复制到剪贴板！",
    toastSaved: "正在准备下载名片文件...",
    copyError: "复制失败，微信号为：" + CONFIG.wechatId
  }
};

// Estado global: idioma por defecto Chino Simplificado ("zh")
let currentLanguage = "zh";

/**
 * Inicialización al cargar el DOM
 */
document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  applyConfigToDOM();
  setupEventListeners();
});

/**
 * Detectar y aplicar idioma inicial:
 * Prioridad: preferencia guardada en localStorage > Chino Simplificado por defecto
 */
function initLanguage() {
  const savedLang = localStorage.getItem("electrobox_lang");
  if (savedLang && ["es", "en", "zh"].includes(savedLang)) {
    currentLanguage = savedLang;
  } else {
    // Idioma por defecto al abrir la página: Chino Simplificado
    currentLanguage = "zh";
  }
  setLanguage(currentLanguage, false);
}

/**
 * Cambiar el idioma dinámicamente sin recargar la página
 */
function setLanguage(lang, persist = true) {
  if (!TRANSLATIONS[lang]) return;
  currentLanguage = lang;
  
  if (persist) {
    try {
      localStorage.setItem("electrobox_lang", lang);
    } catch (e) {
      console.warn("localStorage no disponible", e);
    }
  }

  // Actualizar atributo lang en <html>
  document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;

  // Actualizar botones de selector
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Actualizar textos i18n
  const dict = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Actualizar Meta Tags y Title del documento
  if (dict.metaTitle) document.title = dict.metaTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict.metaDesc) metaDesc.setAttribute("content", dict.metaDesc);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && dict.metaTitle) ogTitle.setAttribute("content", dict.metaTitle);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && dict.metaDesc) ogDesc.setAttribute("content", dict.metaDesc);
}

/**
 * Inyectar datos de CONFIG en los enlaces y elementos HTML
 */
function applyConfigToDOM() {
  // Nombre
  const nameEl = document.getElementById("manager-name");
  if (nameEl) nameEl.textContent = CONFIG.name;

  // WeChat ID texto
  const wechatIdText = document.getElementById("wechat-id-text");
  if (wechatIdText) wechatIdText.textContent = CONFIG.wechatId;

  // Botón Llamar
  const btnCall = document.getElementById("action-call");
  if (btnCall) {
    btnCall.href = `tel:+${CONFIG.phoneRaw}`;
    const valueEl = btnCall.querySelector(".action-tile-value");
    if (valueEl) valueEl.textContent = CONFIG.phoneFormatted;
  }

  // Botón WhatsApp
  const btnWhatsapp = document.getElementById("action-whatsapp");
  if (btnWhatsapp) {
    btnWhatsapp.href = `https://wa.me/${CONFIG.phoneRaw}`;
    const valueEl = btnWhatsapp.querySelector(".action-tile-value");
    if (valueEl) valueEl.textContent = CONFIG.phoneFormatted;
  }

  // Botón Email
  const btnEmail = document.getElementById("action-email");
  if (btnEmail) {
    btnEmail.href = `mailto:${CONFIG.email}`;
    const valueEl = btnEmail.querySelector(".action-tile-value");
    if (valueEl) valueEl.textContent = CONFIG.email;
  }

  // Botón Open WeChat (deep link móvil)
  const btnOpenWechat = document.getElementById("btn-open-wechat");
  if (btnOpenWechat) {
    btnOpenWechat.href = `weixin://dl/chat?${CONFIG.wechatId}`;
  }
}

/**
 * Configurar eventos de interacción
 */
function setupEventListeners() {
  // Selector de idiomas
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      setLanguage(selectedLang, true);
    });
  });

  // Botón Principal: Guardar Contacto (VCF)
  const btnSaveContact = document.getElementById("btn-save-contact");
  if (btnSaveContact) {
    btnSaveContact.addEventListener("click", handleDownloadVCard);
  }

  // Botón Copiar WeChat ID
  const btnCopyWechat = document.getElementById("btn-copy-wechat");
  if (btnCopyWechat) {
    btnCopyWechat.addEventListener("click", handleCopyWechatId);
  }

  // Fallback para botón Open WeChat
  const btnOpenWechat = document.getElementById("btn-open-wechat");
  if (btnOpenWechat) {
    btnOpenWechat.addEventListener("click", () => {
      setTimeout(() => {
        showToast(TRANSLATIONS[currentLanguage].wechatFootnote);
      }, 1000);
    });
  }
}

/**
 * Generador y descargador de archivo VCF compatible con iOS y Android
 */
function handleDownloadVCard(e) {
  e.preventDefault();
  showToast(TRANSLATIONS[currentLanguage].toastSaved);

  const titleString = `${CONFIG.title.es} / ${CONFIG.title.en} / ${CONFIG.title.zh}`;
  const locationString = `Cúcuta;Norte de Santander;Colombia`;

  // Construcción de vCard 3.0 con máxima compatibilidad móvil
  const vcardData = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${CONFIG.name}`,
    `N:OMAÑA MORENO;JEAN CARLOS;;;`,
    `ORG:${CONFIG.company}`,
    `TITLE:${titleString}`,
    `TEL;TYPE=CELL,VOICE;VALUE=uri:tel:+${CONFIG.phoneRaw}`,
    `TEL;TYPE=WORK,VOICE:${CONFIG.phoneFormatted}`,
    `EMAIL;TYPE=WORK,INTERNET:${CONFIG.email}`,
    `ADR;TYPE=WORK:;;${locationString}`,
    `X-SOCIALPROFILE;TYPE=wechat:${CONFIG.wechatId}`,
    `NOTE:${CONFIG.company} - ${CONFIG.name} (${titleString}). WeChat ID: ${CONFIG.wechatId}`,
    "END:VCARD"
  ].join("\r\n");

  try {
    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const blobUrl = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = blobUrl;
    downloadAnchor.setAttribute("download", CONFIG.vcfFilename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    
    setTimeout(() => {
      document.body.removeChild(downloadAnchor);
      URL.revokeObjectURL(blobUrl);
    }, 250);
  } catch (err) {
    console.warn("Fallo Blob URL, recurriendo a archivo físico:", err);
    window.location.href = CONFIG.vcfFilename;
  }
}

/**
 * Copiar WeChat ID al portapapeles con confirmación visual
 */
function handleCopyWechatId() {
  const textToCopy = CONFIG.wechatId;

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        showToast(TRANSLATIONS[currentLanguage].toastCopied);
      })
      .catch(() => {
        fallbackCopyText(textToCopy);
      });
  } else {
    fallbackCopyText(textToCopy);
  }
}

/**
 * Fallback para portapapeles
 */
function fallbackCopyText(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    if (successful) {
      showToast(TRANSLATIONS[currentLanguage].toastCopied);
    } else {
      showToast(TRANSLATIONS[currentLanguage].copyError);
    }
  } catch (err) {
    showToast(TRANSLATIONS[currentLanguage].copyError);
  } finally {
    document.body.removeChild(textArea);
  }
}

/**
 * Notificación Toast flotante
 */
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");
  
  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add("show");

  if (toastTimeout) {
    clearTimeout(toastTimeout);
  }

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
