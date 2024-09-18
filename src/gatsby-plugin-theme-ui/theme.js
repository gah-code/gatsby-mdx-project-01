import prism from '@theme-ui/prism/presets/theme-ui';
import vsDark from '@theme-ui/prism/presets/vs-dark.json';

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    secondary: '#119',
    accent: '#639',
    gray: '#666',
  },
  styles: {
    code: {
      ...vsDark,
    },
  },
};

// import vsDark from '@theme-ui/prism/presets/vs-dark.json';

// const theme = {
//   // ...theme
//   styles: {
//     code: {
//       ...vsDark,
//     },
//   },
// };
