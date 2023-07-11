export default {
  name: 'farms',
  type: 'document',
  title: 'Campos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL que identifica al campo (apretar el botón "Generate") **',
      description: 'URL que identifica el campo',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'country',
      title: 'País al que corresponde el campo **',
      description: 'Se le debe asignar el país a donde pertenezca este campo',
      type: 'reference',
      to: [{type: 'countries'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      title: 'Departamento al cual pertece el campo **',
      description: 'Se le debe asignar el departamento al que pertenece el campo',
      type: 'reference',
      to: [{type: 'states'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transaction',
      type: 'string',
      title: 'Vende o Arrienda? **',
      options: {
        list: [
          {title: 'Vende', value: 'sell'},
          {title: 'Arrienda', value: 'rent'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'size',
      type: 'number',
      title: 'Tamaño del campo en hectáreas **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio por hectárea (USD/ha) **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'specialities',
      type: 'array',
      title: 'Especialidad **',
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'Agricola', value: 'agriculture'},
              {title: 'Ganadero', value: 'cattle'},
              {title: 'Forestal', value: 'forestry'},
              {title: 'Tambo', value: 'milking'},
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Breve descripción del campo **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'detail',
      title: 'Detalle completo del campo **',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Imagen principal del campo **',
      description: 'Imagen que va a aparecer en la foto mas grande en un principio',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Galeria de imagenes (máximo 7 imagenes)',
      description: 'Imagenes que van a aparecer abajo de la principal',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (Rule) => Rule.max(7).error('Solo se pueden agregar hasta 7 fotos'),
    },
  ],
}
