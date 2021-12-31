// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ma Roadmap 2022',
  tagline: 'Une Roadmap pour progresser en 2022 !',
  url: 'https://yoanbernabeu.github.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yoanbernabeu', // Usually your GitHub org/user name.
  projectName: 'Roadmap-Dev-Symfony', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yoanbernabeu/Roadmap-Dev-Symfony/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Roadmap 2022',
        logo: {
          alt: '🗺️',
          src: 'static/dev.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Voir la Roadmap',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/VachetVirginie',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} | Roadmap 2022 | Une Roadmap pour progresser en 2022 !`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'BH4D9OD16A',
        apiKey: 'a70846b936367f9fab41ed1f3f14a231',
        indexName: 'roadmap-dev-symfony',
      },
    }),
};

module.exports = config;
