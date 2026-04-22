// State Management
const state = {
    language: 'es', // 'es', 'en', 'pt'
    activeTab: 'stat',
    isPowerOn: true,
    isMuted: false,
    cursorPos: { x: 50, y: 50 }, // Percentage
};

const translations = {
    es: {
        "tabs.stat": "STAT", "tabs.inv": "INV", "tabs.data": "DATOS", "tabs.map": "MAPA", "tabs.hub": "HUB",
        "content.stat.title": "GONZALO MANUEL LEIVA", "content.stat.level": "Nivel: Fullstack Developer",
        "content.stat.bio": "Desarrolador web + años de experiencia en informatica. Soluciones de software a medida, sistemas de gestión, automatización de tareas, etc.",
        "content.inv.title": "INVENTARIO DE PROYECTOS",
        "content.inv.item1.name": "POS Restaurant System(RestaurantDev)", "content.inv.item1.desc": "Sistema de gestión para restaurantes.",
        "content.inv.item2.name": "LashesApp", "content.inv.item2.desc": "Plataforma de gestion de citas, ventas con integración de pagos y panel admin.",
        "content.inv.item3.name": "LeivaSoftlutions", "content.inv.item3.desc": "E-commerce: tienda de software a medida; sistemas de gestión, automatización de tareas, etc.",
        "content.data.title": "ARCHIVOS DE DATOS", "content.data.exp1.role": "Fullstack Dev [@LeivaSoftlutions]",
        "content.data.exp1.detail": "Soy Fundador y Desarrollador en LeivaSoftlutions, una empresa dedicada a la creación de soluciones tecnológicas personalizadas. Desde e-commerce hasta sistemas de automatización y software a medida, trabajo para transformar las necesidades de los clientes en herramientas digitales eficientes y profesionales.",
        "content.map.title": "MAPA / CONTACTO", "content.map.location": "Ubicación: Resistencia, Chaco, Argentina",
        "content.map.contact": "Correo: leivadevelopment@gmail.com",
        "content.map.adress": "Dirección: Pje Yolanda P De Elizondo 1284",
        "content.map.form.name": "NOMBRE",
        "content.map.form.email": "EMAIL",
        "content.map.form.msg": "MENSAJE",
        "content.map.form.send": "ENVIAR CONSULTA",
        "content.hub.title": "HUB DE SISTEMA", "content.hub.theme": "PERSONALIZACIÓN DE INTERFAZ",
        "content.hub.custom": "COLOR PERSONALIZADO",
        "content.hub.effects": "EFECTOS ADICIONALES",
        "content.hub.shadow": "SOMBRAS",
        "content.hub.zoom": "EXPANDIR PANTALLA"
    },
    en: {
        "tabs.stat": "STAT", "tabs.inv": "INV", "tabs.data": "DATA", "tabs.map": "MAP", "tabs.hub": "HUB",
        "content.stat.title": "GONZALO MANUEL LEIVA", "content.stat.level": "Level: Fullstack Developer",
        "content.stat.bio": "Web developer with years of experience in IT. Custom software solutions, management systems, task automation, etc.",
        "content.inv.title": "PROJECT INVENTORY",
        "content.inv.item1.name": "POS Restaurant System(RestaurantDev)", "content.inv.item1.desc": "Restaurant management system.",
        "content.inv.item2.name": "LashesApp", "content.inv.item2.desc": "Lashes & Beauty management platform with payments.",
        "content.inv.item3.name": "LeivaSoftlutions", "content.inv.item3.desc": "E-commerce: custom software store; management systems, task automation, etc.",
        "content.data.title": "DATA FILES", "content.data.exp1.role": "Fullstack Dev [@LeivaSoftlutions]",
        "content.data.exp1.detail": "I am the Founder and Developer at LeivaSoftlutions, a company dedicated to creating customized technological solutions. From e-commerce to automation systems and custom software, I work to transform clients' needs into efficient and professional digital tools.",
        "content.map.title": "MAP / CONTACT", "content.map.location": "Location: Resistencia, Chaco, Argentina",
        "content.map.contact": "Email: leivadevelopment@gmail.com",
        "content.map.adress": "Address: Pje Yolanda P De Elizondo 1284",
        "content.map.form.name": "NAME",
        "content.map.form.email": "EMAIL",
        "content.map.form.msg": "MESSAGE",
        "content.map.form.send": "SEND INQUIRY",
        "content.hub.title": "SYSTEM HUB", "content.hub.theme": "INTERFACE CUSTOMIZATION",
        "content.hub.custom": "CUSTOM COLOR",
        "content.hub.effects": "ADDITIONAL EFFECTS",
        "content.hub.shadow": "SHADOWS",
        "content.hub.zoom": "EXPAND SCREEN"
    },
    pt: {
        "tabs.stat": "STAT", "tabs.inv": "INV", "tabs.data": "DADOS", "tabs.map": "MAPA", "tabs.hub": "HUB",
        "content.stat.title": "GONZALO MANUEL LEIVA", "content.stat.level": "Nível: Desenvolvedor Fullstack",
        "content.stat.bio": "Desenvolvedor web + anos de experiência em informatica. Soluções de software sob medida, sistemas de gestão, automação de tarefas, etc.",
        "content.inv.title": "INVENTÁRIO DE PROJETOS",
        "content.inv.item1.name": "Sistema POS Restaurante(RestaurantDev)", "content.inv.item1.desc": "Sistema de gestão para restaurantes.",
        "content.inv.item2.name": "LashesApp", "content.inv.item2.desc": "Plataforma de gestão de agendamentos e vendas.",
        "content.inv.item3.name": "LeivaSoftlutions", "content.inv.item3.desc": "E-commerce: loja de software sob medida; sistemas de gestão, automação de tarefas, etc.",
        "content.data.title": "ARQUIVOS DE DADOS", "content.data.exp1.role": "Fullstack Dev [@LeivaSoftlutions]",
        "content.data.exp1.detail": "Sou o fundador e desenvolvedor da LeivaSoftlutions, uma empresa dedicada à criação de soluções tecnológicas personalizadas. De e-commerce a sistemas de automação e softwares sob medida, trabalho para transformar as necessidades dos clientes em ferramentas digitais eficientes e profissionais.",
        "content.map.title": "MAPA / CONTATO", "content.map.location": "Localização: Resistencia, Chaco, Argentina",
        "content.map.contact": "E-mail: leivadevelopment@gmail.com",
        "content.map.adress": "Endereço: Pje Yolanda P De Elizondo 1284",
        "content.map.form.name": "NOME",
        "content.map.form.email": "EMAIL",
        "content.map.form.msg": "MENSAGEM",
        "content.map.form.send": "ENVIAR CONSULTA",
        "content.hub.title": "CENTRAL DO SISTEMA", "content.hub.theme": "PERSONALIZAÇÃO DA INTERFACE",
        "content.hub.custom": "COR PERSONALIZADA",
        "content.hub.effects": "EFEITOS ADICIONALES",
        "content.hub.shadow": "SOMBRAS",
        "content.hub.zoom": "TELA CHEIA"
    }
};

// Audio
let audioCtx;
const playSound = (type) => {
    if (state.isMuted) return;
    
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain); gain.connect(audioCtx.destination);
        if (type === 'click') {
            osc.type = 'square'; osc.frequency.setValueAtTime(800, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            osc.start(); osc.stop(audioCtx.currentTime + 0.1);
        } else if (type === 'tab') {
            osc.type = 'sine'; osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
            osc.start(); osc.stop(audioCtx.currentTime + 0.1);
        } else if (type === 'power') {
            osc.type = 'sawtooth'; osc.frequency.setValueAtTime(100, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(1000, audioCtx.currentTime + 0.5);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.5);
            osc.start(); osc.stop(audioCtx.currentTime + 0.5);
        }
    } catch (e) {
        console.warn("AudioContext not supported or blocked:", e);
    }
};

// UI Elements
const currentTabName = document.getElementById('current-tab-name');
const systemTime = document.getElementById('system-time');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabSections = document.querySelectorAll('.tab-section');
const langBtn = document.getElementById('lang-btn');
const muteBtn = document.getElementById('mute-btn');
const powerBtn = document.getElementById('power-btn');
const selectBtn = document.getElementById('select-btn');
const joystick = document.getElementById('color-joystick');
const crtMonitor = document.querySelector('.crt-monitor');
const cursor = document.getElementById('pip-cursor');
const colorSwatches = document.querySelectorAll('.color-swatch');
const customColorTrigger = document.getElementById('custom-color-trigger');
const shadowToggle = document.getElementById('shadow-toggle');
const zoomToggle = document.getElementById('zoom-toggle');
const arcadeCabinet = document.querySelector('.arcade-cabinet');

// Update Clock
setInterval(() => {
    systemTime.innerText = new Date().toLocaleTimeString();
}, 1000);

// Translations
function updateTranslations() {
    const lang = translations[state.language];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang[key]) el.innerText = lang[key];
    });
}

function switchTab(tabId) {
    state.activeTab = tabId;
    tabSections.forEach(s => s.classList.toggle('active', s.id === `tab-${tabId}`));
    tabButtons.forEach(b => b.classList.toggle('active', b.dataset.tab === tabId));
    updateTranslations();
}

// Joystick & Cursor Logic
let isJoystickDown = false;
let joystickCenter = { x: 0, y: 0 };

function updateCursor(dx, dy) {
    const sensitivity = 5; // Increased from 2 for better response
    state.cursorPos.x = Math.max(0, Math.min(100, state.cursorPos.x + dx * sensitivity));
    state.cursorPos.y = Math.max(0, Math.min(100, state.cursorPos.y + dy * sensitivity));
    cursor.style.left = `${state.cursorPos.x}%`;
    cursor.style.top = `${state.cursorPos.y}%`;
}

joystick.addEventListener('pointerdown', (e) => {
    isJoystickDown = true;
    const rect = joystick.getBoundingClientRect();
    joystickCenter = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    joystick.setPointerCapture(e.pointerId);
});

window.addEventListener('pointermove', (e) => {
    if (!isJoystickDown) return;
    const dx = e.clientX - joystickCenter.x;
    const dy = e.clientY - joystickCenter.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 30;
    const clampedDist = Math.min(dist, maxDist);
    const angle = Math.atan2(dy, dx);
    const moveX = Math.cos(angle) * clampedDist;
    const moveY = Math.sin(angle) * clampedDist;
    joystick.querySelector('.stick').style.transform = `translate(${moveX}px, ${moveY}px)`;
    updateCursor(moveX / maxDist, moveY / maxDist);
});

window.addEventListener('pointerup', () => {
    isJoystickDown = false;
    joystick.querySelector('.stick').style.transform = `translate(0, 0)`;
});

// SELECT logic: Clicking with cursor
selectBtn.addEventListener('click', () => {
    playSound('click');
    const rect = cursor.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Temporarily hide cursor to ensure we get the element behind it
    const originalDisplay = cursor.style.display;
    cursor.style.display = 'none';
    const target = document.elementFromPoint(x, y);
    cursor.style.display = originalDisplay;

    if (target) {
        // Find if target or any parent is clickable
        const clickable = target.closest('button, a, input, textarea, .color-swatch, .tab-btn');
        if (clickable) {
            clickable.click();
            if (clickable.tagName === 'INPUT' || clickable.tagName === 'TEXTAREA') {
                clickable.focus();
            }
        }
    }
});

// Theme Logic
function setTheme(hex) {
    document.documentElement.style.setProperty('--primary', hex);
    document.documentElement.style.setProperty('--primary-dim', hex + '44');
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    document.documentElement.style.setProperty('--primary-bg', `rgba(${r},${g},${b},0.9)`);
}

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        playSound('click');
        setTheme(swatch.dataset.color);
    });
});

const colorPicker = document.createElement('input');
colorPicker.type = 'color';
colorPicker.style.position = 'fixed';
colorPicker.style.left = '50%';
colorPicker.style.top = '50%';
colorPicker.style.transform = 'translate(-50%, -50%)';
colorPicker.style.width = '1px';
colorPicker.style.height = '1px';
colorPicker.style.opacity = '0';
colorPicker.style.pointerEvents = 'none';
document.body.appendChild(colorPicker);

colorPicker.addEventListener('input', (e) => setTheme(e.target.value));
customColorTrigger.addEventListener('click', () => colorPicker.click());

// Effect Toggles
shadowToggle.addEventListener('change', (e) => {
    playSound('click');
    crtMonitor.classList.toggle('shadow-effect', e.target.checked);
});

zoomToggle.addEventListener('change', (e) => {
    playSound('click');
    arcadeCabinet.classList.toggle('zoom-effect', e.target.checked);
});

// General Controls
langBtn.addEventListener('click', () => {
    const langs = ['es', 'en', 'pt'];
    state.language = langs[(langs.indexOf(state.language) + 1) % langs.length];
    playSound('click');
    updateTranslations();
});

muteBtn.addEventListener('click', () => {
    state.isMuted = !state.isMuted;
    muteBtn.classList.toggle('active', state.isMuted);
    playSound('click');
});

powerBtn.addEventListener('click', () => {
    state.isPowerOn = !state.isPowerOn;
    playSound('power');
    crtMonitor.style.opacity = state.isPowerOn ? '1' : '0';
});

tabButtons.forEach(btn => btn.addEventListener('click', () => {
    playSound('tab');
    switchTab(btn.dataset.tab);
}));

updateTranslations();
switchTab('stat');
setTheme('#10ff10');
