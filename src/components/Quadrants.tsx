import React from 'react';

const quadrants = [
  { id: "01", title: "INFORMACIÓN CENTRALIZADA", desc: "Dejá atrás la información dispersa. Centralizamos tus procesos y datos en una plataforma diseñada para tu operación.", log: "LOG_0X01: ERROR_INTEGRIDAD_DATOS", color: "text-flame" },
  { id: "02", title: "DECISIONES A CIEGAS", desc: "La gerencia pierde el control al no poder monitorear la operación en tiempo real. Unificamos tu negocio en una base de datos segura en la nube, permitiéndote acceder a tu información vital 24/7 desde cualquier dispositivo.", log: "LOG_0X02: FALLO_RECUPERACION_RED", color: "text-technical-blue" },
  { id: "03", title: "SISTEMAS GENÉRICOS", desc: "Los ERP tradicionales son costosos, lentos de implementar y abruman al usuario final con cientos de campos innecesarios.", log: "LOG_0X03: ALARMA_FRICCION_UX", color: "text-technical-blue" },
  { id: "04", title: "IA APLICADA", desc: "La inteligencia artificial no tiene que ser compleja ni estar de moda para aportar valor. La integramos donde puede simplificar tareas, procesar información y mejorar procesos concretos de tu negocio.", log: "LOG_0X04: SOBRECARGA_ESCALADO", color: "text-flame" },
];

const Quadrants = () => {
  return (
    <section id="quadrants" className="min-h-screen flex flex-col border-t border-platinum/10 relative py-20 px-6 md:px-24">
      {/* Cabecera de Sección (Aparece primero en el scroll) */}
      <div className="story-header mb-16">
        <div className="text-technical-blue text-xs font-mono font-bold tracking-[0.4em] uppercase mb-3">// ARQUITECTURA_Y_METODOLOGÍA</div>
        <h2 className="text-4xl md:text-6xl font-black text-platinum uppercase tracking-tighter font-heading">
          TRANSFORMAMOS EL CAOS EN <span className="text-flame">ESTRUCTURA.</span>
        </h2>
      </div>

      {/* Grid de Cuadrantes (Aparece después como ventanas/tarjetas en cascada) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        {quadrants.map((q) => (
          <div key={q.id} className="story-card border border-platinum/10 p-8 md:p-16 flex flex-col justify-between group cursor-crosshair hover:bg-carbon/80 transition-all duration-500 relative overflow-hidden rounded-xl bg-onyx/60 backdrop-blur-md hover:border-technical-blue/40 hover:shadow-[0_10px_30px_rgba(0,204,255,0.1)]">
            <div className="text-[9px] text-platinum/30 font-mono leading-none flex items-center justify-between mb-8">
              <span>{q.log}</span>
              <span className="text-technical-blue/60">[SEGMENTO_{q.id}]</span>
            </div>
            <div>
              <div className={`${q.color} text-xs mb-3 tracking-[0.3em] font-bold font-mono uppercase flex items-center gap-2`}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                FASE_{q.id}
              </div>
              <h3 className="text-3xl md:text-4xl text-platinum font-black uppercase tracking-tighter mb-4 scramble-trigger font-heading group-hover:text-stroke transition-all duration-300" data-scramble={q.title}>
                {q.title}
              </h3>
              <p className="text-white/80 font-mono text-sm leading-relaxed max-w-md">
                {q.desc}
              </p>
            </div>
            <div className={`mt-8 h-1 w-0 group-hover:w-full transition-all duration-700 ${q.id === "01" || q.id === "04" ? 'bg-flame' : 'bg-technical-blue'}`}></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Quadrants;
