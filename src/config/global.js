export default {
  global: {
    Name:
      'Identificación del sistema de costeo y elaboración del estado de costos.',
    Description:
      'Se continúa con la identificación y comprensión de los costos de producción, y así, identificar, aplicar, analizar y detallar los tipos y sistemas de costo, establecer el sistema de costos más adecuado y acorde con las características de la producción de la empresa, para lograr generar el estado de costos de producción que sirva para la toma de decisiones de la gerencia.   ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de costos ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistemas de costeo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Tipos de sistemas de costeo',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estado de costos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura del estado de costos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Análisis del punto de equilibrio ',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipos de sistemas de costeo',
      referencia:
        'Presidencia de la República. (2015). Decreto 2420 de 2015: Por el cual se expide el DUR de las Normas de Contabilidad e Información Financiera. Diario Oficial No. 49.674.',
      tipo: 'Página web',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745 ',
    },
    {
      tema: 'Sistemas de costeo',
      referencia:
        'International Accounting Standards Board (IASB). (2003). NIC 2: Inventarios. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ias-2-inventories/ ',
    },
    {
      tema: 'Estructura del estado de costos',
      referencia:
        'Congreso de Colombia. (1989). Estatuto Tributario: Artículo 59. Diario Oficial.',
      tipo: 'Página web',
      link: 'https://estatuto.co/59 ',
    },
  ],
  glosario: [
    {
      termino: 'Centro de costos',
      significado:
        'es una división funcional, el costo unitario se calcula para dicha división, dividiendo el costo total acumulado de ese centro de costos entre la cantidad de sus unidades y antes de su transferencia a un centro de costos subsecuente. Al final, se suman algebraicamente los costos de cada centro. ',
    },
    {
      termino: 'Contabilidad de costos',
      significado:
        'rama de la contabilidad general que sintetiza y registra los costos de las empresas manufactureras, de servicios y comerciales, con el fin de que puedan medirse, controlarse e interpretarse.',
    },
    {
      termino: 'Costeo por operaciones',
      significado:
        'es un sistema de acumulación de costos por órdenes de trabajo, en el cual los costos se acumulan por estaciones de operaciones o de trabajo. ',
    },
    {
      termino: 'Costeo por proyectos',
      significado:
        'forma del sistema de acumulación de costos por órdenes de trabajo que se utiliza para contabilizar la construcción a largo plazo o los contratos de servicios prestados definidos como proyectos. ',
    },
    {
      termino: 'Costo',
      significado:
        'son los egresos necesarios para adquirir o producir bienes y servicios. ',
    },
    {
      termino: 'Costo de conversión',
      significado:
        'son los costos de la mano de obra directa y los costos indirectos de fabricación que se requieren para convertir la materia prima (material directo) en un producto. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Borda, J. y Otálora, J. (2013, 10 diciembre). Sistema de costos ABC: una herramienta para el proceso de toma de decisiones para las cooperativas de ahorro y crédito de la ciudad de Barranquilla. Revista Civilizar de Empresa y Economía, 4(8). ',
      link:
        ' https://revistas.usergioarboleda.edu.co/index.php/ceye/article/view/257 ',
    },
    {
      referencia:
        'Estupiñán, R. (2013). NIC/NIFF Transición y adopción en la empresa. Ediciones de la U.',
      link: '',
    },
    {
      referencia:
        'Gerencie.com. (2020, 10 octubre). ¿Qué es un sistema de costos? ',
      link: 'https://www.gerencie.com/que-es-un-sistema-de-costos.html',
    },
    {
      referencia:
        'Gómez, O. (2005). Contabilidad de costos. McGraw-Hill Education. ',
      link: '',
    },
    {
      referencia:
        'Miller, J. y Vollman, T. (1985). “The hidden Factory”. Harvard Business Review, 63(1), p. 142-150. ',
      link: '',
    },
    {
      referencia:
        'Porter, M. E. (1998). Competitive Advantage: Creating and Sustaining Superior Performance. Free Press.',
      link: '',
    },
    {
      referencia:
        'Sinisterra, G. (2006). Contabilidad de costos. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Sinisterra, G. (2017). Contabilidad de costos con aproximaciones a las normas internacionales. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Toro, F. J. (2016). Costos Abc y presupuestos: Herramientas para la productividad. Ecoe Ediciones. ',
      link: '',
    },
    {
      referencia:
        'Valladares, A. (2018, 7 septiembre). La importancia del punto de equilibrio. Alvaro Valladares. ',
      link: 'https://alvarovalladares.com/punto-de-equilibrio/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
