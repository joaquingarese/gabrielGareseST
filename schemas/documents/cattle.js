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
      name: 'race',
      type: 'string',
      title: 'Raza',
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
    {
      name: 'shortDescription',
      type: 'string',
      title: 'Descripción corta del Rodeo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      type: 'number',
      title: 'Categoría (edad) del Rodeo',
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
      name: 'video',
      type: 'object',
      title: 'Video de ganado',
      fields: [
        {
          name: 'url',
          type: 'url',
          title: 'Video URL',
        },
      ],
    },
  ],
}
