Crea esta web Solum Software (Solum SF) · Plan de Negocio y Fundamentación Estratégica

1. Resumen Ejecutivo

Solum Software es una factoría de desarrollo ágil que diseña e implementa soluciones de software personalizadas para emprendedores y PyMEs en proceso de digitalización. Nos enfocamos en resolver dolores operativos críticos de forma rápida, simple y sin fricciones técnicas, reemplazando flujos de trabajo basados en papel o planillas de cálculo (Excel) por aplicaciones web robustas conectadas a bases de datos relacionales y potenciadas con Inteligencia Artificial práctica.

Propuesta de Valor: "No necesitás un sistema de un millón de dólares; necesitás algo que te quite el dolor de cabeza del día a día, rápido y que funcione."

Modelo de Operación: Desarrollo ágil modular basado en un core tecnológico pre-construido y altamente reutilizable (Boilerplate).

Modelo de Monetización: Pago inicial de consultoría y despliegue (Fee de Setup) + Tarifa plana de suscripción mensual (SaaS/Abono de Soporte e Infraestructura).

2. El Problema del Mercado (El "Dolor" de la PyME)

El segmento de microempresas, PyMEs tradicionales y nuevos emprendedores se enfrenta a una barrera de digitalización debido a:

Caos de Información: Uso extendido de planillas de cálculo propensas a errores de transcripción, pérdida de cuadernos físicos y falta de trazabilidad histórica.

Falta de Conectividad en Campo: Los repartidores, choferes o preventistas pierden la capacidad de registrar transacciones en zonas con mala señal móvil.

Sistemas Genéricos Complejos: El software de gestión (ERP) tradicional es costoso, requiere meses de implementación y abruma al usuario final con cientos de campos innecesarios.

Brecha de Inteligencia Artificial: La IA parece inaccesible o de nivel puramente experimental para el comercio minorista o la pequeña industria.

3. La Solución: El Método Solum SF

Convertimos el caos operativo en una estructura de datos limpia, intuitiva y móvil. Diseñamos sistemas modulares adaptados al flujo de trabajo real del cliente, sin exigir que el cliente se adapte al software.

Los Tres Pilares de Solum SF:

Simplicidad Extrema (UX Premium): Diseños limpios, tipografías legibles, interfaces optimizadas para pantallas táctiles y lógicas de clic simplificadas (menos campos, más acción).

Arquitectura Offline-First: Garantía de funcionamiento continuo. Los datos se guardan de forma segura de manera local en el navegador o dispositivo móvil del usuario y se sincronizan automáticamente con la nube cuando detectan conexión, asegurando cero pérdida de registros en tránsito.

IA Práctica Incorporada: No vendemos chatbots genéricos. Integramos IA en puntos críticos de fricción del negocio para automatizar la carga de datos (transcripción de notas de voz de los repartidores, lectura inteligente de comprobantes de pago recibidos por WhatsApp o predicciones automáticas de producción).

4. Arquitectura Tecnológica y Eficiencia de Costos

Para poder prometer desarrollos a medida en un plazo promedio de 15 a 21 días, Solum Software no programa desde cero. Contamos con un ecosistema tecnológico unificado y probado:

Frontend: React.js + Vite (Velocidad de carga) y TailwindCSS (Consistencia visual).

Persistencia Local: Zustand + localForage (IndexedDB) para asegurar la experiencia offline-first.

Backend & DB: Supabase (PostgreSQL en la nube). Escalabilidad inmediata, seguridad a nivel de fila (RLS) y consistencia de datos concurrente mediante llamadas a procedimientos remotos (RPC) nativas en SQL.

Monitoreo y Estabilidad: Sentry integrado para resolver problemas de forma proactiva antes de que el cliente lo note.

Este stack permite duplicar el "cascarón administrativo" (usuarios, roles, lógica financiera de cuentas corrientes y auditoría) y configurar únicamente las lógicas específicas de cada nuevo cliente.

5. Caso de Éxito de Referencia (Validador de Tracción)

Nuestra metodología se encuentra validada en producción mediante el sistema de Gestión Integral de Panificadora:

Impacto Real: Control de stock de materias primas, mermas de producción, logística y rendición de cuentas corrientes para flotas de reparto en calle.

Retorno de Inversión: El cliente pasó de registrar devoluciones en papeles mojados a visualizar el Panel General Financiero con resultado neto diario y geolocalización o estatus de su flota en tiempo real.

6. Modelo Comercial y de Crecimiento Financiero

Para garantizar el flujo de caja inmediato y la previsibilidad a largo plazo, implementamos una estructura de cobro híbrida:

Setup Fee (Tarifa de Entrada): Cobro por la consultoría inicial, la adaptación de la base de datos a sus necesidades, la carga inicial de inventario/clientes y la capacitación del personal.

Monthly License (Suscripción Recurrente): Un abono fijo mensual que cubre:

Hospedaje de la aplicación en la nube.

Mantenimiento del motor de base de datos.

Consumo de tokens de IA integrados.

Soporte técnico directo por WhatsApp.

Este modelo de suscripción genera un MRR (Ingreso Recurrente Mensual) que incrementa exponencialmente el valor de Solum Software a medida que sumamos clientes.

8. Efectos Visuales Avanzados y Coreografía de Scroll (Narrativa en Cascada)

- **Coreografía Secuencial por Sección (GSAP ScrollTrigger)**:
  - Al hacer scroll, cada sección se carga siguiendo un orden narrativo estricto: **primero los Títulos/Cabeceras (`.story-header`)**, e inmediatamente después **las Ventanas / Tarjetas / Módulos (`.story-card`)** en un stagger fluido de 0.12s.
- **Mejoras en Componentes**:
  - **Hero & Consola Terminal**: Resplandor cibernético en la consola, indicadores LED de CPU/latencia, superposición sutil de líneas de escaneo (scanlines) y badge interactivo `solum_terminal_v4.0.0-industrial`.
  - **Módulo de Logística y Stock (`TechStack`)**: Tarjetas de métricas con bordes neón que responden al hover, estado de auditoría en vivo y botón con simulación de procesamiento.
  - **Cerebro IA RAG (`Ledger`)**: Dashboard interactivo con fuentes conectadas, interfaz de preguntas predefinidas y simulador de respuestas con asistente de IA.
  - **Cuadrantes & Metodología (`Quadrants`)**: Tarjetas con estética glassmorphic, micro-indicadores cibernéticos y efecto de texto desordenado (text scramble) en hover.
  - **Navbar Lateral (`Sidebar`)**: Indicadores de sección neón con resplandor cyan (`#00ccff`), tooltips flotantes en hover y botón de WhatsApp con pulso de actividad verde en tiempo real.

## 9. Reglas del Proyecto y Flujo de Trabajo
- **Contacto Comercial Oficial**: WhatsApp vinculante **`+5492215735188`**.
- **Autorización de Build**: **ANTES DE EJECUTAR `npm build` / `npm run build` DEBO CONSULTAR AL USUARIO**. Nunca se debe ejecutar la compilación de producción sin la confirmación explícita del usuario.
- **Documentación Activa**: Mantener la documentación y el esquema actualizados con cada avance relevante.
- **Commits**: Realizar commits con descripciones breves de los cambios al lograr progresos significativos.


