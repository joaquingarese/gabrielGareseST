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
    {name: 'description', title: 'Descripción del campo', type: 'array', of: [{type: 'block'}]},
    {
      name: 'gallery',
      title: 'Galeria de imagenes',
      description: 'Imagenes que va a aparecer abajo de la principal',
      type: 'array',
      of: [{type: 'imageWithAlt'}],
      validation: (Rule) => Rule.required().max(2).error('Solo se pueden agregar hasta 2 fotos'),
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Imagen',
    },
  ],
}
