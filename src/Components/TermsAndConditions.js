import React from "react";
import "./TermsAndConditions.scss";

const TermsAndConditions = () => {
  const lastUpdated = "9 de octubre de 2025";

  return (
    <main className="tc" id="top">
      <div className="tc__container">
        <header className="tc__hero">
          <div className="tc__brandPill">Kuska</div>

          <h1 className="tc__h1">Términos y Condiciones</h1>

          <p className="tc__subtitle">
            Este documento regula el uso de la aplicación móvil KUSKA, su sitio web asociado y
            cualquier servicio, contenido o funcionalidad relacionado (en conjunto, los “Servicios”).
          </p>

          <div className="tc__meta">
            <span className="tc__metaItem">
              <strong>Última actualización:</strong> {lastUpdated}
            </span>
            <span className="tc__dot" aria-hidden="true">•</span>
            <span className="tc__metaItem">
              <strong>Titular del servicio:</strong> 4 MINDS S.A. — CUIT [30719227690]
            </span>
            <span className="tc__dot" aria-hidden="true">•</span>
            <span className="tc__metaItem">
              <strong>Contacto:</strong>{" "}
              <a className="tc__link" href="mailto:soporte@kuska.app">soporte@kuska.app</a>
            </span>
          </div>

          <div className="tc__notice" role="note" aria-label="Aviso importante">
            <h2 className="tc__noticeTitle">Aviso importante</h2>
            <p className="tc__noticeText">
              Este es un contrato de adhesión entre la persona usuaria (“Usuario”) y 4 MINDS S.A.
              Al crear una cuenta, acceder o utilizar los Servicios, el Usuario declara que leyó y
              acepta íntegramente estos Términos. Si no está de acuerdo, no debe usar los Servicios.
            </p>
          </div>
        </header>

        <nav className="tc__toc" aria-label="Índice">
          <h2 className="tc__tocTitle">Índice</h2>
          <ol className="tc__tocList">
            <li><a href="#definiciones">1. Definiciones</a></li>
            <li><a href="#capacidad">2. Capacidad y elegibilidad</a></li>
            <li><a href="#registro">3. Registro y seguridad de la cuenta</a></li>
            <li><a href="#descripcion">4. Descripción del servicio</a></li>
            <li><a href="#conducta">5. Conducta del Usuario y Contenido prohibido</a></li>
            <li><a href="#licencia-contenido">6. Licencia de uso y derechos sobre el Contenido</a></li>
            <li><a href="#pi">7. Propiedad intelectual de KUSKA</a></li>
            <li><a href="#pagos">8. Funciones de pago, Suscripciones y Renovación Automática</a></li>
            <li><a href="#comunicaciones">9. Comunicaciones y notificaciones electrónicas</a></li>
            <li><a href="#privacidad">10. Privacidad y protección de datos personales</a></li>
            <li><a href="#geoservicios">11. Geo-servicios, permisos y ubicaciones</a></li>
            <li><a href="#terminacion">12. Suspensión, terminación y conservación</a></li>
            <li><a href="#responsabilidad">13. Exenciones y limitación de responsabilidad</a></li>
            <li><a href="#indemnidad">14. Indemnidad</a></li>
            <li><a href="#ley">15. Ley aplicable y jurisdicción</a></li>
            <li><a href="#arbitraje">16. Resolución Extrajudicial y Arbitraje Privado Predesignado</a></li>
            <li><a href="#consumo">17. Reclamaciones de consumo y mecanismos alternativos</a></li>
            <li><a href="#cambios">18. Cambios en los Servicios y en los Términos</a></li>
            <li><a href="#notas">19. Notas</a></li>
            <li><a href="#bolivia">Capítulo específico para el uso en Bolivia</a></li>
            <li><a href="#anexos">Anexos</a></li>
            <li><a href="#aceptacion">Aceptación</a></li>
          </ol>
        </nav>

        <section className="tc__card" id="definiciones">
          <h2 className="tc__h2">1. Definiciones</h2>
          <ul className="tc__list">
            <li><strong>Usuario:</strong> Persona humana que accede y/o utiliza los Servicios.</li>
            <li><strong>Cuenta:</strong> Registro individual habilitado por KUSKA en la app o web.</li>
            <li><strong>Contenido:</strong> textos, fotos, videos, audios, perfiles y demás materiales cargados por el Usuario.</li>
            <li><strong>Suscripciones:</strong> servicios de pago (por ejemplo, planes premium) ofrecidos por KUSKA con facturación periódica.</li>
          </ul>
        </section>

        <section className="tc__card" id="capacidad">
          <h2 className="tc__h2">2. Capacidad y elegibilidad</h2>
          <p className="tc__p">
            Los Servicios están destinados exclusivamente a mayores de 18 años. Al usar KUSKA,
            el Usuario declara y garantiza que: (i) tiene al menos 18 años; (ii) posee capacidad legal
            para contratar; (iii) utilizará los Servicios conforme a la ley y estos Términos.
          </p>
          <p className="tc__p">
            Supervisamos el uso por parte de menores de edad y cancelaremos, suspenderemos o solicitaremos
            que verifiques tu Cuenta si tenemos motivos para creer que puedes ser menor de edad.
          </p>
        </section>

        <section className="tc__card" id="registro">
          <h2 className="tc__h2">3. Registro y seguridad de la cuenta</h2>
          <p className="tc__p">
            Para utilizar ciertas funciones, el Usuario debe crear una Cuenta y proporcionar datos veraces,
            completos y actualizados. El Usuario es responsable de: (a) mantener la confidencialidad de sus
            credenciales; (b) toda actividad realizada con su Cuenta; (c) notificar de inmediato a KUSKA sobre
            accesos no autorizados.
          </p>
          <p className="tc__p">
            KUSKA podrá solicitar verificación de identidad y/o cerrar, suspender o limitar cuentas cuando detecte
            riesgos, incumplimientos o uso indebido.
          </p>

          <div className="tc__callout">
            <h3 className="tc__h3">Registro con Facebook</h3>
            <p className="tc__p tc__p--compact">
              Está permitido crear una cuenta registrándote de forma manual o con tu Facebook. Si se crea una
              cuenta usando tu Facebook, nos autorizas a ver, mostrar y utilizar cierta información de tu cuenta
              (p. ej.: fotos de perfil, situación sentimental, ubicación y amistades). Para más información,
              consultar la Política de Privacidad.
            </p>
          </div>

          <div className="tc__callout tc__callout--soft">
            <h3 className="tc__h3">Cuenta y eliminación</h3>
            <ul className="tc__list">
              <li>No está permitido utilizar la cuenta de KUSKA de otra persona ni compartir tu cuenta sin permiso.</li>
              <li>
                Puedes eliminar tu Cuenta en cualquier momento, en Configuración → “Eliminar cuenta”.
                Tu cuenta se eliminará inmediatamente, pero el contenido tardará unos días en ser borrado de la App.
              </li>
              <li>
                Si eliminas tu Cuenta y creas una nueva en este plazo con los mismos datos de acceso, se reactivará tu Cuenta anterior.
              </li>
            </ul>
          </div>

          <div className="tc__callout tc__callout--warn">
            <h3 className="tc__h3">Moderación, suspensión y apelaciones</h3>
            <p className="tc__p">
              Utilizamos herramientas automatizadas, reportes de la comunidad y un equipo de moderación para supervisar
              cuentas y contenidos. Podemos dar de baja o suspender cuentas, restringir el acceso o aplicar medidas operativas
              y tecnológicas (incluido bloqueo de IP) sin obligación de notificación previa, salvo normas imperativas aplicables.
            </p>
            <p className="tc__p">
              En caso de cancelación o suspensión, aceptás que no corresponde reembolso por servicios o funcionalidades pagas ya facturadas.
              Si considerás que la medida fue errónea, podés solicitar una revisión dentro de los seis (6) meses siguientes, según
              el proceso de apelación indicado en las Normas de la Comunidad.
            </p>
          </div>
        </section>

        <section className="tc__card" id="descripcion">
          <h2 className="tc__h2">4. Descripción del servicio</h2>
          <p className="tc__p">
            KUSKA es una plataforma de citas que permite crear un perfil, descubrir y conectarse con otras personas,
            intercambiar mensajes y contenidos, y acceder a funciones gratuitas y/o de pago.
          </p>
          <p className="tc__p">
            KUSKA no garantiza la existencia, calidad ni seguridad de coincidencias o interacciones, ni la veracidad de perfiles de terceros.
          </p>
        </section>

        <section className="tc__card" id="conducta">
          <h2 className="tc__h2">5. Conducta del Usuario y Contenido prohibido</h2>
          <p className="tc__p">El Usuario se compromete a no:</p>

          <ul className="tc__list">
            <li>(a) usar los Servicios con fines ilícitos, discriminatorios, abusivos, fraudulentos o contrarios a las buenas costumbres;</li>
            <li>(b) publicar Contenido ilegal, difamatorio, injuriante, violento, sexualmente explícito, que involucre a menores o infrinja derechos de terceros;</li>
            <li>(c) acosar, amenazar o dañar a otras personas;</li>
            <li>(d) copiar, descompilar, manipular o explotar el software o las bases de datos;</li>
            <li>(e) utilizar sistemas automatizados (bots, scrapers) sin autorización previa;</li>
            <li>(f) compartir datos personales de terceros sin su consentimiento;</li>
            <li>(g) infringir derechos de propiedad intelectual, privacidad o imagen.</li>
            <li>(h) ser abusivo, insultante o amenazador, discriminatorio o que promueva racismo, sexismo, odio o intolerancia;</li>
            <li>(i) referirse a actividades comerciales (ventas, concursos, publicidad, enlaces a sitios web o números premium);</li>
            <li>(j) difundir correo “basura” o “spam”;</li>
            <li>(k) suplantar o intentar engañar o manipular a una persona (estafas y comportamientos no auténticos);</li>
            <li>(l) ser ilegal o fomentar, promover o incitar a cualquier actividad ilegal;</li>
            <li>(m) contener spyware, adware, virus, archivos corruptos, gusanos u otros códigos maliciosos diseñados para interrumpir, dañar o limitar funcionalidad;</li>
            <li>(n) violar de cualquier otro modo las Normas de la Comunidad.</li>
          </ul>

          <p className="tc__p">
            KUSKA puede moderar, bloquear o remover Contenidos y Cuentas que vulneren estas reglas o la ley,
            y/o dar aviso a autoridades competentes cuando corresponda.
          </p>

          <div className="tc__callout tc__callout--soft">
            <h3 className="tc__h3">Tu Contenido</h3>
            <p className="tc__p">
              Tu Contenido debe cumplir las Normas de la Comunidad. Sos responsable por Tu Contenido y
              debés indemnizar a KUSKA frente a reclamos relacionados con él.
            </p>
            <p className="tc__p">
              No publiques información de contacto personal o información bancaria (nombres, direcciones, CP, teléfonos,
              emails, URLs, tarjetas de crédito/débito u otros datos bancarios). Si revelás información personal a otro usuario,
              será bajo tu responsabilidad.
            </p>
            <p className="tc__p tc__p--compact">
              No estamos obligados a almacenar Tu Contenido. Si es importante, deberías hacer una copia.
            </p>
          </div>

          <div className="tc__callout">
            <h3 className="tc__h3">Nuestro Contenido y licencia de uso</h3>
            <p className="tc__p">
              Todo material que aparezca en KUSKA (texto, gráficos, interfaces, marcas, logos, sonidos, diseños, software
              y/o bases de datos) (“Nuestro Contenido”) es propiedad de 4 MINDS S.A. o licenciado y está protegido por
              derechos de propiedad intelectual.
            </p>
            <p className="tc__p">
              Concedemos una licencia personal, limitada, no exclusiva e intransferible para usar Nuestro Contenido
              solo en la medida necesaria para el funcionamiento de la App y conforme a estas Condiciones.
              Se prohíbe vender/modificar/distribuir/explotar, usar metatags, crear obras derivadas, ingeniería inversa o
              explotación comercial, o uso ilícito.
            </p>
            <p className="tc__p tc__p--compact">Nos reservamos todos los derechos no otorgados expresamente.</p>
          </div>

          <div className="tc__callout tc__callout--soft">
            <h3 className="tc__h3">Revisión y moderación de contenidos</h3>
            <p className="tc__p">
              No asumimos obligación general de preseleccionar contenido, pero para proteger la seguridad de la comunidad,
              podremos revisar, filtrar, rechazar y/o eliminar contenido (incluido mensajes directos) conforme a estas Condiciones.
            </p>
          </div>

          <div className="tc__callout tc__callout--soft">
            <h3 className="tc__h3">Sistemas de recomendación</h3>
            <p className="tc__p tc__p--compact">
              KUSKA utiliza modelos y algoritmos de emparejamiento para estimar compatibilidad y mostrar perfiles afines.
              Podés consultar información adicional sobre su funcionamiento y parámetros principales en la Política de Privacidad.
            </p>
          </div>
        </section>

        <section className="tc__card" id="licencia-contenido">
          <h2 className="tc__h2">6. Licencia de uso y derechos sobre el Contenido</h2>
          <p className="tc__p">
            KUSKA otorga al Usuario una licencia limitada, no exclusiva, intransferible y revocable para acceder y usar los Servicios.
            El Contenido subido por el Usuario sigue siendo de su titularidad.
          </p>
          <p className="tc__p">
            Al publicarlo en KUSKA, el Usuario otorga a la Compañía una licencia mundial, gratuita y sublicenciable para alojar,
            reproducir, adaptar, publicar y comunicar dicho Contenido únicamente con el fin de operar, mejorar y promocionar los
            Servicios, mientras la Cuenta esté activa y por el tiempo razonablemente necesario luego de su cierre para fines de copia
            de seguridad y cumplimiento legal.
          </p>
          <p className="tc__p tc__p--compact">
            El Usuario declara que posee los derechos necesarios sobre el Contenido y que éste no vulnera derechos de terceros.
          </p>
        </section>

        <section className="tc__card" id="pi">
          <h2 className="tc__h2">7. Propiedad intelectual de KUSKA</h2>
          <p className="tc__p">
            KUSKA, su software, interfaces, marcas, diseños, bases de datos y demás elementos son propiedad de 4 MINDS S.A. o
            de sus licenciantes y están protegidos por leyes y tratados internacionales. Queda prohibido su uso no autorizado.
          </p>
        </section>

        <section className="tc__card" id="pagos">
          <h2 className="tc__h2">8. Funciones de pago, Suscripciones y Renovación Automática</h2>

          <div className="tc__subcard">
            <h3 className="tc__h3">8.1. Planes y cargos</h3>
            <p className="tc__p">
              KUSKA podrá ofrecer Suscripciones y compras puntuales. Los precios, moneda y tributos se informarán antes de contratar.
              Las Suscripciones son mensuales y se renuevan automáticamente al final de cada período, a la tarifa vigente, salvo
              cancelación previa por el Usuario desde el “Botón de baja” o el flujo de cancelación disponible en la app/tienda.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">8.2. Permanencia mínima</h3>
            <p className="tc__p">
              En planes mensuales, rige una permanencia mínima de 1 (un) mes a partir del alta; el Usuario puede cancelar en cualquier
              momento, quedando la baja efectiva al cierre del período en curso. Esto no restringe el derecho de revocación (ver 8.3).
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">8.3. Derecho de revocación / “Botón de arrepentimiento” (Argentina)</h3>
            <p className="tc__p">
              En Argentina, cuando la contratación se realice a distancia, el Usuario dispone de 10 (diez) días corridos para revocar la
              aceptación desde la entrega del servicio o desde la celebración del contrato, lo que ocurra último. KUSKA habilitará un
              “Botón de Arrepentimiento” visible para gestionar esa revocación por el mismo medio de contratación. Si se ejerce este
              derecho, se reintegrarán los importes abonados en los plazos legales y se cancelará el acceso al servicio.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">8.4. Botón de baja (Argentina)</h3>
            <p className="tc__p">
              KUSKA habilitará un acceso directo y visible para solicitar la baja de Suscripciones sin registración adicional ni trámites
              distintos de la sola voluntad del Usuario, con confirmación de la gestión por el mismo medio.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">8.5. Reembolsos y facturación</h3>
            <p className="tc__p">
              Salvo lo previsto por el derecho de revocación o por normas imperativas, los pagos no son reembolsables una vez iniciado el
              período contratado. La facturación puede ser gestionada por tiendas de aplicaciones u operadores de pago, sujeta a sus términos.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">8.6. Impuestos</h3>
            <p className="tc__p tc__p--compact">
              Los precios podrán incluir o adicionar impuestos, tasas y percepciones aplicables conforme al domicilio fiscal del Usuario y/o normativa vigente.
            </p>
          </div>
        </section>

        <section className="tc__card" id="comunicaciones">
          <h2 className="tc__h2">9. Comunicaciones y notificaciones electrónicas</h2>
          <p className="tc__p">
            El Usuario acepta recibir comunicaciones electrónicas (correo, notificaciones en app, SMS) necesarias para la prestación del servicio,
            cambios contractuales y avisos legales. Puede gestionar preferencias de comunicaciones comerciales desde su perfil.
          </p>
        </section>

        <section className="tc__card" id="privacidad">
          <h2 className="tc__h2">10. Privacidad y protección de datos personales</h2>
          <div className="tc__twoCols">
            <div className="tc__col">
              <h3 className="tc__h3">10.1. Argentina</h3>
              <p className="tc__p">
                4 MINDS S.A. actúa como Responsable de las Bases de Datos y tratará la información personal conforme a la Ley 25.326.
                El Usuario tiene derecho de acceso, rectificación, actualización y supresión, pudiendo ejercerlos mediante solicitud a{" "}
                <a className="tc__link" href="mailto:privacidad@kuska.app">privacidad@kuska.app</a>{" "}
                y ante la AAIP. KUSKA informará la finalidad, el responsable y el domicilio de sus bases, y las registrará cuando corresponda.
              </p>
            </div>
            <div className="tc__col">
              <h3 className="tc__h3">10.2. Bolivia</h3>
              <p className="tc__p">
                Para Usuarios en Bolivia, KUSKA respetará la Acción de Protección de Privacidad (hábeas data). La contratación electrónica y el uso de firma
                digital se regirán por la Ley 164 y su Reglamento (DS 1793). Tratamos datos bajo principios de licitud, minimización, seguridad y confidencialidad.
              </p>
            </div>
          </div>

          <div className="tc__callout tc__callout--soft">
            <h3 className="tc__h3">10.3. Política de Privacidad</h3>
            <p className="tc__p tc__p--compact">
              Los detalles del tratamiento constan en la Política de Privacidad de KUSKA, que forma parte de estos Términos.
            </p>
          </div>
        </section>

        <section className="tc__card" id="geoservicios">
          <h2 className="tc__h2">11. Geo-servicios, permisos y ubicaciones</h2>
          <p className="tc__p">
            Al habilitar funciones como geolocalización o cámara/micrófono, el Usuario autoriza el procesamiento de esos datos para brindar funcionalidades
            centrales (p. ej., coincidencias cercanas). Puede desactivar permisos desde la configuración de su dispositivo, entendiendo que ello puede limitar la experiencia.
          </p>
        </section>

        <section className="tc__card" id="terminacion">
          <h2 className="tc__h2">12. Suspensión, terminación y conservación</h2>
          <p className="tc__p">
            KUSKA podrá suspender o cancelar la Cuenta ante incumplimientos, riesgos a la seguridad o por requerimiento de autoridades. El Usuario puede cerrar su Cuenta
            en cualquier momento. Conservaremos ciertos datos por el tiempo necesario para cumplir obligaciones legales, prevenir fraudes y resolver disputas.
          </p>
        </section>

        <section className="tc__card" id="responsabilidad">
          <h2 className="tc__h2">13. Exenciones y limitación de responsabilidad</h2>
          <p className="tc__p">
            En la máxima medida permitida por la ley aplicable, KUSKA no garantiza que los Servicios sean ininterrumpidos o libres de errores, ni responde por:
            (i) conductas de otros Usuarios; (ii) pérdidas indirectas o lucro cesante; (iii) hechos de fuerza mayor; (iv) daños derivados del uso que el Usuario haga de la plataforma.
            Nada en estos Términos excluye o limita responsabilidades que no puedan ser excluidas por ley.
          </p>
        </section>

        <section className="tc__card" id="indemnidad">
          <h2 className="tc__h2">14. Indemnidad</h2>
          <p className="tc__p">
            El Usuario mantendrá indemne a KUSKA y su personal frente a reclamos de terceros derivados del uso indebido de los Servicios, infracciones a estos Términos,
            o a derechos de terceros, salvo que medie culpa o dolo de KUSKA.
          </p>

          <div className="tc__callout tc__callout--warn">
            <h3 className="tc__h3">Limitación de responsabilidad (detalle)</h3>
            <p className="tc__p">
              En la máxima medida que permita la ley aplicable, KUSKA (4 MINDS S.A.), sus propietarios, sociedades vinculadas, directores/as, empleados/as, proveedores y
              licenciantes no serán responsables por daños de ninguna clase (directos, indirectos, incidentales, especiales, punitivos o consecuenciales), incluidos pérdida de
              datos, ingresos, beneficios o fondo de comercio, pérdida o daño de bienes y reclamos de terceros, derivados del acceso o uso de la App, el Sitio, Nuestro Contenido
              o Contenido de Miembros, cualquiera sea su causa y fundamento jurídico.
            </p>
            <p className="tc__p">
              Renunciás desde ahora a toda reclamación por tu uso de la App o el Sitio. Algunas jurisdicciones no permiten ciertas exclusiones o limitaciones; en esos casos,
              estas previsiones podrían no aplicarte total o parcialmente. Si alguna parte fuese inválida o inexigible, nuestra responsabilidad total no excederá de USD 100.
            </p>
            <p className="tc__p tc__p--compact">
              Esta limitación es un elemento esencial de nuestra oferta y refleja una asignación clara de riesgos. Nada excluye responsabilidades por fraude o manifestaciones fraudulentas,
              o responsabilidades no limitables por ley.
            </p>
          </div>
        </section>

        <section className="tc__card" id="ley">
          <h2 className="tc__h2">15. Ley aplicable y jurisdicción</h2>
          <p className="tc__p">
            Estos Términos se rigen por las leyes de la República Argentina. Toda controversia derivada de su interpretación o ejecución será sometida a los tribunales ordinarios
            de la Ciudad Autónoma de Buenos Aires, con renuncia expresa a cualquier otro fuero, en la medida en que dicha elección sea válida y no contrarie normas de orden público
            o derechos irrenunciables del consumidor en su país de residencia.
          </p>
        </section>

        <section className="tc__card" id="arbitraje">
          <h2 className="tc__h2">16. Resolución Extrajudicial y Arbitraje Privado Predesignado (Argentina y Bolivia)</h2>

          <div className="tc__subcard">
            <h3 className="tc__h3">1) Reclamo interno (obligatorio y gratuito)</h3>
            <p className="tc__p">
              Todo reclamo debe plantearse primero ante Atención (correo/formulario indicado en la App), consignando: (i) datos de contacto, (ii) hechos, (iii) pretensión, (iv) respaldo.
              KUSKA acusará recibo y responderá en hasta 10 (diez) días hábiles. Este paso no limita derechos ni plazos legales.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">2) Arbitraje privado predesignado – condición de procedibilidad (obligatorio y previo)</h3>
            <p className="tc__p">
              Con carácter obligatorio y previo a cualquier actuación judicial, las partes se someten a un arbitraje privado administrado y/o decidido por el mismo árbitro/ente privado
              predesignado para reclamos en Argentina y Bolivia:
            </p>
            <ul className="tc__list">
              <li><strong>Árbitro/ente arbitral predesignado:</strong> [NOMBRE COMPLETO DE LA PERSONA O SOCIEDAD], domicilio [●], email [●], teléfono [●].</li>
              <li>
                Si el predesignado fuese una sociedad/ente arbitral, actuará como institución administradora y designará un/a árbitro/a único/a conforme su reglamento interno;
                si fuese una persona, actuará como árbitro/a único/a.
              </li>
              <li>
                En caso de excusa, impedimento, renuncia o acefalía, el reemplazo será designado por [mismo ente predesignado o, subsidiariamente,
                Centro de Mediación y Arbitraje de la CAC (AR) / CAINCO (BO)], según el país de la sede arbitral.
              </li>
            </ul>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">3) Parámetros del procedimiento</h3>
            <ul className="tc__list">
              <li>
                <strong>a) Sede arbitral (lex arbitri):</strong>
                <ul className="tc__list tc__list--inner">
                  <li>Si la persona reclamante tiene domicilio en Argentina: Ciudad Autónoma de Buenos Aires. Derecho aplicable al fondo: derecho argentino.</li>
                  <li>Si la persona reclamante tiene domicilio en Bolivia: ciudad del domicilio de la persona reclamante. Derecho aplicable al fondo: derecho boliviano.</li>
                </ul>
              </li>
              <li><strong>b) Idioma:</strong> español.</li>
              <li><strong>c) Trámite:</strong> abreviado/expedito, con laudo en hasta 90 días corridos desde la constitución del tribunal (prorrogable por causa justificada); presentaciones electrónicas y audiencias remotas habilitadas.</li>
              <li><strong>d) Facultades y cautelares:</strong> el/la árbitro/a conocerá en derecho y podrá dictar medidas cautelares; cautelares urgentes judiciales sin renuncia al convenio arbitral.</li>
              <li><strong>e) Confidencialidad:</strong> procedimiento y laudo confidenciales, salvo exigencia legal o para ejecutar/impugnar.</li>
              <li><strong>f) Costos:</strong> cada parte asume gastos propios; tasas/honorarios del ente y honorarios arbitrales 50/50, salvo reglamento o acuerdo.</li>
              <li><strong>g) Ejecutoriedad:</strong> laudo definitivo y vinculante, ejecutable judicialmente conforme normativa procesal de la sede.</li>
            </ul>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">4) Salvaguardas en relaciones de consumo (irrenunciables)</h3>
            <p className="tc__p">
              Si la controversia es de consumo, el arbitraje solo procede con consentimiento expreso, específico y posterior al conflicto por parte de la persona usuaria.
              Si no lo presta, la etapa prejudicial se considerará cumplida con: (i) reclamo interno y (ii) la instancia conciliatoria/administrativa que la persona usuaria elija
              (p. ej., COPREC/autoridad local en Argentina; autoridad competente/servicios públicos de conciliación en Bolivia), quedando habilitada la vía judicial.
              Nada limita derechos irrenunciables de la persona consumidora.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">5) Condición de procedibilidad y escalamiento</h3>
            <p className="tc__p">
              El arbitraje del punto 2 es condición de procedibilidad previa a toda demanda judicial. Si no hubiera laudo dentro del plazo o si el arbitraje no procediera por la
              salvaguarda de consumo, cualquiera de las partes podrá acudir a la jurisdicción competente, respetando instancias prejudiciales obligatorias de la ley local.
            </p>
          </div>

          <div className="tc__subcard">
            <h3 className="tc__h3">6) Notificaciones</h3>
            <p className="tc__p tc__p--compact">
              Las notificaciones se cursarán a los domicilios electrónicos denunciados en la App y/o a los indicados al iniciar el trámite ante el ente predesignado.
            </p>
          </div>
        </section>

        <section className="tc__card" id="consumo">
          <h2 className="tc__h2">17. Reclamaciones de consumo y mecanismos alternativos</h2>
          <p className="tc__p">
            Sin perjuicio de la cláusula de jurisdicción, el Usuario podrá acudir a las autoridades de defensa del consumidor competentes en su jurisdicción y/o a mecanismos
            de resolución directa ofrecidos por KUSKA.
          </p>
        </section>

        <section className="tc__card" id="cambios">
          <h2 className="tc__h2">18. Cambios en los Servicios y en los Términos</h2>
          <p className="tc__p">
            Podemos modificar los Servicios y/o estos Términos. Las modificaciones entrarán en vigor desde su publicación o la fecha indicada.
            Si el Usuario continúa usando los Servicios luego de publicadas las modificaciones, se considerará que las acepta. Cuando la ley exija consentimiento expreso, lo solicitaremos.
          </p>
        </section>

        <section className="tc__card" id="notas">
          <h2 className="tc__h2">19. Notas</h2>
          <ul className="tc__list">
            <li><strong>Integridad:</strong> si alguna disposición resultara inválida o inoponible, se interpretará de modo consistente con la ley y el resto permanecerá vigente.</li>
            <li><strong>Cesión:</strong> KUSKA podrá ceder su posición contractual en reorganizaciones o transacciones corporativas, notificando cuando corresponda.</li>
            <li><strong>Idioma:</strong> la versión en español es la oficial y prevalente.</li>
            <li>
              <strong>Contacto:</strong> consultas legales{" "}
              <a className="tc__link" href="mailto:legal@kuska.app">legal@kuska.app</a> — privacidad{" "}
              <a className="tc__link" href="mailto:privacidad@kuska.app">privacidad@kuska.app</a> — soporte{" "}
              <a className="tc__link" href="mailto:soporte@kuska.app">soporte@kuska.app</a>.
            </li>
          </ul>
        </section>

        <section className="tc__card" id="bolivia">
          <h2 className="tc__h2">Capítulo específico para el uso en Bolivia</h2>
          <p className="tc__p">
            <strong>Ámbito:</strong> este capítulo aplica a Usuarios que accedan y utilicen KUSKA en el Estado Plurinacional de Bolivia.
          </p>

          <ol className="tc__olist">
            <li>
              <strong>Contratación electrónica y firma digital:</strong> validez jurídica de contratos electrónicos, mensajes de datos y firmas digitales según Ley 164 y DS 1793.
              El consentimiento se presume mediante mecanismos electrónicos (botones, casillas, firma digital).
            </li>
            <li>
              <strong>Derechos de las personas consumidoras:</strong> KUSKA observará los principios y derechos de la Ley 453 y DS 2130 (información clara, seguridad, trato digno, mecanismos de reclamo).
            </li>
            <li>
              <strong>Privacidad y datos personales:</strong> KUSKA reconoce la tutela constitucional de la Acción de Protección de Privacidad (hábeas data) y principios de confidencialidad, seguridad y finalidad.
              Solicitudes a <a className="tc__link" href="mailto:privacidad@kuska.app">privacidad@kuska.app</a>.
            </li>
            <li>
              <strong>Baja de suscripciones:</strong> mecanismo simple y visible para cancelar, con efecto al finalizar el período de facturación en curso.
            </li>
            <li>
              <strong>Jurisdicción:</strong> sin perjuicio de lo previsto en las cláusulas 15 y 16, y en la medida permitida por derecho boliviano,
              controversias a tribunales de CABA, sin limitar derechos irrenunciables en consumo.
            </li>
          </ol>
        </section>

        <section className="tc__card" id="anexos">
          <h2 className="tc__h2">Anexos</h2>
          <ul className="tc__list">
            <li>
              <strong>Anexo A – Botones legales en Argentina:</strong> (i) Botón de Arrepentimiento para revocar compras o Suscripciones celebradas a distancia dentro de los 10 días;
              (ii) Botón de Baja para cancelar Suscripciones de forma directa, visible e inmediata, sin registración adicional.
            </li>
            <li>
              <strong>Anexo B – Tiendas de aplicaciones y medios de pago:</strong> compras gestionadas por App Store, Google Play u otros intermediarios se rigen también por sus términos y políticas de reembolso.
            </li>
          </ul>
        </section>

        <section className="tc__card tc__card--final" id="aceptacion">
          <h2 className="tc__h2">Acepto los Términos y Condiciones de KUSKA</h2>

          <div className="tc__checks" aria-label="Casillas de aceptación (solo visual)">
            <label className="tc__check">
              <input type="checkbox" disabled /> He leído y acepto los Términos y Condiciones y la Política de Privacidad.
            </label>
            <label className="tc__check">
              <input type="checkbox" disabled /> Soy mayor de 18 años.
            </label>
          </div>

          <p className="tc__p tc__p--muted">
            (Estas casillas son informativas/visuales. La aceptación real debe implementarse en el flujo de registro o contratación.)
          </p>
        </section>

        <footer className="tc__footer">
          <p className="tc__p tc__p--muted">© {new Date().getFullYear()} Kuska — Términos y Condiciones</p>
        </footer>
      </div>
    </main>
  );
};

export default TermsAndConditions;
