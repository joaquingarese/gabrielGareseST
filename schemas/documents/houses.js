export default {
  name: 'houses',
  type: 'document',
  title: 'Propiedades',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre (título) **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL que va a identificar a la casa (apretar el botón "Generate") **',
      description: 'URL que identifica a la casa',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'state',
      title:
        'Departamento al cual pertece la casa (escrito a mano acá, a diferencia de los campos) **',
      description: 'Se le debe asignar el departamento al que pertenece la casa',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transaction',
      type: 'string',
      title: 'Vende o Alquila? **',
      options: {
        list: [
          {title: 'Vende', value: 'sell'},
          {title: 'Alquila', value: 'rent'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'size',
      type: 'number',
      title: 'Tamaño de la casa en metros cuadrados **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rooms',
      type: 'number',
      title: 'Número de Dormitorios **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'bathrooms',
      type: 'number',
      title: 'Numero de Baños **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Precio de la casa en USD **',
      validation: (Rule) => Rule.required(),
    },
    {name: 'detail', title: 'Detalle', type: 'array', of: [{type: 'block'}]},
    {
      name: 'image',
      type: 'image',
      title: 'Imagen principal **',
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
