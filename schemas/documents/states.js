export default {
  name: 'states',
  type: 'document',
  title: 'Departamentos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'slug',
      title: 'URL',
      description: 'URL que identifica al departamento',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
  ],
}
