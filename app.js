/* ============================================
   TORNEO PADEL DEPTO
   Vanilla JavaScript — sin frameworks
   ============================================ */

(function () {
  "use strict";

  // ---------- Iconos SVG (reemplazo de lucide-react) ----------
  const icons = {
    trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
    users: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    settings: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
    chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
    save: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
    clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    coffee: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
    coffeeSmall: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
    coffeeBig: `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
    award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    history: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>`,
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    userPlus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>`,
    userX: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" y1="8" x2="22" y2="13"/><line x1="22" y1="8" x2="17" y2="13"/></svg>`,
    x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  };

  // ---------- Lista original de jugadores ----------
  const rawPlayers = [
    "Citlaly Paredes", "Leonardo Gonzalez", "Estefany Gomez", "Sebastian Aguilar",
    "Thalía López", "Rodrigo Chavez", "Fernando Ramos", "Renata Mayorquin",
    "Scarlet de la Torre", "Luis Ríos", "Kevin Villa", "Ana Kuri",
    "Vladimir Miranda", "Edwin Ramos", "Alexia Asomoza", "Mau",
    "David", "Emmanuel Hernández", "Karime Infante", "Omar Cuarenta", "Verónica Toro"
  ];

  // ---------- Estado ----------
  const state = {
    players: [],
    currentRound: null,
    nextRound: null,
    roundNumber: 1,
    history: [],
    newPlayerName: "",
    showPlayerManager: false,
  };

  // ---------- Utilidades ----------
  function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Construye los partidos de una ronda
  function buildMatches(pool) {
    const activePool = pool.filter((p) => p.isActive);
    let sorted = shuffleArray(activePool);
    // Prioriza a los que más han descansado
    sorted.sort((a, b) => a.matchesPlayed - b.matchesPlayed);

    // Máximo 3 canchas, 4 jugadores cada una
    const numCourts = Math.min(3, Math.floor(sorted.length / 4));
    const playersNeeded = numCourts * 4;
    const selected = sorted.slice(0, playersNeeded);
    const mixed = shuffleArray(selected);

    const matches = [];
    for (let i = 0; i < numCourts; i++) {
      const off = i * 4;
      matches.push({
        court: i + 1,
        team1: [mixed[off], mixed[off + 1]],
        team2: [mixed[off + 2], mixed[off + 3]],
        score1: "",
        score2: "",
      });
    }
    return matches;
  }

  // Simula los partidos jugados (para predecir la siguiente ronda)
  function simulatePlayed(currentPlayers, activeRound) {
    const activeIds = new Set();
    activeRound.forEach((m) => {
      m.team1.forEach((p) => activeIds.add(p.id));
      m.team2.forEach((p) => activeIds.add(p.id));
    });
    return currentPlayers.map((p) => ({
      ...p,
      matchesPlayed: p.matchesPlayed + (activeIds.has(p.id) ? 1 : 0),
    }));
  }

  // Encuentra un sustituto para un jugador
  function findReplacement(round, pool, excludeId) {
    const scheduledIds = new Set();
    round.forEach((m) => {
      m.team1.forEach((p) => scheduledIds.add(p.id));
      m.team2.forEach((p) => scheduledIds.add(p.id));
    });
    const available = pool.filter(
      (p) => p.isActive && p.id !== excludeId && !scheduledIds.has(p.id)
    );
    if (available.length === 0) return null;
    return available[Math.floor(Math.random() * available.length)];
  }

  // ---------- Inicialización ----------
  function init() {
    const shuffled = shuffleArray(rawPlayers);
    state.players = shuffled.map((name, i) => ({
      id: Date.now() + i,
      name,
      matchesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      isActive: true,
    }));
    render();
  }

  // ---------- Acciones ----------
  function addPlayer() {
    const name = state.newPlayerName.trim();
    if (!name) return;
    const newPlayer = {
      id: Date.now(),
      name,
      matchesPlayed: 0,
      gamesWon: 0,
      gamesLost: 0,
      isActive: true,
    };
    state.players = state.players.concat(newPlayer);
    state.newPlayerName = "";
    if (state.currentRound) {
      const expected = simulatePlayed(state.players, state.currentRound);
      state.nextRound = buildMatches(expected);
    }
    render();
  }

  function removePlayer(id) {
    const playerToRemove = state.players.find((p) => p.id === id);
    if (!playerToRemove) return;

    // Si no ha empezado el torneo, eliminar físicamente
    if (!state.currentRound) {
      state.players = state.players.filter((p) => p.id !== id);
      render();
      return;
    }

    // Marcar como inactivo
    state.players = state.players.map((p) =>
      p.id === id ? { ...p, isActive: false } : p
    );

    // Sustitución en ronda actual
    if (state.currentRound) {
      let replaced = false;
      const newCurrent = state.currentRound.map((match) => {
        const team1 = match.team1.map((p) => {
          if (p.id === id) {
            replaced = true;
            const r = findReplacement(state.currentRound, state.players, id);
            return r || p;
          }
          return p;
        });
        const team2 = match.team2.map((p) => {
          if (p.id === id) {
            replaced = true;
            const r = findReplacement(state.currentRound, state.players, id);
            return r || p;
          }
          return p;
        });
        return { ...match, team1, team2 };
      });
      if (replaced) state.currentRound = newCurrent;
    }

    // Regenerar siguiente ronda
    const expected = simulatePlayed(state.players, state.currentRound || []);
    state.nextRound = buildMatches(expected);
    render();
  }

  function reactivatePlayer(id) {
    state.players = state.players.map((p) =>
      p.id === id ? { ...p, isActive: true } : p
    );
    if (state.currentRound) {
      const expected = simulatePlayed(state.players, state.currentRound);
      state.nextRound = buildMatches(expected);
    }
    render();
  }

  function startTournament() {
    const activeCount = state.players.filter((p) => p.isActive).length;
    if (activeCount < 4) {
      alert("Se necesitan al menos 4 jugadores activos para iniciar.");
      return;
    }
    const r1 = buildMatches(state.players);
    state.currentRound = r1;
    const expected = simulatePlayed(state.players, r1);
    state.nextRound = buildMatches(expected);
    state.showPlayerManager = false;
    render();
  }

  // Cambio de puntuación: NO re-renderiza (para no perder foco)
  function handleScoreChange(courtIdx, team, value) {
    if (!state.currentRound) return;
    state.currentRound[courtIdx][team] = value === "" ? "" : parseInt(value, 10) || 0;
  }

  function submitRound() {
    if (!state.currentRound || !state.nextRound) return;

    // Validar que todos tengan resultado
    for (const match of state.currentRound) {
      if (match.score1 === "" || match.score2 === "") {
        alert(
          "Por favor ingresa todos los resultados (pueden ser 0) antes de continuar."
        );
        return;
      }
    }

    // Acumular en cada jugador
    const updated = state.players.map((p) => ({ ...p }));
    state.currentRound.forEach((match) => {
      const s1 = parseInt(match.score1, 10);
      const s2 = parseInt(match.score2, 10);
      match.team1.forEach((p) => {
        const idx = updated.findIndex((u) => u.id === p.id);
        if (idx !== -1) {
          updated[idx].matchesPlayed += 1;
          updated[idx].gamesWon += s1;
          updated[idx].gamesLost += s2;
        }
      });
      match.team2.forEach((p) => {
        const idx = updated.findIndex((u) => u.id === p.id);
        if (idx !== -1) {
          updated[idx].matchesPlayed += 1;
          updated[idx].gamesWon += s2;
          updated[idx].gamesLost += s1;
        }
      });
    });

    // Guardar al historial
    state.history = state.history.concat({
      roundNum: state.roundNumber,
      matches: state.currentRound,
    });

    state.players = updated;
    state.currentRound = state.nextRound;
    const expected = simulatePlayed(updated, state.nextRound);
    state.nextRound = buildMatches(expected);
    state.roundNumber += 1;

    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function togglePlayerManager() {
    state.showPlayerManager = !state.showPlayerManager;
    render();
  }

  // ---------- Helpers de render ----------
  function getSortedLeaderboard() {
    return state.players.slice().sort((a, b) => {
      if (b.gamesWon !== a.gamesWon) return b.gamesWon - a.gamesWon;
      const diffA = a.gamesWon - a.gamesLost;
      const diffB = b.gamesWon - b.gamesLost;
      return diffB - diffA;
    });
  }

  function getRestPlayers(round) {
    if (!round) return [];
    return state.players.filter(
      (p) =>
        !round.some(
          (m) =>
            m.team1.some((t) => t.id === p.id) ||
            m.team2.some((t) => t.id === p.id)
        )
    );
  }

  // ---------- Plantillas HTML ----------
  function tplHeader() {
    const activeCount = state.players.filter((p) => p.isActive).length;
    const roundBadge = state.currentRound
      ? `
        <div class="round-badge fade-in-scale">
          <span class="round-badge-dot"></span>
          <span class="round-badge-text">Ronda ${state.roundNumber}</span>
        </div>`
      : "";
    return `
      <header class="header">
        <div class="header-decor-1"></div>
        <div class="header-decor-2"></div>
        <div style="position:relative;z-index:1;">
          <div class="header-title-row">
            <span class="header-icon-box icon-yellow-light">${icons.trophy}</span>
            <h1>Torneo Padel Depto</h1>
          </div>
          <p class="header-subtitle">
            <span style="opacity:0.7;display:inline-flex;">${icons.users}</span>
            Formato Round Robin | ${activeCount} Jugadores Activos
          </p>
        </div>
        <div class="header-actions">
          <button class="btn-glass" data-action="toggle-manager">
            ${icons.settings}
            <span>Gestionar Jugadores</span>
          </button>
          ${roundBadge}
        </div>
      </header>
    `;
  }

  function tplPlayerManager() {
    if (!state.showPlayerManager) return "";
    const playerCards = state.players
      .map((p) => {
        const cls = p.isActive ? "active" : "inactive";
        const dotCls = p.isActive ? "on" : "off";
        const action = p.isActive ? "remove" : "reactivate";
        const btnCls = p.isActive ? "danger" : "success";
        const title = p.isActive
          ? "Desactivar jugador"
          : "Re-activar jugador";
        const ico = p.isActive ? icons.userX : icons.userPlus;
        return `
          <div class="player-card ${cls}">
            <div class="player-card-info">
              <span class="player-status-dot ${dotCls}"></span>
              <span class="player-card-name">${escapeHtml(p.name)}</span>
            </div>
            <button class="btn-action ${btnCls}" title="${title}" data-action="${action}" data-id="${p.id}">${ico}</button>
          </div>`;
      })
      .join("");

    return `
      <div class="panel fade-in">
        <div class="panel-padding">
          <div class="panel-header">
            <h2 class="panel-title">${icons.users}<span class="icon-blue" style="display:none;"></span>Gestionar Participantes</h2>
            <button class="btn-icon" data-action="close-manager" title="Cerrar">${icons.x}</button>
          </div>
          <div class="add-player-form">
            <div class="input-wrapper">
              <span class="input-wrapper-icon">${icons.users}</span>
              <input
                id="new-player-input"
                class="input-text"
                type="text"
                placeholder="Nombre del nuevo jugador..."
                value="${escapeHtml(state.newPlayerName)}"
                autocomplete="off"
              />
            </div>
            <button class="btn-primary" data-action="add-player">
              ${icons.userPlus}
              Agregar
            </button>
          </div>
          <div class="players-grid">
            ${playerCards}
          </div>
        </div>
      </div>
    `;
  }

  function tplStartCard() {
    return `
      <div class="start-card fade-in-scale">
        <div class="start-icon">${icons.play}</div>
        <h2>¿Todo listo para empezar?</h2>
        <p>El algoritmo se encargará de mezclar a las parejas, asignar las canchas y asegurar que nadie juegue al mismo tiempo, priorizando a quienes más han descansado.</p>
        <button class="btn-start" data-action="start">
          Iniciar Torneo
          ${icons.chevronRight}
        </button>
      </div>
    `;
  }

  function tplCurrentRound() {
    const matchesHtml = state.currentRound
      .map((match, idx) => {
        const s1 = match.score1 === "" ? "" : match.score1;
        const s2 = match.score2 === "" ? "" : match.score2;
        return `
          <div class="match-card slide-in-left" style="animation-delay:${idx * 0.1}s;">
            <div class="court-badge">
              <span class="court-badge-label">Cancha</span>
              <span class="court-badge-num">${match.court}</span>
            </div>
            <div class="team-side team1">
              <div class="team-names right">
                <div class="team-name">${escapeHtml(match.team1[0].name)}</div>
                <div class="team-name">${escapeHtml(match.team1[1].name)}</div>
              </div>
              <input class="score-input score1" type="number" min="0" inputmode="numeric"
                placeholder="0" value="${s1}"
                data-action="score" data-court-idx="${idx}" data-team="score1" />
            </div>
            <div class="vs-circle">VS</div>
            <div class="team-side team2">
              <input class="score-input score2" type="number" min="0" inputmode="numeric"
                placeholder="0" value="${s2}"
                data-action="score" data-court-idx="${idx}" data-team="score2" />
              <div class="team-names left">
                <div class="team-name">${escapeHtml(match.team2[0].name)}</div>
                <div class="team-name">${escapeHtml(match.team2[1].name)}</div>
              </div>
            </div>
          </div>`;
      })
      .join("");

    return `
      <div class="round-card">
        <div class="round-header">
          <div>
            <h2 class="round-title">Ronda ${state.roundNumber}</h2>
            <p class="round-subtitle">Resultados en vivo</p>
          </div>
          <span class="round-status">
            <span class="round-status-dot"></span>
            En Proceso
          </span>
        </div>
        <div class="matches-list">
          ${matchesHtml}
        </div>
        <div class="submit-row">
          <div class="submit-row-info">
            <span class="submit-row-icon">${icons.clock}</span>
            <p class="submit-row-text">Registra los sets terminados y avanza a la siguiente ronda para actualizar la tabla.</p>
          </div>
          <button class="btn-finish" data-action="submit-round">
            ${icons.save}
            Finalizar Ronda
          </button>
        </div>
      </div>
    `;
  }

  function tplNextRound() {
    if (!state.nextRound) return "";
    const matchesHtml = state.nextRound
      .map(
        (m) => `
        <div class="next-match-card">
          <div class="next-match-court">Cancha ${m.court}</div>
          <div class="next-match-content">
            <div class="next-match-player">${escapeHtml(m.team1[0].name)}</div>
            <div class="next-match-player">${escapeHtml(m.team1[1].name)}</div>
            <div class="next-match-vs">VS</div>
            <div class="next-match-player">${escapeHtml(m.team2[0].name)}</div>
            <div class="next-match-player">${escapeHtml(m.team2[1].name)}</div>
          </div>
        </div>`
      )
      .join("");

    const restingHtml = getRestPlayers(state.nextRound)
      .map(
        (p) =>
          `<span class="tag">${escapeHtml(p.name)}</span>`
      )
      .join("");

    return `
      <div class="next-round-card fade-in">
        <div class="next-round-header">
          <div>
            <h2 class="next-round-title">Próxima Ronda (${state.roundNumber + 1})</h2>
            <p class="next-round-subtitle">Preparación de las siguientes canchas</p>
          </div>
          <span class="icon-slate">${icons.calendar}</span>
        </div>
        <div class="next-matches-grid">
          ${matchesHtml}
        </div>
        <div class="next-rests">
          <p class="next-rests-title">${icons.coffeeSmall}Próximos Descansos:</p>
          <div class="tag-list">${restingHtml}</div>
        </div>
      </div>
    `;
  }

  function tplCurrentRests() {
    if (!state.currentRound) return "";
    const tags = getRestPlayers(state.currentRound)
      .map(
        (p) =>
          `<span class="rest-tag">${escapeHtml(p.name)}</span>`
      )
      .join("");
    return `
      <div class="rests-panel slide-in-right">
        <div style="position:relative;z-index:1;">
          <h3 class="rests-panel-title">${icons.coffee}Descansos Actuales</h3>
          <div class="tag-list">${tags}</div>
        </div>
        <div class="rests-decor">${icons.coffeeBig}</div>
      </div>
    `;
  }

  function tplLeaderboard() {
    const sorted = getSortedLeaderboard();
    const rows = sorted
      .map((p, i) => {
        let posCell;
        if (i === 0) posCell = `<span class="pos-badge gold">1</span>`;
        else if (i === 1) posCell = `<span class="pos-badge silver">2</span>`;
        else if (i === 2) posCell = `<span class="pos-badge bronze">3</span>`;
        else posCell = i + 1;
        const diff = p.gamesWon - p.gamesLost;
        const diffStr = diff > 0 ? `+${diff}` : `${diff}`;
        return `
          <tr>
            <td>${posCell}</td>
            <td><div class="leaderboard-name">${escapeHtml(p.name)}</div></td>
            <td class="center">${p.matchesPlayed}</td>
            <td class="center leaderboard-pg">${p.gamesWon}</td>
            <td class="center leaderboard-diff">${diffStr}</td>
          </tr>`;
      })
      .join("");

    return `
      <div class="leaderboard">
        <div class="leaderboard-header">
          <h2 class="leaderboard-title">
            <span class="icon-yellow">${icons.award}</span>
            Ranking
          </h2>
        </div>
        <div class="leaderboard-table-wrap">
          <table class="leaderboard-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Jugador</th>
                <th class="center" title="Partidos Jugados">PJ</th>
                <th class="center green" title="Juegos Ganados">PG</th>
                <th class="center" title="Diferencia">DIF</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function tplHistory() {
    if (state.history.length === 0) return "";
    const cards = state.history
      .slice()
      .reverse()
      .map((roundData) => {
        const matchesHtml = roundData.matches
          .map(
            (m) => `
            <div class="history-match">
              <div class="history-court-label">Cancha ${m.court}</div>
              <div class="history-match-row">
                <div class="history-team">
                  <div class="history-team-name">${escapeHtml(m.team1[0].name)}</div>
                  <div class="history-team-name">${escapeHtml(m.team1[1].name)}</div>
                </div>
                <div class="history-score">
                  <span class="history-score-1">${m.score1}</span>
                  <span class="history-score-sep">/</span>
                  <span class="history-score-2">${m.score2}</span>
                </div>
                <div class="history-team right">
                  <div class="history-team-name">${escapeHtml(m.team2[0].name)}</div>
                  <div class="history-team-name">${escapeHtml(m.team2[1].name)}</div>
                </div>
              </div>
            </div>`
          )
          .join("");
        return `
          <div class="history-round-card fade-in-scale">
            <div class="history-round-header">
              <span>Ronda ${roundData.roundNum}</span>
              <span style="opacity:0.3;">${icons.clock}</span>
            </div>
            <div class="history-round-body">${matchesHtml}</div>
          </div>`;
      })
      .join("");

    return `
      <div class="history-section fade-in">
        <div class="history-header">
          <span class="history-icon-box">${icons.history}</span>
          <div>
            <h2 class="history-title">Historial</h2>
            <p class="history-subtitle">Registro completo del torneo</p>
          </div>
        </div>
        <div class="history-grid">${cards}</div>
      </div>
    `;
  }

  function tplApp() {
    const tournamentBlock = !state.currentRound
      ? tplStartCard()
      : `
        <div class="tournament-grid">
          <div class="column-left">
            ${tplCurrentRound()}
            ${tplNextRound()}
          </div>
          <div class="column-right">
            ${tplCurrentRests()}
            ${tplLeaderboard()}
          </div>
        </div>`;

    return `
      <div class="container">
        ${tplHeader()}
        ${tplPlayerManager()}
        ${tournamentBlock}
        ${tplHistory()}
      </div>
    `;
  }

  // ---------- Render principal ----------
  function render() {
    const root = document.getElementById("app");
    if (!root) return;

    // Guardar referencia al input nuevo jugador (foco) si existe
    const focusedId = document.activeElement ? document.activeElement.id : null;
    const selStart =
      focusedId === "new-player-input"
        ? document.activeElement.selectionStart
        : null;

    root.innerHTML = tplApp();
    attachEventHandlers();

    // Restaurar foco si correspondía
    if (focusedId === "new-player-input") {
      const el = document.getElementById("new-player-input");
      if (el) {
        el.focus();
        if (selStart !== null) {
          try {
            el.setSelectionRange(selStart, selStart);
          } catch (e) {}
        }
      }
    }
  }

  // ---------- Event delegation ----------
  let rootClickAttached = false;

  function attachEventHandlers() {
    const root = document.getElementById("app");
    if (!root) return;

    // Click delegation: solo una vez (el root persiste entre renders)
    if (!rootClickAttached) {
      root.addEventListener("click", onClick);
      rootClickAttached = true;
    }

    // Inputs (estos sí se recrean en cada render, así que los listeners mueren con ellos)
    const newInput = document.getElementById("new-player-input");
    if (newInput) {
      newInput.addEventListener("input", (e) => {
        state.newPlayerName = e.target.value;
        // No re-render para no perder foco
      });
      newInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          addPlayer();
        }
      });
    }

    // Score inputs (no re-render por keystroke)
    root.querySelectorAll('input[data-action="score"]').forEach((input) => {
      input.addEventListener("input", (e) => {
        const courtIdx = parseInt(e.target.dataset.courtIdx, 10);
        const team = e.target.dataset.team;
        handleScoreChange(courtIdx, team, e.target.value);
      });
    });
  }

  function onClick(e) {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;

    switch (action) {
      case "toggle-manager":
        togglePlayerManager();
        break;
      case "close-manager":
        state.showPlayerManager = false;
        render();
        break;
      case "add-player":
        addPlayer();
        break;
      case "remove":
        removePlayer(parseInt(btn.dataset.id, 10));
        break;
      case "reactivate":
        reactivatePlayer(parseInt(btn.dataset.id, 10));
        break;
      case "start":
        startTournament();
        break;
      case "submit-round":
        submitRound();
        break;
    }
  }

  // ---------- Arrancar ----------
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
