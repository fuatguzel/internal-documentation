// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smartface Documentation',
  tagline: 'Smartface Internal Documentation',
  url: 'https://smartface.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'smartface', // Usually your GitHub org/user name.
  projectName: 'internal-documentation', // Usually your repo name.
	plugins: [
		"plugin-image-zoom"
	],
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/smartface/internal-documentation/tree/main',
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
				logo: {
					alt: "Smartface Docs",
					src: "https://cdn.smartface.io/docs/logo.png",
				},
				items: [
					{
						href: "https://github.com/smartface",
						label: "GitHub",
						position: "right",
					},
				],
			},
      footer: {
				style: "dark",
				copyright: `Copyright © ${new Date().getFullYear()} Smartface, Inc. Built with Docusaurus.`,
			},
      prism: {
        theme: require('prism-react-renderer/themes/shadesOfPurple'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['swift','java','kotlin','bash','objectivec','http'],
      },
    }),
};

module.exports = config;
