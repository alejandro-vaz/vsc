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
