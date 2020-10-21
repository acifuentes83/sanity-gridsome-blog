export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f9098e5b4acb62f1424692b',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-gwz65364',
                  apiId: 'fe21559f-e007-4a8f-b273-8c1bb2b99eb5'
                },
                {
                  buildHookId: '5f9098e58a1d2534b6eb63f0',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-s53e4ksy',
                  apiId: '370b4fb2-424a-4d37-b884-fe041e5c23c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/acifuentes83/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-s53e4ksy.netlify.app', category: 'apps'}
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
