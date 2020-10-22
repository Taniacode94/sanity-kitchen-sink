export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f917b5ce03be3026cf5e1ed',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wdoiuq9t',
                  apiId: 'f0fb1138-bdbd-45b1-a25f-0695d5855ace'
                },
                {
                  buildHookId: '5f917b5dd5cf3600a3b2cc23',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uzzejhyw',
                  apiId: 'f2a0873b-7cfd-4fcf-a036-4e6bbcd0ffbc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Taniacode94/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uzzejhyw.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
