export default {
  name: 'farms',
  type: 'document',
  title: 'Campos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL',
      description: 'URL que identifica el campo',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'country',
      title: 'País al que corresponde el campo',
      description: 'Se le debe asignar el país a donde pertenezca este campo',
      type: 'reference',
      to: [{type: 'countries'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      title: 'Departamento al cual pertece el campo',
      description: 'Se le debe asignar el departamento al que pertenece el campo',
      type: 'reference',
      to: [{type: 'states'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transaction',
      type: 'string',
      title: 'Vende o Arrienda?',
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
      title: 'Tamaño del campo en hectáreas',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio por hectárea (USD/ha)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'specialities',
      type: 'array',
      title: 'Specialities',
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
      title: 'Descripción',
      validation: (Rule) => Rule.required(),
    },
    {name: 'detail', title: 'Detalle', type: 'array', of: [{type: 'block'}]},
    {
      name: 'image',
      type: 'image',
      title: 'Imagen',
    },
    {
      name: 'gallery',
      title: 'Galeria de imagenes',
      description: 'Imagenes que van a aparecer abajo de la principal',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (Rule) => Rule.required().max(2).error('Solo se pueden agregar hasta 2 fotos'),
    },
  ],
}
