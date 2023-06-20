export default {
  name: 'information',
  type: 'document',
  title: 'Informacion',
  fields: [
    {
      name: 'customDate',
      type: 'date',
      title: 'Fecha de la informacion (solamente el último dia de la semana que marca ACG)',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'novillos',
      type: 'number',
      title: 'Precio (USD) Novillos',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cows',
      type: 'number',
      title: 'Precio (USD) Vacas',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'vaquillonas',
      type: 'number',
      title: 'Precio (USD) Vaquillonas',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'corderoPesado',
      type: 'number',
      title: 'Precio (USD) Cordero Pesado',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'capones',
      type: 'number',
      title: 'Precio (USD) Capones',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ovejas',
      type: 'number',
      title: 'Precio (USD) Ovejas',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'vacunos',
      type: 'number',
      title: 'Mercado de Faenas Vacunos',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ovinos',
      type: 'number',
      title: 'Mercado de Faenas Ovinos',
      validation: (Rule) => Rule.required(),
    },
  ],
}
