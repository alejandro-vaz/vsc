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
      'Autenticación multifactor'
    ],
    images: ['/api/images/1','/api/images/2']
  });
});

// Endpoint con más detalle para la subpágina de herramientas
app.get('/api/tools', (req, res) => {
  res.json({
    title: 'Herramientas de Ciberseguridad',
    description: 'Explicación más detallada para estudiantes: qué hacen, ejemplos y buenas prácticas. Incluye consejo específico según situaciones típicas y recursos gráficos.',
    items: [
      {name: 'Antivirus', why: 'Detectan y eliminan malware común; mantenerlos siempre actualizados.'},
      {name: 'Firewalls', why: 'Controlan y filtran el tráfico de red, bloqueando accesos no autorizados.'},
      {name: 'Backups', why: 'Copias regulares permiten restaurar datos tras fallos o ataques, especialmente ransomware.'},
      {name: 'Gestores de contraseñas', why: 'Generan y almacenan contraseñas únicas, evitándose reutilizar la misma en varios sitios.'},
      {name: 'VPN y cifrado', why: 'Cifran la conexión en redes públicas y protegen la privacidad.'},
      {name: 'Actualizaciones', why: 'Instalar parches cierra vulnerabilidades conocidas.'},
      {name: 'Gestores 2FA', why: 'Aplicaciones de verificación en dos pasos para añadir una capa extra de seguridad.'}
    ]
  });
});

// Endpoint avanzado para la subpágina secundaria
app.get('/api/advanced', (req, res) => {
  res.json({
    title: 'Ciberseguridad — Nivel Avanzado',
    topics: [
      {topic: 'Modelos de amenaza', desc: 'Cómo identificar actores, vectores y activos críticos.'},
      {topic: 'Criptografía básica', desc: 'Principios de cifrado simétrico y asimétrico, uso práctico.'},
      {topic: 'Algoritmos modernos', desc: 'AES, RSA, hash y cómo se usan en la práctica.'},
      {topic: 'Seguridad en redes', desc: 'Segmentación, IDS/IPS y monitorización.'},
      {topic: 'Seguridad y IA', desc: 'Uso de inteligencia artificial para defensa y ataque.'},
      {topic: 'Ataques cuánticos', desc: 'Impacto potencial de la computación cuántica en criptografía.'},
      {topic: 'Buenas prácticas para desarrolladores', desc: 'Validación, autenticación y gestión de sesiones.'},
      {topic: 'Evaluación de riesgos', desc: 'Matríz de impacto/probabilidad y mitigación.'},
      {topic: 'Historia de la criptografía', desc: 'Desde César y Enigma hasta la era digital.'}
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
      'Programas de certificación corporativa'
    ],
    itinerary: [
      {title: 'Introducción a la ciberseguridad', details: 'Conceptos básicos, amenazas y medidas preventivas.'},
      {title: 'Seguridad de redes', details: 'Firewalls, VLANs, IDS/IPS y análisis de tráfico.'},
      {title: 'Desarrollo seguro', details: 'OWASP, validación de entrada y pruebas de penetración básicas.'},
      {title: 'Criptografía y privacidad', details: 'Cifrado simétrico/asimétrico, hashing y PKI.'},
      {title: 'Respuesta a incidentes', details: 'Metodología, forense digital y recuperación.'}
    ],
    instructors: [
      {name: 'Gonzalo Pérez', role: 'Analista de seguridad con 15 años en SOC.'},
      {name: 'Jorge Rodríguez', role: 'Especialista en criptografía aplicada.'},
      {name: 'María López', role: 'Ingeniera de redes certificada CCNP y CISSP.'},
      {name: 'Carlos Méndez', role: 'Ethical hacker con OSCP y experiencia en pentesting.'}
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
      {name: 'Phishing', why: 'Correos o sitios falsos que piden datos.'},
      {name: 'Malware', why: 'Software malicioso que daña o espía.'},
      {name: 'DDoS', why: 'Saturación de servicios con tráfico falso.'},
      {name: 'Ingeniería social', why: 'Manipulación de personas para obtener información.'},
      {name: 'Man-in-the-Middle', why: 'Intercepción en redes públicas.'}
    ],
    cases: [
      {year: 2017, name: 'WannaCry', impact: 'Ransomware global'},
      {year: 2020, name: 'SolarWinds', impact: 'Espionaje a organismos'},
      {year: 2021, name: 'Colonial Pipeline', impact: 'Corte de suministro'}
    ]
  });
});

// Endpoint para consejos
app.get('/api/consejos', (req, res) => {
  res.json({
    advice: [
      'No compartas contraseñas ni códigos',
      'Activa la verificación en dos pasos siempre que puedas',
      'Actualiza programas y sistema con regularidad',
      'Utiliza gestores de contraseñas y generadores seguros',
      'Instala un antivirus y mantenlo activo',
      'Usa una VPN al conectarte a redes públicas',
      'Configura copias de seguridad periódicas',
      'Segmenta redes (separa invitados de dispositivos principales)'
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
