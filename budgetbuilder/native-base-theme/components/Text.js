// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: '#a7a7a7',
    '.note': {
      color: '#a7a7a7',
      //color: '#fce303',
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
