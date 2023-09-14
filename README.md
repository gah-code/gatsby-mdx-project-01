# To do

Certainly! Here's a step-by-step guide to integrating the `gatsby-plugin-theme-ui` with Prism for syntax highlighting into your Gatsby project:

**Step 1: Install Required Packages**

You need to install the necessary packages:

```bash
npm install gatsby-plugin-theme-ui theme-ui prism-react-renderer
```

**Step 2: Create a `gatsby-plugin-theme-ui` Configuration**

In your Gatsby project's root directory, create a `gatsby-plugin-theme-ui` configuration file. You can create a `theme.js` file for this purpose.

```javascript
// src/gatsby-plugin-theme-ui/theme.js

import prism from '@theme-ui/prism/presets/theme-ui';

const theme = {
  // Your other theme settings here...

  // Extend the base theme with Prism theme settings
  styles: {
    ...prism,
  },
};

export default theme;
```

In this example, we're importing the Prism theme settings from `@theme-ui/prism/presets/theme-ui` and extending the base theme with these settings.

**Step 3: Configure the `gatsby-config.js` File**

In your `gatsby-config.js` file, add the `gatsby-plugin-theme-ui` plugin to your `plugins` array. Make sure it's placed before other plugins, especially those that modify the Markdown rendering pipeline.

```javascript
// gatsby-config.js

module.exports = {
  plugins: [
    // Other plugins...

    'gatsby-plugin-theme-ui', // Add this line
  ],
};
```

**Step 4: Use Prism for Syntax Highlighting**

In your Markdown or MDX files, you can now use triple backticks (```) to create code blocks, and Prism will be applied automatically with the theme you defined.

````markdown
```jsx
import React from 'react';

const MyComponent = () => {
  return <div>Hello, World!</div>;
};

export default MyComponent;
```
````

```

The code block above will be syntax-highlighted using Prism with the theme you configured in `gatsby-plugin-theme-ui`.

**Step 5: Customize the Prism Theme (Optional)**

If you want to customize the Prism theme, you can do so by overriding the `prism` object in your `theme.js` file (created in Step 2). Modify the colors, fonts, or any other Prism-specific settings to match your project's design.

With these steps, you'll have integrated Prism for syntax highlighting into your Gatsby project using the `gatsby-plugin-theme-ui` package and can easily customize its appearance to fit your project's theme.
```
