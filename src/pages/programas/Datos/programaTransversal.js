export const programaTransversal = {
  id: 1,
  nombre: "Programas Transversales",
  subprogramas: [
    {
      id: 1,
      nombre: "AutoCAD 2D",
      imagen: "src/img/autocad.png",
      texto:
        "Representación e interpretación de dibujos técnicos, eléctricos y electrónicos; normas, laboratorio CAD; sesiones teóricas y prácticas calificadas.",
      descripcion:
        "El curso comprende la representación e interpretación de dibujos mecánicos, eléctricos y electrónicos, planos sencillos de sistemas técnicos e industriales y  un proyecto de implementación de un laboratorio en CAD; aplicación de las normas y estándares de un dibujo técnico. Las sesiones teóricas se realizan en aula con exposición del docente ayudado con material audiovisual, hojas digitales de información tecnológica, separatas y hojas de trabajo digitales. Las sesiones prácticas calificadas en aula están orientadas a la aplicación de normas y estándares de dibujo técnico.",
      horasAcademicas: "32 Horas Academicas",

      contenido1: [
        "INTRODUCCIÓN: AUTOCAD 2D",
        [
          "Conceptos básicos de Espacio de Trabajo: Dibujo y Anotación",
          "Elementos 3D Básicos y Modelado 3D ",
          "Cinta: Inicio, Visualizar, Inserción, Anotar, Vista, Salida.",
          "Comandos de Visualización: Encuadre",
          "Extensión: Zoom Ventana, Zoom en Tiempo Real, Zoom Centro, Zoom Dinámico, Zoom Objeto, Zoom Todo.",
          "Personalizar Barra de Estado: GRIDMODE, DYNMODE, ORTHOMODE, OSNAP",
        ],
      ],
      contenido2: [
        "COMANDOS DE DIBUJO Y EDICIÓN I",
        [
          "RECTANG",
          "POLIGONO: INSCRITO EN UN CIRCULO",
          "CIRCUNSCRITO EN UN CIRCULO ",
          "EDGE",
          "DESCOMPONER",
          "EMPALME",
          "CHAFLAN, DESFASE",
        ],
      ],

      contenido3: [
        "COMANDOS DE DIBUJO Y EDICIÓN II",
        [
          "CIRCULO",
          "RECORTAR",
          "ESTIRAR ARCO",
          "ELIPSE",
          "POLILINEA",
          "REGION",
          "ESCALA",
          "ALINEACION",
          "ALARGAR",
        ],
      ],

      contenido4: [
        "COMANDOS DE DIBUJO Y EDICIÓN III",
        ["ARRAY: RECTANGULAR", "POLAR Y RUTA", "DIVIDE", "MEDIDA y LONGITUD"],
      ],

      contenido5: [
        "OBJETOS Y CAPAS - BLOQUES INTERNOS y EXTERNOS",
        [
          "Propiedades: Color",
          "Tipo de Línea y Ancho de Línea	",
          "Capas: Crear Capas",
          "Control de Capas y Valoración de Capas",
          "Crear",
          "Insertar y Editar un Bloque	",
          "Insertar y Crear estilos de Textos	",
          "Partes de una Cota",
          "Crear un Estilo de Cota",
          "Crear una Familia de Cotas",
        ],
      ],

      contenido6: ["PLOTEO", ["Espacio Modelo", "Espacio Papel"]],
      contenido7: ["PROYECTO", ["Presentación de proyecto final "]],
      capacitado1:"Representar e interpretar dibujos mecánicos, eléctricos y electrónicos.",
      capacitado2:"Representar e interpretar planos sencillos de sistemas técnicos, computacionales e industriales.",
      capacitado3: "Utilizar normas y estándares de dibujo técnico.",
      requisitos: "Mínimo tercer año de secundaria o entrevista previa.",
      dirigido: "Estudiantes de secundaria y público en general",
      metodologia: "Teórico - Práctico",
      nivel: "Básico",
      especialidad: "Dibujo Computarizado",
      area: "Tecnologías de la Información",
      modalidad: "Virtual",
      gratis: true,
    },
    {
      id: 2,
      nombre: "AutoCAD 3D",
      imagen: "src/img/autocad-3d.png",
      texto:
        "Diseños mecánicos, eléctricos y electrónicos, planos 3D, Modelado Arquitectónico 3D con Fotorrealismo y Renderizado. Sesiones teóricas y prácticas.",
      descripcion:
        "El curso comprende la representación e interpretación de diseños mecánicos, eléctricos y electrónicos, planos sencillos en 3D y  Modelado de un Proyecto Arquitectónico 3D de Nivel Complejo aplicando el Fotorrealismo y el Renderizado. Las sesiones teóricas se realizan en aula con exposición del docente ayudado con material audiovisual, hojas digitales de información tecnológica, separatas y hojas de trabajo digitales. Las sesiones prácticas calificadas en aula están orientadas a la aplicación de normas y estándares de diseño técnico.",
      horasAcademicas: "32 Horas Academicas",

      contenido1: [
        "INTRODUCCIÓN: AUTOCAD 3D MODELADO DE SÓLIDOS REGULARES",
        [
          "Espacio de Trabajo. Manejo de las Herramientas de Navegación y Visualización 3D.",
          "Manejo de los UCS",
          "Herramienta MODELADO del Espacio de Trabajo",
          "Modelado 3D",
          "Comandos de Modelado de Sólidos Regulares: POLISOLIDO",
          "TECSTURA CUADRADA",
          "CILINDRO",
          "CONO",
          "ESFERA",
          "CUÑA",
          "CILINDRO",
          "PIRÁMIDE",
          "TOROIDE",
          "Comandos Básicos de Edición 3D: ROTACIÓN 3D",
          "DESPLAZAMIENTO 3D",
          "Comandos de Generación de SR: PIRÁMIDE",
          "TOROIDE",
          "HELICE",
          "Comandos de Edición 3D: UNION. DIFERENCIA",
          "INTERSECTAR",
        ],
      ],
      contenido2: [
        "MODELADO DE SÓLIDOS IRREGULARES",
        [
          "Comandos de Generación de SI: EXTRUSION, SOLEVAR, REVOLUCION, BARRER.			",
          "Comandos de Edición de SI: PRESIONARTIRAR, ALINEAR, CORTE, SECCION, INTERFERENCIA.			",
          "Comandos de Edición de SI: EMPLAME, CHAFLAN",
          "Comandos de Edición Avanzada: MATRIZRECTANG, SIMETRIA",
        ],
      ],

      contenido3: [
        "EDICIÓN Y ACOTADO DE SÓLIDOS",
        [
          "Herramientas 'EDITAR SOLIDOS' ",
          "Herramientas de Acotado: Barra de Herramientas 'Dimensión' ",
          "Estilo de Cotas",
        ],
      ],
      contenido4: [
        "EFECTOS FOTORREALISTAS",
        [
          "Aplicación de Materiales ",
          " Mapeado de Materiales y Editor de Materiales",
          "Crear un Nuevo Material",
          "Crear Librerías Personalizadas de Materiales",
          "Enlazar Material por Capa",
          "Aplicación de Tipos de Iluminación: Natural, Artificial",
          "Configuración de Parámetros de Iluminación Renderizado - Ventana de Modelización",
          "Parámetros Avanzados de Renderizado",
        ],
      ],
      contenido5: [
        "PROYECTO FINAL EN 3D	",
        [
          "Modelado en 3D",
          "Aplicación de Bloques 3D: accesorios",
          "Aplicación de Efectos Fotorrealistas: Materiales, Iluminación y Renderizado",
        ],
      ],

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 3,
      nombre: "Computación Básica",
      imagen: "src/img/computacion-basica.png",
      texto:
        "Uso de dispositivos y programas en actividades computarizadas. Simulador para reconocer y ensamblar computadoras. Sistema operativo, organización y Microsoft Word.",
      descripcion:
        "El curso tiene como objetivo, involucrar al estudiante en la utilización de los dispositivos y programas de un ordenador para realizar tareas sencillas en actividades computarizadas. Para el reconocimiento y uso adecuado de los componentes físicos de un ordenador (Hardware) se utilizará un simulador de ensamble de computadoras que ayudará a ver la funcionalidad de los diferentes componentes de una PC. Con respecto al sistema operativo (Software) se trabajará en la organización y administración de archivos y carpetas; hasta lograr elaborar documentos básico en Microsoft Word.",
      horasAcademicas: "32 Horas Academicas",

      contenido1: [
        "HARDWARE: SIMULACIÓN ARMADO DE PC",
        [
          "HARDWARE: SIMULACIÓN ARMADO DE PC",
          "Placa Madre",
          "Adaptador de Tarjetas",
          "Discos Internos y Externos",
          "Cables Internos y Externos",
        ],
      ],
      contenido2: [
        "SOFTWARE: CONOCIENDO A WINDOWS			",
        [
          "Evolución del Sistema Operativo Windows",
          "Aplicaciones nativas de Windows",
          "Panel de control de Windows",
        ],
      ],

      contenido3: [
        "OPERACIONES EN EL DIRECTORIO DE CARPETAS",
        [
          "Conociendo las unidades locales del equipo",
          "Copiar, cortar y eliminar archivos y carpetas",
          "Proteger y ocultar archivos y carpetas",
        ],
      ],
      contenido4: [
        "INTERNET: NAVEGADORES Y BUSCADORES",
        [
          "Ventajas y Desventajas de los principales navegadores",
          "Conociendo buscadores académicos y educativos",
          "Administración de extensiones en los navegadores",
        ],
      ],
      contenido5: [
        "MS. WORD",
        [
          "Ingreso al programa de MS Word e identificación de partes de la pantalla principal",
          "Creación de documentos en MS Word, guardar, cerrar, editar y eliminar documentos",
          "Impresora, Propiedades de Impresora. Configuración",
        ],
      ],

      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 4,
      nombre: "Diseño 3D conTinkerCAD",
      imagen: "src/img/tinkercard.png",
      texto:
        "Taller creativo de diseño 3D para niños y adolescentes con Tinkercad: fomenta participación y creatividad.",
      horasAcademicas: "24 Horas",
      descripcion:
        "Curso dirigido para niños y adolescentes en donde se incentiva a la participación y la creatividad de los estudiantes en la elaboración de diseños en 3D de forma sencilla, a través de la herramienta Tinkercad.",

      contenido1: [
        "PRIMEROS PASOS CON TINKERCAD",
        [
          "¿Qué es Tinkercad?",
          "Crea tu cuenta personal en Tinkercad",
          "Conociendo el entorno de Tinkercad",
        ],
      ],
      contenido2: [
        "OPERACIONES CON FORMAS BÁSICAS",
        [
          "Plano de Trabajo",
          "Añadir, eliminar, copiar y duplicar objetos",
          "Redimensionar, girar y mover objetos",
        ],
      ],

      contenido3: [
        "EDITAR Y TRANSFORMAR FORMAS BÁSICAS",
        [
          "Agrupar y desagrupar objetos",
          "Alinear e invertir objetos",
          "Crear huecos en los objetos",
        ],
      ],
      contenido4: [
        "DISEÑANDO OBJETOS 3D",
        [
          "Diseño 1: Auto Policia",
          "Diseño 2: Porta lápices",
          "Diseño 3: Taza personalizada",
        ],
      ],
      contenido5: [
        "DISEÑANDO PERSONAJE EN 3D",
        ["Diseño de Robot Parte 1", "Diseño de Robot Parte 2"],
      ],
      contenido6: [
        "IMPORTAR Y EXPORTAR",
        ["Tipos de extensión para impresión 3D", "Compartir nuestro proyecto"],
      ],
      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 5,
      nombre: "Diseño gráfico con Photoshop",
      imagen: "src/img/photoshop.png",
      horasAcademicas: "32 Horas",
      texto:
        "Curso diseño gráfico con Photoshop: adquiere habilidades, crea diseños atractivos, técnicas avanzadas y retoca fotos.",
      descripcion:
        "El curso de diseño gráfico con Photoshop es una oportunidad para adquirir habilidades y conocimientos fundamentales en el ámbito del diseño gráfico utilizando la popular herramienta de software Adobe Photoshop. Durante el curso, los estudiantes aprenderán a utilizar las diversas herramientas y funciones de Photoshop para crear diseños visuales atractivos y profesionales. El curso se estructura de manera progresiva, comenzando por las nociones básicas de la interfaz de Photoshop y las herramientas más comunes. A medida que avanza el curso, los estudiantes aprenderán técnicas avanzadas para manipular imágenes, crear composiciones gráficas, retocar fotografías, aplicar efectos especiales y mucho más.",

      contenido1: [
        "INTRODUCCIÓN A PHOTOSHOP",
        [
          "Herramientas básicas y plataforma",
          "Herramienta tampón de clonar",
          "Herramienta Parche",
        ],
      ],
      contenido2: [
        "CONTROL Y ADMINISTRACIÓN DE CAPAS",
        [
          "Herramienta Lazo",
          "Herramienta Tono & Saturación",
          "Herramienta Pincel / Capas",
        ],
      ],

      contenido3: [
        "MODIFICACIÓN Y RETOQUES",
        ["Herramienta Licuar", "Proyecto Firmamento de Estrellas"],
      ],
      contenido4: ["CREACIÓN DE EFECTOS", ["Efecto Babas", "Efecto Eclipse"]],
      contenido5: [
        "HERRAMIENTAS DE RECORTE",
        ["Lazo Magnético", "Lazo Poligonal", "Perfeccionar Bordes"],
      ],
      contenido6: [
        "EDICIÓN DE IMÁGENES",
        ["Edición simultánea", "Descarga y modificación de MockUps"],
      ],
      contenido7: [
        "HERRAMIENTAS DE CONTROL DE CURVAS",
        ["Herramienta Pluma", "Herramienta Pincel"],
      ],
      contenido8: ["MÁSCARAS", ["Tipo de Máscaras", "Estilos Automáticos"]],

      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 6,
      nombre: "Excel Avanzado con Macros",
      imagen: "src/img/excel-macros.png",
      horasAcademicas: "32 Horas",
      texto:
        "Curso de macros en Excel: automatización de tareas, ahorro de tiempo y herramientas avanzadas para control de información.",
      descripcion:
        "Curso centrado en el entendimiento de lo que es una macro para la creación de instrucciones que automaticen tareas repetitivas, de tal manera que el participante ahorre tiempo y minimice errores de procedimiento en sus respectivas hojas de cálculo. Todo este procedimiento vendrá acompañado del uso de herramientas de Excel Avanzadas para la creación de programas que permitan elaborar pequeños sistemas para casos específicos de control de información.",

      contenido1: [
        "INTRODUCCIÓN A MACROS",
        [
          "Grabación de Macros",
          "Ejecución de Macros",
          "Modificación de Macros",
        ],
      ],
      contenido2: ["FICHA DE PROGRAMADOR"],

      contenido3: ["EDITOR DE VISUAL BASIC"],
      contenido4: ["ESTRUCTURA DE UNA MACRO"],
      contenido5: ["MANEJO DE VARIABLES"],
      contenido6: [
        "CREACIÓN DE INSTRUCCIONES EJECUTABLES",
        ["Asignación de Instrucciones", "Entrada y Salidas de Datos"],
      ],
      contenido7: ["DECLARACIÓN DE VARIABLES"],
      contenido8: ["ELEMENTOS DE PROGRAMACIÓN"],
      contenido9: [
        "TIPO DE INSTRUCCIONES",
        ["Generación de Código Secuencial", "Generación de Código Condicional"],
      ],
      contenido10: ["CREACIÓN DE INSTRUCCIONES EJECUTABLES"],
      contenido11: ["TIPOS DE INSTRUCCIONES REPETITIVAS		"],
      contenido12: [
        "CREACIÓN DE FORMULARIOS EN VBA",
        [
          "Creación de Controles",
          "Controles más Usados",
          "Manejo de Propiedades",
          "Código de Formulario",
        ],
      ],

      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 7,
      nombre: "Excel Básico",
      imagen: "src/img/excel-basico.png",
      texto:
        "Curso Excel: crear hojas, formatos, fórmulas, funciones básicas y reportes gráficos para resolver problemas comunes.",
      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 8,
      nombre: "Excel para Profesionales",
      imagen: "src/img/excel-profesionales.png",
      texto:
        "Curso Excel: manejo, análisis y presentación de información con fórmulas y tablas dinámicas para informes profesionales.",
      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 9,
      nombre: "Gestión de Proyectos con MS Project",
      imagen: "src/img/gestion-proyectos.png",
      texto:
        "Curso eficiente de MS Project: planificación, programación y control de proyectos para empresas y organizaciones.",
      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 10,
      nombre: "Manejo de Aplicaciones de Google",
      imagen: "src/img/google.png",
      texto:
        "Curso Google Workspace: productividad, comunicación y trabajo en equipo con herramientas indispensables para organizaciones.",
      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 11,
      nombre: "Marketing Digital con Redes Sociales",
      imagen: "src/img/marketing-digital.png",
      texto:
        "Curso de campañas publicitarias en redes sociales para emprendedores: posicionamiento, ventas y atraer clientes efectivamente.",
      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 12,
      nombre: "Programación con Scratch",
      imagen: "src/img/scratch.png",
      texto:
        "Aprende programación fácil y práctica: ejercicios motivadores, solución de problemas y pensamiento crítico.",
      modalidad: "Virtual",
      gratis: true,
    },

    {
      id: 13,
      nombre: "Robótica con Arduino",
      imagen: "src/img/arduino.png",
      texto:
        "Construye y programa robots con Arduino, descubre hardware abierto y principios de robótica.",
      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 14,
      nombre: "Word Básico",
      imagen: "src/img/word-basico.png",
      texto:
        "Curso MS Word: herramientas básicas e intermedias para elaborar informes y presentaciones eficientes, con sesiones teóricas y prácticas calificadas.",
      modalidad: "Presencial",
      gratis: true,
    },

    {
      id: 15,
      nombre: "Word Empresarial",
      imagen: "src/img/word-empresarial.png",
      texto:
        "Curso avanzado de MS Word: herramientas intermedias y avanzadas para tratamiento de información y manejo de documentos.",
      modalidad: "Presencial",
      gratis: true,
    },
  ],
};