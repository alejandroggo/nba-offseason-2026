// ─────────────────────────────────────────────
// URLS — reemplaza con las de tu Sheet 2026
// ─────────────────────────────────────────────
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZAb1-oLDkidOmC6LrplPJ_468sZ10eESYSrPLg8Pp9DsCg6KNI3YMezhYokdhyCA/exec';

// ── Fechas de evento (actualizar según calendario) ──────────────────────────

const URLS = {
  fa:        `${SCRIPT_URL}?tab=fa`,
  draft:     `${SCRIPT_URL}?tab=draft`,
  trades:    `${SCRIPT_URL}?tab=trades`,
  rosters1:  `${SCRIPT_URL}?tab=rosters1`,
  rosters2:  `${SCRIPT_URL}?tab=rosters2`,
  coaches:   `${SCRIPT_URL}?tab=coaches`,
  jugadores:  `${SCRIPT_URL}?tab=Jugadores`,
  candidatos: `${SCRIPT_URL}?tab=Candidatos`,
  fecha:     `${SCRIPT_URL}?tab=fecha`,
};

// ─────────────────────────────────────────────
// i18n
// ─────────────────────────────────────────────
const i18n = {
  es: {
    home_eyebrow: 'Off-Season',
    home_total_label: 'movimientos',
    home_subtitle: 'Todos los movimientos de la temporada 2025-26: agencia libre, draft, traspasos, plantillas y cambios en banquillos.',
    home_fa_desc: 'Fichajes confirmados y mercado pendiente',
    home_draft_desc: 'Picks seleccionados en rondas 1 y 2',
    home_trades_desc: 'Traspasos confirmados entre franquicias',
    home_rosters_desc: 'Los 30 equipos con altas, bajas y continuidades',
    home_coaches_desc: 'Cambios en banquillos y gerencias',
    home_teams_desc: 'Las 30 franquicias: movimientos y plantilla',
    fa_event_date_label: 'Apertura agencia libre',
    draft_event_date_label: 'Fecha del draft',
    home_records: 'registros',
    home_teams: 'equipos',
    home_changes: 'cambios',
    theme_light: 'Modo día',
    theme_dark: 'Modo noche',
    tab_fa: 'Agencia Libre', tab_fa_short: 'AG. LIBRE', tab_draft: 'Draft', tab_trades: 'Trades',
    tab_rosters: 'Plantillas', tab_coaches: 'Entrenadores y GMs', tab_coaches_short: 'HC / GMs', tab_teams: 'Equipos',
    fa_title: 'Agencia Libre', fa_subtitle: 'Free Agents — Movimientos confirmados y pendientes',
    fa_signed_title: 'Firmados', fa_pending_title: 'Pendientes de firmar',
    fa_search_ph: 'Jugador, equipo…',
    fa_col_player: 'Jugador', fa_col_team25: 'Equipo 2026', fa_col_dest: 'Destino',
    fa_col_m: 'Total ($M)', fa_col_yr: 'Años', fa_col_aav: 'AAV', col_date: 'Fecha',
    draft_title: 'Draft 2026', draft_subtitle: 'Picks seleccionados — Rondas 1 y 2',
    draft_search_ph: 'Jugador, equipo, universidad…',
    draft_col_pick: 'Pick', draft_col_player: 'Jugador', draft_col_pos: 'Posición',
    draft_col_from: 'Procedencia', draft_col_signed: 'Firmado', draft_col_contract: 'Contrato',
    draft_undrafted_title: 'No elegidos en el Draft',
    draft_undrafted_subtitle: 'Jugadores que no fueron seleccionados',
    trades_title: 'Traspasos', trades_subtitle: 'Traspasos confirmados',
    trades_search_ph: 'Equipo, jugador, pick…',
    rosters_title: 'Plantillas', rosters_subtitle: 'Los 30 equipos — temporada 2025-26',
    rosters_search_ph: 'Buscar equipo o jugador…',
    roster_stays: 'Plantilla', roster_arrivals: 'Llegadas', roster_departures: 'Salidas',
    roster_fa: 'FA', roster_draft: 'Draft', roster_trade: 'Vía Trade',
    roster_salidas_fa: 'FA', roster_salidas_trade: 'Vía Trade', roster_fa_pending: 'FA Pendientes', roster_waived: 'Cortado', roster_deceased: 'Fallecido', roster_retired: 'Retirado', roster_overseas: 'Otras ligas',
    roster_section_trades: 'Traspasos', roster_section_coaches: 'Cuerpo técnico y gerencia',
    coaches_title: 'Entrenadores y General Managers', coaches_subtitle: 'Cambios en banquillos y gerencias',
    coaches_search_ph: 'Equipo, nombre…',
    coaches_col_new: 'Nuevo', coaches_col_role: 'Rol',
    coaches_col_prev: 'Anterior', coaches_col_date_hired: 'Contratado', coaches_col_date_fired: 'Despedido',
    col_team: 'Equipo', col_source: 'Fuente', col_notes: 'Notas', col_country: 'País',
    filter_search: 'Buscar', filter_type: 'Tipo', btn_reset: 'Limpiar',
    loading: 'Cargando datos…', no_data: 'Sin resultados',
    results: 'resultados', receives: 'Recibe',
    footer_data: 'Datos', footer_src: 'Fuente',
    last_update: 'Actualizado',
    trade_label: 'Traspaso',
    teams_title: 'Equipos', teams_subtitle: 'Las 30 franquicias de la NBA',
    drawer_view_team: 'Ver nuevo equipo', drawer_view_old_team: 'Ver equipo anterior',
    drawer_trade_alongside: 'Junto con', drawer_trade_inexchange: 'A cambio de',
    legend_rfa: 'Agente libre restringido', legend_to: 'Opción de equipo', legend_po: 'Opción de jugador',
    back_btn: 'Volver', end_of_lottery: 'FIN DE LA LOTERÍA', end_of_round1: 'FIN DE LA PRIMERA RONDA',
    drawer_old_team: 'Antiguo equipo', drawer_new_team: 'Nuevo equipo',
    drawer_total: 'Total', drawer_years: 'Años',
    load_error: 'Error al cargar datos. Verifica las URLs del Sheet.',
    retry: 'Reintentar',
    trade_from: 'De', trade_receives: 'recibe',
    toast_updated: 'Datos actualizados', toast_error: 'Error al actualizar', toast_copied: 'URL copiada ✓',
    badge_resign: 'RENUEVA',
    drawer_scouting: 'Scouting Report', drawer_scouting_link: 'Ver informe',
    legend_color_new: 'Alta', legend_color_resign: 'Renovación', legend_color_tw: 'Two-way',
  },
  en: {
    home_eyebrow: 'Off-Season',
    home_total_label: 'moves',
    home_subtitle: 'Every transaction of the 2025-26 offseason: free agency, draft, trades, rosters, and coaching changes.',
    home_fa_desc: 'Confirmed signings and pending market',
    home_draft_desc: 'Selected picks in rounds 1 and 2',
    home_trades_desc: 'Confirmed trades between franchises',
    home_rosters_desc: 'All 30 teams — arrivals, departures, returning',
    home_coaches_desc: 'Coaching and front office changes',
    home_teams_desc: 'All 30 franchises — moves and roster',
    fa_event_date_label: 'Free agency opens',
    draft_event_date_label: 'Draft date',
    home_records: 'records',
    home_teams: 'teams',
    home_changes: 'changes',
    theme_light: 'Light mode',
    theme_dark: 'Dark mode',
    tab_fa: 'Free Agency', tab_fa_short: 'FREE AG.', tab_draft: 'Draft', tab_trades: 'Trades',
    tab_rosters: 'Rosters', tab_coaches: 'Coaches & GMs', tab_coaches_short: 'HC / GMs', tab_teams: 'Teams',
    fa_title: 'Free Agency', fa_subtitle: 'Free Agents — Confirmed and pending moves',
    fa_signed_title: 'Signed', fa_pending_title: 'Pending free agents',
    fa_search_ph: 'Player, team…',
    fa_col_player: 'Player', fa_col_team25: '2026 Team', fa_col_dest: 'Destination',
    fa_col_m: 'Total ($M)', fa_col_yr: 'Years', fa_col_aav: 'AAV', col_date: 'Date',
    draft_title: 'Draft 2026', draft_subtitle: 'Selected picks — Rounds 1 & 2',
    draft_search_ph: 'Player, team, college…',
    draft_col_pick: 'Pick', draft_col_player: 'Player', draft_col_pos: 'Position',
    draft_col_from: 'From', draft_col_signed: 'Signed', draft_col_contract: 'Contract',
    draft_undrafted_title: 'Undrafted Players',
    draft_undrafted_subtitle: 'Players not selected in the Draft',
    trades_title: 'Trades', trades_subtitle: 'Confirmed trades',
    trades_search_ph: 'Team, player, pick…',
    rosters_title: 'Rosters', rosters_subtitle: 'All 30 teams — 2025-26 season',
    rosters_search_ph: 'Search team or player…',
    roster_stays: 'Roster', roster_arrivals: 'Arrivals', roster_departures: 'Departures',
    roster_fa: 'FA', roster_draft: 'Draft', roster_trade: 'Via Trade',
    roster_salidas_fa: 'FA', roster_salidas_trade: 'Via Trade', roster_fa_pending: 'Pending FA', roster_waived: 'Waived', roster_deceased: 'Deceased', roster_retired: 'Retired', roster_overseas: 'Overseas',
    roster_section_trades: 'Trades', roster_section_coaches: 'Coaching staff & front office',
    coaches_title: 'Head Coaches & General Managers', coaches_subtitle: 'Coaching and front office changes',
    coaches_search_ph: 'Team, name…',
    coaches_col_new: 'New', coaches_col_role: 'Role',
    coaches_col_prev: 'Previous', coaches_col_date_hired: 'Hired', coaches_col_date_fired: 'Fired',
    col_team: 'Team', col_source: 'Source', col_notes: 'Notes', col_country: 'Country',
    filter_search: 'Search', filter_type: 'Type', btn_reset: 'Reset',
    loading: 'Loading data…', no_data: 'No results',
    results: 'results', receives: 'Receives',
    footer_data: 'Data', footer_src: 'Source',
    last_update: 'Updated',
    trade_label: 'Trade',
    teams_title: 'Teams', teams_subtitle: 'All 30 NBA franchises',
    drawer_view_team: 'View new team', drawer_view_old_team: 'View previous team',
    drawer_trade_alongside: 'Alongside', drawer_trade_inexchange: 'In exchange for',
    legend_rfa: 'Restricted free agent', legend_to: 'Team option', legend_po: 'Player option',
    back_btn: 'Back', end_of_lottery: 'END OF LOTTERY', end_of_round1: 'END OF ROUND 1',
    drawer_old_team: 'Old team', drawer_new_team: 'New team',
    drawer_total: 'Total', drawer_years: 'Years',
    load_error: 'Failed to load data. Check the Sheet URLs.',
    retry: 'Retry',
    trade_from: 'From', trade_receives: 'receives',
    toast_updated: 'Data updated', toast_error: 'Update failed', toast_copied: 'URL copied ✓',
    badge_resign: 'RE-SIGNS',
    drawer_scouting: 'Scouting Report', drawer_scouting_link: 'View report',
    legend_color_new: 'Signing', legend_color_resign: 'Re-sign', legend_color_tw: 'Two-way',
  }
};

let lang = (() => { try { return localStorage.getItem('nba2026_lang') || 'es'; } catch(e) { return 'es'; } })();

function t(key) { return i18n[lang][key] || key; }

function setLang(l) {
  lang = l;
  try { localStorage.setItem('nba2026_lang', l); } catch(e) {}
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');
  btnEs.classList.toggle('active', l === 'es');
  btnEn.classList.toggle('active', l === 'en');
  btnEs.setAttribute('aria-pressed', String(l === 'es'));
  btnEn.setAttribute('aria-pressed', String(l === 'en'));
  document.documentElement.lang = l;
  applyTranslations();
  rerenderAll();
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (el.children.length > 0) {
      let tn = [...el.childNodes].find(n => n.nodeType === 3);
      if (tn) tn.textContent = val + " ";
      else el.insertBefore(document.createTextNode(val + " "), el.firstChild);
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    el.placeholder = t(key);
  });
  // #lastUpdate se actualiza desde setDataDate
}

// ─────────────────────────────────────────────
// CSV PARSER
// ─────────────────────────────────────────────
function parseCSV(text) {
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  text = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const rows = [];
  let row = [], cur = '', inQ = false;

  const pushRow = () => {
    row.push(cur.trim()); cur = '';
    if (row.length > 1 || row[0]) rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQ) {
      if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') { inQ = false; }
      else { cur += c; }
    } else {
      if      (c === '"') { inQ = true; }
      else if (c === ',') { row.push(cur.trim()); cur = ''; }
      else if (c === '\n') { pushRow(); }
      else { cur += c; }
    }
  }
  pushRow();

  return rows;
}

function cell(row, i) { return (row[i] || '').trim(); }
function setText(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }

// ─────────────────────────────────────────────
// DATA STORE
// ─────────────────────────────────────────────
const DATA = { fa: [], draft: [], undrafted: [], trades: [], rosters: [], coaches: [] };
let fetchComplete = false;
const FILTERED = { fa: [], draft: [], trades: [], coaches: [], rosters: [], faPending: [] };
const SORT = { fa: {col:-1,asc:true}, draft: {col:-1,asc:true}, coaches: {col:-1,asc:true}, faPending: {col:-1,asc:true} };

// ─────────────────────────────────────────────
// FETCH ALL
// ─────────────────────────────────────────────
const CACHE_KEY = 'nba2026_cache';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

function processPlayers(rows) {
  DATA.players = new Map();
  rows.slice(1).forEach(r => {
    const rawName = cell(r, 0);
    if (!rawName) return;
    const name = rawName.replace(/\s*\([^)]+\)\s*$/, '').trim();
    DATA.players.set(normPlayerKey(name), {
      name,
      yearBirth:  cell(r, 1),
      ageApprox:  cell(r, 2),
      heightCm:   cell(r, 3),
      heightIn:   cell(r, 4),
      weightKg:   cell(r, 5),
      birthPlace: cell(r, 6),
      univ:       cell(r, 7),
    });
  });
}

function processCandidatos(rows) {
  // Columnas: Rank(0) Jugador(1) País(2) Posición(3) Universidad/Equipo(4) Bryan Garcia(5) Javier Molero(6) Fecha nacimiento(7) Edad en el draft(8) Altura(9)
  rows.slice(1).forEach(r => {
    const rawName = cell(r, 1);
    if (!rawName) return;
    const name = rawName.replace(/\s*\([^)]+\)\s*$/, '').trim();
    const key = normPlayerKey(name);
    const scouting = [cell(r, 5), cell(r, 6)].filter(Boolean).join(',');
    DATA.players.set(key, {
      ...(DATA.players.get(key) || {}),
      name,
      birthPlace: cell(r, 2) || DATA.players.get(key)?.birthPlace,
      univ:       cell(r, 4) || DATA.players.get(key)?.univ,
      yearBirth:  cell(r, 7) || DATA.players.get(key)?.yearBirth,
      ageApprox:  cell(r, 8) || DATA.players.get(key)?.ageApprox,
      heightCm:   cell(r, 9) || DATA.players.get(key)?.heightCm,
      scouting:   scouting   || DATA.players.get(key)?.scouting || '',
    });
  });
}

function applyRawData(raw, ts) {
  processFA(parseCSV(raw.fa));
  processDraft(parseCSV(raw.draft));
  window._rawTradeRows = parseCSV(raw.trades);
  processTrades(window._rawTradeRows);
  processRosters(parseCSV(raw.rosters1), parseCSV(raw.rosters2));
  processCoaches(parseCSV(raw.coaches));
  processPlayers(parseCSV(raw.jugadores || ''));
  processCandidatos(parseCSV(raw.candidatos || ''));
  DATA._stamp = ts;
  rerenderAll();
  updateHomeCounts();
  buildSearchIdx();
  ['fa-tbody','fa-pending-tbody','draft-tbody','undrafted-tbody','coaches-tbody','trades-container'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.setAttribute('aria-busy', 'false');
  });
}

function setDataDate(dateStr) {
  let d = null;
  if (dateStr) {
    // YYYY-MM-DD — parsear como local para evitar UTC offset
    const iso = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (iso) d = new Date(+iso[1], +iso[2] - 1, +iso[3]);
  }
  if (!d && dateStr) {
    // DD/MM/YYYY o DD-MM-YYYY
    const m = dateStr.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/);
    if (m) d = new Date(+m[3], +m[2] - 1, +m[1]);
  }
  if (!d && dateStr) {
    // Número serial de Excel/Sheets
    const serial = parseInt(dateStr, 10);
    if (!isNaN(serial) && serial > 40000) {
      const utc = new Date((serial - 25569) * 86400000);
      d = new Date(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate());
    }
  }
  if (!d) d = new Date();
  const fmt = d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  const isoStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const timeEl = document.getElementById('ag-last-update');
  if (timeEl) { timeEl.textContent = fmt; timeEl.setAttribute('datetime', isoStr); }
  const upd = document.getElementById('lastUpdate');
  if (upd) upd.textContent = `${t('last_update')}: ${fmt}`;
}

async function fetchAll() {
  // Cargar caché al instante si existe
  let hadCache = false;
  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
    if (cached) { applyRawData(cached.raw, cached.ts); setDataDate(cached.dataDate || new Date(cached.ts).toISOString()); hadCache = true; }
  } catch(e) { /* caché corrupta, ignorar */ }

  // Refrescar desde el Sheet en background — usar allSettled para tolerar
  // que alguna fuente falle sin tirar el resto.
  try {
    const dataKeys = ['fa', 'draft', 'trades', 'rosters1', 'rosters2', 'coaches', 'jugadores', 'candidatos'];
    const allKeys  = [...dataKeys, 'fecha'];

    function fetchWithTimeout(url, ms = 12000) {
      const controller = new AbortController();
      const tid = setTimeout(() => controller.abort(), ms);
      return fetch(url, { signal: controller.signal })
        .then(async r => { clearTimeout(tid); return { text: await r.text(), lastModified: r.headers.get('Last-Modified') }; })
        .catch(e => { clearTimeout(tid); throw e; });
    }

    const settled = await Promise.allSettled(allKeys.map(k => fetchWithTimeout(URLS[k])));
    let dataDate = null;
    const failed = [];
    const raw = {};
    allKeys.forEach((k, idx) => {
      const s = settled[idx];
      if (s.status === 'fulfilled') {
        raw[k] = s.value.text;
        if (!dataDate && s.value.lastModified) dataDate = s.value.lastModified;
      } else if (k !== 'fecha') {
        failed.push(k);
      }
    });
    // Fecha explícita desde pestaña "fecha" — tiene prioridad sobre Last-Modified
    if (raw.fecha) {
      const cell = raw.fecha.split('\n')[0].split(',')[0].replace(/"/g, '').trim();
      if (cell) dataDate = cell;
    }

    if (failed.length === dataKeys.length) throw new Error('all-failed');

    // Para fuentes que fallaron, reutilizamos lo que hubiera en caché
    if (failed.length && hadCache) {
      try {
        const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || 'null');
        if (cached?.raw) failed.forEach(k => { if (cached.raw[k] != null) raw[k] = cached.raw[k]; });
      } catch(e) {}
    }
    // Asegurar que todas las claves de datos existen para evitar undefined en parseCSV
    dataKeys.forEach(k => { if (raw[k] == null) raw[k] = ''; });

    const ts  = Date.now();
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ raw, ts, dataDate })); } catch(e) {}

    fetchComplete = true;
    try { applyRawData(raw, ts); } catch(e) { console.error('applyRawData:', e); }
    setDataDate(dataDate || new Date().toISOString());
  } catch(e) {
    console.error(e);
    fetchComplete = true;
    const isTimeout = e?.name === 'AbortError';
    const msg = isTimeout ? 'La carga tardó demasiado. Comprueba tu conexión e inténtalo de nuevo.' : t('load_error');
    const errHTML = `<div class="state-empty" style="padding:24px;text-align:center">
      <div style="font-size:32px;margin-bottom:12px">⚠️</div>
      <div style="margin-bottom:14px;color:var(--text-muted)">${msg}</div>
      <button type="button" class="btn-retry" onclick="refreshData()" style="font-size:14px;padding:10px 24px">${t('retry')}</button>
    </div>`;
    [['fa-tbody',8],['draft-tbody',4],['trades-container',0],['coaches-tbody',7],['fa-pending-tbody',2]].forEach(([id, cols]) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.innerHTML = cols ? `<tr><td colspan="${cols}">${errHTML}</td></tr>` : errHTML;
    });
  }
}

// ─────────────────────────────────────────────
// PROCESS FA
// Columnas: JUGADOR | 2025 | 2024 | MILLONES | AÑOS | AAV | FUENTE | NOTAS
// ─────────────────────────────────────────────
function processFA(rows) {
  // Columnas: JUGADOR | POS | 2026(origen) | 2027(destino) | MILLONES | AÑOS | AAV | FUENTE | NOTAS
  DATA.fa = rows.slice(1).filter(r => cell(r,0)).map(r => ({
    player: cell(r,0),
    pos:    cell(r,1),
    team25: cell(r,2),
    dest:   cell(r,3) === '—' ? '' : cell(r,3),
    money:  cell(r,4),
    years:  cell(r,5),
    aav:    cell(r,6),
    source: cell(r,7),
    notes:  cell(r,8),
    date:   cell(r,9),
  }));
  setText('count-fa', DATA.fa.filter(d => d.dest).length);
  populateSelect('fa-team25', [...new Set(DATA.fa.map(d=>d.team25).filter(Boolean))].sort());
  populateSelect('fa-dest',   [...new Set(DATA.fa.map(d=>d.dest).filter(Boolean))].sort());
  populateSelect('fa-pos',    [...new Set(DATA.fa.map(d=>d.pos).filter(Boolean))].sort());
}

function renderFA(data) {
  const signed  = data.filter(d => d.dest).sort((a, b) => (parseFloat(b.aav) || 0) - (parseFloat(a.aav) || 0));
  const pending = data.filter(d => !d.dest).sort((a, b) => a.player.localeCompare(b.player));

  const tbody = document.getElementById('fa-tbody');
  tbody.innerHTML = signed.length
    ? signed.map(d => {
        const {name, badge} = faStatus(d.player);
        return `
      <tr>
        <td class="td-player clickable-player" tabindex="0" onclick="openPlayerDrawer('${esc(d.player)}')">${esc(name)}${badge}</td>
        <td style="text-align:center"><span class="pos-text">${esc(validPos(d.pos)) || '—'}</span></td>
        <td>${teamBadgeHTML(d.dest)}</td>
        <td>${teamBadgeHTML(d.team25)}</td>
        <td class="td-money">${d.money ? '$'+esc(d.money)+'M' : '—'}</td>
        <td class="td-num">${esc(d.years) || '—'}</td>
        <td class="td-money">${d.aav ? '$'+esc(d.aav)+'M' : '—'}</td>
        <td class="td-muted">${esc(d.source)}</td>
      </tr>`;}).join('')
    : (fetchComplete ? `<tr><td colspan="8"><div class="state-empty">${t('no_data')}</div></td></tr>` : '');

  document.getElementById('fa-count').innerHTML = `<span>${signed.length}</span>&nbsp;${t('results')}`;
}

function renderFAPending(data) {
  const pendingTbody = document.getElementById('fa-pending-tbody');
  pendingTbody.innerHTML = data.length
    ? data.map(d => {
        const {name, badge} = faStatus(d.player);
        return `
      <tr>
        <td class="td-player clickable-player" tabindex="0" onclick="openPlayerDrawer('${esc(d.player)}')">${esc(name)}${badge}</td>
        <td style="text-align:center"><span class="pos-text">${esc(validPos(d.pos)) || '—'}</span></td>
        <td>${teamBadgeHTML(d.team25)}</td>
        <td class="td-notes">${esc(d.notes)}</td>
      </tr>`;}).join('')
    : (fetchComplete ? `<tr><td colspan="4"><div class="state-empty">${t('no_data')}</div></td></tr>` : '');
  document.getElementById('fa-pending-count').innerHTML = `<span>${data.length}</span>&nbsp;${t('results')}`;
}

let _pendingTypeFilter = null;

function togglePendingType(type) {
  _pendingTypeFilter = _pendingTypeFilter === type ? null : type;
  ['RFA','TO','PO'].forEach(t => {
    const btn = document.getElementById(`filter-btn-${t.toLowerCase()}`);
    if (btn) btn.setAttribute('aria-pressed', String(_pendingTypeFilter === t));
  });
  filterFAPending();
}

function filterFAPending() {
  const q    = (document.getElementById('fa-pending-search')?.value || '').toLowerCase();
  const team = document.getElementById('fa-pending-team').value;
  const pos  = document.getElementById('fa-pending-pos').value;
  FILTERED.faPending = (DATA.faPending || []).filter(d => {
    if (q && !(d.player || '').toLowerCase().includes(q) && !(d.team25 || '').toLowerCase().includes(q)) return false;
    if (team && (d.team25||'').trim().toLowerCase() !== team.trim().toLowerCase()) return false;
    if (pos  && validPos(d.pos) !== pos) return false;
    if (_pendingTypeFilter) {
      const m = (d.player || '').match(/\((RFA|TO|PO)\)\s*$/i);
      if (!m || m[1].toUpperCase() !== _pendingTypeFilter) return false;
    }
    return true;
  });
  renderFAPending(FILTERED.faPending);
  updateFilterBadge(['fa-pending-search','fa-pending-team','fa-pending-pos'], 'fa-pending-filter-clear');
}

function updateFilterBadge(inputIds, clearBtnId) {
  const active = inputIds.filter(id => { const el = document.getElementById(id); return el && el.value !== ''; }).length;
  const btn = document.getElementById(clearBtnId);
  if (!btn) return;
  btn.hidden = active === 0;
  const badge = btn.querySelector('.filter-badge');
  if (badge) badge.textContent = active;
}

function resetFAPending() {
  const search = document.getElementById('fa-pending-search');
  if (search) search.value = '';
  document.getElementById('fa-pending-team').value = '';
  document.getElementById('fa-pending-pos').value = '';
  _pendingTypeFilter = null;
  ['RFA','TO','PO'].forEach(t => {
    const btn = document.getElementById(`filter-btn-${t.toLowerCase()}`);
    if (btn) btn.setAttribute('aria-pressed', 'false');
  });
  filterFAPending();
}

function filterFA() {
  const q = document.getElementById('fa-search').value.toLowerCase();
  const t25 = document.getElementById('fa-team25').value;
  const dest = document.getElementById('fa-dest').value;
  const pos = document.getElementById('fa-pos').value;
  FILTERED.fa = DATA.fa.filter(d =>
    (!q || `${d.player} ${d.team25} ${d.dest} ${d.notes}`.toLowerCase().includes(q)) &&
    (!t25 || d.team25 === t25) &&
    (!dest || d.dest === dest) &&
    (!pos || d.pos === pos)
  );
  renderFA(FILTERED.fa);
  updateFilterBadge(['fa-search','fa-team25','fa-dest','fa-pos'], 'fa-filter-clear');
}

function resetFA() {
  document.getElementById('fa-search').value = '';
  document.getElementById('fa-team25').value = '';
  document.getElementById('fa-dest').value = '';
  document.getElementById('fa-pos').value = '';
  filterFA();
}

// ─────────────────────────────────────────────
// PROCESS DRAFT
// Columnas: PICK | (equipo) | JUGADOR | (col vacía) | POS | 2024 | √ | CONTRATO | NOTAS
// Undrafted: filas sin número de pick (col0 vacía o no numérico) pero con jugador
// ─────────────────────────────────────────────
function processDraft(rows) {
  const data = rows.slice(1).filter(r => cell(r,0) || cell(r,2));
  DATA.draft = data.filter(r => cell(r,0) && !isNaN(parseInt(cell(r,0)))).map(r => ({
    pick:     cell(r,0),
    team:     cell(r,1),
    player:   cell(r,2),
    country:  cell(r,3),
    pos:      cell(r,4),
    from:     cell(r,5),
    check:    cell(r,6),
    contract: cell(r,7),
    notes:    cell(r,8),
    scouting: cell(r,9),
  }));
  DATA.undrafted = data.filter(r => cell(r,2) && (!cell(r,0) || isNaN(parseInt(cell(r,0))))).map(r => ({
    team:     cell(r,1),
    player:   cell(r,2),
    country:  cell(r,3),
    pos:      cell(r,4),
    from:     cell(r,5),
    check:    cell(r,6),
    contract: cell(r,7),
    notes:    cell(r,8),
    scouting: cell(r,9),
  }));
  setText('count-draft', DATA.draft.length);
  populateSelect('draft-pos',  [...new Set(DATA.draft.map(d=>d.pos).filter(Boolean))].sort());
  populateSelect('draft-team', [...new Set(DATA.draft.map(d=>d.team).filter(Boolean))].sort());
}

function renderDraft(data) {
  const tbody = document.getElementById('draft-tbody');
  if (!data.length) { if (!fetchComplete) return; tbody.innerHTML = `<tr><td colspan="8"><div class="state-empty">${t('no_data')}</div></td></tr>`; return; }
  const rows = [];
  data.forEach((d, i) => {
    const n = parseInt(d.pick);
    const cls = n <= 5 ? 'top5' : n <= 30 ? 'r1' : '';
    const chk = d.check ? `<span class="badge badge-check">${esc(d.check)}</span>` : '—';
    const playerCell = d.player
      ? `<td class="td-player clickable-player" tabindex="0" onclick="openPlayerDrawer('${esc(d.player)}')">${esc(d.player)}</td>`
      : `<td class="td-muted">—</td>`;
    const prev = i > 0 ? parseInt(data[i-1].pick) : null;
    if (prev === 14 || prev === 30) {
      const label = prev === 14 ? t('end_of_lottery') : t('end_of_round1');
      rows.push(`<tr><td colspan="8" style="padding:8px 12px;border:none;background:var(--surface-2);text-align:center"><span style="font-family:'DM Mono',monospace;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--text-muted)">${label}</span></td></tr>`);
    }
    rows.push(`<tr>
      <td><span class="pick-num ${cls}">${esc(d.pick)}</span></td>
      ${playerCell}
      <td style="text-align:center" title="${esc(d.country)}">${flag(d.country)}</td>
      <td>${teamBadgeHTML(d.team)}</td>
      <td style="text-align:center"><span class="pos-text">${esc(d.pos)}</span></td>
      <td>${esc(d.from)}</td>
      <td style="text-align:center">${chk}</td>
      <td style="text-align:center" class="td-muted">${esc(d.contract)}</td>
    </tr>`);
  });
  tbody.innerHTML = rows.join('');
  document.getElementById('draft-count').innerHTML = `<span>${data.length}</span>&nbsp;${t('results')}`;
}

function renderUndrafted(data) {
  const tbody = document.getElementById('undrafted-tbody');
  document.getElementById('undrafted-count').innerHTML = `<span>${data.length}</span>&nbsp;${t('results')}`;
  if (!data.length) { if (!fetchComplete) return; tbody.innerHTML = `<tr><td colspan="8"><div class="state-empty">${t('no_data')}</div></td></tr>`; return; }
  tbody.innerHTML = data.map(d => `
    <tr>
      <td class="td-player clickable-player" tabindex="0" onclick="openPlayerDrawer('${esc(d.player)}')">${esc(d.player)}</td>
      <td style="font-size:18px;text-align:center" title="${esc(d.country)}">${flag(d.country)}</td>
      <td>${d.team ? teamBadgeHTML(d.team) : '<span class="td-muted">—</span>'}</td>
      <td style="text-align:center"><span class="pos-text">${esc(d.pos) || '—'}</span></td>
      <td class="td-muted">${esc(d.from) || '—'}</td>
      <td style="text-align:center">${d.check ? `<span class="badge badge-check">${esc(d.check)}</span>` : '—'}</td>
      <td style="text-align:center" class="td-muted">${esc(d.contract) || '—'}</td>
      <td class="td-notes">${esc(d.notes)}</td>
    </tr>`).join('');
}

function filterDraft() {
  const q = document.getElementById('draft-search').value.toLowerCase();
  const pos = document.getElementById('draft-pos').value;
  const team = document.getElementById('draft-team').value;
  FILTERED.draft = DATA.draft.filter(d =>
    (!q || `${d.player} ${d.team} ${d.from} ${d.notes}`.toLowerCase().includes(q)) &&
    (!pos || d.pos === pos) &&
    (!team || d.team === team)
  );
  const filteredUndrafted = (DATA.undrafted || []).filter(d =>
    !q || `${d.player} ${d.pos} ${d.from} ${d.notes}`.toLowerCase().includes(q)
  );
  renderDraft(FILTERED.draft);
  renderUndrafted(filteredUndrafted);
  updateFilterBadge(['draft-search','draft-pos','draft-team'], 'draft-filter-clear');
}

function resetDraft() {
  document.getElementById('draft-search').value = '';
  document.getElementById('draft-pos').value = '';
  document.getElementById('draft-team').value = '';
  filterDraft();
}

// ─────────────────────────────────────────────
// PROCESS TRADES
// Columnas: RECIBE | (jugadores/picks) | ... | RECIBE | ...
// Estructura: cada fila es una parte del trade, agrupadas por número
// ─────────────────────────────────────────────
// Columnas (formato actual): # | Activo | POS | De | A | Fecha | Fuente
// Compatibilidad con formato antiguo: # | Activo | De | A | Fecha | Fuente
// Detección: si la cabecera fila 0 col 2 incluye "pos" o las celdas de la
// columna 2 contienen valores tipo PG/SG/SF/PF/C, usamos el nuevo formato.
function processTrades(rows) {
  const headerCell = (rows[0] && rows[0][2] ? rows[0][2] : '').toString().toLowerCase();
  const dataRows   = rows.slice(1);
  const looksLikePosCol = /pos/i.test(headerCell)
    || dataRows.some(r => {
         const v = (r && r[2] ? r[2] : '').toString().trim().toUpperCase();
         return v && /^(PG|SG|SF|PF|C|G|F|G\/F|F\/C|F\/G)$/.test(v);
       });
  const COLS = looksLikePosCol
    ? { id:0, asset:1, pos:2, from:3, to:4, date:5, src:6 }
    : { id:0, asset:1, pos:-1, from:2, to:3, date:4, src:5 };
  const tradeMap = new Map();
  const trades   = [];
  let lastId     = null;

  dataRows.forEach(r => {
    const id    = cell(r,COLS.id);
    const asset = cell(r,COLS.asset);
    const pos   = COLS.pos >= 0 ? cell(r,COLS.pos) : '';
    const from  = cell(r,COLS.from);
    const to    = cell(r,COLS.to);
    const date  = cell(r,COLS.date);
    const src   = cell(r,COLS.src);

    if (!id && !asset && !from && !to) return;

    const tradeId = id || lastId;
    if (!tradeId) return;
    if (id) lastId = id;

    if (!tradeMap.has(tradeId)) {
      const trade = { id: tradeId, date: '', source: '', sides: [] };
      tradeMap.set(tradeId, trade);
      trades.push(trade);
    }
    const trade = tradeMap.get(tradeId);
    if (date) trade.date   = date;
    if (src)  trade.source = src;

    if (asset && to) {
      let side = trade.sides.find(s => s.team === to);
      if (!side) { side = { team: to, receives: [] }; trade.sides.push(side); }
      side.receives.push({ item: asset, pos, from });
    }
  });

  DATA.trades = trades;
  setText('count-trades', DATA.trades.length);

  const allTeams = [...new Set(DATA.trades.flatMap(tr => tr.sides.map(s => s.team)).filter(Boolean))].sort();
  populateSelect('trades-team', allTeams);
}

function tradeReceivesHTML(receives) {
  if (!receives.length) return '<div class="trade-item td-muted">—</div>';
  // Agrupar activos por equipo de origen
  const byFrom = [];
  receives.forEach(r => {
    const grp = byFrom.find(g => g.from === r.from);
    if (grp) grp.items.push(r);
    else byFrom.push({ from: r.from, items: [r] });
  });
  return byFrom.map((grp, i) => `
    <div class="trade-group${i > 0 ? ' trade-group--gap' : ''}">
      ${grp.items.map(r => `<div class="trade-item" onclick="openPlayerDrawer('${esc(r.item)}')">${esc(r.item)}</div>`).join('')}
      <div class="trade-receives-label">
        (vía <span class="clickable-team" tabindex="0" onclick="openTeamView('${esc(grp.from)}')">${esc(grp.from)}</span>)
      </div>
    </div>
  `).join('');
}

function renderTrades(data) {
  const container = document.getElementById('trades-container');
  if (!data.length) { if (!fetchComplete) return; container.innerHTML = `<div class="state-empty">${t('no_data')}</div>`; return; }
  container.innerHTML = data.map(trade => `
    <div class="trade-card">
      <div class="trade-header">
        <span class="trade-header-meta">
          ${trade.date ? fmtDate(trade.date) : ''}${trade.date && trade.source ? ' · ' : ''}${trade.source ? esc(trade.source) : ''}
        </span>
      </div>
      <div class="trade-body" style="grid-template-columns:repeat(${trade.sides.length},1fr)">
        ${trade.sides.map(side => `
          <div class="trade-side">
            <div class="trade-team-label">
              ${teamLogo(side.team, 20)}<span class="clickable-team" tabindex="0" onclick="openTeamView('${esc(side.team)}')">${esc(side.team)}</span><span class="trade-receives-word">${t('trade_receives')}</span>
            </div>
            ${tradeReceivesHTML(side.receives)}
          </div>`).join('')}
      </div>
    </div>`).join('');
  document.getElementById('trades-count').innerHTML = `<span>${data.length}</span>&nbsp;${t('results')}`;
}

function filterTrades() {
  const q    = document.getElementById('trades-search').value.toLowerCase();
  const team = document.getElementById('trades-team').value;
  FILTERED.trades = DATA.trades.filter(trade => {
    const text = trade.sides.flatMap(s => [s.team, ...s.receives.flatMap(r => [r.item, r.from])]).join(' ').toLowerCase();
    return (!q || text.includes(q)) && (!team || trade.sides.some(s => s.team === team));
  });
  renderTrades(FILTERED.trades);
  updateFilterBadge(['trades-search','trades-team'], 'trades-filter-clear');
}

function resetTrades() {
  document.getElementById('trades-search').value = '';
  document.getElementById('trades-team').value = '';
  filterTrades();
}

// ─────────────────────────────────────────────
// PROCESS ROSTERS
// Columnas: EQUIPO | SIGUEN | ... | LLEGADAS | ... | SALIDAS | ... | FA PENDIENTES | ...
// ─────────────────────────────────────────────
function processRosters(rows1, rows2) {
  const parse = rows => {
    const teams = [];
    let current = null;
    rows.slice(1).forEach(r => {
      const a = cell(r,0);
      if (a) {
        current = { team: a, siguen: [], llegadas: [], salidas: [], fa: [], faSheet: [] };
        teams.push(current);
      }
      if (!current) return;
      // B,C=siguen | D,E=llegadas | F,G=salidas | H,I=fa pendientes
      const pair = (n, p) => n ? { name: n, pos: p || '' } : null;
      const s = pair(cell(r,1), cell(r,2)); if (s) current.siguen.push(s);
      const l = pair(cell(r,3), cell(r,4)); if (l) current.llegadas.push(l);
      const x = pair(cell(r,5), cell(r,6)); if (x) current.salidas.push(x);
      const f = pair(cell(r,7), cell(r,8)); if (f) current.faSheet.push(f);
    });
    return teams;
  };

  DATA.rosters = [...parse(rows1), ...parse(rows2)].sort((a,b) => a.team.localeCompare(b.team));

  // Strip trailing (RFA)/(TO)/(PO) tags for dedup purposes.
  const stripTag = n => (n || '').replace(/\s*\((?:RFA|TO|PO)\)\s*$/i, '').trim().toLowerCase();

  const pendingFromFA = [];
  const signedNames = new Set(DATA.fa.filter(d => d.dest).map(d => normPlayerKey(d.player)));
  DATA.rosters.forEach(team => {
    const key = team.team.trim().toLowerCase();
    const salidaNorm = p => normPlayerKey(parseSalidaReason(p.name).name);
    // Salidas definitivas: retirado, fallecido, overseas. Los cortados (waived)
    // siguen siendo agentes libres y deben mantenerse en FA Pendientes.
    const definitiveOut = new Set(
      (team.salidas || [])
        .filter(p => parseSalidaReason(p.name).reasonKey !== 'waived')
        .map(salidaNorm)
    );
    const salidasSet = new Set((team.salidas || []).map(salidaNorm));
    const fromFA = DATA.fa.filter(d => d.team25.trim().toLowerCase() === key && !d.dest)
      .map(d => ({ player: d.player, pos: d.pos || '', team25: d.team25, notes: d.notes }));
    const seen = new Set(fromFA.map(d => normPlayerKey(d.player)));
    const fromSheet = (team.faSheet || [])
      .filter(p => !seen.has(normPlayerKey(p.name)) && !signedNames.has(normPlayerKey(p.name)))
      .map(p => ({ player: p.name, pos: p.pos || '', team25: team.team, notes: '' }));
    const allPending = [...fromFA, ...fromSheet];
    // La card de equipo excluye todos los que están en SALIDAS.
    // La lista global excluye solo salidas definitivas (retirado/fallecido/overseas),
    // pero conserva los cortados porque siguen siendo agentes libres.
    const teamPending = allPending.filter(d => !salidasSet.has(normPlayerKey(d.player)));
    const globalPending = allPending.filter(d => !definitiveOut.has(normPlayerKey(d.player)));
    team.fa = teamPending.map(d => ({ name: d.player, pos: d.pos }));
    pendingFromFA.push(...globalPending);
  });
  DATA.faPending = pendingFromFA;
  FILTERED.faPending = [...DATA.faPending];
  populateSelect('fa-pending-team', [...new Set(DATA.faPending.map(d => d.team25).filter(Boolean))].sort());
  populateSelect('fa-pending-pos',  [...new Set(DATA.faPending.map(d => validPos(d.pos)).filter(Boolean))].sort());
  renderFAPending(FILTERED.faPending);
}

const POS_ORDER = ['PG','SG','SF','PF','C'];

// Detección Two-Way. Cubre "two way", "two-way", "twoway", "(tw)" y "TW"
// (este último con word-boundary para no matchear cosas dentro de nombres).
// Acepta strings extra (hints) como contract/notes para detectar TW puesto
// en otra columna del sheet.
const TW_DETECT_RE = /\b(?:tw|two[\s-]?way)\b/i;
function parseTW(rawName, ...hints) {
  const text = [rawName, ...hints].filter(Boolean).join(' ');
  const tw = TW_DETECT_RE.test(text);
  const name = (rawName || '')
    .replace(/\s*\(two[\s-]?way\)\s*/i, '')
    .replace(/\s*two[\s-]?way\s*/i, '')
    .replace(/\s*\(tw\)\s*/i, '')
    .trim();
  return { name, tw };
}

// Detecta activos que no son jugadores (picks de draft, rondas, cash).
// Cubre tanto inglés como español: pick, round, ronda, cash.
const NON_PLAYER_ASSET_RE = /\b(pick|picks|round|ronda|rondas|cash)\b/i;
function isNonPlayerAsset(item) {
  return NON_PLAYER_ASSET_RE.test((item || '').trim());
}

// Parsea una razón de salida desde el sufijo entre paréntesis del nombre en
// col F (Salidas). Tags reconocidos: deceased/fallecido, retired/retirado,
// FIBA/overseas. Si el tag no se reconoce, devuelve el nombre intacto y usa
// 'waived' como razón por defecto.
const SALIDA_REASON_MAP = {
  deceased: 'deceased', fallecido: 'deceased',
  retired:  'retired',  retirado:  'retired',
  fiba:     'overseas', overseas:  'overseas',
};
function parseSalidaReason(rawName) {
  const m = (rawName || '').match(/\(([^)]+)\)\s*$/);
  if (m) {
    const nameWithoutTag = rawName.replace(/\s*\([^)]+\)\s*$/, '').trim();
    const tagContent = m[1].trim();
    const colonIdx = tagContent.indexOf(':');
    if (colonIdx !== -1) {
      const tagKey = tagContent.slice(0, colonIdx).trim().toLowerCase();
      const dest = tagContent.slice(colonIdx + 1).trim();
      const key = SALIDA_REASON_MAP[tagKey];
      if (key) return { name: nameWithoutTag, reasonKey: key, dest };
    }
    const key = SALIDA_REASON_MAP[tagContent.toLowerCase()];
    return { name: nameWithoutTag, reasonKey: key || 'waived' };
  }
  return { name: (rawName || '').trim(), reasonKey: 'waived' };
}

// Normaliza el nombre del jugador quitando sufijos (TW)/(RFA)/(TO)/(PO) y
// pasándolo a minúsculas, para usarlo como clave de índice/comparación.
function normPlayerKey(name) {
  if (!name) return '';
  return parseTW(name).name.replace(/\s*\((?:RFA|TO|PO)\)\s*$/i, '').trim().toLowerCase();
}

// Índice global de posiciones por jugador, reconstruido cuando cambia DATA._stamp.
function lookupPos(name) {
  if (!lookupPos._idx || lookupPos._stamp !== DATA._stamp) {
    const idx = new Map();
    const put = (n, p) => { const k = normPlayerKey(n); if (k && p && !idx.has(k)) idx.set(k, p); };
    (DATA.fa||[]).forEach(d => put(d.player, d.pos));
    (DATA.draft||[]).forEach(d => put(d.player, d.pos));
    (DATA.undrafted||[]).forEach(d => put(d.player, d.pos));
    (DATA.rosters||[]).forEach(r => r.siguen.forEach(p => put(p.name, p.pos)));
    (DATA.trades||[]).forEach(tr => tr.sides.forEach(s => s.receives.forEach(r => { if (r.pos) put(r.item, r.pos); })));
    lookupPos._idx = idx;
    lookupPos._stamp = DATA._stamp;
  }
  return lookupPos._idx.get(normPlayerKey(name)) || '';
}

// Normaliza el item recibido en un trade (puede traer "(TW)", "Two-way" o sufijos)
// y lo compara exactamente con el nombre del jugador para evitar falsos positivos
// del estilo "John" matcheando "Johnson".
function tradeItemMatchesPlayer(item, playerName) {
  if (!item || !playerName) return false;
  if (isNonPlayerAsset(item)) return false;
  return normPlayerKey(item) === normPlayerKey(playerName);
}

function buildPlantilla(team) {
  const norm    = s => (s || '').trim().toLowerCase();
  const key     = norm(team.team);
  const posLookup = lookupPos;

  // Renovaciones: FA cuyo team25 === dest === este equipo. Las identificamos
  // por la clave normalizada del jugador para detectar duplicados con siguen.
  const resignKeys = new Set(
    (DATA.fa||[])
      .filter(d => d.dest && norm(d.dest) === key && norm(d.team25) === key)
      .map(d => normPlayerKey(d.player))
  );

  // Picks de draft firmados (√): tienen prioridad sobre siguen, para que un
  // rookie listado por error en B,C aparezca solo una vez como ALTA.
  const draftedCheckKeys = new Set([
    ...(DATA.draft||[])
      .filter(d => norm(d.team) === key && d.player && d.check)
      .map(d => normPlayerKey(d.player)),
    ...(DATA.undrafted||[])
      .filter(d => norm(d.team) === key && d.player && d.check)
      .map(d => normPlayerKey(d.player)),
  ]);

  const staying = team.siguen
    .filter(p => !draftedCheckKeys.has(normPlayerKey(p.name)))
    .map(p => {
      const { name, tw } = parseTW(p.name);
      const pos = (p.pos || posLookup(name)).toUpperCase();
      const k = normPlayerKey(p.name);
      return { name, pos, type: 'staying', tw, resign: resignKeys.has(k) };
    });

  const stayingKeys = new Set(staying.map(p => normPlayerKey(p.name)));

  // Llegadas FA. Si una renovación ya está como SIGUEN del sheet, no duplicar.
  // Si la renovación NO está en SIGUEN, la añadimos como llegada con badge.
  const faIn = (DATA.fa||[])
    .filter(d => norm(d.dest) === key)
    .filter(d => !stayingKeys.has(normPlayerKey(d.player)))
    .map(d => {
      const {name,tw} = parseTW(d.player, d.notes, d.aav);
      const isResign = norm(d.team25) === key;
      return { name, pos: (d.pos || posLookup(name)).toUpperCase(), type: 'new', tw, resign: isResign };
    });

  // Picks de draft: solo entran a Plantilla si están firmados (col G "√").
  // Como Llegadas siguen apareciendo todos en el team view.
  const draftIn = (DATA.draft||[])
    .filter(d => norm(d.team) === key && d.player && d.check)
    .map(d => { const {name,tw} = parseTW(d.player, d.contract); return { name, pos: (d.pos || posLookup(name)).toUpperCase(), type: 'new', tw }; });

  const undraftedIn = (DATA.undrafted||[])
    .filter(d => norm(d.team) === key && d.player && d.check)
    .map(d => { const {name,tw} = parseTW(d.player, d.contract); return { name, pos: (d.pos || posLookup(name)).toUpperCase(), type: 'new', tw }; });

  const tradeIn = [];
  (DATA.trades||[])
    .filter(tr => tr.sides.some(s => norm(s.team) === key))
    .forEach(tr => {
      const side = tr.sides.find(s => norm(s.team) === key);
      if (side) side.receives
        .filter(r => !isNonPlayerAsset(r.item))
        .forEach(r => {
          const {name,tw} = parseTW(r.item);
          tradeIn.push({ name, pos: (r.pos || posLookup(name)).toUpperCase(), type: 'new', tw });
        });
    });

  return [...staying, ...faIn, ...draftIn, ...undraftedIn, ...tradeIn].sort((a, b) => {
    const ai = POS_ORDER.indexOf(a.pos), bi = POS_ORDER.indexOf(b.pos);
    const ao = ai === -1 ? 99 : ai,   bo = bi === -1 ? 99 : bi;
    if (ao !== bo) return ao - bo;
    // Dentro de la misma posición, los TW siempre al final.
    if (!!a.tw !== !!b.tw) return a.tw ? 1 : -1;
    return a.name.localeCompare(b.name);
  });
}

function plantillaBlock(players) {
  const posTag    = pos => POS_ORDER.includes(pos) ? `<span class="roster-pos-tag">${esc(pos)}</span>` : '';
  // Color por status (resign > new > default). TW siempre como badge naranja
  // al lado del nombre, sin sustituir el color de status.
  const cls = p => p.resign ? 'roster-player roster-player-resign'
                  : p.type === 'new' ? 'roster-player roster-player-new'
                  : 'roster-player';
  const tw = p => p.tw ? ' <span class="badge-tw">TW</span>' : '';
  return `
    <div class="roster-block">
      <div class="roster-label plantilla">${t('roster_stays')}</div>
      ${players.length
        ? players.map(p => `<div class="${cls(p)}">${posTag(p.pos)}${esc(p.name)}${tw(p)}</div>`).join('')
        : `<div class="roster-player" style="color:var(--text-dim)">—</div>`}
    </div>`;
}

function renderRosters(data) {
  const container = document.getElementById('rosters-container');
  if (!data.length) { if (!fetchComplete) return; container.innerHTML = `<div class="state-empty">${t('no_data')}</div>`; return; }
  container.innerHTML = data.map(team => `
    <div class="team-card">
      <div class="team-card-header">
        ${teamLogo(team.team, 28)}
        <span class="team-name clickable-team" tabindex="0" onclick="openTeamView('${esc(team.team)}')" style="cursor:pointer">${esc(team.team)}</span>
      </div>
      <div class="team-card-body" style="padding:12px 16px">
        ${plantillaBlock(buildPlantilla(team))}
        ${rosterBlock(team.llegadas, 'llegadas', t('roster_arrivals'))}
        ${rosterBlock(team.salidas, 'salidas', t('roster_departures'))}
        ${rosterBlock(team.fa, 'fa', t('roster_fa'))}
      </div>
    </div>`).join('');
  document.getElementById('rosters-count').innerHTML = `<span>${data.length}</span>&nbsp;${t('results')}`;
}

function rosterBlock(players, cls, label) {
  if (!players.length) return '';
  return `
    <div class="roster-block">
      <div class="roster-label ${cls}">${label}</div>
      ${players.map(p => `<div class="roster-player">${esc(typeof p === 'object' ? p.name : p)}</div>`).join('')}
    </div>`;
}

function filterRosters() {
  const q = document.getElementById('rosters-search').value.toLowerCase();
  FILTERED.rosters = DATA.rosters.filter(d => {
    if (!q) return true;
    const plantillaNames = buildPlantilla(d).map(p => p.name).join(' ');
    return `${d.team} ${plantillaNames} ${[...d.llegadas,...d.salidas,...d.fa].map(p => typeof p === 'object' ? p.name : p).join(' ')}`.toLowerCase().includes(q);
  });
  renderRosters(FILTERED.rosters);
}

function resetRosters() {
  document.getElementById('rosters-search').value = '';
  filterRosters();
}

// ─────────────────────────────────────────────
// PROCESS COACHES
// Columnas: EQUIPO | NUEVO | ROL | FECHA(fichaje) | ANTIGUO | FECHA(despido) | FUENTE
// ─────────────────────────────────────────────
function processCoaches(rows) {
  DATA.coaches = rows.slice(1).filter(r => cell(r,0)).map(r => ({
    team:       cell(r,0),
    new:        cell(r,1),
    role:       cell(r,2),
    dateHired:  cell(r,3),
    prev:       cell(r,4),
    dateFired:  cell(r,5),
    source:     cell(r,6),
  }));
  setText('count-coaches', DATA.coaches.length);
  populateSelect('coaches-team', [...new Set(DATA.coaches.map(d=>d.team).filter(Boolean))].sort());
}

function renderCoaches(data) {
  const tbody = document.getElementById('coaches-tbody');
  if (!data.length) { if (!fetchComplete) return; tbody.innerHTML = `<tr><td colspan="7"><div class="state-empty">${t('no_data')}</div></td></tr>`; return; }
  tbody.innerHTML = data.map(d => {
    const roleCls = (d.role || '').toUpperCase().includes('HC') || (d.role || '').toUpperCase().includes('HEAD') ? 'badge-role-hc' : 'badge-role-gm';
    return `<tr>
      <td class="td-player">${esc(d.new)}</td>
      <td>${teamBadgeHTML(d.team)}</td>
      <td>${d.role ? `<span class="badge ${roleCls}">${esc(d.role)}</span>` : '—'}</td>
      <td class="td-muted">${fmtDate(d.dateHired)}</td>
      <td class="td-muted">${esc(d.prev) || '—'}</td>
      <td class="td-muted">${fmtDate(d.dateFired)}</td>
      <td class="td-muted">${esc(d.source) || '—'}</td>
    </tr>`;
  }).join('');
  document.getElementById('coaches-count').innerHTML = `<span>${data.length}</span>&nbsp;${t('results')}`;
}

function toggleCoachFilter(type) {
  const btn = document.getElementById(`filter-coaches-${type}`);
  const active = btn.getAttribute('aria-pressed') === 'true';
  btn.setAttribute('aria-pressed', String(!active));
  filterCoaches();
}

function isHCRole(role) {
  return (role||'').toUpperCase().includes('HC') || (role||'').toUpperCase().includes('HEAD');
}

function filterCoaches() {
  const q    = document.getElementById('coaches-search').value.toLowerCase();
  const team = document.getElementById('coaches-team').value;
  const hcOn = document.getElementById('filter-coaches-hc').getAttribute('aria-pressed') === 'true';
  const gmOn = document.getElementById('filter-coaches-gm').getAttribute('aria-pressed') === 'true';
  FILTERED.coaches = DATA.coaches.filter(d => {
    const hc = isHCRole(d.role);
    const matchType = (!hcOn && !gmOn) || (hcOn && gmOn) || (hcOn && hc) || (gmOn && !hc);
    return matchType &&
      (!q    || `${d.team} ${d.new} ${d.prev} ${d.role}`.toLowerCase().includes(q)) &&
      (!team || d.team === team);
  });
  renderCoaches(FILTERED.coaches);
  updateFilterBadge(['coaches-search','coaches-team'], 'coaches-filter-clear');
}

function resetCoaches() {
  document.getElementById('coaches-search').value = '';
  document.getElementById('coaches-team').value = '';
  ['hc','gm'].forEach(t => document.getElementById(`filter-coaches-${t}`).setAttribute('aria-pressed','false'));
  filterCoaches();
}

// ─────────────────────────────────────────────
// SORT
// ─────────────────────────────────────────────
const GETTERS = {
  fa:     d => [d.player, d.pos, d.dest, d.team25, d.money, d.years, d.aav, d.source, d.notes],
  draft:  d => [d.pick, d.player, d.team, d.pos, d.from, d.check, d.contract, d.notes],
  coaches:   d => [d.new, d.team, d.role, d.dateHired, d.prev, d.dateFired, d.source],
  faPending: d => [d.player, d.pos, d.team25, d.notes],
};

function sortSection(section, col) {
  const s = SORT[section];
  if (!s) return;
  if (s.col === col) s.asc = !s.asc;
  else { s.col = col; s.asc = true; }

  const getter = GETTERS[section];
  const src = FILTERED[section].length ? FILTERED[section] : [...(DATA[section] || [])];
  if (!FILTERED[section].length) FILTERED[section] = src;

  src.sort((a, b) => {
    let av = getter(a)[col] || '';
    let bv = getter(b)[col] || '';
    const an = parseFloat(av), bn = parseFloat(bv);
    let cmp;
    if (!isNaN(an) && !isNaN(bn)) {
      cmp = an - bn;
    } else {
      const da = new Date(av), db = new Date(bv);
      cmp = (!isNaN(da) && !isNaN(db)) ? da - db : av.localeCompare(bv);
    }
    return s.asc ? cmp : -cmp;
  });

  if (section === 'fa') renderFA(src);
  else if (section === 'draft') renderDraft(src);
  else if (section === 'coaches') renderCoaches(src);
  else if (section === 'faPending') renderFAPending(src);

  const theadSel = section === 'faPending' ? '#fa-pending-thead th' : `#section-${section === 'coaches' ? 'coaches' : section} thead th`;
  document.querySelectorAll(theadSel).forEach((th, i) => {
    th.classList.toggle('sorted', i === col);
    if (th.hasAttribute('aria-sort')) {
      th.setAttribute('aria-sort', i === col ? (s.asc ? 'ascending' : 'descending') : 'none');
    }
  });
}

// ─────────────────────────────────────────────
// TABS
// ─────────────────────────────────────────────
const OG_BASE = 'https://alejandroggo.github.io/nba-offseason-2026/';
const OG_IMAGES  = { fa: 'img/2.png', draft: 'img/3.png', trades: 'img/4.png', teams: 'img/5.png' };
const OG_TITLES  = {
  fa:     'NBA Off-Season 2026: Agencia Libre',
  draft:  'NBA Off-Season 2026: Draft 2026',
  trades: 'NBA Off-Season 2026: Traspasos',
  coaches:'NBA Off-Season 2026: HC / GMs',
  teams:  'NBA Off-Season 2026: Equipos',
};
const OG_DESCS   = {
  fa:     'Todos los movimientos de la agencia libre NBA 2026.',
  draft:  'Todas las elecciones del draft y jugadores undrafted al detalle.',
  trades: 'Cada traspaso de la NBA confirmado.',
  coaches:'Cambios en banquillos y gerencias de la NBA.',
  teams:  'Las 30 franquicias de la NBA: movimientos y plantilla.',
};
const OG_DEFAULT_TITLE = 'NBA Off-Season 2026 — Dashboard';
const OG_DEFAULT_DESC  = 'Todos los movimientos de la temporada 2025-26: agencia libre, draft, traspasos, plantillas y cambios en banquillos.';

function updateOgImage(tab, directUrl) {
  const img   = directUrl || OG_BASE + (OG_IMAGES[tab]  || 'img/1.png');
  const title = OG_TITLES[tab]  || OG_DEFAULT_TITLE;
  const desc  = OG_DESCS[tab]   || OG_DEFAULT_DESC;
  const url   = OG_BASE + (tab && tab !== 'home' ? `?tab=${tab}` : '');

  document.querySelector('meta[property="og:image"]')?.setAttribute('content', img);
  document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', img);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', desc);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', desc);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  document.title = title;
}

function showTab(name, pushHistory = true) {
  if (!document.getElementById(`section-${name}`)) { showTab('home', pushHistory); return; }
  window.scrollTo(0, 0);
  updateOgImage(name);
  // Cerrar drawer si está abierto al cambiar de pestaña
  const drawer = document.getElementById('player-drawer');
  if (drawer && drawer.classList.contains('open')) closeDrawer(false);
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
    if (tab.hasAttribute('aria-selected')) tab.setAttribute('aria-selected', 'false');
  });
  document.querySelectorAll('.mobile-tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById(`section-${name}`).classList.add('active');
  if (name !== 'home') {
    const tabBtn = document.getElementById(`tab-${name}`);
    if (tabBtn) {
      tabBtn.classList.add('active');
      if (tabBtn.hasAttribute('aria-selected')) tabBtn.setAttribute('aria-selected', 'true');
    }
    const mobileTab = document.getElementById(`mtab-${name}`);
    if (mobileTab) mobileTab.classList.add('active');
    document.body.classList.remove('on-home');
    if (pushHistory) pushURL({ tab: name, team: null, player: null });
    if (name === 'quiz') renderQuiz();
  } else {
    document.body.classList.add('on-home');
    if (pushHistory) pushURL({ tab: null, team: null, player: null });
  }
}

// ─────────────────────────────────────────────
// UTILS
// ─────────────────────────────────────────────
const TEAM_LOGOS = {
  'Atlanta Hawks': 'atl', 'Boston Celtics': 'bos', 'Brooklyn Nets': 'bkn',
  'Charlotte Hornets': 'cha', 'Chicago Bulls': 'chi', 'Cleveland Cavaliers': 'cle',
  'Dallas Mavericks': 'dal', 'Denver Nuggets': 'den', 'Detroit Pistons': 'det',
  'Golden State Warriors': 'gs', 'Houston Rockets': 'hou', 'Indiana Pacers': 'ind',
  'Los Angeles Clippers': 'lac', 'Los Angeles Lakers': 'lal', 'Memphis Grizzlies': 'mem',
  'Miami Heat': 'mia', 'Milwaukee Bucks': 'mil', 'Minnesota Timberwolves': 'min',
  'New Orleans Pelicans': 'no', 'New York Knicks': 'ny', 'Oklahoma City Thunder': 'okc',
  'Orlando Magic': 'orl', 'Philadelphia 76ers': 'phi', 'Phoenix Suns': 'phx',
  'Portland Trail Blazers': 'por', 'Sacramento Kings': 'sac', 'San Antonio Spurs': 'sa',
  'Toronto Raptors': 'tor', 'Utah Jazz': 'utah', 'Washington Wizards': 'wsh',
};

const TEAM_VIDEOS = {
  'Atlanta Hawks':          '5g8IDnxvo4U',
  'Boston Celtics':         '8QEXixUJWIQ',
  'Brooklyn Nets':          'lAUAQ8XiCfw',
  'Charlotte Hornets':      '--YBKpG7JO8',
  'Chicago Bulls':          'pYari-6txaM',
  'Cleveland Cavaliers':    'Doqe2iGG4-k',
  'Dallas Mavericks':       'KlpE-c-rRQE',
  'Denver Nuggets':         'gpzyfVt9v80',
  'Detroit Pistons':        'bOe8WgFbJs4',
  'Golden State Warriors':  'MCULgrIAkRk',
  'Houston Rockets':        'XGwta0gez3Q',
  'Los Angeles Lakers':     'z006hUGp8NM',
  'Miami Heat':             'IaolLBaNPmQ',
  'Milwaukee Bucks':        'qDYSWTvfdy0',
  'Minnesota Timberwolves': 'fTF5W_3apRA',
  'New Orleans Pelicans':   'BaZcLGxrZI8',
  'New York Knicks':        'gdXimBg6YNE',
  'Oklahoma City Thunder':  '1pWjBYV1BIc',
  'Orlando Magic':          'F9tE6p-ud1c',
  'Philadelphia 76ers':     '7CDdvn1XkU0',
  'Phoenix Suns':           'HwM8u920JcI',
  'Portland Trail Blazers': 'yYvlTb0St6s',
  'Sacramento Kings':       'VV4gDWEHbEY',
  'San Antonio Spurs':      '6A67TGdT4BM',
  'Toronto Raptors':        'anJG6fARuuw',
  'Utah Jazz':              '0vFHA2oGK4c',
  'Washington Wizards':     '8NRZRBJ7_kc',
};

const TEAM_ARTICLES = {
  'Atlanta Hawks':          'https://www.nbaconcontexto.com/p/atlanta-hawks-previa-del-verano-de',
  'Brooklyn Nets':          'https://www.nbaconcontexto.com/p/brooklyn-nets-previa-del-verano-de',
  'Charlotte Hornets':      'https://www.nbaconcontexto.com/p/charlotte-hornets-previa-del-verano',
  'Chicago Bulls':          'https://www.nbaconcontexto.com/p/chicago-bulls-previa-del-verano-de',
  'Cleveland Cavaliers':    'https://www.nbaconcontexto.com/p/cleveland-cavaliers-previa-del-verano',
  'Houston Rockets':        'https://www.nbaconcontexto.com/p/houston-rockets-previa-del-verano',
  'Dallas Mavericks':       'https://www.nbaconcontexto.com/p/dallas-mavericks-previa-del-verano',
  'Golden State Warriors':  'https://www.nbaconcontexto.com/p/golden-state-warriors-previa-del',
  'Indiana Pacers':         'https://www.nbaconcontexto.com/p/indiana-pacers-previa-del-verano',
  'Los Angeles Clippers':   'https://www.nbaconcontexto.com/p/los-angeles-clippers-previa-del-verano',
  'Memphis Grizzlies':      'https://www.nbaconcontexto.com/p/memphis-grizzlies-previa-del-verano',
  'Miami Heat':             'https://www.nbaconcontexto.com/p/miami-heat-previa-del-verano-de-2026',
  'Milwaukee Bucks':        'https://www.nbaconcontexto.com/p/milwaukee-bucks-previa-del-verano',
  'New Orleans Pelicans':   'https://www.nbaconcontexto.com/p/new-orleans-pelicans-previa-del-verano',
  'Orlando Magic':          'https://www.nbaconcontexto.com/p/orlando-magic-previa-del-verano-de',
  'Philadelphia 76ers':     'https://www.nbaconcontexto.com/p/philadelphia-76ers-previa-del-verano',
  'Phoenix Suns':           'https://www.nbaconcontexto.com/p/phoenix-suns-previa-del-verano-de',
  'Portland Trail Blazers': 'https://www.nbaconcontexto.com/p/portland-trail-blazers-previa-del',
  'Sacramento Kings':       'https://www.nbaconcontexto.com/p/sacramento-kings-previa-del-verano',
  'Toronto Raptors':        'https://www.nbaconcontexto.com/p/toronto-raptors-previa-del-verano',
  'Utah Jazz':              'https://www.nbaconcontexto.com/p/utah-jazz-previa-del-verano-de-2026',
  'Washington Wizards':     'https://www.nbaconcontexto.com/p/washington-wizards-previa-del-verano',
};

function teamArticleHTML(teamName) {
  const url = TEAM_ARTICLES[teamName];
  if (!url) return '';
  return `<a class="tv-video-link tv-article-link" href="${url}" target="_blank" rel="noopener noreferrer" data-article-url="${url}">
    <img class="tv-video-thumb tv-article-thumb" src="" alt="" loading="lazy" style="display:none">
    <div class="tv-article-icon">✍</div>
    <div class="tv-video-info">
      <div class="tv-video-title-row">
        <span class="tv-video-play">✏</span>
        <span class="tv-article-title">${esc(teamName)}: Previa del verano de 2026</span>
      </div>
      <span class="tv-article-author">Kike García</span>
    </div>
  </a>`;
}

function teamVideoHTML(teamName) {
  const id = TEAM_VIDEOS[teamName];
  if (!id) return '';
  const thumb = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  const url   = `https://www.youtube.com/watch?v=${id}`;
  return `<a class="tv-video-link" href="${url}" target="_blank" rel="noopener noreferrer" data-yt-id="${id}">
    <img class="tv-video-thumb" src="${thumb}" alt="" loading="lazy">
    <div class="tv-video-info">
      <div class="tv-video-title-row">
        <span class="tv-video-play">▶</span>
        <span class="tv-video-title"></span>
      </div>
      <span class="tv-video-channel"></span>
    </div>
  </a>`;
}

async function loadVideoMeta() {
  for (const el of document.querySelectorAll('[data-yt-id]')) {
    const id = el.dataset.ytId;
    try {
      const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
      if (!res.ok) continue;
      const data = await res.json();
      const titleEl = el.querySelector('.tv-video-title');
      const chanEl  = el.querySelector('.tv-video-channel');
      if (titleEl) titleEl.textContent = data.title || '';
      if (chanEl)  chanEl.textContent  = data.author_name || '';
    } catch {}
  }
}

async function loadArticleMeta() {
  for (const el of document.querySelectorAll('[data-article-url]')) {
    const url = el.dataset.articleUrl;
    try {
      const res = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
      if (!res.ok) continue;
      const { data } = await res.json();
      const thumbEl = el.querySelector('.tv-article-thumb');
      const iconEl  = el.querySelector('.tv-article-icon');
      if (thumbEl && data.image?.url) {
        thumbEl.src = data.image.url;
        thumbEl.style.display = '';
        if (iconEl) iconEl.style.display = 'none';
      }
    } catch {}
  }
}

function teamLogo(name, size = 40) {
  const abbrev = TEAM_LOGOS[name];
  if (!abbrev) return '';
  return `<img src="https://a.espncdn.com/i/teamlogos/nba/500/${abbrev}.png" width="${size}" height="${size}" alt="" style="object-fit:contain;vertical-align:middle" onerror="this.style.display='none'">`;
}

function teamBadgeHTML(name, clickable = true) {
  if (!name) return '';
  const logo = teamLogo(name, 14);
  if (clickable) {
    return `<span class="team-inline clickable-team" tabindex="0" onclick="openTeamView('${esc(name)}')">${logo}${esc(name)}</span>`;
  }
  return `<span class="team-inline">${logo}${esc(name)}</span>`;
}

function fmtDate(str) {
  if (!str) return '—';
  const d = new Date(str);
  if (isNaN(d.getTime())) return str;
  const months = lang === 'es'
    ? ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']
    : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${String(d.getDate()).padStart(2,'0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

const VALID_POS = new Set(['PG','SG','SF','PF','C','G','F','G/F','F/C','F/G']);
function validPos(pos) {
  const p = (pos || '').trim().toUpperCase();
  return VALID_POS.has(p) ? p : '';
}

function faStatus(player) {
  const m = (player || '').match(/\((RFA|TO|PO)\)\s*$/i);
  if (!m) return { name: player || '', badge: '' };
  const tag = m[1].toUpperCase();
  const cls = tag === 'RFA' ? 'badge-rfa' : tag === 'TO' ? 'badge-to' : 'badge-po';
  return {
    name: player.replace(/\s*\([^)]+\)\s*$/, '').trim(),
    badge: `&nbsp;<span class="badge ${cls}">${tag}</span>`
  };
}

function flag(code) {
  if (!code || code.trim().length !== 2) return '';
  const c = code.trim().toLowerCase();
  return `<img src="https://flagpedia.net/data/flags/w40/${c}.png" width="24" height="16" alt="${c.toUpperCase()}" style="vertical-align:middle;border-radius:2px;object-fit:cover" onerror="this.style.display='none'">`;
}

function esc(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function populateSelect(id, values) {
  const sel = document.getElementById(id);
  if (!sel) return;
  const cur = sel.value;
  sel.innerHTML = '<option value="">—</option>' + values.map(v => `<option value="${esc(v)}">${esc(v)}</option>`).join('');
  if (cur) sel.value = cur;
}

function rerenderAll() {
  filterFA();
  filterFAPending();
  filterDraft();
  filterTrades();
  filterCoaches();
  updateHomeCounts();
  applyTranslations();
  const currentTeam = document.getElementById('tv-team-name')?.textContent?.trim();
  const teamSection = document.getElementById('section-team');
  if (currentTeam && teamSection?.classList.contains('active')) {
    openTeamView(currentTeam, false);
  }
}

function updateHomeCounts() {
  const faCount      = DATA.fa.filter(d=>d.dest).length;
  const draftCount   = DATA.draft.length;
  const tradesCount  = DATA.trades.length;
  const coachCount   = DATA.coaches.length;
  const total = faCount + draftCount + tradesCount;

  setText('home-count-fa', faCount     || '—');
  setText('home-count-draft', draftCount  || '—');
  setText('home-count-trades', tradesCount || '—');
  setText('home-count-coaches', coachCount  || '—');
  setText('home-total-moves', total       || '—');
}

// ─────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────
let currentTheme = (() => { try { const s = localStorage.getItem('ag-theme'); return (s === 'light' || s === 'dark') ? s : 'dark'; } catch(e) { return 'dark'; } })();

async function refreshData() {
  const btn = document.getElementById('refresh-btn');
  btn.classList.add('loading');
  btn.disabled = true;
  let ok = true;
  try { await fetchAll(); }
  catch(e) { ok = false; }
  finally {
    btn.classList.remove('loading');
    btn.disabled = false;
    showToast(ok ? t('toast_updated') : t('toast_error'), ok ? 'ok' : 'err');
  }
}

let _toastTimer = null;
function showToast(msg, kind = 'ok') {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    el.className = 'toast';
    el.setAttribute('role', 'status');
    el.setAttribute('aria-live', 'polite');
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.dataset.kind = kind;
  el.classList.add('show');
  if (_toastTimer) clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  try { localStorage.setItem('ag-theme', currentTheme); } catch(e) {}
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute('data-theme', currentTheme);
  const icon = document.getElementById('theme-icon');
  const tg = document.getElementById('theme-toggle');
  const SVG_SUN  = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const SVG_MOON = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  if (icon) icon.innerHTML = currentTheme === 'dark' ? SVG_MOON : SVG_SUN;
  if (tg) tg.setAttribute('aria-label', currentTheme === 'dark' ? 'Cambiar a modo día' : 'Cambiar a modo noche');
}



// ─────────────────────────────────────────────
// INIT
// ─────────────────────────────────────────────

// ─────────────────────────────────────────────
// FOOTER TOGGLE
// ─────────────────────────────────────────────
function toggleFooter() {
  const body = document.getElementById('ag-footer-body');
  const btn  = document.querySelector('.ag-footer-toggle');
  if (!body || !btn) return;
  const collapsed = body.classList.toggle('collapsed');
  btn.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
}

// SHARE
// ─────────────────────────────────────────────
function shareOnX(title) {
  const text = encodeURIComponent(`${title} (vía @alejandroggo)`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer,width=550,height=420');
}

// ─────────────────────────────────────────────
// URL ROUTING
// ─────────────────────────────────────────────
const BASE_PATH = '/nba-offseason-2026/';

function slugify(str) {
  return (str || '').toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function teamFromSlug(slug) {
  return Object.keys(TEAM_LOGOS).find(t => slugify(t) === slug) || null;
}

function playerFromSlug(slug) {
  return (_searchIdx || []).find(e => slugify(e.name) === slug)?.name || null;
}

let _pendingPlayerSlug = null;
let _drawerBackHash = '';

function pushURL(params) {
  let hash = '';
  if (params.player)    hash = 'jugador/' + slugify(params.player);
  else if (params.team) hash = 'equipo/'  + slugify(params.team);
  else if (params.tab)  hash = params.tab;
  window.history.pushState({}, '', BASE_PATH + (hash ? '#' + hash : ''));
}

function readURL() {
  // Migrar URLs antiguas con query params al nuevo formato hash
  const legacy = new URLSearchParams(window.location.search);
  if (legacy.has('team') || legacy.has('player') || legacy.has('tab')) {
    const lp = legacy.get('player'), lt = legacy.get('team'), ltab = legacy.get('tab');
    let hash = '';
    if (lp)   hash = 'jugador/' + slugify(lp);
    else if (lt)   hash = 'equipo/'  + slugify(lt);
    else if (ltab) hash = ltab;
    window.history.replaceState({}, '', BASE_PATH + (hash ? '#' + hash : ''));
  }

  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return { player: null, team: null, tab: null };
  if (hash.startsWith('jugador/')) {
    const slug = hash.slice('jugador/'.length);
    const name = playerFromSlug(slug);
    if (name) return { player: name, team: null, tab: null };
    _pendingPlayerSlug = slug;
    return { player: null, team: null, tab: null };
  }
  if (hash.startsWith('equipo/')) {
    const slug = hash.slice('equipo/'.length);
    return { player: null, team: teamFromSlug(slug) || slug, tab: null };
  }
  return { player: null, team: null, tab: hash };
}

window.addEventListener('popstate', () => {
  _pendingPlayerSlug = null;
  const { player, team, tab } = readURL();
  if (team)        { openTeamView(team, false); }
  else if (player) { openPlayerDrawer(player, false); }
  else             { closeDrawer(false); showTab(tab || (window.innerWidth <= 768 ? 'fa' : 'home'), false); }
});

// ─────────────────────────────────────────────
// PLAYER DRAWER
// ─────────────────────────────────────────────
function openPlayerDrawer(playerName, pushHistory = true) {
  // Recopilar todos los datos del jugador en todas las pestañas
  const faData      = DATA.fa.filter(d => d.player === playerName);
  const draftData   = DATA.draft.filter(d => d.player === playerName);
  const undData     = DATA.undrafted ? DATA.undrafted.filter(d => d.player === playerName) : [];
  const tradeData   = DATA.trades.filter(tr => tr.sides.some(s => s.receives.some(r => tradeItemMatchesPlayer(r.item, playerName))));
  const pendingData = (DATA.faPending || []).filter(d => d.player === playerName);

  let rosterEntry = null;
  for (const team of (DATA.rosters || [])) {
    for (const p of (team.siguen || [])) {
      const { name: pn, tw } = parseTW(p.name);
      if (normPlayerKey(pn) === normPlayerKey(playerName)) {
        rosterEntry = { team: team.team, tw };
        break;
      }
    }
    if (rosterEntry) break;
  }

  const { name: cleanName } = faStatus(playerName);
  document.getElementById('drawer-player-name').textContent = cleanName || playerName;

  const typeLabel = faData.length
    ? (faData[0].dest ? (lang === 'en' ? 'SIGNED FREE AGENT' : 'AGENTE LIBRE FIRMADO') : (lang === 'en' ? 'FREE AGENT' : 'AGENTE LIBRE'))
    : draftData.length ? (lang === 'en' ? 'DRAFTED' : 'DRAFTEADO')
    : undData.length  ? (lang === 'en' ? 'UNDRAFTED' : 'UNDRAFTED')
    : tradeData.length ? (lang === 'en' ? 'TRADED' : 'TRASPASADO')
    : pendingData.length ? (lang === 'en' ? 'FREE AGENT' : 'AGENTE LIBRE')
    : rosterEntry ? (lang === 'en' ? 'ROSTER' : 'PLANTILLA')
    : '';
  setText('drawer-player-type', typeLabel);

  let html = '';

  // FA
  if (faData.length) {
    html += `<div class="drawer-section">`;
    faData.forEach(d => {
      if (d.dest)   html += drawerRow(t('drawer_new_team'), teamBadgeHTML(d.dest, false));
      if (d.team25) html += drawerRow(t('drawer_old_team'), teamBadgeHTML(d.team25, false));
      if (d.money)  html += drawerRow(t('drawer_total'), `$${esc(d.money)}M`, 'money');
      if (d.years)  html += drawerRow(t('drawer_years'), esc(d.years));
      if (d.aav)    html += drawerRow('AAV', `$${esc(d.aav)}M`, 'money');
      if (d.source) html += drawerRow(t('footer_src'), esc(d.source));
      if (d.notes)  html += drawerRow(t('col_notes'), esc(d.notes), 'notes');
    });
    html += `</div>`;
  }

  // Draft / Undrafted — mismo bloque, Pick muestra "UNDRAFTED" si no hay número
  const allDraftData = [...draftData, ...undData];
  if (allDraftData.length) {
    html += `<div class="drawer-section">`;
    const d = allDraftData[0];
    html += drawerRow('Pick', d.pick ? esc(d.pick) : 'UNDRAFTED');
    if (d.team)     html += drawerRow(t('col_team'), teamBadgeHTML(d.team, false));
    if (d.pos)      html += drawerRow(t('draft_col_pos'), `<span class="pos-text">${esc(d.pos)}</span>`);
    if (d.from)     html += drawerRow(t('draft_col_from'), esc(d.from));
    if (d.contract) html += drawerRow(t('draft_col_contract'), esc(d.contract));
    if (d.notes)    html += drawerRow(t('col_notes'), esc(d.notes), 'notes');
    html += `</div>`;
  }

  // Scouting Report (aplica a draft y undrafted; todos los URLs no vacíos)
  const bioBefore = DATA.players?.get(normPlayerKey(playerName));
  const bioScouting = bioBefore?.scouting ? bioBefore.scouting.split(',').map(s => s.trim()).filter(Boolean) : [];
  const scoutingUrls = [...allDraftData.flatMap(d => d.scouting ? d.scouting.split(',').map(s => s.trim()).filter(Boolean) : []), ...bioScouting];
  if (scoutingUrls.length) {
    html += `<div class="drawer-section">
      <div class="drawer-scouting-title">${t('drawer_scouting')}</div>
      <ul class="drawer-scouting-list">` +
      scoutingUrls.map(raw => {
        const safeUrl = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
        let host = '';
        try { host = new URL(safeUrl).hostname.replace(/^www\./, ''); } catch(e) { host = raw; }
        let label;
        if (/esperandomarzo/i.test(host))     label = 'vía Bryan García';
        else if (/youtube|youtu\.be/i.test(host) || /draftlab|draft-lab/i.test(host)) label = 'vía Javier Molero';
        else label = 'vía ' + host;
        return `<li><a class="drawer-scouting-link" href="${esc(safeUrl)}" target="_blank" rel="noopener noreferrer">${esc(label)} →</a></li>`;
      }).join('') +
      `</ul></div>`;
  }

  // Trades
  if (tradeData.length) {
    html += `<div class="drawer-section">`;
    tradeData.forEach(tr => {
      tr.sides.forEach(side => {
        const myReceive = side.receives.find(r => tradeItemMatchesPlayer(r.item, playerName));
        if (myReceive) {
          html += drawerRow(t('drawer_new_team'), teamBadgeHTML(side.team, false));
          if (myReceive.from) html += drawerRow(t('drawer_old_team'), teamBadgeHTML(myReceive.from, false));
          const pos = validPos(myReceive.pos || lookupPos(playerName));
          if (pos) html += drawerRow(t('draft_col_pos'), `<span class="pos-text">${esc(pos)}</span>`);
          const alongside = side.receives.filter(r => r.from === myReceive.from && !tradeItemMatchesPlayer(r.item, playerName));
          if (alongside.length) html += drawerRow(t('drawer_trade_alongside'), alongside.map(r => esc(r.item)).join(', '));
          const oldTeamSide = tr.sides.find(s => s.team === myReceive.from);
          if (oldTeamSide && oldTeamSide.receives.length) html += drawerRow(t('drawer_trade_inexchange'), oldTeamSide.receives.map(r => esc(r.item)).join(', '));
        }
      });
    });
    html += `</div>`;
  }

  // Plantilla (jugador que se queda, sin datos en FA/trade/draft)
  if (rosterEntry && !faData.length && !tradeData.length && !draftData.length && !undData.length && !pendingData.length) {
    const twBadge = rosterEntry.tw ? ' <span class="badge-tw">TW</span>' : '';
    html += `<div class="drawer-section">`;
    html += drawerRow('Contrato', teamBadgeHTML(rosterEntry.team, false) + twBadge);
    html += `</div>`;
  }

  // FA Pending
  if (pendingData.length) {
    const pd = pendingData[0];
    const { badge: pdBadge } = faStatus(pd.player);
    html += `<div class="drawer-section">`;
    html += drawerRow('Estado', `Agente libre${pdBadge}`);
    if (pd.pos)   html += drawerRow(t('draft_col_pos'), `<span class="pos-text">${esc(pd.pos)}</span>`);
    if (pd.team25) html += drawerRow(t('fa_col_team25'), teamBadgeHTML(pd.team25, false));
    if (pd.notes) html += drawerRow(t('col_notes'), esc(pd.notes), 'notes');
    html += `</div>`;
  }

  if (!html) {
    html = `<div class="drawer-empty">${t('no_data')}</div>`;
  }

  // Bio: al final, separada del resto
  if (bioBefore) {
    let bioHtml = '';
    if (bioBefore.heightCm) {
      const h = bioBefore.heightCm;
      bioHtml += drawerRow('Altura', esc(/^\d+$/.test(h.trim()) ? h + ' cm' : h));
    }
    if (bioBefore.weightKg) {
      const w = bioBefore.weightKg;
      bioHtml += drawerRow('Peso', esc(/^\d+$/.test(w.trim()) ? w + ' kg' : w));
    }
    if (bioBefore.yearBirth) {
      let ageStr = '';
      const dmy = bioBefore.yearBirth.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
      if (dmy) {
        const bd = new Date(+dmy[3], +dmy[2] - 1, +dmy[1]);
        const now = new Date();
        let years = now.getFullYear() - bd.getFullYear();
        let months = now.getMonth() - bd.getMonth();
        if (now.getDate() < bd.getDate()) months--;
        if (months < 0) { years--; months += 12; }
        ageStr = months > 0 ? `${years} años ${months} meses` : `${years} años`;
      } else if (bioBefore.ageApprox) {
        ageStr = esc(bioBefore.ageApprox);
      } else {
        ageStr = esc(bioBefore.yearBirth);
      }
      bioHtml += drawerRow('Edad', ageStr);
    }
    if (bioBefore.birthPlace) bioHtml += drawerRow('Nacimiento', esc(bioBefore.birthPlace));
    if (bioBefore.univ)       bioHtml += drawerRow('Universidad/Origen', esc(bioBefore.univ));
    if (bioHtml) html += `<div class="drawer-section drawer-section--bio">
      <div class="drawer-section-title drawer-section-title--accent">Biografía</div>
      ${bioHtml}
    </div>`;
  }

  // Botones de navegación a equipos
  const teamLinks = [];
  if (faData.length) {
    if (faData[0].dest)   teamLinks.push({ label: t('drawer_view_team'),     team: faData[0].dest });
    if (faData[0].team25) teamLinks.push({ label: t('drawer_view_old_team'), team: faData[0].team25 });
  } else if (allDraftData.length) {
    if (allDraftData[0].team) teamLinks.push({ label: t('drawer_view_team'), team: allDraftData[0].team });
  } else if (tradeData.length) {
    tradeData[0].sides.forEach(side => {
      const match = side.receives.find(r => tradeItemMatchesPlayer(r.item, playerName));
      if (match) {
        teamLinks.push({ label: t('drawer_view_team'), team: side.team });
        if (match.from) teamLinks.push({ label: t('drawer_view_old_team'), team: match.from });
      }
    });
  } else if (pendingData.length && pendingData[0].team25) {
    teamLinks.push({ label: t('drawer_view_old_team'), team: pendingData[0].team25 });
  } else if (rosterEntry) {
    teamLinks.push({ label: t('drawer_view_team'), team: rosterEntry.team });
  }
  if (teamLinks.length) {
    html += `<div class="drawer-team-links">` +
      teamLinks.map(lk => `
        <button class="drawer-team-btn" onclick="openTeamView('${esc(lk.team)}')">
          <span class="drawer-team-btn-label">${esc(lk.label)}</span>
          <span class="drawer-team-btn-name">${teamLogo(lk.team, 16)}${esc(lk.team)}</span>
        </button>`).join('') +
    `</div>`;
  }

  document.getElementById('drawer-body').innerHTML = html;
  const overlay = document.getElementById('drawer-overlay');
  const drawerEl = document.getElementById('player-drawer');
  overlay.classList.add('open');
  drawerEl.classList.add('open');
  drawerEl.setAttribute('aria-hidden', 'false');
  overlay.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (pushHistory) { _drawerBackHash = window.location.hash; pushURL({ player: playerName, team: null }); }
}

function drawerRow(label, value, cls = '') {
  return `<div class="drawer-row">
    <span class="drawer-label">${label}:</span>
    <span class="drawer-value ${cls}">${value}</span>
  </div>`;
}

function closeDrawer(pushHistory = true) {
  const overlay = document.getElementById('drawer-overlay');
  const drawerEl = document.getElementById('player-drawer');
  overlay.classList.remove('open');
  drawerEl.classList.remove('open');
  drawerEl.setAttribute('aria-hidden', 'true');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  if (pushHistory) window.history.pushState({}, '', BASE_PATH + (_drawerBackHash || ''));
}

// ESC para cerrar drawer
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

// ─────────────────────────────────────────────
// TEAM VIEW
// ─────────────────────────────────────────────
function openTeamView(teamName, pushHistory = true) {
  const norm2 = s => (s||'').trim().toLowerCase();
  const tKey = norm2(teamName);
  // Resolver el nombre canónico aunque venga de la URL en otro casing.
  const canonical = Object.keys(TEAM_LOGOS).find(n => norm2(n) === tKey);
  if (canonical) teamName = canonical;
  else if (!teamName) { showTab('home', pushHistory); return; }
  const faIn      = DATA.fa.filter(d => norm2(d.dest) === tKey);
  const faOut     = DATA.fa.filter(d => norm2(d.team25) === tKey && d.dest);
  const picks     = DATA.draft.filter(d => norm2(d.team) === tKey);
  const undrafted = (DATA.undrafted || []).filter(d => norm2(d.team) === tKey && d.player);
  const trades    = DATA.trades.filter(tr => tr.sides.some(s => norm2(s.team) === tKey));
  const roster    = DATA.rosters.find(r => norm2(r.team) === tKey);
  const faPending = (roster?.fa || []).map(d => ({ player: d.name, pos: d.pos }));
  const coaches   = DATA.coaches.filter(d => norm2(d.team) === tKey);

  document.getElementById('tv-team-name').textContent = teamName;
  document.getElementById('tv-team-logo').innerHTML = teamLogo(teamName, 64);
  const abbrev = TEAM_LOGOS[teamName];
  if (abbrev) updateOgImage(null, `${OG_BASE}img/logos/${abbrev}.png`);

  let meta = '';
  coaches.forEach(c => {
    const firedPart = c.prev ? ` <span class="tv-meta-fired">(prev. ${esc(c.prev)})</span>` : '';
    meta += `<div><span class="tv-meta-role">${esc(c.role)}:</span> <span class="tv-meta-new">${esc(c.new)}</span>${firedPart}</div>`;
  });
  document.getElementById('tv-team-meta').innerHTML = meta;

  const tradeIn = [], tradeOut = [];
  trades.forEach(tr => {
    const mySide = tr.sides.find(s => norm2(s.team) === tKey);
    if (mySide) mySide.receives
      .filter(r => !/pick|cash/i.test(r.item))
      .forEach(r => tradeIn.push({ item: r.item, pos: r.pos }));
    // Salidas: activos donde from === este equipo (cualquier número de equipos)
    tr.sides.forEach(side => side.receives.filter(r => norm2(r.from) === tKey && !isNonPlayerAsset(r.item)).forEach(r => tradeOut.push({item: r.item, to: side.team, pos: r.pos})));
  });

  // Cortados: jugadores en col F,G (Salidas) que no firmaron en otro lado ni
  // fueron traspasados. Se muestran en la card "FA" sin destino.
  const stripTag = n => (n || '').replace(/\s*\((?:RFA|TO|PO)\)\s*$/i, '').trim().toLowerCase();
  const seenOut = new Set([
    ...faOut.map(d => stripTag(d.player)),
    ...tradeOut.map(r => stripTag(r.item)),
  ]);
  (roster?.salidas || []).forEach(p => {
    const { name, reasonKey, dest } = parseSalidaReason(p.name);
    if (!seenOut.has(stripTag(name))) faOut.push({ player: name, dest: dest || '', reasonKey });
  });

  const itemPosTag = (item, pos) => {
    if (isNonPlayerAsset(item)) return '';
    const p = validPos(pos || lookupPos(item));
    return p ? `<span class="roster-pos-tag" style="margin-right:6px">${esc(p)}</span>` : '';
  };

  const subcol = (items, label, renderFn) => `
    <div>
      <div class="roster-subcol-label">${label}</div>
      ${items.length ? items.map(renderFn).join('') : '<div class="roster-player td-muted">—</div>'}
    </div>`;

  const tvRow = (name, detail = '', money = '', playerName = '') => `
    <div class="tv-row">
      <div class="tv-row-main">
        <span class="tv-row-name"${playerName ? ` onclick="openPlayerDrawer('${playerName}')"` : ''}>${name}</span>
        ${detail ? `<span class="tv-row-detail">${detail}</span>` : ''}
      </div>
      ${money ? `<span class="tv-row-money">${money}</span>` : ''}
    </div>`;

  const tvEmpty = () => `<div class="tv-empty">—</div>`;

  let html = `<div style="padding:24px 32px">`;

  // ── LLEGADAS ──────────────────────────────────
  html += `<div class="tv-section-title" style="color:var(--signed)">${t('roster_arrivals')}</div>
  <div class="team-view-grid" style="margin-bottom:28px">
    ${tvCard(t('roster_fa'), faIn.length,
        faIn.length ? faIn.map(d => {
          const { name, tw } = parseTW(d.player, d.notes, d.aav);
          const isResign = norm2(d.team25) === tKey;
          const baseHTML = isResign
            ? `<span style="color:var(--resign)">${esc(name)}</span><span class="badge-resign">${t('badge_resign')}</span>`
            : esc(name);
          const nameHTML = itemPosTag(name, d.pos) + baseHTML + (tw ? ' <span class="badge-tw">TW</span>' : '');
          return tvRow(nameHTML, '', d.money ? `$${esc(d.money)}M/${esc(d.years)}y` : '', d.player);
        }).join('') : tvEmpty())}
    ${tvCard(t('roster_trade'), tradeIn.length,
        tradeIn.length ? tradeIn.map(r => {
          if (isNonPlayerAsset(r.item)) return tvRow(itemPosTag(r.item, r.pos) + esc(r.item));
          const { name, tw } = parseTW(r.item);
          return tvRow(itemPosTag(name, r.pos) + esc(name) + (tw ? ' <span class="badge-tw">TW</span>' : ''), '', '', name);
        }).join('') : tvEmpty())}
    ${(() => {
      const draftRows = [
        ...picks.map(d => ({ pick: `#${d.pick}`, player: d.player, pos: d.pos, contract: d.contract, undrafted: false })),
        ...undrafted.map(d => ({ pick: 'Undrafted', player: d.player, pos: d.pos, contract: d.contract, undrafted: true })),
      ];
      const renderDraftRow = d => {
        const { name, tw } = parseTW(d.player, d.contract);
        const pickCls = d.undrafted ? 'tv-row-pick undrafted' : 'tv-row-pick';
        return `<div class="tv-row${(tw && !d.undrafted) ? ' tv-row-tw' : ''}" style="justify-content:flex-start;gap:10px">
          ${itemPosTag(name, d.pos)}
          <span class="tv-row-name" onclick="openPlayerDrawer('${esc(d.player)}')" style="flex:1">${esc(name)}${tw ? ' <span class="badge-tw">TW</span>' : ''}</span>
          <span class="${pickCls}" style="text-align:right;min-width:auto">${esc(d.pick)}</span>
        </div>`;
      };
      return tvCard(t('roster_draft'), draftRows.length,
        draftRows.length ? draftRows.map(renderDraftRow).join('') : tvEmpty());
    })()}
  </div>`;

  // ── SALIDAS ───────────────────────────────────
  html += `<div class="tv-section-title" style="color:var(--gone)">${t('roster_departures')}</div>
  <div class="team-view-grid" style="margin-bottom:28px">
    ${tvCard(t('roster_salidas_fa'), faOut.length,
        faOut.length ? faOut.map(d => {
          const detail = d.dest
            ? (d.reasonKey === 'overseas' ? `${t('roster_overseas')} · ${esc(d.dest)}` : `→ ${esc(d.dest)}`)
            : t(`roster_${d.reasonKey || 'waived'}`);
          return tvRow(itemPosTag(d.player, d.pos) + esc(d.player), detail, '', d.player);
        }).join('') : tvEmpty())}
    ${tvCard(t('roster_salidas_trade'), tradeOut.length,
        tradeOut.length ? tradeOut.map(r => tvRow(itemPosTag(r.item, r.pos) + esc(r.item), `→ ${esc(r.to)}`, '', r.item)).join('') : tvEmpty())}
    ${tvCard(t('roster_fa_pending'), faPending.length,
        faPending.length ? faPending.map(d => { const {name,badge} = faStatus(d.player); return tvRow(itemPosTag(name, d.pos) + esc(name) + badge, '', '', d.player); }).join('') : tvEmpty())}
  </div>
  ${faPending.some(d => faStatus(d.player).badge) ? `<div class="legend-row legend-row--team" style="margin-top:-16px;margin-bottom:28px;justify-content:flex-end">
    <span class="legend-item"><span class="badge badge-rfa">RFA</span><span class="legend-text">${t('legend_rfa')}</span></span>
    <span class="legend-item"><span class="badge badge-to">TO</span><span class="legend-text">${t('legend_to')}</span></span>
    <span class="legend-item"><span class="badge badge-po">PO</span><span class="legend-text">${t('legend_po')}</span></span>
  </div>` : ''}`;

  const videoHTML   = teamVideoHTML(teamName);
  const articleHTML = teamArticleHTML(teamName);
  if (videoHTML || articleHTML) {
    html += `<div style="margin-bottom:28px;display:flex;flex-direction:column;gap:8px">`;
    if (videoHTML)   html += videoHTML;
    if (articleHTML) html += articleHTML;
    html += `</div>`;
  }

  // ── PLANTILLA (siguen + altas, agrupadas por posición) ────
  const POS_LIST = ['PG','SG','SF','PF','C'];
  if (roster) {
    const plantilla = buildPlantilla(roster);
    if (plantilla.length) {
      const byPos = {};
      plantilla.forEach(p => {
        const key = POS_LIST.includes(p.pos) ? p.pos : '?';
        (byPos[key] = byPos[key] || []).push(p);
      });
      const rows = [...POS_LIST, '?'].flatMap(pos => {
        const group = byPos[pos];
        if (!group) return [];
        const label = pos === '?' ? '—' : pos;
        const names = group.map(p => {
          // En PLANTILLA: color por status (resign > new > default). TW se
          // muestra siempre como badge naranja al lado del nombre, sin
          // sustituir el color de status.
          const color = p.resign ? 'var(--resign)'
                       : p.type === 'new' ? 'var(--signed)'
                       : '';
          const cls = color ? ` style="color:${color}"` : '';
          const twBadge = p.tw ? ' <span class="badge-tw">TW</span>' : '';
          return `<span class="clickable-player"${cls} tabindex="0" onclick="openPlayerDrawer('${esc(p.name)}')" onkeydown="if(event.key==='Enter'||event.key===' '){openPlayerDrawer('${esc(p.name)}')}">${esc(p.name)}</span>${twBadge}`;
        }).join(', ');
        return [`<div class="tv-row" style="align-items:baseline;gap:10px;justify-content:flex-start">
          <span class="pos-text" style="min-width:30px;flex-shrink:0">${label}</span>
          <span style="font-size:13px;color:var(--text)">${names}</span>
        </div>`];
      }).join('');
      const nonTW = plantilla.filter(p => !p.tw).length;
      const twCount = plantilla.length - nonTW;
      const countLabel = twCount ? `${nonTW} + ${twCount} TW` : `${nonTW}`;
      html += `<div class="tv-section-title">${t('roster_stays')} <span class="tv-section-count">(${countLabel})</span></div>
      <div class="tv-card" style="margin-bottom:8px">
        <div class="tv-card-body">${rows}</div>
      </div>
      <div class="tv-color-legend" style="margin-bottom:28px">
        <span><i style="background:var(--signed)"></i>${t('legend_color_new')}</span>
        <span><i style="background:var(--resign)"></i>${t('legend_color_resign')}</span>
        <span><span class="badge-tw">TW</span>${t('legend_color_tw')}</span>
      </div>`;
    }
  }

  // ── TRASPASOS ─────────────────────────────────
  if (trades.length) {
    html += `<div class="tv-section-title">${t('roster_section_trades')}</div>`;
    html += trades.map(tr => `
      <div class="trade-card" style="margin-bottom:10px">
        <div class="trade-header">
          <span class="trade-header-meta">
            ${tr.date ? fmtDate(tr.date) : ''}${tr.date && tr.source ? ' · ' : ''}${tr.source ? esc(tr.source) : ''}
          </span>
        </div>
        <div class="trade-body" style="grid-template-columns:repeat(${tr.sides.length},1fr)">
          ${tr.sides.map(side => `
            <div class="trade-side">
              <div class="trade-team-label">
                ${teamLogo(side.team, 20)}<span class="clickable-team" tabindex="0" onclick="openTeamView('${esc(side.team)}')">${esc(side.team)}</span><span class="trade-receives-word">${t('trade_receives')}</span>
              </div>
              ${tradeReceivesHTML(side.receives)}
            </div>`).join('')}
        </div>
      </div>`).join('');
    html += `<div style="margin-bottom:28px"></div>`;
  }

  // ── HC/GMs ────────────────────────────────────
  if (coaches.length) {
    html += `<div class="tv-section-title">${t('roster_section_coaches')}</div>
    <div class="tv-card" style="margin-bottom:28px">
      <div class="tv-card-body">
        <div class="table-wrap"><table><thead><tr>
          <th>${t('coaches_col_new')}</th>
          <th>${t('coaches_col_role')}</th>
          <th>${t('coaches_col_prev')}</th>
          <th>${t('coaches_col_date_hired')}</th>
        </tr></thead><tbody>` +
      coaches.map(d => {
        const rc = (d.role||'').toUpperCase().includes('HC') || (d.role||'').toUpperCase().includes('HEAD') ? 'badge-role-hc' : 'badge-role-gm';
        const roleCell = d.role ? `<span class="badge ${rc}">${esc(d.role)}</span>` : '—';
        const prevCell = d.prev ? `<span class="tv-coach-fired">${esc(d.prev)}</span>` : '—';
        return `<tr>
          <td class="td-player">${esc(d.new)}</td>
          <td>${roleCell}</td>
          <td class="td-muted">${prevCell}</td>
          <td class="td-muted">${fmtDate(d.dateHired)}</td>
        </tr>`;
      }).join('') + `</tbody></table></div>
      </div>
    </div>`;
  }

  html += `</div>`;

  document.getElementById('tv-content').innerHTML = html;
  loadVideoMeta();
  loadArticleMeta();

  document.getElementById('team-back-btn').textContent = '← ' + t('back_btn');

  // Cerrar drawer si estuviera abierto al abrir vista de equipo
  const drawer = document.getElementById('player-drawer');
  if (drawer && drawer.classList.contains('open')) closeDrawer(false);
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.getElementById('section-team').classList.add('active');
  document.body.classList.remove('on-home');

  if (pushHistory) pushURL({ team: teamName, player: null, tab: null });
}

function tvCard(label, count, bodyHTML) {
  return `<div class="tv-card">
    <div class="tv-card-header">
      <span class="tv-label">${label}</span>
      <span class="tv-count">${count}</span>
    </div>
    <div class="tv-card-body">${bodyHTML}</div>
  </div>`;
}

function goBack() {
  window.history.back();
}

function renderTeamsGrid() {
  const teams = Object.keys(TEAM_LOGOS).sort();
  document.getElementById('teams-grid').innerHTML = teams.map(name => `
    <div class="teams-grid-card" role="button" tabindex="0" onclick="openTeamView('${esc(name)}')">
      ${teamLogo(name, 48)}
      <div class="teams-grid-name">${esc(name)}</div>
    </div>`).join('');
}

var quizState = null;

applyTheme();
if (lang !== 'es') setLang(lang);
// A11y: add scope="col" a todos los th de cabecera
document.querySelectorAll('thead th').forEach(th => { if (!th.hasAttribute('scope')) th.setAttribute('scope', 'col'); });
const { player: initPlayer, team: initTeam, tab: initTab } = readURL();
if (initTeam)        { openTeamView(initTeam, false); }
else if (initPlayer) { openPlayerDrawer(initPlayer, false); }
else if (initTab)    { showTab(initTab, false); }
else if (window.innerWidth <= 768) { showTab('fa', false); }
else { document.body.classList.add('on-home'); updateOgImage('home'); }
renderTeamsGrid();

// Escribe _debugPlayers() en la consola para ver qué nombres no encajan
window._debugPlayers = () => {
  if (!DATA.players?.size) { console.warn('Jugadores no cargados todavía'); return; }

  // Todos los jugadores conocidos en el resto del sheet
  const known = new Set();
  (DATA.fa        || []).forEach(d => known.add(normPlayerKey(d.player)));
  (DATA.draft     || []).forEach(d => known.add(normPlayerKey(d.player)));
  (DATA.undrafted || []).forEach(d => known.add(normPlayerKey(d.player)));
  (DATA.faPending || []).forEach(d => known.add(normPlayerKey(d.player)));
  (DATA.rosters   || []).forEach(r => {
    [...(r.siguen||[]), ...(r.llegadas||[])].forEach(p => known.add(normPlayerKey(p.name)));
  });
  (DATA.trades || []).forEach(tr => tr.sides.forEach(s => s.receives.forEach(r => {
    if (r.type === 'player') known.add(normPlayerKey(r.item));
  })));

  const noMatch = [], matched = [];
  DATA.players.forEach((bio, key) => {
    if (known.has(key)) matched.push(bio.name);
    else noMatch.push(bio.name);
  });

  console.group(`_debugPlayers — ${DATA.players.size} entradas`);
  console.log(`✅ Con match (${matched.length}):`, matched.sort());
  if (noMatch.length)
    console.warn(`❌ Sin match en el resto del sheet (${noMatch.length}) — revisa el nombre exacto:`, noMatch.sort());
  else
    console.log('✅ Todos los jugadores tienen match');
  console.groupEnd();
};

// Debug: escribe _debugTrades() en la consola del navegador para ver los datos
window._debugTrades = () => {
  const raw = window._rawTradeRows;
  console.group('TRADES DEBUG');
  console.log('Filas CSV (primeras 10):', raw ? raw.slice(0,10) : 'No disponible — recarga la página');
  console.log('Trades parseados:', JSON.parse(JSON.stringify(DATA.trades)));
  console.groupEnd();
};

document.addEventListener('keydown', function(e) {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const el = e.target;
  if (el.classList.contains('clickable-player') || el.classList.contains('clickable-team') || el.classList.contains('teams-grid-card')) {
    e.preventDefault();
    el.click();
  }
});

// ─────────────────────────────────────────────
// QUIZ
// ─────────────────────────────────────────────
function buildQuizPool() {
  const easy = [], medium = [], hard = [];
  const seen = new Set();
  const cleanName = n => { const { name } = parseTW((n||'').replace(/\s*\((?:RFA|TO|PO)\)\s*/gi, '')); return name.trim(); };

  function add(player, team, level) {
    const key = player.toLowerCase().trim();
    if (!player || !team || seen.has(key)) return;
    seen.add(key);
    if (level === 'easy') easy.push({ player, team });
    else if (level === 'hard') hard.push({ player, team });
    else medium.push({ player, team });
  }

  // FA firmados
  (DATA.fa||[]).filter(d => d.dest).forEach(d => {
    const { name } = faStatus(d.player);
    const aav = parseFloat(d.aav) || 0;
    add(name, d.dest, aav >= 15 ? 'easy' : aav >= 5 ? 'medium' : 'hard');
  });
  // Draft picks
  (DATA.draft||[]).filter(d => d.team && d.player).forEach(d => {
    const pick = parseInt(d.pick) || 99;
    add(d.player, d.team, pick <= 10 ? 'easy' : pick <= 30 ? 'medium' : 'hard');
  });
  (DATA.undrafted||[]).filter(d => d.team && d.player).forEach(d => add(d.player, d.team, 'hard'));
  // Trades
  (DATA.trades||[]).forEach(tr => {
    tr.sides.forEach(side => {
      (side.receives||[]).filter(r => !isNonPlayerAsset(r.item)).forEach(r => {
        const { name } = parseTW(r.item);
        add(name, side.team, 'medium');
      });
    });
  });
  // Plantillas: llegadas (fichajes) como medio, siguen como difícil
  (DATA.rosters||[]).forEach(r => {
    (r.llegadas||[]).forEach(p => { const n = cleanName(p.name); if (n) add(n, r.team, 'medium'); });
    (r.siguen  ||[]).forEach(p => { const n = cleanName(p.name); if (n) add(n, r.team, 'hard'); });
  });

  return { easy, medium, hard };
}

function quizPickEntry(pool, used) {
  const available = pool.filter(e => !used.has(e.player.toLowerCase()));
  if (!available.length) return null;
  return available[Math.floor(Math.random() * available.length)];
}

function quizGetEntry() {
  const { round, pool, used } = quizState;
  const levels = ['easy', 'medium', 'hard'];
  return quizPickEntry(pool[levels[round]], used)
      || quizPickEntry([...pool.easy, ...pool.medium, ...pool.hard], used);
}

function quizGetOptions(correctTeam) {
  const all = Object.keys(TEAM_LOGOS).filter(t => t !== correctTeam);
  for (let i = all.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [all[i],all[j]]=[all[j],all[i]]; }
  const opts = [correctTeam, ...all.slice(0, 3)];
  for (let i = opts.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [opts[i],opts[j]]=[opts[j],opts[i]]; }
  return opts;
}

function quizNorm(s) {
  return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]/g,'');
}

function quizMatchTeam(input, correctTeam) {
  const inp = quizNorm(input.trim());
  if (!inp || inp.length < 3) return false;
  const full  = quizNorm(correctTeam);
  const words = correctTeam.split(' ').map(quizNorm);
  const nick  = words[words.length - 1];
  const abbr  = quizNorm(TEAM_LOGOS[correctTeam] || '');
  return inp === full || inp === nick || inp === abbr || (inp.length >= 5 && full.includes(inp));
}

async function fetchLeaderboard() {
  const r = await fetch(`${SCRIPT_URL}?action=get_leaderboard`);
  const csv = (await r.text()).trim();
  if (!csv) return [];
  return csv.split('\n').filter(Boolean).map((line, i) => {
    const cols = line.split(',').map(c => c.replace(/^"|"$/g,'').replace(/""/g,'"'));
    return { rank: i+1, name: cols[0]||'—', score: parseInt(cols[1])||0, date: cols[2]||'' };
  });
}

async function quizSubmitScore() {
  const nameEl = document.getElementById('quiz-infinite-name');
  const name   = (nameEl?.value||'').trim() || 'Anónimo';
  const score  = quizState.streak;
  const btn    = document.getElementById('quiz-submit-score-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }
  try { await fetch(`${SCRIPT_URL}?action=add_score&name=${encodeURIComponent(name)}&score=${score}`); } catch(e) {}
  quizState.submittedName = name;
  quizState.leaderboardData = null;
  renderQuiz();
  try { quizState.leaderboardData = await fetchLeaderboard(); } catch(e) { quizState.leaderboardData = []; }
  renderQuiz();
}

async function quizShowLeaderboard() {
  quizState = quizState || {};
  quizState.showingLeaderboard = true;
  quizState.leaderboardData = null;
  renderQuiz();
  try { quizState.leaderboardData = await fetchLeaderboard(); } catch(e) { quizState.leaderboardData = []; }
  renderQuiz();
}

function renderLeaderboardHTML(data, highlightName) {
  if (!data) return `<div class="quiz-lb-loading">Cargando ranking...</div>`;
  if (!data.length) return `<div class="quiz-lb-loading">Aún no hay puntuaciones.</div>`;
  const medals = ['🥇','🥈','🥉'];
  return `<div class="quiz-lb-table">
    ${data.map(r => {
      const isMine = highlightName && r.name.toLowerCase() === highlightName.toLowerCase();
      return `<div class="quiz-lb-row${isMine?' mine':''}">
        <span class="quiz-lb-rank">${medals[r.rank-1]||r.rank}</span>
        <span class="quiz-lb-name">${esc(r.name)}</span>
        <span class="quiz-lb-score">${r.score}</span>
      </div>`;
    }).join('')}
  </div>`;
}

function renderQuiz() {
  if (impostorState !== null) { renderImpostor(); return; }
  const container = document.getElementById('quiz-container');
  if (!container) return;

  // ── Leaderboard standalone ───────────────────
  if (quizState?.showingLeaderboard) {
    container.innerHTML = `
      <div class="quiz-wrap">
        <h2 class="quiz-title">🏆 Ranking Infinito</h2>
        ${renderLeaderboardHTML(quizState.leaderboardData, null)}
        <button class="quiz-btn-primary" onclick="quizState={modeSelect:true};renderQuiz()" style="margin-top:20px">← Volver</button>
      </div>`;
    return;
  }

  if (!quizState) {
    container.innerHTML = `
      <div class="quiz-wrap quiz-start">
        <div class="quiz-icon">🏀</div>
        <h2 class="quiz-title">Juegos NBA 2026</h2>
        <div class="juegos-home-grid">
          <button class="juegos-card" onclick="quizState={modeSelect:true};renderQuiz()">
            <span class="juegos-card-icon">📍</span>
            <span class="juegos-card-name">¿Dónde Juega?</span>
            <span class="juegos-card-desc">Adivina el equipo de cada jugador</span>
          </button>
          <button class="juegos-card" onclick="startImpostor()">
            <span class="juegos-card-icon">🕵️</span>
            <span class="juegos-card-name">El Impostor</span>
            <span class="juegos-card-desc">¿Quién no encaja en la plantilla?</span>
          </button>
        </div>
      </div>`;
    return;
  }

  if (quizState.modeSelect) {
    container.innerHTML = `
      <div class="quiz-wrap quiz-start">
        <div class="quiz-game-topbar">
          <button class="quiz-action-btn" onclick="quizState=null;renderQuiz()">← Juegos</button>
        </div>
        <div class="quiz-icon">📍</div>
        <h2 class="quiz-title">¿Dónde Juega?</h2>
        <p class="quiz-subtitle">¿A qué equipo fue el jugador?</p>

        <div class="quiz-modes-grid">
          <button class="quiz-mode-btn" onclick="quizState={subSelect:true};renderQuiz()">
            <span class="quiz-mode-icon">🎯</span>
            <span class="quiz-mode-name">15 Preguntas</span>
            <span class="quiz-mode-desc">4 opciones · 3 rondas</span>
          </button>
          <button class="quiz-mode-btn quiz-mode-infinite" onclick="startQuiz('infinite')">
            <span class="quiz-mode-icon">∞</span>
            <span class="quiz-mode-name">Infinito</span>
            <span class="quiz-mode-desc">hasta fallar · ranking global</span>
          </button>
        </div>
        <div class="quiz-scoring">
          <div class="quiz-scoring-row"><span class="quiz-scoring-round" style="color:var(--signed)">Fácil</span><span class="quiz-scoring-pts">1 pto por respuesta</span><span class="quiz-scoring-max">máx. 5 pts</span></div>
          <div class="quiz-scoring-row"><span class="quiz-scoring-round" style="color:var(--accent)">Medio</span><span class="quiz-scoring-pts">2 ptos por respuesta</span><span class="quiz-scoring-max">máx. 10 pts</span></div>
          <div class="quiz-scoring-row"><span class="quiz-scoring-round" style="color:var(--gone)">Difícil</span><span class="quiz-scoring-pts">3 ptos por respuesta</span><span class="quiz-scoring-max">máx. 15 pts</span></div>
        </div>
        <p class="quiz-meta" style="margin-top:12px">
          <button class="quiz-link-btn" onclick="quizShowLeaderboard()">🏆 Ver ranking infinito</button>
        </p>
      </div>`;
    return;
  }

  if (quizState.subSelect) {
    container.innerHTML = `
      <div class="quiz-wrap quiz-start">
        <div class="quiz-game-topbar">
          <button class="quiz-action-btn" onclick="quizState={modeSelect:true};renderQuiz()">← Modos</button>
        </div>
        <div class="quiz-icon">🎯</div>
        <h2 class="quiz-title">15 Preguntas</h2>
        <p class="quiz-subtitle">Elige cómo quieres responder</p>

        <div class="quiz-modes-grid">
          <button class="quiz-mode-btn" onclick="startQuiz('hints')">
            <span class="quiz-mode-icon">💡</span>
            <span class="quiz-mode-name">Con Pistas</span>
            <span class="quiz-mode-desc">4 opciones · elige el equipo</span>
          </button>
          <button class="quiz-mode-btn" onclick="startQuiz('nohints')">
            <span class="quiz-mode-icon">✏</span>
            <span class="quiz-mode-name">Sin Pistas</span>
            <span class="quiz-mode-desc">escribe el nombre del equipo</span>
          </button>
        </div>
      </div>`;
    return;
  }

  const { round, roundAnswers, scores, mode, current, answered, lastCorrect, selectedTeam } = quizState;

  // ── MODO INFINITO ────────────────────────────
  if (mode === 'infinite') {
    const { streak, gameOver, leaderboardData, submittedName } = quizState;

    // Leaderboard post-envío
    if (gameOver && submittedName !== undefined) {
      container.innerHTML = `
        <div class="quiz-wrap">
          <h2 class="quiz-title">🏆 Ranking Infinito</h2>
          <p class="quiz-subtitle" style="margin-bottom:16px">Tu puntuación: <strong>${streak}</strong></p>
          ${renderLeaderboardHTML(leaderboardData, submittedName)}
          <button class="quiz-btn-primary" onclick="quizState={modeSelect:true};renderQuiz()" style="margin-top:20px">Jugar de nuevo</button>
        </div>`;
      return;
    }

    // Game over — pedir nombre
    if (gameOver) {
      const teamOptions = Object.keys(TEAM_LOGOS).map(t => `<option value="${esc(t)}">`).join('');
      container.innerHTML = `
        <div class="quiz-wrap quiz-results">
          <div class="quiz-icon">🚫</div>
          <h2 class="quiz-title">Oh! Blocked by James!</h2>
          <p class="quiz-subtitle">La respuesta era: ${teamLogo(current.team,16)} <strong>${esc(current.team)}</strong></p>
          <div class="quiz-total-score">${streak}<span> preguntas</span></div>
          <p class="quiz-subtitle" style="margin-bottom:8px">Introduce tu nombre para el ranking:</p>
          <div class="quiz-input-row" style="max-width:320px;margin:0 auto 12px">
            <input class="quiz-input" id="quiz-infinite-name" type="text" placeholder="Tu nombre..." maxlength="30"
              onkeydown="if(event.key==='Enter')quizSubmitScore()">
            <button class="quiz-btn-confirm" id="quiz-submit-score-btn" onclick="quizSubmitScore()">Enviar</button>
          </div>
          <button class="quiz-link-btn" onclick="quizShowLeaderboard()" style="display:block;margin:8px auto">Solo ver ranking</button>
          <button class="quiz-btn-primary" onclick="quizState={modeSelect:true};renderQuiz()" style="margin-top:8px">Jugar de nuevo</button>
        </div>`;
      setTimeout(() => document.getElementById('quiz-infinite-name')?.focus(), 50);
      return;
    }

    // Pregunta
    const teamOptions = Object.keys(TEAM_LOGOS).map(t => `<option value="${esc(t)}">`).join('');
    const feedbackHTML = !answered ? '' : `<div class="quiz-feedback correct">BANG! 🏀</div>`;
    container.innerHTML = `
      <div class="quiz-wrap quiz-game">
        <div class="quiz-game-topbar">
          <button class="quiz-action-btn" onclick="quizState={modeSelect:true};renderQuiz()">← Volver</button>
          <button class="quiz-action-btn" onclick="startQuiz('infinite')">↺ Reiniciar</button>
        </div>
        <div class="quiz-header">
          <span class="quiz-round-chip" style="color:var(--accent)">∞ Infinito</span>
          <span class="quiz-score-chip" style="font-size:20px;font-weight:900">${streak}</span>
        </div>
        <p class="quiz-question">¿En qué equipo juega...</p>
        <div class="quiz-player-name">${esc(current.player)}</div>
        <datalist id="quiz-teams-inf">${teamOptions}</datalist>
        <div class="quiz-input-row">
          <input class="quiz-input" id="quiz-input" type="text" placeholder="Nombre del equipo..."
            list="quiz-teams-inf" autocomplete="off"
            ${answered?'disabled':''} onkeydown="if(event.key==='Enter')quizSubmitText()">
          <button class="quiz-btn-confirm" onclick="quizSubmitText()" ${answered?'disabled':''}>OK</button>
        </div>
        ${feedbackHTML}
        ${answered ? `<button class="quiz-btn-primary" onclick="quizInfiniteNext()">Siguiente</button>` : ''}
      </div>`;
    if (!answered) setTimeout(() => document.getElementById('quiz-input')?.focus(), 50);
    return;
  }

  if (round >= 3) {
    const total = scores.reduce((a, b) => a + b, 0);
    const emoji = total >= 26 ? '🏆' : total >= 20 ? '🎯' : total >= 12 ? '👏' : '📚';
    const roundNames = ['Fácil','Medio','Difícil'];
    container.innerHTML = `
      <div class="quiz-wrap quiz-results">
        <div class="quiz-icon">${emoji}</div>
        <h2 class="quiz-title">¡Partida terminada!</h2>
        <div class="quiz-total-score">${total}<span> / 30</span></div>
        <div class="quiz-round-scores">
          ${scores.map((s, i) => `
            <div class="quiz-round-score-item">
              <span class="quiz-round-score-label">${roundNames[i]}</span>
              <span class="quiz-round-score-pts">${s}/${[5,10,15][i]}</span>
            </div>`).join('')}
        </div>
        <button class="quiz-btn-primary" onclick="quizState={modeSelect:true};renderQuiz()">Jugar de nuevo</button>
      </div>`;
    return;
  }

  if (!current) {
    const roundNames = ['Fácil','Medio','Difícil'];
    const roundColors = ['var(--signed)','var(--accent)','var(--gone)'];
    const roundDescs = [
      'Jugadores con contratos grandes y picks de lotería',
      'Agentes libres, picks del draft y traspasos',
      'Jugadores no drafteados, contratos mínimos y picks tardíos'
    ];
    container.innerHTML = `
      <div class="quiz-wrap quiz-round-intro">
        <div class="quiz-game-topbar">
          <button class="quiz-action-btn" onclick="quizState={modeSelect:true};renderQuiz()">← Volver</button>
          <button class="quiz-action-btn" onclick="startQuiz('hints')">↺ Reiniciar</button>
        </div>
        <div class="quiz-round-pill" style="color:${roundColors[round]};border-color:${roundColors[round]}">Ronda ${round+1} de 3</div>
        <h2 class="quiz-title" style="color:${roundColors[round]}">${roundNames[round]}</h2>
        <p class="quiz-subtitle">${roundDescs[round]}</p>
        <p class="quiz-meta">5 preguntas</p>
        <button class="quiz-btn-primary" onclick="quizNextQuestion()">Empezar</button>
      </div>`;
    return;
  }

  const roundNames  = ['Fácil','Medio','Difícil'];
  const roundColors = ['var(--signed)','var(--accent)','var(--gone)'];
  const totalScore  = scores.reduce((a, b) => a + b, 0);
  const qNum        = answered ? roundAnswers.length : roundAnswers.length + 1;

  const dotsHTML = Array.from({length:5}, (_, i) => {
    let cls = 'quiz-dot';
    const limit = roundAnswers.length;
    if (i < limit) cls += roundAnswers[i] ? ' correct' : ' wrong';
    else if (i === limit && !answered) cls += ' active';
    return `<span class="${cls}"></span>`;
  }).join('');

  let answerHTML = '';
  if (mode === 'hints') {
    answerHTML = `<div class="quiz-options">
      ${(quizState.options||[]).map(team => {
        let cls = 'quiz-option';
        if (answered) cls += team === current.team ? ' correct' : team === selectedTeam ? ' wrong' : ' dimmed';
        return `<button class="${cls}" onclick="quizAnswer('${esc(team)}')" ${answered?'disabled':''}>
          ${teamLogo(team, 16)}<span>${esc(team)}</span>
        </button>`;
      }).join('')}
    </div>`;
  } else {
    const teamOptions = Object.keys(TEAM_LOGOS).map(t => `<option value="${esc(t)}">`).join('');
    answerHTML = `<datalist id="quiz-teams">${teamOptions}</datalist>
    <div class="quiz-input-row">
      <input class="quiz-input" id="quiz-input" type="text" placeholder="Nombre del equipo..."
        list="quiz-teams" autocomplete="off"
        ${answered?'disabled':''} onkeydown="if(event.key==='Enter')quizSubmitText()">
      <button class="quiz-btn-confirm" onclick="quizSubmitText()" ${answered?'disabled':''}>OK</button>
    </div>`;
  }

  const feedbackHTML = !answered ? '' : lastCorrect
    ? `<div class="quiz-feedback correct">BANG! 🏀</div>`
    : `<div class="quiz-feedback wrong">Oh! Blocked by James! (Era: ${teamLogo(current.team,14)} <strong>${esc(current.team)}</strong>)</div>`;

  const isRoundOver = answered && roundAnswers.length >= 5;
  const nextLabel   = isRoundOver ? (round >= 2 ? 'Ver resultados' : 'Siguiente ronda') : 'Siguiente';

  container.innerHTML = `
    <div class="quiz-wrap quiz-game">
      <div class="quiz-game-topbar">
        <button class="quiz-action-btn" onclick="quizState={modeSelect:true};renderQuiz()">← Volver</button>
        <button class="quiz-action-btn" onclick="startQuiz('hints')">↺ Reiniciar</button>
      </div>
      <div class="quiz-header">
        <span class="quiz-round-chip" style="color:${roundColors[round]}">Ronda ${round+1} · ${roundNames[round]}</span>
        <span class="quiz-progress">${qNum} / 5</span>
        <span class="quiz-score-chip">✓ ${totalScore}</span>
      </div>
      <div class="quiz-dots">${dotsHTML}</div>
      <p class="quiz-question">¿En qué equipo juega...</p>
      <div class="quiz-player-name">${esc(current.player)}</div>
      ${answerHTML}
      ${feedbackHTML}
      ${answered ? `<button class="quiz-btn-primary" onclick="quizNextQuestion()">${nextLabel}</button>` : ''}
    </div>`;

  if (mode === 'nohints' && !answered) setTimeout(() => document.getElementById('quiz-input')?.focus(), 50);
}

function startQuiz(mode) {
  const pool = buildQuizPool();
  const total = pool.easy.length + pool.medium.length + pool.hard.length;
  if (!total) {
    const container = document.getElementById('quiz-container');
    if (container) container.innerHTML = `<div class="quiz-wrap"><p class="quiz-subtitle" style="margin-top:40px">Cargando datos… inténtalo de nuevo en unos segundos.</p><button class="quiz-btn-primary" onclick="quizState={modeSelect:true};renderQuiz()" style="margin-top:16px">← Volver</button></div>`;
    return;
  }
  if (mode === 'infinite') {
    const all = [...pool.easy, ...pool.medium, ...pool.hard];
    for (let i = all.length-1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [all[i],all[j]]=[all[j],all[i]]; }
    quizState = { mode, streak: 0, pool: all, used: new Set(),
      current: null, answered: false, lastCorrect: false, gameOver: false };
    quizInfiniteNext();
    return;
  }
  quizState = { mode, round: 0, scores: [0,0,0], pool,
    used: new Set(), current: null, options: [],
    answered: false, lastCorrect: false, selectedTeam: null, roundAnswers: [] };
  renderQuiz();
}

function quizInfiniteNext() {
  if (!quizState || quizState.mode !== 'infinite') return;
  quizState.answered = false;
  const available = quizState.pool.filter(e => !quizState.used.has(e.player.toLowerCase()));
  if (!available.length) { quizState.gameOver = true; renderQuiz(); return; }
  const entry = available[Math.floor(Math.random() * available.length)];
  quizState.current = entry;
  quizState.used.add(entry.player.toLowerCase());
  renderQuiz();
}

function quizNextQuestion() {
  if (!quizState) return;
  quizState.answered = false;
  quizState.selectedTeam = null;

  if (quizState.roundAnswers.length >= 5) {
    quizState.round++;
    quizState.roundAnswers = [];
    quizState.current = null;
    renderQuiz();
    return;
  }

  const entry = quizGetEntry();
  if (!entry) { quizState.round++; quizState.roundAnswers = []; quizState.current = null; renderQuiz(); return; }

  quizState.current = entry;
  quizState.used.add(entry.player.toLowerCase());
  if (quizState.mode === 'hints') quizState.options = quizGetOptions(entry.team);
  renderQuiz();
}

function quizAnswer(team) {
  if (!quizState || quizState.answered) return;
  const correct = team === quizState.current.team;
  quizState.answered = true; quizState.lastCorrect = correct; quizState.selectedTeam = team;
  if (quizState.mode === 'infinite') {
    if (correct) quizState.streak++;
    else quizState.gameOver = true;
  } else {
    quizState.roundAnswers.push(correct);
    if (correct) quizState.scores[quizState.round] += [1, 2, 3][quizState.round];
  }
  renderQuiz();
}

function quizSubmitText() {
  if (!quizState || quizState.answered) return;
  const input = document.getElementById('quiz-input');
  if (!input || !input.value.trim()) return;
  const correct = quizMatchTeam(input.value, quizState.current.team);
  quizState.answered = true; quizState.lastCorrect = correct;
  if (quizState.mode === 'infinite') {
    if (correct) quizState.streak++;
    else quizState.gameOver = true;
  } else {
    quizState.roundAnswers.push(correct);
    if (correct) quizState.scores[quizState.round] += [1, 2, 3][quizState.round];
  }
  renderQuiz();
}

// ─────────────────────────────────────────────
// EL IMPOSTOR
// ─────────────────────────────────────────────
var impostorState = null;

function imp_shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function buildImpostorPool() {
  const questions = [];
  const cleanName = n => { const { name } = parseTW((n||'').replace(/\s*\((?:RFA|TO|PO)\)\s*/gi, '')); return name.trim(); };

  // Map: team → all current players (siguen + llegadas)
  const teamRoster = {};
  DATA.rosters.forEach(team => {
    const siguen   = (team.siguen   || []).map(p => cleanName(p.name)).filter(Boolean);
    const llegadas = (team.llegadas || []).map(p => cleanName(p.name)).filter(Boolean);
    const all = [...siguen, ...llegadas];
    if (all.length >= 4) teamRoster[team.team] = { siguen, llegadas, all };
  });
  const allTeams = Object.keys(teamRoster);

  // Category A: Plantilla — 4 del equipo (priorizando llegadas), 2 de otros
  allTeams.forEach(teamName => {
    const { siguen, llegadas, all } = teamRoster[teamName];
    // Take up to 3 llegadas, fill rest with siguen
    const shLlegadas = imp_shuffle(llegadas);
    const shSiguen   = imp_shuffle(siguen);
    const nLlegadas  = Math.min(3, shLlegadas.length);
    const correct4   = imp_shuffle([...shLlegadas.slice(0, nLlegadas), ...shSiguen]).slice(0, 4);
    const impostors  = imp_shuffle(
      allTeams.filter(t => t !== teamName).flatMap(t => teamRoster[t].all)
    ).slice(0, 2);
    if (impostors.length < 2) return;
    questions.push({
      type: 'plantilla',
      team: teamName,
      question: `¿Qué jugadores están en la plantilla de ${teamName.startsWith('Los ') ? '' : 'los '}${teamName}?`,
      reveal: `Los 4 son jugadores de ${teamName.startsWith('Los ') ? '' : 'los '}${teamName}`,
      players: imp_shuffle([...correct4, ...impostors]),
      correctSet: new Set(correct4)
    });
  });

  // Category B: Cambios — 4 que llegaron (llegadas), 2 que se quedaron (siguen)
  const arrivals = [], staying = [];
  DATA.rosters.forEach(team => {
    (team.llegadas || []).forEach(p => { const n = cleanName(p.name); if (n) arrivals.push(n); });
    (team.siguen   || []).forEach(p => { const n = cleanName(p.name); if (n) staying.push(n); });
  });
  const arrS = imp_shuffle(arrivals), staS = imp_shuffle(staying);
  for (let i = 0; i + 4 <= arrS.length; i += 4) {
    const correct4 = arrS.slice(i, i + 4);
    const impostors = staS.slice((i / 4) * 2, (i / 4) * 2 + 2);
    if (impostors.length < 2) break;
    questions.push({
      type: 'cambios',
      question: '¿Cuáles de estos jugadores cambiaron de equipo este verano?',
      reveal: 'Los 4 cambiaron de equipo este verano',
      players: imp_shuffle([...correct4, ...impostors]),
      correctSet: new Set(correct4)
    });
  }

  return imp_shuffle(questions);
}

function startImpostor() {
  const pool = buildImpostorPool();
  if (!pool.length) return;
  quizState = null;
  impostorState = { pool, qIdx: 0, streak: 0, selected: new Set(), gameOver: false, wrongPlayer: null, transitioning: false };
  renderQuiz();
}

function impostorClick(playerName) {
  if (!impostorState || impostorState.gameOver || impostorState.transitioning) return;
  const q = impostorState.pool[impostorState.qIdx];
  if (impostorState.selected.has(playerName)) return;
  impostorState.selected.add(playerName);

  if (q.correctSet.has(playerName)) {
    if (impostorState.selected.size === q.correctSet.size) {
      impostorState.transitioning = true;
      renderQuiz();
      setTimeout(() => {
        impostorState.streak++;
        impostorState.qIdx++;
        impostorState.selected = new Set();
        impostorState.transitioning = false;
        if (impostorState.qIdx >= impostorState.pool.length) impostorState.gameOver = true;
        renderQuiz();
      }, 900);
    } else {
      renderQuiz();
    }
  } else {
    impostorState.gameOver = true;
    impostorState.wrongPlayer = playerName;
    renderQuiz();
  }
}

function renderImpostor() {
  const container = document.getElementById('quiz-container');
  if (!container || !impostorState) return;
  const { pool, qIdx, streak, gameOver, selected, transitioning, wrongPlayer } = impostorState;

  // Game over or all questions done
  if (gameOver) {
    const q = pool[Math.min(qIdx, pool.length - 1)];
    const isFinished = !wrongPlayer; // completed all questions
    const revealHTML = q.players.map(p => {
      const isCorrect = q.correctSet.has(p);
      const wasSelected = selected.has(p);
      let cls = 'imp-card';
      if (wrongPlayer === p) cls += ' imp-wrong';
      else if (isCorrect) cls += ' imp-correct-reveal';
      else cls += ' imp-impostor-reveal';
      return `<div class="${cls}">${esc(p)}</div>`;
    }).join('');
    container.innerHTML = `
      <div class="quiz-wrap">
        <div class="quiz-icon">${isFinished ? '🏆' : '🚫'}</div>
        <h2 class="quiz-title">${isFinished ? '¡Completado!' : '¡Impostor!'}</h2>
        ${wrongPlayer ? `<p class="quiz-subtitle"><strong>${esc(wrongPlayer)}</strong> no estaba en la lista</p>` : ''}
        <div class="quiz-total-score">${streak}<span> ronda${streak !== 1 ? 's' : ''}</span></div>
        ${!isFinished ? `<p class="quiz-subtitle" style="font-size:12px;margin:4px 0 10px">${esc(q.question)}</p>
        <div class="imp-grid">${revealHTML}</div>
        <p class="quiz-meta">${esc(q.reveal)}</p>` : ''}
        <button class="quiz-btn-primary" onclick="impostorState=null;renderQuiz()" style="margin-top:16px">Jugar de nuevo</button>
      </div>`;
    return;
  }

  // Active question
  const q = pool[qIdx];
  const cardsHTML = q.players.map(p => {
    const isSelected = selected.has(p);
    const isCorrect = q.correctSet.has(p);
    let cls = 'imp-card imp-btn';
    if (isSelected && isCorrect) cls += ' imp-correct';
    if (transitioning) cls = 'imp-card ' + (isCorrect ? 'imp-correct' : 'imp-avoided');
    const disabled = (isSelected || transitioning) ? 'disabled' : '';
    return `<button class="${cls}" onclick="impostorClick(this.dataset.p)" data-p="${esc(p)}" ${disabled}>${esc(p)}</button>`;
  }).join('');

  container.innerHTML = `
    <div class="quiz-wrap quiz-game">
      <div class="quiz-game-topbar">
        <button class="quiz-action-btn" onclick="impostorState=null;renderQuiz()">← Volver</button>
        <button class="quiz-action-btn" onclick="startImpostor()">↺ Reiniciar</button>
      </div>
      <div class="quiz-header">
        <span class="quiz-round-chip">🕵️ El Impostor</span>
        <span class="quiz-score-chip">✓ ${streak} rondas</span>
      </div>
      <p class="quiz-question" style="font-size:15px;font-weight:600;margin-bottom:4px">${esc(q.question)}</p>
      <p class="quiz-meta" style="margin-bottom:16px">${selected.size} / 4 · toca uno a uno</p>
      <div class="imp-grid">${cardsHTML}</div>
      ${q.type === 'plantilla' ? `<p class="quiz-meta" style="margin-top:8px">${teamLogo(q.team, 14)} ${esc(q.team)}</p>` : ''}
    </div>`;
}

// ── CALENDARIO ───────────────────────────────────────────────────────────────
const CAL_EVENTS = [
  { date: '2026-06-23', end: null,         title: 'Draft NBA – 1ª Ronda',             detail: '20:00 ET · ABC/ESPN' },
  { date: '2026-06-24', end: null,         title: 'Draft NBA – 2ª Ronda',             detail: '20:00 ET · ESPN' },
  { date: '2026-06-30', end: null,         title: 'Inicio negociaciones FA',           detail: '18:00 ET' },
  { date: '2026-07-03', end: '2026-07-06', title: 'California Classic Summer League', detail: 'Chase Center (SF) · Golden 1 Center (SAC)' },
  { date: '2026-07-04', end: '2026-07-07', title: 'Salt Lake City Summer League',     detail: 'Jon M. Huntsman Center (SLC)' },
  { date: '2026-07-06', end: null,         title: 'Apertura oficial de FA',           detail: '12:01 ET' },
  { date: '2026-07-09', end: '2026-07-19', title: 'NBA Summer League Las Vegas',      detail: '' },
];

function renderCalendar() {
  const el = document.getElementById('cal-container');
  if (!el) return;
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const toD = s => { const [y, m, d] = s.split('-'); return new Date(+y, +m - 1, +d); };
  const diffDays = d => Math.round((d - today) / 86400000);

  let lastMonth = '';
  const rows = CAL_EVENTS.map(ev => {
    const start = toD(ev.date);
    const end   = ev.end ? toD(ev.end) : start;
    const isPast   = end < today;
    const isActive = start <= today && today <= end;
    const daysTo   = diffDays(start);

    const monthKey = start.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
    let monthHeader = '';
    if (monthKey !== lastMonth) {
      lastMonth = monthKey;
      monthHeader = `<div class="cal-month">${monthKey.charAt(0).toUpperCase() + monthKey.slice(1)}</div>`;
    }

    const dateStr = ev.end
      ? `${start.getDate()}–${end.getDate()} ${start.toLocaleString('es-ES', { month: 'short' })}`
      : `${start.getDate()} ${start.toLocaleString('es-ES', { month: 'short' })}`;

    let badge = '';
    if (isActive)            badge = `<span class="cal-badge cal-badge--now">En curso</span>`;
    else if (!isPast && daysTo <= 7) badge = `<span class="cal-badge cal-badge--soon">en ${daysTo} día${daysTo !== 1 ? 's' : ''}</span>`;
    else if (!isPast)        badge = `<span class="cal-badge cal-badge--upcoming">en ${daysTo} días</span>`;

    const cls = isPast ? 'cal-event cal-event--past' : isActive ? 'cal-event cal-event--active' : 'cal-event cal-event--upcoming';
    return `${monthHeader}<div class="${cls}">
      <div class="cal-event-date">${dateStr}</div>
      <div class="cal-event-body">
        <div class="cal-event-title">${esc(ev.title)}</div>
        ${ev.detail ? `<div class="cal-event-detail">${esc(ev.detail)}</div>` : ''}
      </div>
      ${badge}
    </div>`;
  }).join('');

  el.innerHTML = `<div class="cal-section"><div class="cal-header">Calendario</div><div class="cal-timeline">${rows}</div></div>`;
}

renderCalendar();

// ── Global Player Search ────────────────────────────────────────
let _searchIdx = [];
let _gsActiveIdx = -1;

const _TEAM_SHORT = { gs:'GSW', no:'NOP', ny:'NYK', sa:'SAS', utah:'UTA', wsh:'WAS' };
function teamShort(name) {
  const code = TEAM_LOGOS[name];
  if (!code) return name;
  return (_TEAM_SHORT[code] || code.toUpperCase());
}

function buildSearchIdx() {
  const seen = new Set();
  const entries = [];

  function add(name, team, meta) {
    if (!name) return;
    const key = name.trim().toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    entries.push({ name: name.trim(), team: team || '', teamShort: teamShort(team || ''), meta: meta || '' });
  }

  (DATA.fa || []).forEach(d => {
    const status = d.dest ? `→ ${d.dest}` : 'Agente libre';
    add(d.player, d.dest || d.team25, status);
  });
  (DATA.draft || []).forEach(d => add(d.player, d.team, `Pick #${d.pick || '?'}`));
  (DATA.undrafted || []).forEach(d => add(d.player, d.team, 'Sin draftear'));
  (DATA.trades || []).forEach(tr => tr.sides.forEach(s => s.receives.forEach(r => {
    if (r.type === 'player') add(r.item, s.team, 'Traspaso');
  })));
  (DATA.rosters || []).forEach(r => {
    (r.llegadas || []).forEach(p => add(p.name, r.team, 'Llegada'));
    (r.siguen   || []).forEach(p => add(p.name, r.team, 'En plantilla'));
    (r.salidas  || []).forEach(p => {
      const parsed = parseSalidaReason(p.name);
      add(parsed.name, r.team, 'Salida');
    });
  });
  (DATA.faPending || []).forEach(d => add(d.player, d.team25, 'FA pendiente'));

  entries.sort((a, b) => a.name.localeCompare(b.name));
  _searchIdx = entries;

  if (_pendingPlayerSlug) {
    const name = playerFromSlug(_pendingPlayerSlug);
    if (name) { _pendingPlayerSlug = null; openPlayerDrawer(name, false); }
  }
}

function _gsHighlight(name, query) {
  const idx = name.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return `<span>${name}</span>`;
  return `<span>${name.slice(0, idx)}<mark>${name.slice(idx, idx + query.length)}</mark>${name.slice(idx + query.length)}</span>`;
}

function _gsFilter(query) {
  if (!query) return [];
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return _searchIdx
    .filter(e => e.name.toLowerCase().includes(q))
    .slice(0, 8);
}

function _gsRender(results, query) {
  const dd = document.getElementById('gs-dropdown');
  if (!dd) return;
  if (!results.length) {
    dd.innerHTML = `<div class="gs-empty">Sin resultados para «${query}»</div>`;
    dd.style.display = '';
    return;
  }
  dd.innerHTML = results.map((r, i) => {
    const initials = r.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
    return `<div class="gs-item" role="option" data-idx="${i}" onmousedown="gsPick(${i})" onmouseover="_gsSetActive(${i})">
      <div class="gs-item-avatar">${initials}</div>
      <div class="gs-item-body">
        <div class="gs-item-name">${_gsHighlight(r.name, query)}</div>
        ${r.meta ? `<div class="gs-item-meta">${r.meta}</div>` : ''}
      </div>
      ${r.team ? `<div class="gs-item-team">${r.teamShort || r.team}</div>` : ''}
    </div>`;
  }).join('');
  dd.style.display = '';
  _gsActiveIdx = -1;
}

function _gsSetActive(idx) {
  _gsActiveIdx = idx;
  const items = document.querySelectorAll('#gs-dropdown .gs-item');
  items.forEach((el, i) => el.classList.toggle('active', i === idx));
}

function gsInput(e) {
  const q = e.target.value;
  const clearBtn = document.getElementById('gs-clear');
  if (clearBtn) clearBtn.style.display = q ? '' : 'none';
  if (!q.trim()) { gsHide(); return; }
  _gsCurrentQuery = q;
  const results = _gsFilter(q);
  _gsCurrentResults = results;
  _gsRender(results, q);
}

let _gsCurrentQuery = '';
let _gsCurrentResults = [];

function gsOpen() {
  const q = document.getElementById('gs-input')?.value || '';
  if (q.trim() && _gsCurrentResults.length) {
    document.getElementById('gs-dropdown').style.display = '';
  }
}

function gsHide() {
  const dd = document.getElementById('gs-dropdown');
  if (dd) dd.style.display = 'none';
  _gsActiveIdx = -1;
}

function gsClear() {
  const inp = document.getElementById('gs-input');
  if (inp) { inp.value = ''; inp.focus(); }
  const clearBtn = document.getElementById('gs-clear');
  if (clearBtn) clearBtn.style.display = 'none';
  _gsCurrentQuery = '';
  _gsCurrentResults = [];
  gsHide();
}

function gsPick(idx) {
  const entry = _gsCurrentResults[idx];
  if (!entry) return;
  gsHide();
  const inp = document.getElementById('gs-input');
  if (inp) inp.blur();
  openPlayerDrawer(entry.name);
}

function gsKeydown(e) {
  const dd = document.getElementById('gs-dropdown');
  const visible = dd && dd.style.display !== 'none';
  if (e.key === 'Escape') { gsHide(); document.getElementById('gs-input')?.blur(); return; }
  if (!visible) return;
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    _gsSetActive(Math.min(_gsActiveIdx + 1, _gsCurrentResults.length - 1));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    _gsSetActive(Math.max(_gsActiveIdx - 1, 0));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (_gsActiveIdx >= 0) gsPick(_gsActiveIdx);
    else if (_gsCurrentResults.length === 1) gsPick(0);
  }
}

document.addEventListener('click', e => {
  const wrap = document.getElementById('gs-wrap');
  if (wrap && !wrap.contains(e.target)) gsHide();
});

fetchAll();

// Auto-refresh cada 5 minutos (silencioso, sin toast)
setInterval(async () => {
  try { await fetchAll(); } catch(e) {}
}, 5 * 60 * 1000);
