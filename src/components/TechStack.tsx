import React, { useState, useRef } from 'react';
import './InteractiveDashboard.css';

const TechStack = () => {
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS'>('IDLE');

  const metric1Ref = useRef<HTMLParagraphElement>(null);
  const metric2Ref = useRef<HTMLParagraphElement>(null);
  const metric3Ref = useRef<HTMLParagraphElement>(null);

  const runAISync = () => {
    if (status !== 'IDLE') return;
    
    setStatus('PROCESSING');
    
    setTimeout(() => {
      setStatus('SUCCESS');
      animateValue(metric1Ref.current, 14, 0, 1000, '', '', true);
      animateValue(metric2Ref.current, 3, 0, 1000, '', '', true);
      animateValue(metric3Ref.current, 0, 12, 1500, '+', ' hs', false);
    }, 2000);
  };

  const animateValue = (obj: HTMLElement | null, start: number, end: number, duration: number, prefix = '', suffix = '', isWarningToOk = false) => {
    if (!obj) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      
      let displayValue = current < 10 && current > 0 ? '0' + current : current.toString();
      if(current === 0) displayValue = '00';
      
      obj.innerHTML = prefix + displayValue + suffix;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        if(isWarningToOk && end === 0) {
          obj.classList.remove('warning');
          obj.classList.add('ok');
        } else if (!isWarningToOk && end > start) {
           obj.classList.remove('neutral');
           obj.classList.add('ok');
        }
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <section className="solum-demo-wrapper px-4 md:px-24" id="tech-stack">
      <div className="solum-demo-section">
        
        {/* Contenido Explicativo */}
        <div className="solum-copy fade-in-up">
          <span className="solum-badge">Simplicidad Extrema</span>
          <h2 className="uppercase">TECNOLOGÍA ADAPTADA A TU <span>NEGOCIO</span></h2>
          <p>No todos los negocios necesitan un sistema enorme ni procesos innecesarios.</p>
          <p>Desarrollamos herramientas a medida, enfocadas en lo que realmente necesita tu operación.</p>
        </div>

        {/* Panel Interactivo */}
        <div className="solum-panel-wrapper fade-in-up delay-1">
          <div className={`solum-panel ${status === 'PROCESSING' ? 'processing' : ''}`} id="demoPanel">
            <div className="scan-line"></div>
            
            <div className="solum-header">
              <div className="solum-title">
                <h3>Módulo de Logística y Stock</h3>
                <p id="headerSubtext">
                  {status === 'SUCCESS' ? 'Datos consolidados y auditados.' : 'Estado actual: Esperando sincronización'}
                </p>
              </div>
              <div className="solum-status">
                <span className="dot" id="statusDot"></span> 
                <span id="statusText">
                  {status === 'IDLE' && 'CONECTADO'}
                  {status === 'PROCESSING' && 'SINCRONIZANDO'}
                  {status === 'SUCCESS' && '100% OPERATIVO'}
                </span>
              </div>
            </div>

            <div className="solum-grid">
              <div className="solum-card">
                <h4>Unidades Desincronizadas</h4>
                <p className="solum-data warning" ref={metric1Ref}>14</p>
                <span className="solum-subtext" id="subtext1">
                  {status === 'SUCCESS' ? 'Base de datos actualizada al 100%' : 'Remitos en papel sin cargar'}
                </span>
              </div>
              
              <div className="solum-card">
                <h4>Alertas de Stock</h4>
                <p className="solum-data warning" ref={metric2Ref}>03</p>
                <span className="solum-subtext" id="subtext2">
                  {status === 'SUCCESS' ? 'Pedidos de reposición enviados' : 'Quiebres detectados'}
                </span>
              </div>

              <div className="solum-card">
                <h4>Tiempo Recuperado</h4>
                <p className="solum-data neutral" ref={metric3Ref}>0h</p>
                <span className="solum-subtext" id="subtext3">
                  {status === 'SUCCESS' ? 'Tiempo administrativo ahorrado' : 'Carga manual pendiente'}
                </span>
              </div>
            </div>

            <div className="solum-action-row">
              <div className="action-text">
                <strong id="actionStatus">
                  {status === 'IDLE' && 'Proceso Manual Detectado:'}
                  {status === 'PROCESSING' && 'IA Procesando:'}
                  {status === 'SUCCESS' && 'Operación Exitosa:'}
                </strong>{' '}
                <span id="actionDesc">
                  {status === 'IDLE' && 'Se requieren 4 horas de data-entry.'}
                  {status === 'PROCESSING' && 'Extrayendo datos y cruzando bases...'}
                  {status === 'SUCCESS' && 'Flujo de trabajo optimizado sin intervención manual.'}
                </span>
              </div>
              <button 
                className={`btn-solum ${status === 'PROCESSING' ? 'loading' : ''} ${status === 'SUCCESS' ? 'success' : ''}`} 
                id="actionBtn" 
                onClick={runAISync}
                disabled={status !== 'IDLE'}
              >
                <svg className="btn-icon" id="btnIcon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {status === 'IDLE' && <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>}
                  {status === 'PROCESSING' && <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>}
                  {status === 'SUCCESS' && (
                    <>
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </>
                  )}
                </svg>
                <span id="btnText">
                  {status === 'IDLE' && 'Auditar con IA'}
                  {status === 'PROCESSING' && 'Procesando Documentos...'}
                  {status === 'SUCCESS' && 'Datos Sincronizados'}
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TechStack;
