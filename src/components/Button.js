import React from "react";
import styled, { css } from "styled-components";
import { selectorAlias } from "../constants/helperFuncs";
import * as preset from "../constants/preset";

const ButtonStyled = styled.button`
    /* DEFAULT PROPS */
    
    ${p => p.default}
    
    transition: ${({ theme, transition }) =>
      !transition
        ? theme.transition.fast
        : preset.transition.includes(transition)
        ? theme.transition[transition]
        : transition};

	&:hover {
        ${({ inverted, mode, themeHandler }) => {
          let color = "secondaryStrong";

          if (mode) color = "primaryStrong";

          return `
                color: ${themeHandler({
                  mode,
                  colorType: "primaryStrong",
                  inverted,
                })};
                background: ${themeHandler({
                  mode,
                  colorType: "secondaryStrong",
                  inverted,
                })};
            `;
        }}
	}

    /* OPTIONAL PROPS */

    ${({ mode, color, bg, border, shadow, inverted, theme, themeHandler }) => {
      // color
      const pickColor = () => {
        if (color) return color;

        return themeHandler({ mode, colorType: "primary", inverted });
      };

      // bg
      const pickBg = () => {
        if (bg) return bg;

        return themeHandler({ mode, colorType: "secondary", inverted });
      };

      // border
      const pickBorder = () => {
        if (!border) return null;

        const { color, size, type } = theme.border;

        if (typeof border === "string") {
          if (border.indexOf(" ") >= 0) return border;
          else return `${border} ${size} ${type}`;
        } else {
          return `${color({ mode, inverted })} ${size} ${type}`;
        }
      };

      // shadow
      const pickShadow = () => {
        if (typeof shadow === "string") {
          if (shadow.indexOf(" ") >= 0) return shadow;

          return theme.shadow[shadow];
        }

        if (shadow) return theme.shadow.medium;
      };

      return `
            color: ${pickColor()};
            background: ${pickBg()};
            border: ${pickBorder()};
            box-shadow: ${pickShadow()};
        `;
    }}
    
    ${({ size, theme }) => size && `font-size: ${theme[size]};`}

    ${({ unmarkable }) =>
      unmarkable &&
      `
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        `}

    /* CUSTOM STYLE */

    ${({ hoverStyle }) =>
      hoverStyle &&
      css`
        &:hover {
          ${hoverStyle}
        }
      `}
    
    ${({ customStyle }) => css`
      ${customStyle}
    `};
`;

ButtonStyled.defaultProps = {
  default: {
    fontSize: "1rem",
    margin: "10px",
    padding: "5px 10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    outline: "none",
  },
};

/* 
PROPS
**prop = default (info)**

id = '' (string)
className = '' (string)
text = '' (string)
color = 'primary' (string, options: primary/secondary)
bg = 'secondary' (string, options: primary/secondary)
border = false (boolean or color or css values, if true: 'primary solid 2px') 
shadow = false (boolean or option-str or css value, options: light/medium/dark, if true: 'medium')
inverted = false (boolean, if true: 'primary' <--> 'secondary') 
disabled = false (boolean)
unmarkable = true (boolean, same as unselectable content)
hoverStyle = none (obj or string or array with mixed types (anything that can inject css``). NOTE: is injected "&:hover {*here*}")
customStyle = none (obj or string or array with mixed types (anything that can inject css``)
onClick = ()
size = 'medium' (string, options: large/medium/small)
transition = 'fast' (string, options: either keyword none/fast/medium/slow or custom time)
*/

const Button = ({
  id = "",
  className = "",
  text = "",
  unmarkable = true,
  ...props
}) => {
  return (
    <ButtonStyled
      id={selectorAlias(id).replace(/ /g, "-")}
      className={selectorAlias(className)}
      unmarkable={unmarkable}
      {...props}
    >
      {String(text)}
    </ButtonStyled>
  );
};

export default Button;
