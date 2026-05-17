const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const whatsappWrap = document.querySelector(".whatsapp-float");
const whatsappButton = document.querySelector(".whatsapp");

navToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

whatsappButton?.addEventListener("click", () => {
  const isOpen = whatsappWrap?.classList.toggle("is-open");
  whatsappButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

document.addEventListener("click", (event) => {
  if (!whatsappWrap || whatsappWrap.contains(event.target)) {
    return;
  }

  whatsappWrap.classList.remove("is-open");
  whatsappButton?.setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  whatsappWrap?.classList.remove("is-open");
  whatsappButton?.setAttribute("aria-expanded", "false");
});

const stateData = [
  { uf: "AM", name: "Amazonas", region: "Norte", capital: "Manaus", x: 136, y: 116, color: "var(--teal)", service: "Rede óptica metropolitana", description: "Implantação de backbone e interligação entre prédios públicos.", projects: ["Fibra óptica monomodo", "DIO, fusão e certificação", "CFTV institucional"] },
  { uf: "PA", name: "Pará", region: "Norte", capital: "Belém", x: 370, y: 165, color: "var(--teal)", service: "Cabeamento estruturado", description: "Organização de rede lógica para unidades administrativas.", projects: ["Racks e patch panels", "Cabeamento Cat. 6", "Backbone óptico"] },
  { uf: "TO", name: "Tocantins", region: "Norte", capital: "Palmas", x: 286, y: 270, color: "var(--teal)", service: "Infraestrutura integrada", description: "Projeto técnico com rede, energia e documentação de aceite.", projects: ["Rede lógica", "Rede elétrica para TI", "Relatório técnico"] },
  { uf: "MA", name: "Maranhão", region: "Nordeste", capital: "São Luís", x: 466, y: 187, color: "var(--orange)", service: "Infraestrutura de rede", description: "Atendimento a órgãos com cabeamento e distribuição de pontos.", projects: ["Cabeamento estruturado", "Organização de racks", "Teste de pontos"] },
  { uf: "CE", name: "Ceará", region: "Nordeste", capital: "Fortaleza", x: 522, y: 239, color: "var(--orange)", service: "CFTV e monitoramento", description: "Instalação de câmeras IP e gravação centralizada para prédios públicos.", projects: ["Câmeras IP", "NVR", "Monitoramento 24/7"] },
  { uf: "RN", name: "Rio Grande do Norte", region: "Nordeste", capital: "Natal", x: 542, y: 237, color: "var(--orange)", service: "Rede lógica", description: "Distribuição de pontos de rede e certificação de cabeamento.", projects: ["430 pontos de rede", "Patch panels", "Identificação técnica"] },
  { uf: "PE", name: "Pernambuco", region: "Nordeste", capital: "Recife", x: 500, y: 291, color: "var(--orange)", service: "Controle de acesso", description: "Soluções de segurança física com integração a rede existente.", projects: ["Biometria", "Catracas", "Fechaduras eletrônicas"] },
  { uf: "BA", name: "Bahia", region: "Nordeste", capital: "Salvador", x: 428, y: 340, color: "var(--orange)", service: "Fibra óptica e CFTV", description: "Execução de infraestrutura para unidades distribuídas.", projects: ["Fibra óptica", "CFTV urbano", "Aterramento para TI"] },
  { uf: "DF", name: "Distrito Federal", region: "Centro-Oeste", capital: "Brasília", x: 354, y: 331, color: "#8f66e8", service: "Ata de Registro de Preço", description: "Apoio à adesão, documentação e execução técnica para órgãos públicos.", projects: ["ARP", "Segurança eletrônica", "Consultoria técnica"] },
  { uf: "GO", name: "Goiás", region: "Centro-Oeste", capital: "Goiânia", x: 342, y: 356, color: "#8f66e8", service: "Backbone subterrâneo", description: "Interligação de prédios com rotas protegidas e documentação de campo.", projects: ["Rede óptica", "Rede elétrica para TI", "Racks"] },
  { uf: "MT", name: "Mato Grosso", region: "Centro-Oeste", capital: "Cuiabá", x: 174, y: 276, color: "#8f66e8", service: "Infraestrutura remota", description: "Mobilização técnica para locais distantes e ambientes críticos.", projects: ["Cabeamento estruturado", "Nobreaks", "Diagnóstico em campo"] },
  { uf: "MS", name: "Mato Grosso do Sul", region: "Centro-Oeste", capital: "Campo Grande", x: 180, y: 364, color: "#8f66e8", service: "Rede e energia para TI", description: "Adequação de salas técnicas e pontos de atendimento.", projects: ["Quadros de distribuição", "Aterramento", "Cabeamento Cat. 6"] },
  { uf: "MG", name: "Minas Gerais", region: "Sudeste", capital: "Belo Horizonte", x: 342, y: 405, color: "var(--red)", service: "Rede lógica corporativa", description: "Cabeamento, racks e documentação para ambientes administrativos.", projects: ["Rede lógica", "Consultoria técnica", "Certificação"] },
  { uf: "SP", name: "São Paulo", region: "Sudeste", capital: "São Paulo", x: 286, y: 444, color: "var(--red)", service: "Data center e CFTV", description: "Organização de infraestrutura crítica com monitoramento e redundância.", projects: ["Racks", "CFTV corporativo", "Nobreaks"] },
  { uf: "RJ", name: "Rio de Janeiro", region: "Sudeste", capital: "Rio de Janeiro", x: 360, y: 449, color: "var(--red)", service: "Segurança eletrônica", description: "Controle de acesso e monitoramento para instalações institucionais.", projects: ["Controle de acesso", "Monitoramento IP", "Analytics"] },
  { uf: "ES", name: "Espírito Santo", region: "Sudeste", capital: "Vitória", x: 413, y: 445, color: "var(--red)", service: "CFTV e rede lógica", description: "Implantação integrada de vigilância e conectividade local.", projects: ["Câmeras IP", "NVR", "Pontos de rede"] },
  { uf: "PR", name: "Paraná", region: "Sul", capital: "Curitiba", x: 231, y: 486, color: "var(--blue)", service: "Racks e patch panels", description: "Reestruturação de rede física e organização de sala técnica.", projects: ["Patch panels", "Fibra multimodo", "Identificação de cabos"] },
  { uf: "SC", name: "Santa Catarina", region: "Sul", capital: "Florianópolis", x: 170, y: 501, color: "var(--blue)", service: "Cabeamento Cat. 6A", description: "Infraestrutura de alta performance para redes de dados.", projects: ["Cat. 6A", "Nobreaks e UPS", "Certificação"] },
  { uf: "RS", name: "Rio Grande do Sul", region: "Sul", capital: "Porto Alegre", x: 101, y: 482, color: "var(--blue)", service: "Infraestrutura completa", description: "Projetos com rede, energia, segurança e entrega assistida.", projects: ["Rede óptica", "Rede elétrica", "CFTV"] },
];

const pointsGroup = document.querySelector(".map-points");
const statePanel = document.querySelector(".state-panel");
const stateByUf = new Map(stateData.map((state) => [state.uf, state]));
const stateCoordinates = {
  AM: { lat: -3.119, lng: -60.021 },
  PA: { lat: -1.455, lng: -48.504 },
  TO: { lat: -10.184, lng: -48.333 },
  MA: { lat: -2.529, lng: -44.302 },
  CE: { lat: -3.732, lng: -38.527 },
  RN: { lat: -5.794, lng: -35.212 },
  PE: { lat: -8.047, lng: -34.877 },
  BA: { lat: -12.977, lng: -38.501 },
  DF: { lat: -15.793, lng: -47.882 },
  GO: { lat: -16.686, lng: -49.264 },
  MT: { lat: -15.601, lng: -56.097 },
  MS: { lat: -20.469, lng: -54.620 },
  MG: { lat: -19.916, lng: -43.934 },
  SP: { lat: -23.550, lng: -46.633 },
  RJ: { lat: -22.906, lng: -43.172 },
  ES: { lat: -20.315, lng: -40.312 },
  PR: { lat: -25.428, lng: -49.273 },
  SC: { lat: -27.595, lng: -48.548 },
  RS: { lat: -30.034, lng: -51.230 },
};
const brazilGeoBox = {
  minLng: -74.008595,
  maxLng: -34.789914,
  maxLat: 5.275696,
  minLat: -33.743888,
  width: 612.51611,
  height: 639.04297,
};

function geoToSvg({ lat, lng }) {
  return {
    x: ((lng - brazilGeoBox.minLng) / (brazilGeoBox.maxLng - brazilGeoBox.minLng)) * brazilGeoBox.width,
    y: ((brazilGeoBox.maxLat - lat) / (brazilGeoBox.maxLat - brazilGeoBox.minLat)) * brazilGeoBox.height,
  };
}

function setActiveMapState(state) {
  document.querySelectorAll(".map-state.is-active").forEach((item) => item.classList.remove("is-active"));
  document.querySelectorAll(".map-point.is-active").forEach((item) => item.classList.remove("is-active"));

  document.querySelector(`#BR-${state.uf}`)?.classList.add("is-active");
  document.querySelector(`.map-point[data-uf="${state.uf}"]`)?.classList.add("is-active");
}

function renderStatePanel(state) {
  if (!statePanel) return;
  setActiveMapState(state);
  statePanel.classList.remove("is-changing");
  void statePanel.offsetWidth;
  statePanel.classList.add("is-changing");

  statePanel.innerHTML = `
    <span class="state-code">${state.uf}</span>
    <div class="state-content">
      <span class="state-kicker">${state.region} • Capital: ${state.capital}</span>
      <h3>${state.name}</h3>
      <strong class="state-service">${state.service}</strong>
      <p>${state.description}</p>
      <div class="state-projects">${state.projects.map((project) => `<span>${project}</span>`).join("")}</div>
    </div>
  `;
}

if (pointsGroup) {
  stateData.forEach((state, index) => {
    const coords = stateCoordinates[state.uf] ? geoToSvg(stateCoordinates[state.uf]) : { x: state.x, y: state.y };
    const point = document.createElementNS("http://www.w3.org/2000/svg", "g");
    point.classList.add("map-point");
    point.dataset.uf = state.uf;
    point.setAttribute("tabindex", "0");
    point.setAttribute("role", "button");
    point.setAttribute("aria-label", `Ver detalhes de ${state.name}`);
    point.style.color = state.color;
    point.style.animationDelay = `${index * 0.08}s`;
    point.innerHTML = `
      <circle cx="${coords.x}" cy="${coords.y}" r="16" fill="currentColor"></circle>
      <circle cx="${coords.x}" cy="${coords.y}" r="12" fill="currentColor"></circle>
      <text x="${coords.x}" y="${coords.y + 3}">${state.uf}</text>
    `;

    point.addEventListener("click", () => renderStatePanel(state));
    point.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        renderStatePanel(state);
      }
    });

    pointsGroup.appendChild(point);
  });
}

document.querySelectorAll(".map-state[id^='BR-']").forEach((statePath) => {
  const uf = statePath.id.replace("BR-", "");
  const state = stateByUf.get(uf);

  if (!state) return;

  statePath.setAttribute("tabindex", "0");
  statePath.setAttribute("role", "button");
  statePath.setAttribute("aria-label", `Ver detalhes de ${state.name}`);
  statePath.addEventListener("click", () => renderStatePanel(state));
  statePath.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      renderStatePanel(state);
    }
  });
});

const mapBox = document.querySelector(".brazil-map");
const mapSvg = mapBox?.querySelector("svg");
const zoomInButton = document.querySelector(".zoom-in");
const zoomOutButton = document.querySelector(".zoom-out");
const initialViewBox = {
  x: 0,
  y: 0,
  width: brazilGeoBox.width,
  height: brazilGeoBox.height,
};
let currentViewBox = { ...initialViewBox };
const minZoom = 1;
const maxZoom = 4;
let currentZoom = 1;

function applyMapViewBox() {
  if (!mapSvg) return;
  mapSvg.setAttribute(
    "viewBox",
    `${currentViewBox.x} ${currentViewBox.y} ${currentViewBox.width} ${currentViewBox.height}`,
  );
}

function clampViewBox() {
  currentViewBox.width = Math.min(initialViewBox.width, Math.max(initialViewBox.width / maxZoom, currentViewBox.width));
  currentViewBox.height = Math.min(initialViewBox.height, Math.max(initialViewBox.height / maxZoom, currentViewBox.height));
  currentViewBox.x = Math.min(
    initialViewBox.x + initialViewBox.width - currentViewBox.width,
    Math.max(initialViewBox.x, currentViewBox.x),
  );
  currentViewBox.y = Math.min(
    initialViewBox.y + initialViewBox.height - currentViewBox.height,
    Math.max(initialViewBox.y, currentViewBox.y),
  );
  currentZoom = initialViewBox.width / currentViewBox.width;
}

function zoomMap(multiplier, clientX, clientY) {
  if (!mapSvg) return;

  const rect = mapSvg.getBoundingClientRect();
  const pointerX = typeof clientX === "number" ? clientX : rect.left + rect.width / 2;
  const pointerY = typeof clientY === "number" ? clientY : rect.top + rect.height / 2;
  const svgX = currentViewBox.x + ((pointerX - rect.left) / rect.width) * currentViewBox.width;
  const svgY = currentViewBox.y + ((pointerY - rect.top) / rect.height) * currentViewBox.height;
  const nextZoom = Math.min(maxZoom, Math.max(minZoom, currentZoom * multiplier));
  const nextWidth = initialViewBox.width / nextZoom;
  const nextHeight = initialViewBox.height / nextZoom;
  const pointerRatioX = (svgX - currentViewBox.x) / currentViewBox.width;
  const pointerRatioY = (svgY - currentViewBox.y) / currentViewBox.height;

  currentViewBox = {
    x: svgX - nextWidth * pointerRatioX,
    y: svgY - nextHeight * pointerRatioY,
    width: nextWidth,
    height: nextHeight,
  };

  clampViewBox();
  applyMapViewBox();
}

zoomInButton?.addEventListener("click", () => zoomMap(1.25));
zoomOutButton?.addEventListener("click", () => zoomMap(0.8));

mapBox?.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();
    zoomMap(event.deltaY < 0 ? 1.18 : 0.84, event.clientX, event.clientY);
  },
  { passive: false },
);

const contactForm = document.querySelector(".contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  if (!button) return;
  const originalText = button.textContent;
  button.textContent = "Solicitação registrada";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
    contactForm.reset();
  }, 2400);
});
