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
    arch: "Files",
    fl: "Folders",
    folt: "Folders",
    swm: "Shared with me",
    my: "My Unity",
    re: "Recent",
    fe: "Featured",
    ifo: "Folders",
    fzip: "Files(.zip)",
    ftxt: "Files(.txt)",
    fpro: "Files Programming",
    day: "1 day",
    week: "1 week",
    month: "1 month",
    all: "All",
    f1: "The best manager in the cloud!",
    f2: "The best file manager in the cloud at your disposal.",
    exp: "Explore",
    pri: "Home",
    nos: "About us",
    car: "Careers",
    cap: "Capabilities",
    vis: "Visit",
    enl: "GitHub Links",
    sa: "Sign Out",
    sett: "Settings",
    hel: "Help",
    toggleButton45: "Delete",
    toggleButton4: "Delete",
    toggleButton45: "Download",
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
    arch: "Archivos",
    fl: "Carpetas",
    folt: "Carpetas",
    swm: "Compartidos conmigo",
    my: "Mi Unidad",
    re: "Recientes",
    fe: "Favoritos",
    ifo: "Carpetas",
    fzip: "Archivos(.zip)",
    ftxt: "Archivos(.txt)",
    fpro: "Programación",
    day: "1 dia",
    week: "1 semana",
    month: "1 mes",
    all: "Todo",
    f1: "El mejor gestor en la nube!",
    f2: "El mejor gestor de archivos en la nube a tu disposición.",
    exp: "Explorar",
    pri: "Principal",
    nos: "Nosotros",
    car: "Carreras",
    cap: "Capacidades",
    vis: "Visitar",
    enl: "Enlaces a GitHub",
    sa: "Cerrar Sesion",
    sett: "Ajustes",
    hel: "Ayuda",
    toggleButton45: "Eliminar",
    toggleButton4: "Eliminar",
    dow: "Descargar",
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
  document.getElementById("arch").textContent = langTranslations.arch;
  document.getElementById("fl").textContent = langTranslations.fl;
  document.getElementById("folt").textContent = langTranslations.folt;
  document.getElementById("swm").textContent = langTranslations.swm;
  document.getElementById("my").textContent = langTranslations.my;
  document.getElementById("re").textContent = langTranslations.re;
  document.getElementById("fe").textContent = langTranslations.fe;
  document.getElementById("ifo").textContent = langTranslations.ifo;
  document.getElementById("fzip").textContent = langTranslations.fzip;
  document.getElementById("ftxt").textContent = langTranslations.ftxt;
  document.getElementById("fpro").textContent = langTranslations.fpro;
  document.getElementById("day").textContent = langTranslations.day;
  document.getElementById("week").textContent = langTranslations.week;
  document.getElementById("month").textContent = langTranslations.month;
  document.getElementById("all").textContent = langTranslations.all;
  document.getElementById("f1").textContent = langTranslations.f1;
  document.getElementById("f2").textContent = langTranslations.f2;
  document.getElementById("exp").textContent = langTranslations.exp;
  document.getElementById("pri").textContent = langTranslations.pri;
  document.getElementById("nos").textContent = langTranslations.nos;
  document.getElementById("car").textContent = langTranslations.car;
  document.getElementById("cap").textContent = langTranslations.cap;
  document.getElementById("vis").textContent = langTranslations.vis;
  document.getElementById("enl").textContent = langTranslations.enl;
  document.getElementById("sa").textContent = langTranslations.sa;
  document.getElementById("sett").textContent = langTranslations.sett;
  document.getElementById("hel").textContent = langTranslations.hel;
  document.getElementById("dow").textContent = langTranslations.dow;
  document.getElementById("toggleButton4").textContent = langTranslations.toggleButton4;
  document.getElementById("toggleButton45").textContent =langTranslations.toggleButton45;
}

