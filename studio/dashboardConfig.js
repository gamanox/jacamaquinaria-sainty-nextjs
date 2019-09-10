export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d780f27e410f500b8c58199',
                  title: 'Sanity Studio',
                  name: 'jacamaquinaria-sainty-nextjs-studio',
                  apiId: '06ed475f-d834-4ade-b13c-11a57159d8e5'
                },
                {
                  buildHookId: '5d780f271abb9e0cf642bcde',
                  title: 'Landing pages Website',
                  name: 'jacamaquinaria-sainty-nextjs',
                  apiId: '857b8988-5d46-482a-8fd1-34f60594d3e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gamanox/jacamaquinaria-sainty-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://jacamaquinaria-sainty-nextjs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
