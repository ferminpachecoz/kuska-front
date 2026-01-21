import React from "react";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
  const lastUpdated = "9 de octubre de 2025";

  const sections = [
    { id: "intro", title: "Introducción" },
    { id: "datos", title: "1) ¿Qué datos tratamos?" },
    { id: "usos", title: "2) ¿Para qué usamos tus datos?" },
    { id: "base-legal", title: "3) ¿Cuál es la base legal?" },
    { id: "compartimos", title: "4) ¿Con quién compartimos datos?" },
    { id: "transferencias", title: "5) Transferencias internacionales" },
    { id: "conservacion", title: "6) Conservación" },
    { id: "derechos", title: "7) Tus derechos y cómo ejercerlos" },
    { id: "seguridad", title: "8) Seguridad" },
    { id: "menores", title: "9) Menores de edad" },
    { id: "cambios", title: "10) Cambios a esta Política" },
    { id: "cookies", title: "Política de Cookies" },
    { id: "ux-legal", title: "Anexo UX-Legal (Argentina)" },
    { id: "bolivia", title: "Capítulo Bolivia" },
    { id: "contacto", title: "Contacto" },
  ];

  const handleCopyLink = async (id) => {
    try {
      const url = `${window.location.origin}${window.location.pathname}#${id}`;
      await navigator.clipboard.writeText(url);
      // feedback simple sin librerías
      const toast = document.getElementById("pp-toast");
      if (toast) {
        toast.classList.add("pp__toast--show");
        clearTimeout(window.__pp_toast_t);
        window.__pp_toast_t = setTimeout(() => {
          toast.classList.remove("pp__toast--show");
        }, 1600);
      }
    } catch (e) {
      // si clipboard falla, no rompemos UX
    }
  };

  const SectionHeader = ({ id, title }) => (
    <div className="pp__sectionHead">
      <h2 id={id} className="pp__h2">
        {title}
      </h2>
      <div className="pp__sectionActions">
        <a className="pp__anchor" href={`#${id}`} aria-label={`Ir a ${title}`}>
          #
        </a>
        <button
          type="button"
          className="pp__copy"
          onClick={() => handleCopyLink(id)}
          aria-label={`Copiar link a ${title}`}
        >
          Copiar link
        </button>
      </div>
    </div>
  );

  return (
    <main className="pp">
      <div className="pp__container">
        <header className="pp__hero">
          <div className="pp__badge">Kuska</div>
          <h1 className="pp__h1">Política de Privacidad</h1>
          <p className="pp__subtitle">
            Esta política explica cómo recopilamos, usamos, compartimos y protegemos tus
            datos personales cuando usás la app y el sitio de KUSKA (los “Servicios”).
            Forma parte de los Términos y Condiciones.
          </p>
          <div className="pp__meta">
            <span className="pp__metaItem">
              <strong>Última actualización:</strong> {lastUpdated}
            </span>
            <span className="pp__metaDot" aria-hidden="true">
              •
            </span>
            <span className="pp__metaItem">
              <strong>Responsable:</strong> 4 MINDS S.A. (“KUSCA”)
            </span>
          </div>

          <div className="pp__notice">
            <p className="pp__noticeText">
              Algunos campos del documento aparecen como placeholders (por ejemplo CUIT,
              domicilio). Si querés, podés reemplazarlos en el texto o renderizarlos desde
              config.
            </p>
          </div>
        </header>

        <nav className="pp__toc" aria-label="Índice de la Política de Privacidad">
          <h2 className="pp__tocTitle">Índice</h2>
          <ul className="pp__tocList">
            {sections.map((s) => (
              <li key={s.id} className="pp__tocItem">
                <a className="pp__tocLink" href={`#${s.id}`}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Toast simple */}
        <div id="pp-toast" className="pp__toast" role="status" aria-live="polite">
          Link copiado ✅
        </div>

        <section className="pp__card" aria-labelledby="intro">
          <SectionHeader id="intro" title="Introducción" />
          <p className="pp__p">
            Titular y Responsable del Tratamiento: 4 MINDS S.A. (“KUSCA”, “nosotros”),
            CUIT [●], domicilio legal en [●], correo:{" "}
            <a className="pp__link" href="mailto:privacidad@kuska.app">
              privacidad@kuska.app
            </a>
            .
          </p>
          <p className="pp__p">
            Esta Política aplica al uso de la app y el sitio de KUSKA (los “Servicios”) y
            se integra con los Términos y Condiciones.
          </p>
        </section>

        <section className="pp__grid">
          <article className="pp__card" aria-labelledby="datos">
            <SectionHeader id="datos" title="1) ¿Qué datos tratamos?" />
            <ul className="pp__list">
              <li>
                <strong>Cuenta y perfil:</strong> nombre, alias, edad/fecha de nacimiento,
                género, orientación, fotos, biografía, intereses, ubicación aproximada,
                preferencias de compatibilidad.
              </li>
              <li>
                <strong>Verificación y seguridad:</strong> email, teléfono, tokens de
                verificación, documentación de identidad (si la pedimos), señales anti-fraude
                (IP, identificadores de dispositivo, logs).
              </li>
              <li>
                <strong>Interacciones:</strong> swipes, matches, mensajes/chats, llamadas o
                videollamadas dentro de la app, denuncias y bloqueos.
              </li>
              <li>
                <strong>Pagos:</strong> medio de pago (tokenizado), monto, fecha, plan
                adquirido (las credenciales completas las gestiona el proveedor de pagos o la
                tienda).
              </li>
              <li>
                <strong>Datos técnicos:</strong> modelo de dispositivo, sistema operativo,
                idioma, zona horaria, versión de app, direcciones IP, cookies/SDK,
                identificadores publicitarios, métricas de rendimiento.
              </li>
              <li>
                <strong>Ubicación y permisos:</strong> ubicación aproximada o precisa (si
                habilitás GPS), cámara, micrófono, fotos y notificaciones (si los autorizás).
              </li>
            </ul>

            <div className="pp__callout">
              <h3 className="pp__h3">Datos sensibles</h3>
              <p className="pp__p pp__p--compact">
                Información sobre orientación sexual o salud (por ejemplo, si optás por
                revelarla en tu perfil) es opcional y se trata con consentimiento expreso,
                pudiendo retirarlo en cualquier momento desde tu perfil.
              </p>
            </div>
          </article>

          <article className="pp__card" aria-labelledby="usos">
            <SectionHeader id="usos" title="2) ¿Para qué usamos tus datos?" />
            <ul className="pp__list">
              <li>
                <strong>Prestar el servicio:</strong> crear tu cuenta, armar y mostrar tu
                perfil, hacer matching, mensajería, soporte, cobros y facturación.
              </li>
              <li>
                <strong>Seguridad y cumplimiento:</strong> autenticación, prevención de
                fraudes, moderación automática/humana, cumplimiento de órdenes y
                requerimientos de autoridades.
              </li>
              <li>
                <strong>Mejora del producto y analítica:</strong> métricas de uso, pruebas
                A/B, corrección de errores, desarrollo de nuevas funciones.
              </li>
              <li>
                <strong>Comunicaciones:</strong> avisos de servicio, cambios de
                Términos/Políticas, mensajes transaccionales; marketing propio (si lo
                permitís) y campañas in-app.
              </li>
            </ul>
          </article>
        </section>

        <section className="pp__grid">
          <article className="pp__card" aria-labelledby="base-legal">
            <SectionHeader id="base-legal" title="3) ¿Cuál es la base legal?" />
            <ul className="pp__list">
              <li>
                <strong>Ejecución del contrato:</strong> (Términos y Condiciones).
              </li>
              <li>
                <strong>Consentimiento:</strong> geolocalización, marketing, cookies no
                esenciales, datos sensibles que decidas compartir.
              </li>
              <li>
                <strong>Interés legítimo:</strong> seguridad, prevención de abusos, analítica
                básica y métricas agregadas.
              </li>
              <li>
                <strong>Cumplimiento legal:</strong> responder a autoridades y obligaciones
                contables/tributarias.
              </li>
            </ul>
          </article>

          <article className="pp__card" aria-labelledby="compartimos">
            <SectionHeader id="compartimos" title="4) ¿Con quién compartimos datos?" />
            <ul className="pp__list">
              <li>
                <strong>Proveedores (encargados):</strong> hosting, almacenamiento, CDNs,
                herramientas anti-fraude, analítica/medición, crash reporting, mensajería,
                atención al cliente, medios de pago y tiendas de aplicaciones. Con acuerdos de
                confidencialidad y seguridad.
              </li>
              <li>
                <strong>Otros usuarios:</strong> información del perfil y mensajes según tu
                actividad.
              </li>
              <li>
                <strong>Autoridades/terceros:</strong> cuando sea obligatorio, para defender
                derechos o investigar abusos.
              </li>
              <li>
                <strong>Operaciones corporativas:</strong> fusiones, adquisiciones o
                reestructuraciones, con salvaguardas adecuadas.
              </li>
            </ul>
          </article>
        </section>

        <section className="pp__grid">
          <article className="pp__card" aria-labelledby="transferencias">
            <SectionHeader id="transferencias" title="5) Transferencias internacionales" />
            <p className="pp__p">
              Tus datos pueden alojarse y procesarse fuera de tu país. Aplicamos cláusulas
              contractuales y medidas técnicas para resguardar un nivel de protección adecuado
              y exigimos garantías de seguridad a todos los proveedores involucrados.
            </p>
          </article>

          <article className="pp__card" aria-labelledby="conservacion">
            <SectionHeader id="conservacion" title="6) Conservación" />
            <p className="pp__p">
              Conservamos los datos mientras tu cuenta esté activa y luego por el tiempo
              necesario para: (i) cumplir la ley; (ii) atender reclamos; (iii) prevenir
              fraudes y abusos; (iv) respaldos limitados. Chats y contenido reportado podrán
              conservarse por más tiempo a fines probatorios.
            </p>
          </article>
        </section>

        <section className="pp__card" aria-labelledby="derechos">
          <SectionHeader id="derechos" title="7) Tus derechos y cómo ejercerlos" />
          <div className="pp__twoCols">
            <div className="pp__col">
              <h3 className="pp__h3">Argentina</h3>
              <ul className="pp__list">
                <li>
                  Podés acceder, rectificar, actualizar y suprimir tus datos; oponerte a
                  tratamientos con fines de marketing; y retirar consentimientos.
                </li>
                <li>
                  Escribinos a{" "}
                  <a className="pp__link" href="mailto:privacidad@kuska.app">
                    privacidad@kuska.app
                  </a>
                  .
                </li>
                <li>
                  También podés reclamar ante la Agencia de Acceso a la Información Pública
                  (AAIP).
                </li>
              </ul>
            </div>

            <div className="pp__col">
              <h3 className="pp__h3">Bolivia</h3>
              <ul className="pp__list">
                <li>
                  Además de nuestros canales, la Acción de Protección de Privacidad (hábeas
                  data) permite solicitar acceso, corrección o eliminación de datos en bases
                  públicas o privadas.
                </li>
              </ul>
            </div>
          </div>

          <div className="pp__callout pp__callout--soft">
            <p className="pp__p pp__p--compact">
              Para todos los casos, responderemos dentro de plazos razonables y, cuando
              corresponda, en los plazos legales aplicables. Podremos pedir verificación de
              identidad.
            </p>
          </div>
        </section>

        <section className="pp__grid">
          <article className="pp__card" aria-labelledby="seguridad">
            <SectionHeader id="seguridad" title="8) Seguridad" />
            <p className="pp__p">
              Aplicamos medidas técnicas y organizativas acordes al riesgo (cifrado en
              tránsito, controles de acceso, hardening de infraestructura, registros de
              auditoría y evaluaciones periódicas). No existe seguridad absoluta en Internet;
              informanos de incidentes a{" "}
              <a className="pp__link" href="mailto:security@kuska.app">
                security@kuska.app
              </a>
              .
            </p>
          </article>

          <article className="pp__card" aria-labelledby="menores">
            <SectionHeader id="menores" title="9) Menores de edad" />
            <p className="pp__p">
              KUSKA es solo para mayores de 18 años. Eliminamos cuentas detectadas de menores
              y bloqueamos su acceso.
            </p>
          </article>
        </section>

        <section className="pp__card" aria-labelledby="cambios">
          <SectionHeader id="cambios" title="10) Cambios a esta Política" />
          <p className="pp__p">
            Actualizaremos esta Política cuando sea necesario y te notificaremos cambios
            relevantes por la app o por email.
          </p>
        </section>

        <section className="pp__card" aria-labelledby="cookies">
          <SectionHeader id="cookies" title="Política de Cookies (y tecnologías similares)" />
          <p className="pp__p">
            Cookies, SDK y tecnologías análogas almacenan o acceden a información en tu
            dispositivo para operar la app y mejorar tu experiencia.
          </p>

          <h3 className="pp__h3">1) Tipos de cookies que usamos</h3>
          <ul className="pp__list">
            <li>
              <strong>Esenciales (estrictamente necesarias):</strong> autenticación,
              seguridad, balanceo, prevención de fraude.
            </li>
            <li>
              <strong>Funcionales:</strong> recordar preferencias (idioma, layout) y ajustes.
            </li>
            <li>
              <strong>Analítica/medición:</strong> estadísticas agregadas de uso y rendimiento.
            </li>
            <li>
              <strong>Marketing/atribución:</strong> medir campañas propias y retargeting in-app
              (solo con tu consentimiento donde aplique).
            </li>
          </ul>

          <h3 className="pp__h3">2) Gestión de preferencias</h3>
          <ul className="pp__list">
            <li>
              Mostramos un banner/centro de preferencias al primer ingreso y cuando cambie la
              finalidad o proveedor.
            </li>
            <li>
              Podés aceptar todo, rechazar todo (salvo esenciales) o configurar por categoría.
            </li>
            <li>
              En la app: <strong>Perfil → Privacidad → Preferencias de cookies y tracking</strong>.
            </li>
          </ul>

          <h3 className="pp__h3">3) Lista de cookies/SDK (ejemplo)</h3>
          <div className="pp__tableWrap" role="region" aria-label="Tabla de cookies y SDK">
            <table className="pp__table">
              <thead>
                <tr>
                  <th>Proveedor</th>
                  <th>Finalidad</th>
                  <th>Tipo</th>
                  <th>Retención</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KUSKA (propias)</td>
                  <td>Sesión, seguridad</td>
                  <td>Esenciales</td>
                  <td>Sesión</td>
                </tr>
                <tr>
                  <td>Firebase Crashlytics</td>
                  <td>Estabilidad app</td>
                  <td>Analítica</td>
                  <td>90 días</td>
                </tr>
                <tr>
                  <td>Google Analytics for Firebase</td>
                  <td>Métricas de uso</td>
                  <td>Analítica</td>
                  <td>14 meses</td>
                </tr>
                <tr>
                  <td>Meta SDK</td>
                  <td>Atribución campañas</td>
                  <td>Marketing</td>
                  <td>180 días</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="pp__p pp__p--muted">
            Nota: la lista real puede variar. Mantendremos un inventario actualizado en esta
            sección.
          </p>
        </section>

        <section className="pp__card" aria-labelledby="ux-legal">
          <SectionHeader id="ux-legal" title="Anexo UX-Legal: botones y flujos obligatorios (Argentina)" />
          <p className="pp__p">
            Este anexo estandariza flujos para cumplir normativa argentina sobre
            arrepentimiento y baja de servicios en contrataciones a distancia.
          </p>

          <div className="pp__twoCols">
            <div className="pp__col">
              <h3 className="pp__h3">A) Botón de Arrepentimiento</h3>
              <ul className="pp__list">
                <li>
                  <strong>Dónde:</strong> Home web (primer acceso, arriba del pliegue) y Menú →
                  Ayuda/Legales en la app.
                </li>
                <li>
                  <strong>Etiqueta exacta:</strong> “BOTÓN DE ARREPENTIMIENTO”.
                </li>
                <li>
                  <strong>UX:</strong> acceso visible e inmediato, sin registración previa para
                  iniciar, formulario mínimo, confirmación en pantalla + email con código dentro
                  de 24 h.
                </li>
              </ul>
              <div className="pp__callout pp__callout--cta">
                <p className="pp__p pp__p--compact">
                  “¿Te arrepentiste? Cancelá tu compra o servicio acá. Sin vueltas.”
                </p>
              </div>
            </div>

            <div className="pp__col">
              <h3 className="pp__h3">B) Botón de Baja de Servicio</h3>
              <ul className="pp__list">
                <li>
                  <strong>Dónde:</strong> Home web (primer acceso) y Perfil → Suscripción →
                  Administrar (app).
                </li>
                <li>
                  <strong>Etiqueta exacta:</strong> “BOTÓN DE BAJA DE SERVICIO”.
                </li>
                <li>
                  <strong>UX:</strong> baja directa (sin dark patterns), sin registración previa
                  para iniciar, verificación mínima, confirmación con código dentro de 24 h.
                </li>
                <li>
                  <strong>Suscripciones vía Apple/Google:</strong> instrucciones y enlaces para
                  cancelar desde la tienda, sin perjuicio de canal propio cuando aplique.
                </li>
              </ul>
              <div className="pp__callout pp__callout--cta">
                <p className="pp__p pp__p--compact">
                  “Cancelá tu suscripción acá. Sin registro ni trámites extra.”
                </p>
              </div>
            </div>
          </div>

          <h3 className="pp__h3">C) Confirmación sugerida (24 h)</h3>
          <p className="pp__p">
            “Recibimos tu solicitud. Tu código es #KUS-123456. Te avisamos por este medio cuando
            se haga efectiva.”
          </p>

          <h3 className="pp__h3">D) Métricas y cumplimiento</h3>
          <ul className="pp__list">
            <li>Tiempo a primer clic, tasa de éxito sin ayuda, tiempo promedio de resolución.</li>
            <li>Registro de auditoría y exportación mensual ante eventuales requerimientos.</li>
          </ul>
        </section>

        <section className="pp__card" aria-labelledby="bolivia">
          <SectionHeader id="bolivia" title="Capítulo específico para uso en Bolivia" />
          <ol className="pp__olist">
            <li>
              <strong>Contratación electrónica y firma digital:</strong> validez de mensajes de
              datos y firmas digitales conforme normativa boliviana.
            </li>
            <li>
              <strong>Derechos de consumo:</strong> información clara, trato digno, mecanismos de
              reclamo; canal local:{" "}
              <a className="pp__link" href="mailto:soporte@kuska.app">
                soporte@kuska.app
              </a>
              .
            </li>
            <li>
              <strong>Privacidad:</strong> además de nuestros canales, podés interponer la Acción
              de Protección de Privacidad ante jurisdicción competente.
            </li>
            <li>
              <strong>Baja y desistimiento:</strong> mecanismos equivalentes de baja y
              desistimiento accesibles desde Bolivia en web/app.
            </li>
          </ol>
        </section>

        <section className="pp__card" aria-labelledby="contacto">
          <SectionHeader id="contacto" title="Contacto" />
          <div className="pp__contacts">
            <a className="pp__contact" href="mailto:privacidad@kuska.app">
              <span className="pp__contactLabel">Privacidad</span>
              <span className="pp__contactValue">privacidad@kuska.app</span>
            </a>
            <a className="pp__contact" href="mailto:legal@kuska.app">
              <span className="pp__contactLabel">Legal</span>
              <span className="pp__contactValue">legal@kuska.app</span>
            </a>
            <a className="pp__contact" href="mailto:soporte@kuska.app">
              <span className="pp__contactLabel">Soporte</span>
              <span className="pp__contactValue">soporte@kuska.app</span>
            </a>
          </div>

          <p className="pp__p pp__p--muted">
            Recomendación interna del documento: mantener inventario vivo de cookies/SDK, evaluar
            cláusulas para transferencias internacionales y asegurar visibilidad de botones y
            emisión de códigos dentro de 24 h.
          </p>
        </section>

        <footer className="pp__footer">
          <p className="pp__p pp__p--muted">
            © {new Date().getFullYear()} Kuska — Política de Privacidad
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
