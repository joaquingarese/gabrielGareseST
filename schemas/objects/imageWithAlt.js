export default {
  name: 'imageWithAlt',
  type: 'object',
  title: 'Imagen con texto descriptivo para no videntes',
  fields: [
    {
      name: 'altText',
      title: 'Texto para no videntes',
      description:
        'Debe ser un texto que describa lo que aparece en la imagen (este texto no aparecerá en la web)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
    },
  ],
}
