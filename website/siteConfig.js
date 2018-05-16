/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Marvin',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/user_profil_marvin.jpg',
    infoLink: 'https://www.slaslog.de',
    pinned: true,
  },
];

const siteConfig = {
  title: 'adminDōjō' /* title for your website */,
  tagline: 'hands-on sysadmin training',
  url: 'https://admindojo.org' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'admindojo-website',
  organizationName: 'admindojo',
  cname: 'admindojo.org',

  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
   // {doc: 'getting-started', label: 'Trainings'},
   // {page: 'help', label: 'Help'},
  //  {page: 'about', label: 'About'},
  //  {blog: true, label: 'Blog'},
  ],

  // If you have users set above, you add it here:
  /*users,*/

  /* path to images for header/footer
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg', */
  headerIcon: '',
  footerIcon: '',
  favicon: 'img/favicon/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#61615e',
    secondaryColor: '#d66523',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' admindojo',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/favicon.png',
  twitterImage: 'img/favicon.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
