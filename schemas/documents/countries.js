export default {
  name: 'countries',
  type: 'document',
  title: 'Paises',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'salug',
      title: 'URL',
      description: 'URL que identifica el campo',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
  ],
}
