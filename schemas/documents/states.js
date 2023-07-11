export default {
  name: 'states',
  type: 'document',
  title: 'Departamentos',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nombre del departamento **',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL',
      description: 'URL que identifica al departamento (apretar el botón "Generate) **',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    },
  ],
}
