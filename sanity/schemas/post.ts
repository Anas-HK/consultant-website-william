import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
    }),
    defineField({
        name: 'stats',
        title: 'Stats',
        type: 'object',
        fields: [
            {name: 'growth', type: 'string', title: 'Growth'},
            {name: 'impact', type: 'string', title: 'Impact'},
        ]
    }),
    defineField({
        name: 'tags',
        title: 'Tags',
        type: 'array',
        of: [{type: 'reference', to: {type: 'tag'}}],
    }),
    defineField({
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: {type: 'category'},
    }),
    defineField({
        name: 'readTime',
        title: 'Read Time',
        type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
