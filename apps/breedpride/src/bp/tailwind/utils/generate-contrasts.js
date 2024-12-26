import { contrast } from 'chroma-js';
import { forEach, fromPairs, map } from 'lodash-es';

/**
 * Generates contrasting counterparts of the given palette.
 * The provided palette must be in the same format with
 * default Tailwind color palettes.
 *
 * @param palette
 * @private
 */
const generateContrasts = (palette) => {
  const lightColor = '#FFFFFF';
  let darkColor = '#FFFFFF';

  // Iterate through the palette to find the darkest color
  forEach(palette, (color) => {
    darkColor =
      contrast(color, '#FFFFFF') > contrast(darkColor, '#FFFFFF')
        ? color
        : darkColor;
  });

  // Generate the contrasting colors
  return fromPairs(
    map(palette, (color, hue) => [
      hue,
      contrast(color, darkColor) > contrast(color, lightColor)
        ? darkColor
        : lightColor,
    ])
  );
};

export default generateContrasts;
