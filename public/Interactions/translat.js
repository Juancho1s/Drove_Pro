const translations = {
  en: {
    userna: "Username or Email",
    pass: "Password",
    logi: "LOGIN",
    reg: "SIGN UP",
    ap: "Apple",
    eng: "English",
    esp: "Spanish",
    eng2: "English",
    esp2: "Spanish",
    pas: "Password",
    ema: "Email",
    usern: "Username",
    log: "LOGIN",
    sig: "SIGN UP",
    dropdownDefaultButton: "+ NEW",
    toggleButton: "Upload file",
    toggleButton1: "Upload folder",
    toggleButton2: "Create folder",
    fil: "File Type",
    las: "Last Modification",
  },
  es: {
    userna: "Nombre de usuario o Gmail",
    pass: "Contraseña",
    logi: "INICIAR SESION",
    reg: "REGISTRARSE",
    ap: "Manzzana",
    eng: "Ingles",
    esp: "Español",
    eng2: "Ingles",
    esp2: "Español",
    pas: "Contraseña",
    ema: "Correo",
    usern: "Nombre de usuario",
    log: "INICIAR SESION",
    sig: "REGISTRARSE",
    dropdownDefaultButton: "+ NUEVO",
    toggleButton: "Subir archivo",
    toggleButton1: "Subir carpeta",
    toggleButton2: "Crear carpeta",
    fil: "Tipo de Archivo",
    las: "Ultima Modificación",
  },
};


function changeLanguage(lang) {
    const langTranslations = translations[lang];

    document.getElementById("userna").textContent = langTranslations.userna;
    document.getElementById("pass").textContent = langTranslations.pass;
    document.getElementById("logi").textContent = langTranslations.logi;
    document.getElementById("reg").textContent = langTranslations.reg;
    document.getElementById("ap").textContent = langTranslations.ap;
    document.getElementById("eng").textContent = langTranslations.eng;
    document.getElementById("esp").textContent = langTranslations.esp;
}


function changeLanguage2(lang) {
  const langTranslations = translations[lang];

  document.getElementById("eng2").textContent = langTranslations.eng2;
  document.getElementById("esp2").textContent = langTranslations.esp2;
  document.getElementById("usern").textContent = langTranslations.usern;
  document.getElementById("pas").textContent = langTranslations.pas;
  document.getElementById("ema").textContent = langTranslations.ema;
  document.getElementById("log").textContent = langTranslations.log;
  document.getElementById("sig").textContent = langTranslations.sig;
}


function changeLanguage3(lang) {
  const langTranslations = translations[lang];

  document.getElementById("dropdownDefaultButton").textContent = langTranslations.dropdownDefaultButton;
  document.getElementById("toggleButton").textContent = langTranslations.toggleButton;
  document.getElementById("toggleButton1").textContent = langTranslations.toggleButton1;
  document.getElementById("toggleButton2").textContent = langTranslations.toggleButton2;
  document.getElementById("fil").textContent = langTranslations.fil;
  document.getElementById("las").textContent = langTranslations.las;
}

