<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladores y sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con los tipos de costos, sistemas de costeo, elaboración del estado de costos y análisis del punto de equilibrio dentro del contexto de la gestión contable y financiera.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de los siguientes costos permanece constante independientemente del nivel de producción?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos fijos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Costos variables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costos semivariables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de sistema de costeo es adecuado cuando la producción se realiza por lotes o pedidos específicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos por procesos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costos por órdenes de producción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos estándar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costos directos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Cuál es un ejemplo de costo variable?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arrendamiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Horas extras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Salarios administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seguros de maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué sistema utiliza la entidad para cuantificar cada elemento del costo en órdenes específicas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sistema por órdenes de producción.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sistema de costos estándar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sistema ABC.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de costos mixto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de costos no se pueden rastrear directamente a un producto?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costos directos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costos indirectos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Costos financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Costos tributarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál de los siguientes es un costo de distribución?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mano de obra.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transporte de productos al cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Consumo de energía eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Seguridad social del trabajador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué elemento NO hace parte del costo primo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Materia prima directa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mano de obra directa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Costos indirectos de fabricación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Costo de preparación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la base para calcular la tasa predeterminada de los CIF?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Precio de venta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Costo primo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Gastos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventario inicial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué documento permite controlar las entradas y salidas de materia prima?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Kardex.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Factura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ficha técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Requisición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué componente NO forma parte de las prestaciones sociales en la proyección del costo de MOD?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cesantías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Vacaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Auxilio de transporte.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Prima de servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los costos semivariables varían proporcionalmente con el nivel de producción.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El sistema de costeo ABC se basa en actividades para asignar los costos indirectos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El estado de costos permite tomar decisiones estratégicas en la gerencia.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La ficha técnica de producto incluye únicamente información visual del producto.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El punto de equilibrio se calcula para determinar cuántas unidades deben venderse para cubrir los costos totales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
