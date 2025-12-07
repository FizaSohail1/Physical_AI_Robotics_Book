// @ts-check

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro', // docs/intro.md
    {
      type: 'category',
      label: 'Chapters',
      items: [
        'chapter-1-introduction',
        'chapter-2-fundamentals-robotics', 
        'chapter-3-robot-motion-navigation', 
        'chapter-4-robot-hardware-design', 
        'chapter-5-sensing-perception', 
      ],
    },
  ],
};

export default sidebars;
