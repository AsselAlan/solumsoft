import React from 'react';

const quadrants = [
  { id: "01", title: "CAOS DE INFORMACIÓN", desc: "Las planillas de cálculo y el papel provocan errores de transcripción, pérdida de información y falta de trazabilidad. Es hora de una aplicación web robusta.", log: "LOG_0X01: ERROR_INTEGRIDAD_DATOS", color: "text-flame" },
  { id: "02", title: "DECISIONES A CIEGAS", desc: "La gerencia pierde el control al no poder monitorear la operación en tiempo real. Unificamos tu negocio en una base de datos segura en la nube, permitiéndote acceder a tu información vital 24/7 desde cualquier dispositivo.", log: "LOG_0X02: FALLO_RECUPERACION_RED", color: "text-technical-blue" },
  { id: "03", title: "SISTEMAS GENÉRICOS", desc: "Los ERP tradicionales son costosos, lentos de implementar y abruman al usuario final con cientos de campos innecesarios.", log: "LOG_0X03: ALARMA_FRICCION_UX", color: "text-technical-blue" },
  { id: "04", title: "BRECHA DE I.A.", desc: "La IA parece inaccesible para la pequeña industria. Nosotros la integramos de forma práctica en los puntos de fricción de tu negocio.", log: "LOG_0X04: SOBRECARGA_ESCALADO", color: "text-flame" },
];

const Quadrants = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-2 border-t border-platinum/10 bg-onyx relative">
      {quadrants.map((q) => (
        <div key={q.id} className="border-r border-b border-platinum/10 p-12 md:p-24 flex flex-col justify-end group cursor-crosshair hover:bg-carbon transition-colors duration-500 relative overflow-hidden reveal-up">
          <div className="text-[8px] text-platinum/10 absolute top-4 left-4 font-mono leading-none">
            {q.log}<br />TIEMPO: {Math.floor(Date.now()/1000)}
          </div>
          <div className={`${q.color} text-xs mb-4 tracking-[0.3em] font-bold font-mono uppercase`}>SEGMENTO_{q.id}</div>
          <h3 className="text-4xl md:text-5xl text-platinum font-black uppercase tracking-tighter mb-6 scramble-trigger font-heading group-hover:text-stroke transition-all duration-300" data-scramble={q.title}>
            {q.title}
          </h3>
          <p className="text-platinum/50 max-w-sm font-mono text-base leading-relaxed">
            {q.desc}
          </p>
          <div className={`mt-8 h-1 w-0 group-hover:w-full transition-all duration-700 ${q.id === "01" || q.id === "04" ? 'bg-flame' : 'bg-technical-blue'}`}></div>
        </div>
      ))}
    </section>
  );
};

export default Quadrants;
