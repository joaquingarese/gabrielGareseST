export default {
  name: 'countries',
  type: 'document',
  title: 'Paises',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del pais **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL que identifica al País (apretar el botón "Generate") **',
      description: 'URL que identifica al País',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
  ],
}
