export default {
  name: 'cattle',
  type: 'document',
  title: 'Ganado',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Título rodeo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL',
      description: 'URL que identifica al  grupo de ganado',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      title: 'Departamento al cual pertece el campo',
      description: 'Se le debe asignar el departamento al que pertenece el rodeo',
      type: 'reference',
      to: [{type: 'states'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transaction',
      type: 'string',
      title: 'Remate o Privada',
      options: {
        list: [
          {title: 'Remate', value: 'auction'},
          {title: 'Privada', value: 'private'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'size',
      type: 'number',
      title: 'Cantidad de cabezas de ganado',
      validation: (Rule) => Rule.required(),
    },
    {name: 'detail', title: 'Detalle', type: 'array', of: [{type: 'block'}]},
    {
      name: 'image',
      type: 'image',
      title: 'Imagen principal',
      description: 'Imagen que va a aparecer en la foto mas grande en un principio',
    },
    {
      name: 'gallery',
      title: 'Galeria de imagenes',
      description: 'Imagenes que van a aparecer abajo de la principal',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (Rule) => Rule.max(7).error('Solo se pueden agregar hasta 7 fotos'),
    },
    {
      name: 'videoFile',
      type: 'file',
      title: 'Video del Ganado',
      description: 'Upload a video file',
    },
  ],
}
