import React from 'react';

const ledgerItems = [
  { 
    id: "01", 
    friccion: "Burocracia y Doble Carga", 
    perdida: "Transcribir datos del papel al Excel genera horas de trabajo improductivo y errores humanos.", 
    solucion: "Desarrollamos interfaces que digitalizan la captura de datos en el origen, eliminando la transcripción manual y el error humano." 
  },
  { 
    id: "02", 
    friccion: "Desconexión Operativa", 
    perdida: "Vendedores o choferes sin señal se paralizan, generando tiempos muertos y retrasos en todo el ciclo operativo.", 
    solucion: "Desplegamos arquitectura 100% operativa que guarda la información localmente y sincroniza sola." 
  },
  { 
    id: "03", 
    friccion: "Decisiones a Ciegas", 
    perdida: "Gestionar un negocio por intuición o con datos viejos genera una reacción lenta ante imprevistos.", 
    solucion: "Centralizamos tu negocio en la nube, dándote visibilidad, control y reportes en tiempo real." 
  },
];

const Ledger = () => {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 lg:px-24 bg-onyx" id="capability-ledger">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12 reveal-up">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-platinum uppercase tracking-tighter leading-[0.85] font-heading mb-6">
              PUNTOS DE INFLEXIÓN:<br /><span className="text-flame">DETENEMOS LA FUGA DE RECURSOS</span>
            </h2>
            <p className="text-xl text-platinum/80 font-mono mt-8 max-w-2xl">
              
            </p>
          </div>
          <div className="lg:max-w-md text-platinum/70 font-mono text-sm leading-relaxed border-t border-technical-blue pt-4">
            No importa si fabricas alimentos, gestionas flotas logísticas o administras un depósito. En Solum SF no vendemos sistemas cerrados para un rubro específico ni te obligamos a encajar en procesos que no son tuyos. Mapeamos tu flujo de trabajo real y atacamos directamente los cuellos de botella operativos que están consumiendo tus horas más productivas.
          </div>
        </div>
        
        {/* Table Header - Desktop Only */}
        <div className="hidden md:grid grid-cols-12 gap-8 pb-6 border-b border-platinum/20 text-platinum/50 font-mono text-sm uppercase font-bold tracking-wider reveal-up">
          <div className="col-span-1"></div>
          <div className="col-span-3">El Punto de Fricción</div>
          <div className="col-span-4">La Fuga Oculta</div>
          <div className="col-span-4 text-flame">La Intervención Solum</div>
        </div>

        <div className="">
          {ledgerItems.map((item) => (
            <div key={item.id} className="ledger-row border-b border-platinum/10 py-12 grid grid-cols-1 md:grid-cols-12 items-start gap-8 group hover:bg-carbon transition-colors px-4 md:px-0 rounded-xl md:rounded-none">
              
              <div className="md:col-span-1 text-technical-blue font-bold font-mono text-xl">{item.id}</div>
              
              <div className="md:col-span-3">
                <span className="md:hidden block text-platinum/50 font-mono text-xs uppercase font-bold mb-2">El Punto de Fricción</span>
                <div className="text-2xl font-black uppercase font-heading group-hover:text-flame transition-colors duration-300">{item.friccion}</div>
              </div>
              
              <div className="md:col-span-4">
                <span className="md:hidden block text-platinum/50 font-mono text-xs uppercase font-bold mb-2">La Fuga Oculta (Pérdida)</span>
                <div className="text-platinum/70 font-mono text-sm leading-relaxed">{item.perdida}</div>
              </div>
              
              <div className="md:col-span-4">
                <span className="md:hidden block text-flame font-mono text-xs uppercase font-bold mb-2">La Intervención Solum (Solución)</span>
                <div className="text-platinum font-mono text-sm leading-relaxed md:border-l-2 md:border-flame/30 md:pl-4 group-hover:border-flame transition-colors duration-300">{item.solucion}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ledger;
