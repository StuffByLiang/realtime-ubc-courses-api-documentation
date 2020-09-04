module.exports = {
  title: 'UBC Courses API Documentation',
  tagline: 'Satisfy all your developer needs',
  url: 'https://docs.ubccourses.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'stuffbyliang', // Usually your GitHub org/user name.
  projectName: 'UBC Courses API Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UBC Courses API',
      logo: {
        alt: 'UBC Courses API',
        src: 'favicon.ico',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'termsAndConditions/',
          label: 'Terms and Conditions',
          position: 'left',
        },
        {
          to: 'examples/',
          label: 'Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/StuffByLiang/realtime-ubc-courses-api',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/',
            },
            {
              label: 'Terms and Conditions',
              to: 'termsAndConditions/',
            },
            {
              label: 'Documentation GitHub',
              href: 'https://github.com/StuffByLiang/realtime-ubc-courses-api-documentation',
            },
            {
              label: 'API GitHub',
              href: 'https://github.com/StuffByLiang/realtime-ubc-courses-api',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Built by <a href="https://stuffbyliang.com">Liang</a> with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/StuffByLiang/realtime-ubc-courses-api-documentation/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/StuffByLiang/realtime-ubc-courses-api-documentation/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
