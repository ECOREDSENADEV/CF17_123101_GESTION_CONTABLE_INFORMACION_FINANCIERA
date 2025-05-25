<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 El presente componente formativo se enfoca en el estudio del sistema de costeo y la elaboración del estado de costos como herramientas esenciales para la gestión contable en las organizaciones. A partir de una perspectiva práctica, se exploran los conceptos y procedimientos que permiten identificar, clasificar y aplicar los distintos tipos y sistemas de costos, con el fin de contribuir a una correcta valoración de los procesos productivos.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/1.png', alt='')
          .col-lg-8.bg-color-30.mb-5.p-4(data-aos="fade-up")
            div.p-4.bg-color-white
              p.mb-0(data-aos="fade-up") Asimismo, se desarrolla el análisis del punto de equilibrio, tanto en cantidades como en valores, como un indicador clave para la toma de decisiones gerenciales. Comprender este análisis permite proyectar escenarios, controlar recursos y establecer estrategias que favorezcan la sostenibilidad financiera de la empresa. La información generada mediante estos procesos contables se convierte en un insumo fundamental para la planeación, el control y la evaluación del desempeño económico.

        p Finalmente, se incorporan ejemplos ilustrativos y herramientas contables prácticas que facilitan el aprendizaje de los contenidos, especialmente en el contexto del sistema de costeo por órdenes de producción. El objetivo es que los aprendices desarrollen competencias que les permitan aplicar estos conocimientos en situaciones reales del entorno empresarial, fortaleciendo así su perfil profesional en el área de las finanzas y la administración.

</template>

<script>
export default {
  name: 'Introduccion',
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
