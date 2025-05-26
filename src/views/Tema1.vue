<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Costos
    
    p.mb-5 Es momento de identificar los diferentes tipos y sistemas de costos que permitan identificar los procesos de producción dentro de las diferentes entidades que ejercen actividades en la transformación de productos para la venta. Es importante tener en cuenta que los costos están estructurados por la suma de pagos o erogaciones que la empresa realiza durante los procesos, esfuerzos y materia prima que interviene en la elaboración de un producto, para lograr obtener un producto terminado. 

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Tipos de costos 
    
    p.mb-5 Es necesario identificar los tipos de costos, los cuales se clasifican de acuerdo con su comportamiento, factores de producción y productos, y su comportamiento, como se observa a continuación: 

    .titulo-sexto.color-acento-contenido
      h5 Figura 1.
      span Tipos de costos
    .row.justify-content-center.bg-color-33.p-5.tarjeta
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/tema1/1.svg", data-aos="zoom-in", alt="Diagrama sobre tipos de costos que los clasifica en tres categorías: según su comportamiento (costos fijos, variables y semivariables), según los factores de producción y productos (costos indirectos y directos), y según su comportamiento con detalle de costos de mano de obra, materia prima, financieros, de distribución y tributarios.  ")

    p.mb-5 A continuación, se puede ver qué significa cada uno de ellos: 

    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-1 
      .col-lg-auto
        img(src="@/assets/curso/temas/tema1/2.svg").mx-auto
      .col-lg
        p.mb-0 Los tipos de costos de acuerdo con su comportamiento hacen referencia a los costos fijos, costos variables y costos semivariables.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos Fijos
              p Son aquellos que permanecen constantes durante un período determinado, independientemente del nivel de producción. Ejemplos: arrendamientos, servicios de Internet, salarios, seguros, permisos, licencias, servicios públicos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos Variables
              p Son aquellos que varían directamente con el nivel de producción. Ejemplos: materia prima, insumos, horas extras, reparación y mantenimiento de maquinaria, distribución, comisiones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos Semivariables
              p Son aquellos que tienen un componente fijo y un componente variable. Varían con la producción, pero no de forma directamente proporcional. Ejemplo: el costo de la energía eléctrica utilizada por una máquina de coser.
    
    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-1 
      .col-lg-auto
        img(src="@/assets/curso/temas/tema1/6.svg").mx-auto
      .col-lg
        p.mb-0 Los tipos de costos según factores de producción y productos hacen referencia a los costos directos y los costos indirectos de fabricación.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos indirectos:  
              p son los costos que se asignan a la producción total, lo cual significa que no hay control ni seguimiento para cada producto, por 
              p <b>Ejemplo:</b> arrendamiento, mano de obra indirecta, tributos, intereses financieros, etc. 
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos directos:
              p son los costos identificados, distribuidos y controlados para cada unidad producida, como la materia prima e insumos que hacen parte del producto. 

    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-1 
      .col-lg-auto
        img(src="@/assets/curso/temas/tema1/9.svg").mx-auto
      .col-lg
        p.mb-0 Los tipos de costos según su naturaleza, como los costos de mano de obra, materia prima, costos financieros, costos de distribución y costos tributarios:
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4.tarjeta
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos por mano de obra 
              p Pagos de nómina a los trabajadores involucrados en la transformación del producto.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Materia prima
              p Costos de los materiales utilizados para elaborar el producto. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos financieros
              p Costos asociados al financiamiento de la empresa para su funcionamiento.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos de distribución
              p Pagos para transportar los productos al lugar de destino, según acuerdos de negociación. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/temas/tema1/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Costos tributarios
              p Pagos a entidades fiscales como la Secretaría de Hacienda y la DIAN, por obligaciones tributarias de la empresa.
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Sistemas de costeo
    
    p.mb-5 Después de identificar los diferentes tipos de costos, ahora es momento de continuar con los sistemas de costos. Es valioso tener clara la definición y los objetivos de los sistemas de costos que se relacionan a continuación.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Tipos de sistemas de costeo
    
    p.mb-5 Existen diversos sistemas de costeo para obtener el costo de un producto o servicio, motivo por el cual la entidad elige el que le proporcione información que le permita elaborar estrategias para cumplir sus objetivos. Para ello, puede recurrir a: 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Costos por órdenes de producción
    
    p.mb-5 El sistema de costos por órdenes de producción es el utilizado para la recolección de costos de acuerdo con las órdenes o lotes, como materia prima (MP), mano de obra directa (MOD), costos indirectos de fabricación (CIF), reparaciones y mantenimientos, los cuales se acumulan en una orden.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-5
      .col-lg-10
        p Los cuales permiten identificar y cuantificar cada uno de los elementos de acuerdo con la producción. 
        div.bg-color-31.p-4.mb-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Ejemplo
              p.mb-0 El 15 de enero de 20XX, la empresa EL SOL, realizó un pedido a la compañía LUNA, que consistía en la fabricación de una sala de juntas la cual consta de 1 mesa y 4 sillas hechas a medida. La entrega será a más tardar el 30 de enero de 20XX”.
        p.mb-0 En primer lugar, el departamento de compras realiza:
    
    .row.justify-content-center.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/15.svg', alt='Texto que describa la imagen')

          h4.text-center.bg-color-29.p-3 Compra de materiales
          p.mb-0.text-center Total: $110.000 20 láminas de madera: $100.000 100 galones de pintura: $5.000 15 cajas de pegamento: $3.000 5 cajas de clavos: $2.000

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/16.svg', alt='Texto que describa la imagen')

          h4.text-center.bg-color-29.p-3 Consumo de materiales
          p.mb-0.text-center Total: $36.000 5 láminas de madera: $25.000 10 galones de pintura: $5.000 Pegamento: $2.000 Clavos: $4.000
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/17.svg', alt='Texto que describa la imagen')

          h4.text-center.bg-color-29.p-3 Costos indirectos
          p.mb-0.text-center $11.000 (diferencia entre compra y consumo, materiales no utilizados)
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta--boton.bg-color-22.p-4.h-100
          .row.justify-content-center.mb-3
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/18.svg', alt='Texto que describa la imagen')

          h4.text-center.bg-color-29.p-3 Costo de mano de obra
          p.mb-0.text-center Total: $45.000 Mano de obra directa: $35.000 Mano de obra indirecta: $10.000
    
    .bg-color-34.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/temas/tema1/19.svg", style="max-width: 140px").mx-auto
          .col-lg
            p A estos costos hay que agregarles los costos indirectos de fabricación y se obtiene el total del valor de los costos de las órdenes de producción. 

            p.mb-0 Con estos conceptos y el ejemplo utilizado, se espera que se comprenda el concepto de sistema de costos por órdenes.  A continuación, se detalla el <b>ciclo contable de los costos por órdenes de producción:</b>
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
      div(titulo="Compra de materia prima directa. ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Compra de materia prima directa.
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 1405XX
                td Inventarios de materia prima
                td xxx
                td $$
                td -
              tr
                td 2205XX
                td Proveedores
                td -
                td -
                td $$
              tr
                td 24XXXX
                td Impuestos
                td -
                td -
                td $$
              tr
                td 23XXXX
                td Retenciones
                td -
                td -
                td $$
      div(titulo="Traslado de materia prima directa a la planta de producción. ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Traslado de materia prima directa a la planta de producción. 
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 7105XX
                td Materia prima directa
                td XX
                td $$
                td -
              tr
                td 1405XX
                td Inventarios de materia prima
                td -
                td -
                td $$

      div(titulo="Contratación de mano de obra directa. ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Contratación de mano de obra directa. 
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 7205XX
                td Mano de obra directa
                td XX
                td $$
                td -
              tr
                td 25XXXX
                td Obligaciones laborales
                td -
                td -
                td $$
      div(titulo="Compra de los insumos de producción").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Compra de los insumos de producción
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 7301XX
                td CIF Insumos
                td xxx
                td $$
                td -
              tr
                td 2205XX
                td Proveedores
                td -
                td -
                td $$
              tr
                td 24XXXX
                td Impuestos
                td -
                td -
                td $$
              tr
                td 23XXXX
                td Retenciones
                td -
                td -
                td $$

      div(titulo="Contratación de mano de obra indirecta.").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Contratación de mano de obra indirecta.
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 7305XX
                td Mano de obra indirecta
                td XX
                td $$
                td -
              tr
                td 25XXXX
                td Obligaciones laborales
                td -
                td -
                td $$

      div(titulo="Compra y reconocimiento de otros CIF ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Compra y reconocimiento de otros CIF.
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 7320XX
                td Arriendos
                td xxx
                td $$
                td -
              tr
                td 7335XX
                td Servicios
                td xxx
                td $$
                td -
              tr
                td 7345XX
                td Mantenimiento
                td xxx
                td $$
                td -
              tr
                td 24XXXX
                td Impuestos
                td -
                td -
                td $$
              tr
                td 23XXXX
                td Retenciones
                td -
                td -
                td $$
              tr
                td 23XXXX
                td Cuentas por Pagar
                td -
                td -
                td $$
              tr
                td 7360XX
                td Depreciaciones
                td xxx
                td $$
                td -
              tr
                td 1592XX
                td Depreciación acumulada
                td -
                td -
                td $$

      div(titulo="Servicios contratados o maquila en la cuenta control de producción.  ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Servicios contratados o maquila en la cuenta control de producción.  
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 74XXXX
                td Servicios contratados – maquila
                td XX
                td $$
                td -
              tr
                td 24XXXX
                td Impuestos
                td -
                td -
                td $$
              tr
                td 23XXXX
                td Retenciones
                td -
                td -
                td $$
              tr
                td 23XXXX
                td Cuentas por pagar
                td -
                td -
                td $$

      div(titulo="Cierre o capitalización de la cuenta control de costos de producción.  ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Cierre o capitalización de la cuenta control de costos de producción.  
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 141005
                td Inventario PP materia prima directa
                td XX
                td $$
                td -
              tr
                td 5196XX
                td Gasto MPD dañada
                td XX
                td $$
                td -
              tr
                td 7198XX
                td Materia prima directa
                td XX
                td -
                td $$
              tr
                td 141010
                td Inventario PP mano obra directa
                td XX
                td $$
                td -
              tr
                td 5196XX
                td Gasto tiempo ocioso
                td XX
                td $$
                td -
              tr
                td 7298XX
                td Mano obra directa
                td XX
                td -
                td $$
              tr
                td 141015
                td Inventario PP CIF
                td XX
                td $$
                td -
              tr
                td 7398XX
                td Costos indirectos de fabricación -CIF
                td XX
                td -
                td $$
              tr
                td 141020
                td Inventario PP servicio contratado - maquila
                td XX
                td $$
                td -
              tr
                td 7498XX
                td Servicios contratados - maquila
                td XX
                td -
                td $$

      div(titulo="Traslado de las unidades terminadas al inventario de producto terminado.").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Traslado de las unidades terminadas al inventario de producto terminado.
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 1430XX
                td Inventario producto terminado
                td XX
                td $$
                td -
              tr
                td 141005
                td Inventario PP materia prima directa
                td XX
                td -
                td $$
              tr
                td 141010
                td Inventario PP mano obra directa
                td XX
                td -
                td $$
              tr
                td 141015
                td Inventario PP CIF
                td XX
                td -
                td $$
              tr
                td 141020
                td Inventario PP servicio contratado - maquila
                td XX
                td -
                td $$

      div(titulo="Venta del producto terminado. ").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Venta del producto terminado. 
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 4120XX
                td Venta MFE
                td XX
                td -
                td $$
              tr
                td 24XXXX
                td Impuestos
                td XX
                td -
                td $$
              tr
                td 1355XX
                td Retenciones
                td XX
                td $$
                td -
              tr
                td 1305XX
                td Deudores clientes
                td -
                td $$
                td -
              tr
                td 1355XX
                td Retenciones ARER
                td -
                td $$
                td -
              tr
                td 2365XX
                td CXP retenciones
                td -
                td -
                td $$

      div(titulo="Reconocimiento del costo de ventas.").px-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Reconocimiento del costo de ventas.
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 6120XX
                td Costo de ventas MFE
                td XX
                td $$
                td -
              tr
                td 1430
                td Inventario producto terminado
                td XX
                td -
                td $$
    
    p.mb-5 Con el fin de dar cumplimiento al proceso de sistema de costos por órdenes de producción, se debe recurrir a los soportes que permiten identificar cada uno de los procesos; ellos son: 

    TabsC.color-acento-contenido
      .py-3.py-md-4(titulo="Orden de producción").bg-color-33.p-5
        p.mb-5 Es un formato que contiene identificación de la empresa fabricante y del cliente; describe el producto a fabricar con sus características específicas, fecha de inicio de la producción, fecha de entrega del producto, y espacios específicos para identificar cada uno de los elementos del costo que se cargarán a dicha orden de producción; soportado por requisición de materia prima directa e insumos,  controles de tiempo de mano de obra directa y otros costos indirectos de fabricación cargados a dicha orden, generando un total por elemento del costo y un gran total del costo de dicha orden de producción, con el cual podemos establecer el costo unitario dependiendo de las unidades fabricadas. 
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Ejemplo de formato de orden de producción.
        figure
          img(src='@/assets/curso/temas/tema1/20.svg', alt='Tabla con el formato de una orden de producción para el producto empanada, que incluye campos para registrar cantidad, unidades terminadas, costos de materia prima, mano de obra directa (MOD), costos indirectos, totales parciales y total general.')
      .py-3.py-md-4(titulo="Requisición").bg-color-33.p-5
        p.mb-5 Formato requerido para el traslado de materia prima directa e insumos de la planta del almacén a la planta de producción. Dicho formato contiene: nombre de la empresa fabricante, orden de producción a la cual se va a cargar la materia prima directa e insumos, espacios específicos para identificar las materias e insumos en cuanto a referencia, cantidades, unidades y valores por los que se deben cargar a la orden de producción.
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Ejemplo de formato de requisición.
        figure
          img(src='@/assets/curso/temas/tema1/21.svg', alt='Tabla con el formato de requisición de materiales que contiene campos para datos de la empresa, número de requisición, orden de producción, fecha, departamento, códigos y descripciones de materia prima, unidad de medida, cantidad, valor unitario, valor total, y secciones para firmas de solicitud, entrega, kardex y recibido. ')
      .py-3.py-md-4(titulo="Kardex").bg-color-33.p-5
        p.mb-5 formato utilizado para el control de la materia prima directa adquirida para los diferentes bienes a producir, en el cual se identifica el producto con su referencia, cantidades mínimas, cantidades máximas, localización, proveedores de dicha materia prima, y espacios específicos para fecha, descripción, cantidades y valores de entrada, cantidades y valores de salida, y saldos en cantidades y valores que soportan los valores de las cuentas de inventario que arroje la contabilidad.
        .titulo-sexto.color-acento-contenido
          h5 Figura 4.
          span Ejemplo de formato Kardex.
        figure
          img(src='@/assets/curso/temas/tema1/22.svg', alt='Tabla con el formato Kardex para control de inventario del producto empanada, que incluye referencia, proveedor, cantidades mínima y máxima, y columnas para registrar fecha, descripción, entradas y salidas con sus respectivas cantidades, valores unitarios y totales. ')
      .py-3.py-md-4(titulo="Ficha técnica").bg-color-33.p-5
        p.mb-5 Indica el producto a elaborar, debe tener una foto, bosquejo o plano del producto con sus características específicas, indicando además las materias primas requeridas en cantidades y unidades para la elaboración de un producto y los procesos que se deben seguir para la elaboración del producto terminado; también informa sobre los equipos o maquinaria requeridos para la elaboración de dicho producto.  
        .titulo-sexto.color-acento-contenido
          h5 Figura 5.
          span Modelo ficha técnica.
        figure
          img(src='@/assets/curso/temas/tema1/23.png', alt='Tabla con el formato de una orden de producción para el producto empanada, que incluye campos para registrar cantidad, unidades terminadas, costos de materia prima, mano de obra directa (MOD), costos indirectos, totales parciales y total general.')
    
    p.mb-5 Con la información suministrada por la ficha técnica, la empresa elabora los presupuestos básicos de producción y preparación de la planta para el inicio del proceso productivo. El proceso inicia con el presupuesto básico, con la proyección de ventas, tomando como base las estadísticas promedio que ha tenido la empresa o el sector industrial respectivo.

    .row.justify-content-center
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/24.png', alt='Texto que describa la imagen')
      .col-lg-5
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Presupuesto mensual
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Valor
            tbody.bg-color-white
              tr
                td Presupuesto de ventas
                td 48.000
              tr
                td Inventario final
                td 2.000
              tr
                td Inventario inicial
                td -
              tr
                td Presupuesto de compra/producción PR
                td 50.000
    
    p.mb-5 Con base en el presupuesto de ventas y en la información de la ficha técnica, se presupuestan materias primas requeridas, y así se proyecta el precio de compra, por medio de las cotizaciones, eligiendo al proveedor que se ajuste a los requerimientos y calidades de materias primas:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Hoja de costos estándar unitario de materia prima directa (MPD) (Producción requerida: 50.000 unidades)
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Cantidad
                th.bg-color-35 Unidad medida
                th.bg-color-35 Precio unitario ($)
                th.bg-color-35 Costo unitario MPD ($)
                th.bg-color-35 Total cantidad MPD producción
                th.bg-color-35 Total producción ($)
            tbody.bg-color-white
              tr
                td Harina
                td 50
                td Gramos
                td 4
                td 200
                td 2.500.000
                td 10.000.000
              tr
                td Arroz
                td 100
                td Gramos
                td 4,4
                td 440
                td 5.000.000
                td 22.000.000
              tr
                td Huevo
                td 0,25
                td Unidad
                td 350
                td 87,5
                td 12.500
                td 4.375.000
              tr
                td Total MPD proyectado
                td -
                td -
                td -
                td 727,5
                td -
                td 36.375.000
    
    .row.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/25.png', data-aos="zoom-in", alt='')
      .col-lg-7.bg-color-36.mb-5.p-4(data-aos="fade-up")
        p(data-aos="fade-up") La ficha técnica informa los procesos requeridos para la producción, con los tiempos unitarios, por lo cual se procede a proyectar la nómina de la mano de obra directa teniendo en cuenta todos los conceptos del costo de la mano de obra directa a cargo de la empresa (empleador), como son:
        ul.lista-ul--color.ms-4.mb-0
          li.d-flex.bg-color-white.p-3.tarjeta
            i.fas.fa-chevron-right
            p.mb-0 Salarios
          li.d-flex.bg-color-white.p-3.tarjeta
            i.fas.fa-chevron-right
            p.mb-0 Prestaciones sociales
          li.d-flex.bg-color-white.p-3.tarjeta
            i.fas.fa-chevron-right
            p.mb-0 Aportes a la seguridad social
          li.d-flex.bg-color-white.p-3.tarjeta
            i.fas.fa-chevron-right
            p.mb-0 Parafiscales
    
    p De acuerdo con la cantidad de operarios requeridos para el proceso de producción según solicitud del cliente.

    p.mb-5 Para la proyección del costo de la mano de obra directa, se diseña un modelo de proyección que cumpla todos los requerimientos, tanto del costo de producción como la normatividad legal laboral vigente. A continuación, se presenta un simulador de proyección de la mano de obra directa que se ajusta a cada salario de los diferentes procesos de la producción; se requiere que se actualicen las casillas de color azul.

    .row.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/temas/tema1/26.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Datos generales").px-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 14.
              span Hoja de costos estándar unitario de materia prima directa (MPD) (Producción requerida: 50.000 unidades)
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-35 Concepto
                    th.bg-color-35 Valor
                tbody.bg-color-white
                  tr
                    td Días del año
                    td 366
                  tr
                    td Domingos y festivos
                    td 70
                  tr
                    td Días laborables
                    td 296
                  tr
                    td Días promedio por mes
                    td 24,67
                  tr
                    td Horas por mes
                    td 197
                  tr
                    td Minutos por mes
                    td 11.840
                  tr
                    td Valor por hora
                    td $6.789
                  tr
                    td Valor por minuto
                    td $113,16
                  tr
                    td Valor por segundo
                    td $1,89

          div(titulo="Salario y auxilio").px-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 15.
              span Salario y auxilio
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-35 Concepto
                    th.bg-color-35 Valor
                tbody.bg-color-white
                  tr
                    td Salario mínimo legal vigente (SMLV)
                    td $877.803
                  tr
                    td Auxilio de transporte
                    td $102.854
                  tr
                    td Total mensual pagado al trabajador
                    td $1.339.765

          div(titulo="Aportes obligatorios").px-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 16.
              span Aportes obligatorios
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-35 Aporte
                    th.bg-color-35 Porcentaje (%)
                tbody.bg-color-white
                  tr
                    td ARL
                    td 0,52%
                  tr
                    td EPS
                    td 0,00%
                  tr
                    td Fondo de pensiones (FP)
                    td 12%
                  tr
                    td Caja de compensación (CC)
                    td 4%
                  tr
                    td ICBF
                    td 0,00%
                  tr
                    td SENA
                    td 0,00%
                  tr
                    td Total aportes
                    td 16,52%
          div(titulo="Prestaciones sociales").px-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 17.
              span Prestaciones sociales
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-35 Prestación
                    th.bg-color-35 Porcentaje (%)
                tbody.bg-color-white
                  tr
                    td Cesantías
                    td 8,33%
                  tr
                    td Interés sobre cesantías
                    td 1,00%
                  tr
                    td Prima de servicios
                    td 8,33%
                  tr
                    td Vacaciones
                    td 4,17%
                  tr
                    td Total prestaciones
                    td 21,83%
    
    p.mb-5 A continuación, se aplica la proyección de la mano de obra directa requerida para el proceso de producción mensual, estableciendo tiempos por cada proceso, costo de la mano de obra directa y número de operarios requeridos para la producción.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 18.
          span Hoja de costos estándar unitario - MPD
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Cantidad
                th.bg-color-35 Unidad de medida
                th.bg-color-35 Precio unitario MOD
                th.bg-color-35 Costo unitario MOD
                th.bg-color-35 Total tiempo PR
                th.bg-color-35 Costo MOD PR
                th.bg-color-35 No. operarios
            tbody.bg-color-white
              tr
                td Preparado
                td 2
                td Minuto
                td $127,43
                td $254,86
                td $100.000
                td $12.743.000
                td 8
              tr
                td Frito
                td 4
                td Minuto
                td $113,16
                td $452,64
                td $200.000
                td $22.632.000
                td 17
              tr
                td -
                td -
                td -
                td -
                td $707,50
                td $300.000
                td $35.375.000
                td 25

    p.mb-5 Para el presupuesto de los costos indirectos de fabricación, se establecen los costos variables unitarios.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 19.
          span Hoja de costos estándar unitario - CIF insumos variables
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Unidad de medida
                th.bg-color-35 Precio unitario
                th.bg-color-35 Unidad promedio de producción
                th.bg-color-35 Costo variable unitario
            tbody.bg-color-white
              tr
                td Agua
                td m³
                td $30.000
                td 5.000
                td $6,00
              tr
                td Sal
                td Kilo
                td $1.800
                td 4.000
                td $0,45
              tr
                td Cebolla
                td Libra
                td $900
                td 800
                td $1,13
              tr
                td Cilantro
                td Atao
                td $1.200
                td 900
                td $1,33
              tr
                td Ají
                td Libra
                td $700
                td 1.500
                td $0,47
              tr
                td Empaque
                td Paquete x 2
                td $2.000
                td 400
                td $5,00
              tr
                td -
                td -
                td -
                td -
                td $14,38

    .row.justify-content-center.mb-5
      .col-lg-12
        div.bg-color-31.px-4.mb-3.tarjeta
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/temas/tema1/27.svg", style="max-width: 190px").mx-auto
            .col-lg
              p Se procede a calcular los Costos Indirectos de Fabricación (CIF) fijos de la mano de obra indirecta, según la nómina de presupuesto, teniendo en cuenta toda la normatividad legal vigente.
              p.mb-0 También debemos presupuestar los otros Costos Indirectos de Fabricación (CIF) fijos de producción, como arriendos, servicios públicos, mantenimiento, depreciación, impuestos, seguros, entre otros, que se puedan presentar, según lo requieran en la planta de producción.
    
    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0(data-aos="fade-right")
        .bg-color-29.p-5.tarjeta.h-100
          .titulo-sexto.color-acento-contenido
            h5 Tabla 20.
            span Hoja de costos estándar unitario - CIF fijos (MOI)
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th.bg-color-35 Concepto
                  th.bg-color-35 Costo mensual
              tbody.bg-color-white
                tr
                  td Supervisor
                  td $3.458.800,00
                tr
                  td Aseadora
                  td $1.339.765,00
                tr
                  td Todero
                  td $1.339.765,00
                tr
                  td Total
                  td $6.138.330,00
                tr
                  td Unidad de producción promedio al mes
                  td 50.000,00
                tr
                  td CIF fijo unitario MOI
                  td $122,77

      .col-lg-6(data-aos="fade-left")
        .bg-color-29.p-5.tarjeta
          p Ahora, es momento de establecer el costo unitario presupuestado.
          .titulo-sexto.color-acento-contenido
            h5 Tabla 21.
            span Presupuesto - Costo estándar unitario por empanada
          .tabla-a.color-acento-botones
            table
              thead
                tr
                  th.bg-color-35 Concepto
                  th.bg-color-35 Valor
              tbody.bg-color-white
                tr
                  td MPD
                  td $727,50
                tr
                  td MOD
                  td $707,50
                tr
                  td Costo primo
                  td $1.435,00
                tr
                  td CIF variables MPI - Insumos
                  td $14,38
                tr
                  td CIF MOI (fijos)
                  td $122,77
                tr
                  td CIF varios
                  td $81,08
                tr
                  td CIF totales
                  td $218,22
                tr
                  td Costo unitario total
                  td $1.653,22

    p.mb-5 Para la proyección de CIF, también se puede calcular la tasa predeterminada, la cual se establece de la materia prima directa, la mano de obra directa, el costo primo, o unidades producidas y horas hombre, entre otros.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 22.
          span Presupuesto y tasa CIF predeterminada - Empanadas
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Valor 1
                th.bg-color-35 Valor 2
                th.bg-color-35 Valor 3
            tbody.bg-color-white
              tr
                td MPD
                td $100.000
                td $25.000
                td $727,50
              tr
                td MOD
                td $20.000
                td $130.000
                td $707,50
              tr
                td Costo primo
                td $120.000
                td $155.000
                td $1.435,00
              tr
                td CIF var. MPI – Insumos
                td -
                td -
                td $14,38
              tr
                td CIF MOI (fijo)
                td -
                td -
                td $122,77
              tr
                td CIF varios
                td -
                td -
                td $81,08
              tr
                td CIF totales
                td -
                td -
                td $218,22
              tr
                td Costo unitario total
                td -
                td -
                td $1.653,22
              tr
                td Tasa CIF predeterminada
                td -
                td -
                td 15,21%
              tr
                td
                td -
                td -
                td.text-bold (CIF totales ÷ Costo primo)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Gasto de administración y ventas
    
    p.mb-5 Es necesario establecer el presupuesto de gastos fijos mensuales de la administración y ventas de la compañía para lograr establecer el precio de venta y el punto de equilibrio requerido.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 23.
          span Presupuesto de costos fijos mensuales
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Producción
                th.bg-color-35 Administración
                th.bg-color-35 Ventas
            tbody.bg-color-white
              tr
                td Salarios
                td $6.138.330
                td $7.000.000
                td $3.000.000
              tr
                td Arriendo
                td $2.000.000
                td $600.000
                td -
              tr
                td Depreciación
                td $54.167
                td $40.000
                td $30.000
              tr
                td Servicios
                td $1.500.000
                td $350.000
                td $750.000
              tr
                td Mantenimiento
                td $500.000
                td $600.000
                td $30.000
              tr
                td Impuestos
                td -
                td $70.000
                td $300.000
              tr
                td Seguros
                td -
                td $80.000
                td $40.000
              tr.text-bold
                td Total
                td $10.192.497
                td $8.740.000
                td $4.150.000
              tr.text-bold
                td Unidad de producción mensual
                td 50.000
                td -
                td -
              tr.text-bold
                td Total general costos fijos
                td $23.082.497
                td -
                td -
    
    p.mb-5 Ahora, se realiza el presupuesto del precio de venta unitario (PVU); para hacerlo hay varias fórmulas, para este ejemplo se aplica la fórmula de margen de contribución (MC), según la política de precios al costo de producción unitario, para obtener:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Tabla 24.
          span Cálculo del precio de venta unitario (PVU)
        .tabla-a.color-acento-botones.mb-3
          table
            thead
              tr
                th.bg-color-35 Concepto
                th.bg-color-35 Valor
            tbody.bg-color-white
              tr
                td Costo total unitario (CTO)
                td $1.653,22
              tr
                td Margen de contribución (MC) – 80 %
                td $1.322,58
              tr.text-bold
                td Precio de venta unitario (PVU)
                td $3.000,00
        p.mb-0.bg-color-1.p-3.text-center El precio de venta de $3.000 se ha aproximado al 100.
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/28.svg", data-aos="zoom-in")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Compra y consumo de materia prima directa
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/29.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Una vez la empresa tiene la orden de producción organizada por cliente, cotiza las materias primas requeridas, compra las materias primas al proveedor seleccionado, las reconoce contablemente ajustándose al sistema de costeo por órdenes de producción y a las normas legales vigentes, y hace el respectivo registro en la hoja Kardex, tanto en la compra de la mercancía como en el consumo de la misma en el área producción, con sus respectivos soportes, con lo cual se cargará a cada orden de producción por cada uno de los clientes. 

    .titulo-sexto.color-acento-contenido
      h5 Figura 6.
      span Factura de venta 
  
    figure.mb-5
      img(src="@/assets/curso/temas/tema1/30.svg", data-aos="zoom-in", alt="Tabla con el formato de una factura de venta que incluye datos del vendedor y comprador, número de factura, fecha de emisión, referencias de productos, cantidades, unidades, valores unitarios y totales, además de subtotales, descuentos, impuestos (IVA, RETEICA, RETEFUENTE) y el total final a pagar.  ")

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 25.
          span Reconocimiento compra materia prima directa
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th.bg-color-35 CÓDIGO
                th.bg-color-35 CUENTA
                th.bg-color-35 CC-OP
                th.bg-color-35 DÉBITO
                th.bg-color-35 CRÉDITO
            tbody.bg-color-white
              tr
                td 140505
                td INVENTARIO DE MATERIA PRIMA
                td 1001
                td $35.647.500
                td -
              tr
                td 240806
                td IVA DESCONTABLE
                td -
                td $6.080.000
                td -
              tr
                td 236540
                td RETEFTE RTA COMPRAS
                td -
                td -
                td $891.188
              tr
                td 236811
                td RETEFTE ICA COMPRAS
                td -
                td -
                td $393.548
              tr
                td 220505
                td PROVEEDORES
                td -
                td -
                td $40.442.764

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Actualización Kardex
    
    p.mb-5 Consiste en los ingresos de materia prima, traslados entre bodegas, de acuerdo con el proceso de producción, y salidas de inventarios. 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.p-4
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              span KARDEX - HARINA EL LOBO 
            figure
              img(src="@/assets/curso/temas/tema1/31.svg", alt="Tabla tipo Kardex para el producto Harina El Lobo que contiene referencia, proveedor, cantidades mínima y máxima, unidad de medida, y registros de entrada, salida y saldo con fecha, descripción, cantidades, valores unitarios y totales. ")
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 8.
              span KARDEX - ARROZ DIANA
            figure
              img(src="@/assets/curso/temas/tema1/32.svg", alt="Tabla tipo Kardex para el producto Arroz Diana que incluye referencia, proveedor, cantidades mínima y máxima, unidad de medida, y registros de entrada, salida y saldo con fecha, descripción, cantidades, valores unitarios y valores totales. ")
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 9.
              span KARDEX - HUEVOS ORO
            figure
              img(src="@/assets/curso/temas/tema1/33.svg", alt="Tabla tipo Kardex para el producto Huevos Oro que incluye referencia, proveedor, cantidades mínima y máxima, unidad de medida, y columnas para registrar entrada, salida y saldo con fecha, descripción, cantidades, valor unitario promedio y valores totales.  ")
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 10.
              span KARDEX - HARINA EL LOBO 
            figure
              img(src="@/assets/curso/temas/tema1/34.svg", alt="Tabla tipo Kardex para el producto Harina El Lobo que contiene referencia, proveedor, cantidades mínima y máxima, unidad de medida, y registros de entrada, salida y saldo con fecha, descripción, cantidades, valores unitarios y totales. ")
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Tabla 26.
              span Traslado materia prima a producción.
            .tabla-a.color-acento-botones
              table
                thead
                  tr
                    th.bg-color-35(colspan="2") EMPANADAZO LTDA
                    th.bg-color-35 
                    th.bg-color-35 REQUISICIÓN
                    th.bg-color-35 1
                tbody.bg-color-white
                  tr
                    td 
                    td
                    td 
                    td OP
                    td 1001
                  tr 
                    td ENTREGA 
                    td
                    td 
                    td FECHA
                    td 1/09/2020
                  tr.text-bold
                    td REFERENCIA 
                    td PRODUCTO 
                    td CANTIDAD 
                    td VALOR UNITARIO 
                    td VALOR TOTAL 
                  tr
                    td 2341
                    td HARINA EL LOBO
                    td 2.500.000
                    td $3,92
                    td $9.800.000
                  tr
                    td 3265
                    td ARROZ DIANA
                    td 5.000.000
                    td $4,31
                    td $21.560.000
                  tr
                    td 5566
                    td HUEVOS ORO
                    td 12.500,00
                    td $343.00
                    td $4.287.500
                  tr
                    td -
                    td -
                    td -
                    td.text-bold TOTAL
                    td $35.647.500
                  tr
                    td 
                    td
                    td
                    td.text-bold(colspan="2") NO OLVIDAR ACTUALIZAR KARDEX

          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 11.
              span Kardex 1: Harina El Lobo (Referencia: 2341) 
            figure
              img(src="@/assets/curso/temas/tema1/35.svg", alt="Tabla tipo Kardex para el producto Harina El Lobo con referencia 2341, que presenta datos del proveedor, cantidades mínima y máxima, unidad de medida, y registros de entrada, salida y saldo con fecha, descripción, cantidades, valor unitario promedio y valores totales. ")
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Kardex 2: Arroz Diana (Referencia: 3265)
            figure
              img(src="@/assets/curso/temas/tema1/36.svg", alt="Tabla tipo Kardex para el producto Arroz Diana con referencia 3265, que incluye información del proveedor, cantidades mínima y máxima, unidad de medida, y registros de entrada, salida y saldo con fechas, descripciones, cantidades, valor unitario promedio y valores totales. ")
          div.align-items-center.p-4.p-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 13.
              span Kardex 3: Huevos Oro (Referencia: 5566)
            figure
              img(src="@/assets/curso/temas/tema1/37.svg", alt="Tabla tipo Kardex para el producto Huevos Oro con referencia 5566, que incluye proveedor, cantidades mínima y máxima, unidad de medida, y registros de entrada, salida y saldo con fechas, descripciones, cantidades, valor unitario promedio y valores totales.  ")
            
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Liquidación y reconocimiento de la mano de obra directa requerida
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema1/38.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En la ficha técnica se establece el presupuesto de la mano de obra directa de los diferentes procesos para la elaboración del producto y se determina la especialización de cada operario requerido para la fabricación de este, al igual que el número de operarios necesarios para la producción. En el proceso de producción se debe implementar un control de tiempo, que permita establecer el tiempo a liquidar en cada orden de producción una vez culminado el proceso de fabricación. El departamento de personal liquidará la respectiva nómina de mano de obra directa del personal de planta de producción, ajustado a la normatividad laboral vigente, junto con su respectivo reconocimiento en la cuenta control de mano directa de producción. 
        p.mb-0 A continuación, se ilustra la liquidación de la nómina en sus diferentes secciones, para un operario de mano de obra directa y un operario de mano de obra indirecta.
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
      div(titulo="Sección de devengado.").px-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 14.
          span Sección de devengado.
        figure
          img(src="@/assets/curso/temas/tema1/39.svg", alt="Tabla de la sección de devengado de la nómina de septiembre de 2020 que contiene datos de identificación del trabajador, sueldo básico, horas extras, comisiones, auxilio de transporte, otros conceptos y total devengado. ")
      div(titulo="Sección de deducciones y neto a pagar.").px-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 15.
          span Sección de deducciones y neto a pagar.
        figure
          img(src="@/assets/curso/temas/tema1/40.svg", alt="Tabla de la sección de deducciones y neto a pagar que incluye aportes a salud y pensión, retención en la fuente, préstamos, otras deducciones, total deducciones y valor neto pagado al trabajador. ")
      div(titulo="Sección de devengado.").px-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 16.
              span Sección de devengado.
            figure
              img(src="@/assets/curso/temas/tema1/41.svg", alt="Tabla de la sección de prestaciones sociales que detalla los porcentajes aplicables y valores correspondientes a cesantías, intereses sobre cesantías, prima y vacaciones, con base de cálculo y totales por cada concepto. ")
      div(titulo="Sección de devengado.").px-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 17.
          span Sección de devengado.
        figure
          img(src="@/assets/curso/temas/tema1/42.svg", alt="Sección de aportes a seguridad social y parafiscales.")

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema1/43.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Para la gestión de proyectos, la elaboración de una propuesta completa es un elemento esencial que transforma una idea inicial en un plan estructurado y viable. Este proceso permite definir objetivos, establecer estrategias y garantizar que los recursos y esfuerzos estén alineados hacia el logro de metas específicas. Una propuesta bien diseñada actúa como un mapa detallado que guía al equipo de trabajo desde la concepción hasta la implementación y evaluación del proyecto.
      


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
