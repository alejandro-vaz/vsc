const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// API: contenido principal (huecos para que el equipo de Iberseguridad lo cambie)
app.get('/api/content', (req, res) => {
  res.json({
    intro: 'La ciberseguridad es el conjunto de prácticas y herramientas destinadas a proteger sistemas, redes y datos. Aquí lo explico con rigor académico pero con ejemplos y lenguaje claro para un público general. Incluye definiciones, amenazas comunes, consejos de uso diario y ejemplos de casos reales.',
    tools: [
      'Antivirus y antimalware',
      'Firewalls (cortafuegos)',
      'Copias de seguridad (backups)',
      'Gestores de contraseñas',
      'VPNs y cifrado',
      'Actualizaciones de software',
      'Verificación en dos pasos',
      'IDS/IPS (detección de intrusos)',
      'Autenticación multifactor',
      'Herramientas de escaneo (Nmap, Wireshark)',
      'Cifrado de disco (BitLocker, VeraCrypt)',
      'Monitoreo de logs',
      'Educación y concienciación'
    ],
    images: ['/api/images/1','/api/images/2'],
    threats: [
      {title: 'Phishing', desc: 'Emails o sitios falsos que piden datos personales.'},
      {title: 'Malware', desc: 'Software malicioso que daña o espía dispositivos.'},
      {title: 'Ransomware', desc: 'Secuestra archivos y pide rescate.'},
      {title: 'Man-in-the-Middle', desc: 'Intercepción de comunicaciones en redes públicas.'},
      {title: 'DDoS', desc: 'Ataques que sobrecargan servicios para hacerlos inaccesibles.'},
      {title: 'Ingeniería social', desc: 'Manipulación psicológica para obtener información.'},
      {title: 'Ataques de fuerza bruta', desc: 'Intentos repetidos de adivinar contraseñas.'}
    ],
    incidents: [
      '2017: WannaCry afectó a 200.000 equipos en 150 países.',
      '2020: SolarWinds hackeó agencias gubernamentales de EE.UU.',
      '2021: Colonial Pipeline sufrió un ciberataque que causó escasez de combustible.',
      '2023: Ataque a MOVEit Transfer afectó a millones de usuarios.',
      '2024: Breach en Change Healthcare expuso datos médicos.'
    ],
    tips: [
      'No compartas contraseñas ni códigos de verificación.',
      'Activa la verificación en dos pasos siempre que puedas.',
      'Actualiza programas y sistema con regularidad.',
      'Utiliza gestores de contraseñas y generadores seguros.',
      'Instala un antivirus y mantenlo activo.',
      'Usa una VPN al conectarte a redes públicas.',
      'Configura copias de seguridad periódicas.',
      'Segmenta redes (separa invitados de dispositivos principales).',
      'Desconfía de enlaces y adjuntos en emails desconocidos.',
      'Monitorea tus cuentas bancarias regularmente.'
    ],
    glossary: [
      {term: 'Antivirus', definition: 'Software que detecta y elimina malware.'},
      {term: 'Firewall', definition: 'Barrera que controla el tráfico de red.'},
      {term: 'VPN', definition: 'Red privada virtual que cifra conexiones.'},
      {term: 'Phishing', definition: 'Técnica para obtener datos mediante engaño.'},
      {term: 'Ransomware', definition: 'Malware que encripta archivos y pide rescate.'},
      {term: '2FA', definition: 'Verificación en dos pasos para mayor seguridad.'},
      {term: 'IDS', definition: 'Sistema de detección de intrusiones.'},
      {term: 'IPS', definition: 'Sistema de prevención de intrusiones.'},
      {term: 'Criptografía', definition: 'Ciencia de proteger información mediante códigos.'},
      {term: 'Zero Trust', definition: 'Modelo de seguridad que no confía en nadie por defecto.'}
    ]
  });
});

// Endpoint con más detalle para la subpágina de herramientas
app.get('/api/tools', (req, res) => {
  res.json({
    title: 'Herramientas de Ciberseguridad',
    description: 'Explicación más detallada para estudiantes: qué hacen, ejemplos y buenas prácticas. Incluye consejo específico según situaciones típicas y recursos gráficos.',
    items: [
      {name: 'Antivirus', why: 'Detectan y eliminan malware común; mantenerlos siempre actualizados. Ejemplos: Avast, Bitdefender.'},
      {name: 'Firewalls', why: 'Controlan y filtran el tráfico de red, bloqueando accesos no autorizados. Tipos: hardware y software.'},
      {name: 'Backups', why: 'Copias regulares permiten restaurar datos tras fallos o ataques, especialmente ransomware. Usa la regla 3-2-1.'},
      {name: 'Gestores de contraseñas', why: 'Generan y almacenan contraseñas únicas, evitándose reutilizar la misma en varios sitios. Ej: LastPass, Bitwarden.'},
      {name: 'VPN y cifrado', why: 'Cifran la conexión en redes públicas y protegen la privacidad. Útil en Wi-Fi públicas.'},
      {name: 'Actualizaciones', why: 'Instalar parches cierra vulnerabilidades conocidas. No ignores las notificaciones.'},
      {name: 'Gestores 2FA', why: 'Aplicaciones de verificación en dos pasos para añadir una capa extra de seguridad. Usa Google Authenticator.'},
      {name: 'IDS/IPS', why: 'Sistemas de detección y prevención de intrusiones en redes. Monitorean tráfico sospechoso.'},
      {name: 'Herramientas de escaneo', why: 'Como Nmap o Wireshark para analizar redes y detectar vulnerabilidades.'},
      {name: 'Cifrado de disco', why: 'Herramientas como BitLocker o VeraCrypt para proteger datos en reposo.'},
      {name: 'Monitoreo de logs', why: 'Revisar registros de actividad para detectar anomalías.'},
      {name: 'Educación y concienciación', why: 'Entrenamiento para usuarios sobre phishing y buenas prácticas.'}
    ]
  });
});

// Endpoint avanzado para la subpágina secundaria
app.get('/api/advanced', (req, res) => {
  res.json({
    title: 'Ciberseguridad — Nivel Avanzado',
    topics: [
      {topic: 'Modelos de amenaza', desc: 'Cómo identificar actores, vectores y activos críticos. Incluye STRIDE y PASTA.'},
      {topic: 'Criptografía básica', desc: 'Principios de cifrado simétrico y asimétrico, uso práctico en protocolos como HTTPS.'},
      {topic: 'Algoritmos modernos', desc: 'AES, RSA, hash (SHA-256) y cómo se usan en la práctica para proteger datos.'},
      {topic: 'Seguridad en redes', desc: 'Segmentación, IDS/IPS y monitorización continua de tráfico.'},
      {topic: 'Seguridad y IA', desc: 'Uso de inteligencia artificial para defensa (detección de anomalías) y ataque (deepfakes).'},
      {topic: 'Ataques cuánticos', desc: 'Impacto potencial de la computación cuántica en criptografía actual.'},
      {topic: 'Buenas prácticas para desarrolladores', desc: 'Validación de entrada, autenticación segura y gestión de sesiones.'},
      {topic: 'Evaluación de riesgos', desc: 'Matriz de impacto/probabilidad y estrategias de mitigación.'},
      {topic: 'Historia de la criptografía', desc: 'Desde César y Enigma hasta la era digital y post-cuántica.'},
      {topic: 'Seguridad en la nube', desc: 'Modelos compartidos, cifrado en reposo y tránsito, compliance.'},
      {topic: 'Forense digital', desc: 'Recolección, preservación y análisis de evidencia en incidentes.'},
      {topic: 'Zero Trust Architecture', desc: 'Nunca confíes, siempre verifica: principios y implementación.'},
      {topic: 'Blockchain y seguridad', desc: 'Cómo la cadena de bloques mejora la integridad de datos.'},
      {topic: 'IoT Security', desc: 'Desafíos en dispositivos conectados y mejores prácticas.'},
      {topic: 'Regulaciones y compliance', desc: 'GDPR, NIST, ISO 27001 y su aplicación.'}
    ]
  });
});

// Endpoint para la página "Sobre Nosotros"
app.get('/api/about', (req, res) => {
  res.json({
    company: {
      name: 'Iberseguridad',
      description: 'Empresa de formación y consultoría en ciberseguridad con más de 10 años de experiencia. Ofrecemos cursos para estudiantes, profesionales y organizaciones de habla hispana.',
      customers: ['Institutos educativos', 'PYMEs', 'Entidades públicas', 'Particulares']
    },
    services: [
      'Bootcamps intensivos de 3-5 días',
      'Cursos semanales de 8 a 12 semanas',
      'Talleres específicos (redes seguras, análisis de malware, criptografía)',
      'Programas de certificación corporativa',
      'Consultoría en seguridad para empresas',
      'Auditorías de vulnerabilidades',
      'Entrenamiento en concienciación para empleados',
      'Desarrollo de políticas de seguridad'
    ],
    itinerary: [
      {title: 'Introducción a la ciberseguridad', details: 'Conceptos básicos, amenazas y medidas preventivas.'},
      {title: 'Seguridad de redes', details: 'Firewalls, VLANs, IDS/IPS y análisis de tráfico.'},
      {title: 'Desarrollo seguro', details: 'OWASP, validación de entrada y pruebas de penetración básicas.'},
      {title: 'Criptografía y privacidad', details: 'Cifrado simétrico/asimétrico, hashing y PKI.'},
      {title: 'Respuesta a incidentes', details: 'Metodología, forense digital y recuperación.'},
      {title: 'Seguridad en la nube', details: 'AWS, Azure y GCP con mejores prácticas.'},
      {title: 'Ethical Hacking', details: 'Técnicas de pentesting y herramientas como Metasploit.'},
      {title: 'Compliance y regulaciones', details: 'GDPR, ISO 27001 y auditorías.'}
    ],
    instructors: [
      {name: 'Gonzalo Pérez', role: 'Analista de seguridad con 15 años en SOC.'},
      {name: 'Jorge Rodríguez', role: 'Especialista en criptografía aplicada.'},
      {name: 'María López', role: 'Ingeniera de redes certificada CCNP y CISSP.'},
      {name: 'Carlos Méndez', role: 'Ethical hacker con OSCP y experiencia en pentesting.'},
      {name: 'Ana García', role: 'Experta en forense digital y respuesta a incidentes.'},
      {name: 'Luis Fernández', role: 'Consultor en seguridad de la nube y DevSecOps.'},
      {name: 'Sofia Ramírez', role: 'Especialista en concienciación y educación en ciberseguridad.'}
    ],
    reviews: [
      {stars: 5, text: 'Excelente curso, instructores muy preparados.', author: 'Instituto Liceo'},
      {stars: 4, text: 'Muy útil para nuestro equipo de TI.', author: 'Pyme TecnoSol'},
      {stars: 5, text: 'Contenidos claros y actualizados.', author: 'Universidad Estatal'},
      {stars: 4, text: 'Recomendado para principiantes y avanzados.', author: 'Colegio Mayor'},
      {stars: 5, text: 'Los ejercicios prácticos fueron excepcionales.', author: 'Empresa Segura S.A.'}
    ]
  });
});

// Endpoint para contenido de amenazas
app.get('/api/amenazas', (req, res) => {
  res.json({
    threats: [
      {name: 'Phishing', why: 'Correos o sitios falsos que piden datos. Ejemplo: emails que simulan ser de bancos.'},
      {name: 'Malware', why: 'Software malicioso que daña o espía. Incluye virus, troyanos y spyware.'},
      {name: 'DDoS', why: 'Saturación de servicios con tráfico falso. Hace que sitios web sean inaccesibles.'},
      {name: 'Ingeniería social', why: 'Manipulación de personas para obtener información. Como llamadas falsas de soporte técnico.'},
      {name: 'Man-in-the-Middle', why: 'Intercepción en redes públicas. Alguien lee tus datos en Wi-Fi abierto.'},
      {name: 'Ransomware', why: 'Encripta tus archivos y pide rescate. Afecta a individuos y empresas.'},
      {name: 'Ataques de fuerza bruta', why: 'Intentos repetidos de adivinar contraseñas. Prevenible con límites de intentos.'},
      {name: 'SQL Injection', why: 'Inyección de código en bases de datos. Afecta a sitios web vulnerables.'},
      {name: 'Zero-day exploits', why: 'Ataques a vulnerabilidades desconocidas. Requieren parches urgentes.'},
      {name: 'Ataques a IoT', why: 'Dispositivos conectados inseguros, como cámaras o termostatos.'}
    ],
    cases: [
      {year: 2017, name: 'WannaCry', impact: 'Ransomware global que afectó a 200.000 equipos.'},
      {year: 2020, name: 'SolarWinds', impact: 'Espionaje a agencias gubernamentales de EE.UU.'},
      {year: 2021, name: 'Colonial Pipeline', impact: 'Corte de suministro de combustible en EE.UU.'},
      {year: 2023, name: 'MOVEit Transfer', impact: 'Brecha que expuso datos de millones de usuarios.'},
      {year: 2024, name: 'Change Healthcare', impact: 'Ataque que interrumpió servicios médicos.'},
      {year: 2014, name: 'Heartbleed', impact: 'Vulnerabilidad en OpenSSL que expuso claves privadas.'},
      {year: 2016, name: 'Mirai Botnet', impact: 'Ataque DDoS masivo usando dispositivos IoT.'}
    ]
  });
});

// Endpoint para consejos
app.get('/api/consejos', (req, res) => {
  res.json({
    advice: [
      'No compartas contraseñas ni códigos de verificación.',
      'Activa la verificación en dos pasos siempre que puedas.',
      'Actualiza programas y sistema con regularidad.',
      'Utiliza gestores de contraseñas y generadores seguros.',
      'Instala un antivirus y mantenlo activo.',
      'Usa una VPN al conectarte a redes públicas.',
      'Configura copias de seguridad periódicas.',
      'Segmenta redes (separa invitados de dispositivos principales).',
      'Desconfía de enlaces y adjuntos en emails desconocidos.',
      'Monitorea tus cuentas bancarias y de email regularmente.',
      'No uses la misma contraseña en múltiples sitios.',
      'Habilita el cifrado en tus dispositivos y comunicaciones.',
      'Educa a tu familia sobre riesgos en línea.',
      'Usa autenticación multifactor en todas las cuentas importantes.',
      'Evita descargar software de fuentes no confiables.',
      'Mantén tus dispositivos físicos seguros (no los dejes desatendidos).'
    ]
  });
});

// Rutas para imágenes: actualmente son huecos no funcionales.
app.get('/api/images/:id', (req, res) => {
  // Hueco: devolver 204 No Content para indicar que aquí se puede subir/servir imágenes luego
  res.status(204).end();
});

// Servir frontend estático desde la carpeta raíz del proyecto
app.use(express.static(path.join(__dirname, '..')));

app.listen(port, () => {
  console.log('Servidor backend escuchando en http://localhost:' + port);
});
