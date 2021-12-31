
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','e19'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/les-copains-et-copines',
    component: ComponentCreator('/blog/les-copains-et-copines','ed8'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/actualite',
    component: ComponentCreator('/blog/tags/actualite','e09'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search','676'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','4d9'),
    routes: [
      {
        path: '/docs/Api-Platform/introduction',
        component: ComponentCreator('/docs/Api-Platform/introduction','b18'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Api-Platform/premiers-pas',
        component: ComponentCreator('/docs/Api-Platform/premiers-pas','9d5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Api-Platform/serialisation',
        component: ComponentCreator('/docs/Api-Platform/serialisation','3dd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Api-Platform/validation',
        component: ComponentCreator('/docs/Api-Platform/validation','9b3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bases-de-symfony/histoire-symfony',
        component: ComponentCreator('/docs/bases-de-symfony/histoire-symfony','95e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/bases-de-symfony/paradigme-mvc',
        component: ComponentCreator('/docs/bases-de-symfony/paradigme-mvc','2e8'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Connaissances-de-base/bases-algorithme/les-boucles',
        component: ComponentCreator('/docs/Connaissances-de-base/bases-algorithme/les-boucles','684'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Connaissances-de-base/bases-algorithme/logique-booleenne-et-structures-conditionnelles',
        component: ComponentCreator('/docs/Connaissances-de-base/bases-algorithme/logique-booleenne-et-structures-conditionnelles','808'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Connaissances-de-base/bases-algorithme/variables-operateurs-flux-entree-et-sortie',
        component: ComponentCreator('/docs/Connaissances-de-base/bases-algorithme/variables-operateurs-flux-entree-et-sortie','bdc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Connaissances-de-base/bases-api/api-rest',
        component: ComponentCreator('/docs/Connaissances-de-base/bases-api/api-rest','9a9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Connaissances-de-base/bases-api/introduction',
        component: ComponentCreator('/docs/Connaissances-de-base/bases-api/introduction','f5a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/base-de-linformatique',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/base-de-linformatique','2ab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/bases-d-internet/les-reseaux-d-internet',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/bases-d-internet/les-reseaux-d-internet','92b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/bases-d-internet/un-serveur-web',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/bases-d-internet/un-serveur-web','d5e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/books',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/books','ac4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/docus/nom-de-code-linux',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/docus/nom-de-code-linux','02c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/docus/une-contre-histoire-de-linternet',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/docus/une-contre-histoire-de-linternet','dea'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/histoire-de-l-informatique',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/histoire-de-l-informatique','86d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/client-serveur',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/client-serveur','b16'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns','125'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/les-bases-du-reseau',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/les-bases-du-reseau','33b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/tcp-ip',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/tcp-ip','05e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Culture-generale-en-informatique/un-ordinateur',
        component: ComponentCreator('/docs/Culture-generale-en-informatique/un-ordinateur','3e4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Notions-systeme/docker/docker-sous-symfony',
        component: ComponentCreator('/docs/Notions-systeme/docker/docker-sous-symfony','57b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Notions-systeme/docker/le-concept',
        component: ComponentCreator('/docs/Notions-systeme/docker/le-concept','639'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Notions-systeme/docker/passerelle-de-la-base-a-la-pratique',
        component: ComponentCreator('/docs/Notions-systeme/docker/passerelle-de-la-base-a-la-pratique','916'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Notions-systeme/linux/introduction',
        component: ComponentCreator('/docs/Notions-systeme/linux/introduction','4d3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/Notions-systeme/linux/les-commandes-de-base',
        component: ComponentCreator('/docs/Notions-systeme/linux/les-commandes-de-base','f8c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outils/notions-git/debuter-avec-git',
        component: ComponentCreator('/docs/outils/notions-git/debuter-avec-git','bfe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outils/notions-git/github-et-cie-different-de-git',
        component: ComponentCreator('/docs/outils/notions-git/github-et-cie-different-de-git','388'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outils/notions-git/introduction',
        component: ComponentCreator('/docs/outils/notions-git/introduction','622'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outils/notions-git/qu-est-ce-que-le-versionning',
        component: ComponentCreator('/docs/outils/notions-git/qu-est-ce-que-le-versionning','700'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outils/veille/sites',
        component: ComponentCreator('/docs/outils/veille/sites','2f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/outils/veille/youTube',
        component: ComponentCreator('/docs/outils/veille/youTube','d44'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/php/design-patterns',
        component: ComponentCreator('/docs/php/design-patterns','c33'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/php/introduction',
        component: ComponentCreator('/docs/php/introduction','39e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/php/poo',
        component: ComponentCreator('/docs/php/poo','c32'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/controleurs',
        component: ComponentCreator('/docs/symfony-5/controleurs','530'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/formulaires',
        component: ComponentCreator('/docs/symfony-5/formulaires','30a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/http_foundation',
        component: ComponentCreator('/docs/symfony-5/http_foundation','e20'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/introduction',
        component: ComponentCreator('/docs/symfony-5/introduction','843'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/modeles',
        component: ComponentCreator('/docs/symfony-5/modeles','e27'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/routage',
        component: ComponentCreator('/docs/symfony-5/routage','3ed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/services',
        component: ComponentCreator('/docs/symfony-5/services','d92'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/symfony-5/twig',
        component: ComponentCreator('/docs/symfony-5/twig','1a0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
