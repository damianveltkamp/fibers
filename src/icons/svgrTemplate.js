const template = ({ componentName, imports, exports, props, jsx }, { tpl }) => {
  return tpl`
    ${imports};
    import { theme, styled } from '../../theme/theme';

    type Colors = typeof theme.colors;

    type IconProps = {
      size?: number;
      color?: Colors;
    }

    function SVG(${props}) {
      return ${jsx};
    }

    function ${componentName}({color, size}: IconProps) {
      const width = size ? size.toString() + 'px' : '25px'
      const height = size ? size.toString() + 'px' : '25px'

      const IconWrapper = styled('div', {
        display: 'flex',
        width: width,
        height: height,
        color: color ? theme.colors[color] : theme.colors.white
      });

      return (
        ${`
          <IconWrapper>
            ${`<SVG />`}
          </IconWrapper>
        `}
      )
    }

    ${exports};
`;
};

module.exports = template;
