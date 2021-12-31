
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug','3cd'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug/config',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug/config','131'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug/content',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug/content','044'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug/globalData',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug/globalData','022'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug/metadata',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug/metadata','7ac'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug/registry',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug/registry','ce3'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/__docusaurus/debug/routes',
    component: ComponentCreator('/Roadmap-Dev-Symfony/__docusaurus/debug/routes','b53'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/blog',
    component: ComponentCreator('/Roadmap-Dev-Symfony/blog','d8c'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/blog/archive',
    component: ComponentCreator('/Roadmap-Dev-Symfony/blog/archive','30a'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/blog/les-copains-et-copines',
    component: ComponentCreator('/Roadmap-Dev-Symfony/blog/les-copains-et-copines','97c'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/blog/tags',
    component: ComponentCreator('/Roadmap-Dev-Symfony/blog/tags','6d6'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/blog/tags/actualite',
    component: ComponentCreator('/Roadmap-Dev-Symfony/blog/tags/actualite','d20'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/markdown-page',
    component: ComponentCreator('/Roadmap-Dev-Symfony/markdown-page','743'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/search',
    component: ComponentCreator('/Roadmap-Dev-Symfony/search','524'),
    exact: true
  },
  {
    path: '/Roadmap-Dev-Symfony/docs',
    component: ComponentCreator('/Roadmap-Dev-Symfony/docs','578'),
    routes: [
      {
        path: '/Roadmap-Dev-Symfony/docs/Api-Platform/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Api-Platform/introduction','1aa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Api-Platform/premiers-pas',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Api-Platform/premiers-pas','5cf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Api-Platform/serialisation',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Api-Platform/serialisation','2c5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Api-Platform/validation',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Api-Platform/validation','cff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/bases-de-symfony/histoire-symfony',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/bases-de-symfony/histoire-symfony','232'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/bases-de-symfony/paradigme-mvc',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/bases-de-symfony/paradigme-mvc','64b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-algorithme/les-boucles',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-algorithme/les-boucles','381'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-algorithme/logique-booleenne-et-structures-conditionnelles',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-algorithme/logique-booleenne-et-structures-conditionnelles','d63'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-algorithme/variables-operateurs-flux-entree-et-sortie',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-algorithme/variables-operateurs-flux-entree-et-sortie','d2a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-api/api-rest',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-api/api-rest','f93'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-api/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Connaissances-de-base/bases-api/introduction','2bf'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/bases-d-internet/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/bases-d-internet/introduction','b31'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/bases-d-internet/les-reseaux-d-internet',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/bases-d-internet/les-reseaux-d-internet','961'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/bases-d-internet/un-serveur-web',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/bases-d-internet/un-serveur-web','45d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/books',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/books','66b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/docus/une-contre-histoire-de-linternet',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/docus/une-contre-histoire-de-linternet','92d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/histoire-de-l-informatique',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/histoire-de-l-informatique','942'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/introduction','2fd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/client-serveur',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/client-serveur','31d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/dhcp-dns','62d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/les-bases-du-reseau',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/les-bases-du-reseau','66b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/tcp-ip',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/Les-bases-des-reseaux/tcp-ip','6a5'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/un-ordinateur',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Culture-generale-en-informatique/un-ordinateur','ada'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/intro',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/intro','200'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Notions-systeme/docker/docker-sous-symfony',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Notions-systeme/docker/docker-sous-symfony','fa1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Notions-systeme/docker/le-concept',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Notions-systeme/docker/le-concept','992'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Notions-systeme/docker/passerelle-de-la-base-a-la-pratique',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Notions-systeme/docker/passerelle-de-la-base-a-la-pratique','8ee'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Notions-systeme/linux/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Notions-systeme/linux/introduction','8ec'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/Notions-systeme/linux/les-commandes-de-base',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/Notions-systeme/linux/les-commandes-de-base','771'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/outils/notions-git/debuter-avec-git',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/outils/notions-git/debuter-avec-git','787'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/outils/notions-git/github-et-cie-different-de-git',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/outils/notions-git/github-et-cie-different-de-git','95c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/outils/notions-git/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/outils/notions-git/introduction','7ad'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/outils/notions-git/qu-est-ce-que-le-versionning',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/outils/notions-git/qu-est-ce-que-le-versionning','917'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/php/design-patterns',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/php/design-patterns','7a9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/php/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/php/introduction','80e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/controleurs',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/controleurs','b87'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/formulaires',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/formulaires','43d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/http_foundation',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/http_foundation','abc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/introduction',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/introduction','471'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/modeles',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/modeles','c4c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/routage',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/routage','d91'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/services',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/services','367'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/Roadmap-Dev-Symfony/docs/symfony-5/twig',
        component: ComponentCreator('/Roadmap-Dev-Symfony/docs/symfony-5/twig','23e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/Roadmap-Dev-Symfony/',
    component: ComponentCreator('/Roadmap-Dev-Symfony/','12f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
