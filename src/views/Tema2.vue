<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estado de costos
    
    p.mb-5 El estado de costos de producción y ventas identifica el costo de las unidades fabricadas. Controlar los elementos del costo (materia prima, mano de obra directa y los costos indirectos de fabricación), conocer la producción, identificar los costos de las unidades vendidas es la base para identificar la diferencia entre los costos estimados y los costos reales.    

    .row.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/1.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Encabezado del estado de costos")
            p.mb-0 Incluye el nombre de la empresa, el nombre del estado de costos, el periodo de tiempo al que corresponden las cifras y el tipo de moneda utilizada.
          div(titulo="Cuerpo del estado de costos")
            p.mb-0 Contiene los datos financieros como el costo de materias primas directas, el costo de la producción terminada y el costo de venta.
          div(titulo="Firmas")
            p.mb-0 Se identifica a las personas responsables: quien lo elaboró, quien lo revisó y quien lo aprobó.
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Estructura del estado de costos
    
    p.mb-5 En el estado de costos, se parte del inventario inicial de materia prima directa y se suma la compra de materia prima del periodo, para obtener la materia prima disponible del periodo; a este resultado se le resta el inventario final de materia prima directa y se obtiene el consumo de la materia prima directa en el periodo.

    .row
      .col-lg-6.order-2
        figure
          img(src="@/assets/curso/temas/tema2/2.png", data-aos="zoom-in")
      .col-lg-6.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Al resultado anterior se le suma la mano de obra directa, de lo cual se obtiene el costo primo; a este resultado se le suman costos indirectos de fabricación de insumos, mano de obra y costos indirectos de fabricación varios, para llegar al resultado de costo de producción.
        p Al anterior resultado se le suma el inventario inicial de productos en proceso y se le resta el inventario final de productos en proceso y se obtiene como resultado el costo del producto terminado, al cual se le suma el inventario inicial de producto terminado y se obtiene el costo del producto terminado disponible, al cual se le resta el inventario final de producto terminado para llegar al resultado de costo de ventas del periodo.
  
    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Análisis del punto de equilibrio
    
    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/temas/tema2/3.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Cuando en la industria se ha logrado establecer el presupuesto de cada uno de los elementos del costo para obtener el costo unitario de producción y, a su vez, se tiene el presupuesto de gastos de administración y ventas para proyectar el precio de venta unitario, también se puede establecer el punto de equilibrio en cantidades, como pesos, con el uso de las siguientes fórmulas:
    
    p.mb-5 El punto de equilibrio en cantidades le permite al industrial conocer las unidades que tiene que producir periódicamente para cubrir sus costos y gastos fijos sin obtener ningún beneficio con este volumen de producción.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/temas/tema2/4.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-12.p-4.tarjeta(data-aos="fade-left")
          h5.bg-color-31.p-3.tarjeta Fórmulas de punto de equilibrio en cantidades (Q)
          figure.d-flex.justify-content-center.mb-3
            img(src="@/assets/curso/temas/tema2/4-1.svg", data-aos="zoom-in", style="max-width: 650px")
          h5.bg-color-32.p-2 Ejemplo:
          figure.d-flex.justify-content-center.mb-3
            img(src="@/assets/curso/temas/tema2/4-2.svg", data-aos="zoom-in", style="max-width: 480px")
          p.mb-0(data-aos="fade-up") De acuerdo con el ejemplo, se puede deducir que la empresa debe vender más de las 14.886 unidades para obtener utilidad; si lo hace por debajo de esas unidades, presentará perdida.
    
    .bg-color-9.p-4.tarjeta(data-aos="fade-left")
      h5.bg-color-31.p-3.tarjeta Fórmula de punto de equilibrio en pesos
      p El punto de equilibrio en pesos le indica al industrial Juan cuál debe ser el monto de las ventas en pesos para cubrir los costos y gastos fijos de la empresa sin obtener ningún beneficio en este punto.
      .row.align-items-center.mb-3
        .col-lg-3
          h5.bg-color-32.p-2 Ejemplo:
        .col-lg-6
          figure.d-flex.justify-content-center.mb-5
            img(src="@/assets/curso/temas/tema2/4-3.svg", data-aos="zoom-in", style="max-width: 535px")
          figure.d-flex.justify-content-center
            img(src="@/assets/curso/temas/tema2/4-4.svg", data-aos="zoom-in", style="max-width: 535px")
      p.mb-0(data-aos="fade-up") Es el punto donde los ingresos cubren la totalidad de los costos y gastos de la empresa para el periodo establecido, por tanto, ni se gana ni se pierde. Pero le permite a la administración tomar decisiones en el ambiente del recurso humano, tecnológico y financiero. 
    
    p.mb-5 En la siguiente figura se comprende mejor lo que significa y representa el punto de equilibrio.

    .row
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 25.
          span Punto de equilibrio
        figure
          img(src="@/assets/curso/temas/tema2/5.svg", data-aos="zoom-in", alt="Gráfico sobre el punto de equilibrio que relaciona ventas y costos con la producción, e incluye curvas de ventas, costos totales, costos variables y costos fijos, además de zonas de pérdida y utilidad, y los valores correspondientes de equilibrio en cantidades (Qe) y en ventas (Ve). ")
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema2/6.svg", data-aos="zoom-in")
         
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
