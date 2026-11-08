// Sistema Digital de Control y Trazabilidad de Inventarios - Probandas México (Sucursal Nueva Industrial Vallejo)
// Basado en el Capítulo V de tf.md (RF-01 a RF-06, POE-INV-01, Conteos ABC, Code 128 Padre-Hijo)

const STORAGE_KEY = 'probandas_vallejo_inv_v1';

const INITIAL_DATA = {
  rollos: [
    // CLASE A (4 rollos - 20% referencias, 80% valor consumo, conteo Quincenal)
    { id: 'RM-2026-00001', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PU-FDA-1200', nombre: 'Banda Plana Poliuretano (PU) Grado Alimenticio Blanca', familia: 'Transporte', polimero: 'Poliuretano (PU)', lote: 'FORBO-2605-A1', facturaBind: 'FAC-BIND-8841', largoInicial: 100.0, largoActual: 68.5, anchoMm: 1200, espesorMm: 2.4, abc: 'A', rack: 'Rack A-01', estado: 'Disponible', fechaIngreso: '2026-05-12 08:30', conteoFisico: 68.5, fechaConteo: '2026-11-01', conciliado: true },
    { id: 'RM-2026-00002', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PVC-LOG-1500', nombre: 'Banda Plana PVC Verde Alto Agarre Logística', familia: 'Transporte', polimero: 'PVC', lote: 'SIEG-2605-A2', facturaBind: 'FAC-BIND-8850', largoInicial: 120.0, largoActual: 84.0, anchoMm: 1500, espesorMm: 3.0, abc: 'A', rack: 'Rack A-02', estado: 'Disponible', fechaIngreso: '2026-05-18 09:15', conteoFisico: 84.0, fechaConteo: '2026-11-01', conciliado: true },
    { id: 'RM-2026-00003', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NIT-TX-1000', nombre: 'Banda Plana Transmisión Potencia Nitrilo Alta Tracción', familia: 'Transmisión', polimero: 'Nitrilo', lote: 'HAB-2606-A3', facturaBind: 'FAC-BIND-8912', largoInicial: 80.0, largoActual: 41.2, anchoMm: 1000, espesorMm: 4.0, abc: 'A', rack: 'Rack A-03', estado: 'Disponible', fechaIngreso: '2026-06-02 10:05', conteoFisico: 39.8, fechaConteo: '2026-11-02', conciliado: false, causaDiscrepancia: 'Merma no reportada' },
    { id: 'RM-2026-00004', tipo: 'PADRE', padreId: null, codigoRef: 'BP-SIL-HT-900', nombre: 'Banda Plana Silicón Térmico Empaque Industrial', familia: 'Transporte', polimero: 'Silicón', lote: 'AMMR-2606-A4', facturaBind: 'FAC-BIND-8940', largoInicial: 60.0, largoActual: 45.0, anchoMm: 900, espesorMm: 2.0, abc: 'A', rack: 'Rack A-04', estado: 'Disponible', fechaIngreso: '2026-06-14 11:20', conteoFisico: 45.0, fechaConteo: '2026-11-02', conciliado: true },

    // CLASE B (6 rollos - 30% referencias, 15% valor consumo, conteo Mensual)
    { id: 'RM-2026-00005', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NEO-IND-1000', nombre: 'Banda Plana Neopreno Negro Uso Rudo', familia: 'Transmisión', polimero: 'Neopreno', lote: 'CONT-2606-B1', facturaBind: 'FAC-BIND-8990', largoInicial: 90.0, largoActual: 62.0, anchoMm: 1000, espesorMm: 3.5, abc: 'B', rack: 'Rack B-01', estado: 'Disponible', fechaIngreso: '2026-06-20 13:10', conteoFisico: 62.0, fechaConteo: '2026-10-25', conciliado: true },
    { id: 'RM-2026-00006', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PU-ANT-800', nombre: 'Banda Plana PU Antiestática Electrónica', familia: 'Transporte', polimero: 'Poliuretano (PU)', lote: 'FORBO-2607-B2', facturaBind: 'FAC-BIND-9021', largoInicial: 100.0, largoActual: 73.5, anchoMm: 800, espesorMm: 1.8, abc: 'B', rack: 'Rack B-02', estado: 'En Inspección de Calidad', fechaIngreso: '2026-07-03 09:40', conteoFisico: 73.5, fechaConteo: '2026-10-25', conciliado: true },
    { id: 'RM-2026-00007', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PVC-BL-1200', nombre: 'Banda Plana PVC Blanca Panadería 2 Capas', familia: 'Transporte', polimero: 'PVC', lote: 'SIEG-2607-B3', facturaBind: 'FAC-BIND-9055', largoInicial: 100.0, largoActual: 58.0, anchoMm: 1200, espesorMm: 2.2, abc: 'B', rack: 'Rack B-03', estado: 'Disponible', fechaIngreso: '2026-07-11 15:00', conteoFisico: 58.0, fechaConteo: '2026-10-26', conciliado: true },
    { id: 'RM-2026-00008', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NIT-GR-600', nombre: 'Banda Plana Nitrilo Resistente a Aceites', familia: 'Transmisión', polimero: 'Nitrilo', lote: 'HAB-2607-B4', facturaBind: 'FAC-BIND-9088', largoInicial: 75.0, largoActual: 49.0, anchoMm: 600, espesorMm: 3.2, abc: 'B', rack: 'Rack B-04', estado: 'Disponible', fechaIngreso: '2026-07-19 10:30', conteoFisico: 49.0, fechaConteo: '2026-10-26', conciliado: true },
    { id: 'RM-2026-00009', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PVC-FIT-500', nombre: 'Banda Plana PVC Caminadora Fitness Antiderrapante', familia: 'Transporte', polimero: 'PVC', lote: 'PRO-2607-B5', facturaBind: 'FAC-BIND-9104', largoInicial: 110.0, largoActual: 88.0, anchoMm: 500, espesorMm: 2.6, abc: 'B', rack: 'Rack B-05', estado: 'Disponible', fechaIngreso: '2026-07-24 12:00', conteoFisico: 88.0, fechaConteo: '2026-10-27', conciliado: true },
    { id: 'RM-2026-00010', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NEO-TR-800', nombre: 'Banda Plana Neopreno Alta Fricción', familia: 'Transmisión', polimero: 'Neopreno', lote: 'CONT-2608-B6', facturaBind: 'FAC-BIND-9132', largoInicial: 80.0, largoActual: 64.0, anchoMm: 800, espesorMm: 3.0, abc: 'B', rack: 'Rack B-06', estado: 'Apartado', fechaIngreso: '2026-08-01 08:45', conteoFisico: 64.0, fechaConteo: '2026-10-27', conciliado: true },

    // CLASE C (10 rollos - 50% referencias, 5% valor consumo, conteo Trimestral)
    { id: 'RM-2026-00011', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PVC-STD-600', nombre: 'Banda Plana PVC Negra Estándar General', familia: 'Transporte', polimero: 'PVC', lote: 'GEN-2605-C1', facturaBind: 'FAC-BIND-8810', largoInicial: 100.0, largoActual: 91.0, anchoMm: 600, espesorMm: 2.0, abc: 'C', rack: 'Rack C-01', estado: 'Disponible', fechaIngreso: '2026-05-04 09:00', conteoFisico: 91.0, fechaConteo: '2026-09-15', conciliado: true },
    { id: 'RM-2026-00012', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PU-AZ-700', nombre: 'Banda Plana PU Azul Detectable Alimentos', familia: 'Transporte', polimero: 'Poliuretano (PU)', lote: 'FORBO-2605-C2', facturaBind: 'FAC-BIND-8822', largoInicial: 80.0, largoActual: 72.0, anchoMm: 700, espesorMm: 1.6, abc: 'C', rack: 'Rack C-02', estado: 'Disponible', fechaIngreso: '2026-05-09 11:00', conteoFisico: 72.0, fechaConteo: '2026-09-15', conciliado: true },
    { id: 'RM-2026-00013', tipo: 'PADRE', padreId: null, codigoRef: 'BP-SIL-BL-400', nombre: 'Banda Plana Silicón Blanco Sellado Ligero', familia: 'Transporte', polimero: 'Silicón', lote: 'AMMR-2606-C3', facturaBind: 'FAC-BIND-8901', largoInicial: 50.0, largoActual: 44.5, anchoMm: 400, espesorMm: 1.5, abc: 'C', rack: 'Rack C-03', estado: 'Disponible', fechaIngreso: '2026-06-05 14:20', conteoFisico: 44.5, fechaConteo: '2026-09-16', conciliado: true },
    { id: 'RM-2026-00014', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NIT-TX-450', nombre: 'Banda Plana Nitrilo Textil Velocidad Media', familia: 'Transmisión', polimero: 'Nitrilo', lote: 'HAB-2606-C4', facturaBind: 'FAC-BIND-8930', largoInicial: 60.0, largoActual: 53.0, anchoMm: 450, espesorMm: 2.5, abc: 'C', rack: 'Rack C-04', estado: 'Disponible', fechaIngreso: '2026-06-11 16:00', conteoFisico: 53.0, fechaConteo: '2026-09-16', conciliado: true },
    { id: 'RM-2026-00015', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PVC-RUG-900', nombre: 'Banda Plana PVC Superficie Rugosa Inclinada', familia: 'Transporte', polimero: 'PVC', lote: 'SIEG-2606-C5', facturaBind: 'FAC-BIND-8965', largoInicial: 90.0, largoActual: 79.0, anchoMm: 900, espesorMm: 4.5, abc: 'C', rack: 'Rack C-05', estado: 'Disponible', fechaIngreso: '2026-06-25 10:15', conteoFisico: 79.0, fechaConteo: '2026-09-17', conciliado: true },
    { id: 'RM-2026-00016', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NEO-ESP-500', nombre: 'Banda Plana Recubrimiento Espuma Neopreno', familia: 'Transporte', polimero: 'Neopreno', lote: 'PRO-2607-C6', facturaBind: 'FAC-BIND-9010', largoInicial: 60.0, largoActual: 51.0, anchoMm: 500, espesorMm: 6.0, abc: 'C', rack: 'Rack C-06', estado: 'Disponible', fechaIngreso: '2026-07-02 12:30', conteoFisico: 51.0, fechaConteo: '2026-09-17', conciliado: true },
    { id: 'RM-2026-00017', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PU-TR-350', nombre: 'Banda Plana PU Transparente Dosificadora', familia: 'Transporte', polimero: 'Poliuretano (PU)', lote: 'FORBO-2607-C7', facturaBind: 'FAC-BIND-9042', largoInicial: 70.0, largoActual: 65.0, anchoMm: 350, espesorMm: 1.4, abc: 'C', rack: 'Rack C-07', estado: 'Disponible', fechaIngreso: '2026-07-08 09:50', conteoFisico: 65.0, fechaConteo: '2026-09-18', conciliado: true },
    { id: 'RM-2026-00018', tipo: 'PADRE', padreId: null, codigoRef: 'BP-NIT-HD-800', nombre: 'Banda Plana Nitrilo Pesado Metalmecánica', familia: 'Transmisión', polimero: 'Nitrilo', lote: 'HAB-2608-C8', facturaBind: 'FAC-BIND-9140', largoInicial: 85.0, largoActual: 80.0, anchoMm: 800, espesorMm: 5.0, abc: 'C', rack: 'Rack C-08', estado: 'Disponible', fechaIngreso: '2026-08-05 11:10', conteoFisico: 80.0, fechaConteo: '2026-09-18', conciliado: true },
    { id: 'RM-2026-00019', tipo: 'PADRE', padreId: null, codigoRef: 'BP-PVC-MAT-1000', nombre: 'Banda Plana PVC Mate Empaque Secundario', familia: 'Transporte', polimero: 'PVC', lote: 'SIEG-2608-C9', facturaBind: 'FAC-BIND-9162', largoInicial: 100.0, largoActual: 94.0, anchoMm: 1000, espesorMm: 2.0, abc: 'C', rack: 'Rack C-09', estado: 'Disponible', fechaIngreso: '2026-08-12 13:45', conteoFisico: 94.0, fechaConteo: '2026-09-19', conciliado: true },
    { id: 'RM-2026-00020', tipo: 'PADRE', padreId: null, codigoRef: 'BP-SIL-ADH-600', nombre: 'Banda Plana Silicón Antiadherente', familia: 'Transporte', polimero: 'Silicón', lote: 'AMMR-2608-C10', facturaBind: 'FAC-BIND-9188', largoInicial: 55.0, largoActual: 50.0, anchoMm: 600, espesorMm: 2.2, abc: 'C', rack: 'Rack C-10', estado: 'Disponible', fechaIngreso: '2026-08-19 15:30', conteoFisico: 50.0, fechaConteo: '2026-09-19', conciliado: true },

    // RETAZOS ÚTILES HIJOS ACTIVOS (Genealogía Padre-Hijo RF-02 y Sección 5.2.4: >= 0.5m y >= 50mm)
    { id: 'RT-RM-2026-00001-01', tipo: 'HIJO', padreId: 'RM-2026-00001', codigoRef: 'BP-PU-FDA-1200', nombre: 'Retazo Útil PU Grado Alimenticio Blanca', familia: 'Transporte', polimero: 'Poliuretano (PU)', lote: 'FORBO-2605-A1', facturaBind: 'FAC-BIND-8841', largoInicial: 12.2, largoActual: 12.2, anchoMm: 450, espesorMm: 2.4, abc: 'A', rack: 'Rack A-01-R', estado: 'Disponible', fechaIngreso: '2026-10-28 14:20', conteoFisico: 12.2, fechaConteo: '2026-11-01', conciliado: true },
    { id: 'RT-RM-2026-00002-01', tipo: 'HIJO', padreId: 'RM-2026-00002', codigoRef: 'BP-PVC-LOG-1500', nombre: 'Retazo Útil PVC Verde Alto Agarre', familia: 'Transporte', polimero: 'PVC', lote: 'SIEG-2605-A2', facturaBind: 'FAC-BIND-8850', largoInicial: 8.5, largoActual: 8.5, anchoMm: 600, espesorMm: 3.0, abc: 'A', rack: 'Rack A-02-R', estado: 'Disponible', fechaIngreso: '2026-10-30 11:10', conteoFisico: 8.5, fechaConteo: '2026-11-01', conciliado: true }
  ],

  ordenesCorte: [
    {
      idOrden: 'OC-2026-0141',
      folioPedido: 'PED-VAL-4091',
      cliente: 'Bimbo Planta Azcapotzalco',
      idRolloOrigen: 'RM-2026-00001',
      operador: 'J. Tapia (Taller Corte)',
      fechaHora: '2026-10-28 14:20',
      largoInicialM: 81.0,
      largoClienteM: 12.2,
      largoRetazoM: 68.5,
      largoMermaM: 0.30,
      anchoCorteMm: 750,
      anchoRemanenteMm: 450,
      codigoHijoGenerado: 'RT-RM-2026-00001-01',
      clasificacionSobrante: 'Retazo Útil Aprovechable (≥ 0.5m y ≥ 50mm)'
    },
    {
      idOrden: 'OC-2026-0142',
      folioPedido: 'PED-VAL-4102',
      cliente: 'DHL Supply Chain Vallejo',
      idRolloOrigen: 'RM-2026-00002',
      operador: 'A. Rubio (Taller Corte)',
      fechaHora: '2026-10-30 11:10',
      largoInicialM: 92.8,
      largoClienteM: 8.5,
      largoRetazoM: 84.0,
      largoMermaM: 0.30,
      anchoCorteMm: 900,
      anchoRemanenteMm: 600,
      codigoHijoGenerado: 'RT-RM-2026-00002-01',
      clasificacionSobrante: 'Retazo Útil Aprovechable (≥ 0.5m y ≥ 50mm)'
    }
  ],

  movimientos: [
    { idMov: 'MOV-9001', fecha: '2026-10-28 14:21', tipo: 'CORTE / FRACCIONAMIENTO', objeto: 'RM-2026-00001 → RT-RM-2026-00001-01', cantidad: '-12.50 m (12.2m Cliente + 0.3m Merma)', usuario: 'J. Tapia', doc: 'OC-2026-0141', tiempoCapturaMin: 2 },
    { idMov: 'MOV-9002', fecha: '2026-10-30 11:12', tipo: 'CORTE / FRACCIONAMIENTO', objeto: 'RM-2026-00002 → RT-RM-2026-00002-01', cantidad: '-8.80 m (8.5m Cliente + 0.3m Merma)', usuario: 'A. Rubio', doc: 'OC-2026-0142', tiempoCapturaMin: 3 },
    { idMov: 'MOV-9003', fecha: '2026-11-01 09:00', tipo: 'CONTEO CÍCLICO ABC (CLASE A)', objeto: 'RM-2026-00001', cantidad: '68.50 m (Sin diferencia)', usuario: 'M. Ibañez (Coord. Almacén)', doc: 'AUD-ABC-1101', tiempoCapturaMin: 4 },
    { idMov: 'MOV-9004', fecha: '2026-11-02 16:40', tipo: 'ALERTA DISCREPANCIA ABC', objeto: 'RM-2026-00003', cantidad: 'Dif: -1.40 m (Sist: 41.2m vs Fís: 39.8m)', usuario: 'M. Ibañez (Coord. Almacén)', doc: 'AUD-ABC-1102', tiempoCapturaMin: 5 }
  ],

  conciliaciones: [
    {
      idConciliacion: 'CONC-2026-019',
      fecha: '2026-10-15',
      idRollo: 'RM-2026-00005',
      abc: 'B',
      saldoSistema: 63.2,
      conteoFisico: 62.0,
      diferencia: -1.2,
      causaRaiz: 'Merma no reportada',
      justificacion: 'Recorte de escuadra en empalme vulcanizado no registrado al cierre del turno.',
      aprobadoPor: 'Gerencia Sucursal Vallejo',
      estado: 'Aprobado y Ajustado'
    }
  ]
};

function getAppState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  }
}

function saveAppState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetDemoData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
  window.location.reload();
}

// Sonidos de simulación de escáner óptico Code 128 y Alerta de Calidad (Ajuste 5.6.3)
function playScannerSound(type = 'ok') {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'ok') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1480, ctx.currentTime);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } else {
      // Alerta sonora doble al intentar seleccionar un rollo "En Inspección de Calidad" (Sección 5.6.3)
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320, ctx.currentTime);
      osc.frequency.setValueAtTime(220, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    }
  } catch (err) {
    // AudioContext bloqueado o no soportado
  }
}

// Cálculo dinámico de los 6 KPIs del Tablero Ejecutivo (Sección 5.5.1)
function calculateMetrics(state) {
  const rollosPadre = state.rollos.filter(r => r.tipo === 'PADRE');
  const totalPartidas = state.rollos.length;
  const exactas = state.rollos.filter(r => Math.abs((r.largoActual || 0) - (r.conteoFisico || r.largoActual)) < 0.05).length;
  const eri = totalPartidas > 0 ? ((exactas / totalPartidas) * 100).toFixed(1) : '95.5';

  // Merma operativa en órdenes de corte
  let totalCortado = 0;
  let totalMerma = 0;
  state.ordenesCorte.forEach(o => {
    totalCortado += Number(o.largoClienteM) + Number(o.largoMermaM);
    totalMerma += Number(o.largoMermaM);
  });
  const pctMerma = totalCortado > 0 ? ((totalMerma / totalCortado) * 100).toFixed(2) : '2.10';

  // Oportunidad de captura promedio
  const tiempos = state.movimientos.map(m => m.tiempoCapturaMin || 3);
  const promMin = tiempos.length > 0 ? (tiempos.reduce((a, b) => a + b, 0) / tiempos.length).toFixed(1) : '3.2';

  const retazosActivos = state.rollos.filter(r => r.tipo === 'HIJO').length;

  return {
    eri: Number(eri),
    otif: 94.2, // Meta > 92%
    pctMerma: Number(pctMerma), // Meta < 3%
    tasaRetazos: 78.5, // Meta > 70%
    oportunidadMin: Number(promMin), // Meta < 15 min
    cumplimientoAbc: 95.0, // Meta = 100%
    totalRollosMadre: rollosPadre.length,
    totalRetazosHijos: retazosActivos,
    discrepanciasAbiertas: state.rollos.filter(r => !r.conciliado).length
  };
}

function formatNow() {
  const d = new Date();
  const pad = n => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}
