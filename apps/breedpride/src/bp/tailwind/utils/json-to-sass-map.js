import { mapKeys, each } from 'lodash-es';

export default (data) => {
  if (!data) {
    return;
  }

  data = JSON.parse(data);

  const getSCSS = (chunk) => {
    let scss = '';

    if (typeof chunk === 'object' && !Array.isArray(chunk)) {
      mapKeys(chunk, (value, key) => {
        scss += key + ': ';

        if (typeof value === 'object') {
          if (Array.isArray(value)) {
            scss += '(';
            each(value, (val1) => {
              if (Array.isArray(val1)) {
                each(val1, (val2) => {
                  scss += val2 + ' ';
                });
                scss = scss.slice(0, -1) + ', ';
              } else {
                scss += val1 + ', ';
              }
            });
            scss = scss.slice(0, -2);
            scss += ')';
          } else {
            scss += '(' + getSCSS(value) + ')';
          }
        } else {
          scss += getSCSS(value);
        }
        scss += ', ';
      });
      scss = scss.slice(0, -2);
    } else {
      scss += chunk;
    }

    return scss;
  };

  return '$' + getSCSS(data) + ';';
};
