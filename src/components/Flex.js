import React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../constants/Theme';

const defaultStyled = styled.div`
  ${p => !p.fullWidth && `max-width: 600px`};
  display: flex;

  ${p => p.color && `color: ${p.color}`};
  ${p => p.bg && `background: ${p.bg}`};

  padding: ${p =>
    p.padding && (typeof p.padding === 'string' ? p.padding : '20px')};

  ${p =>
    p.border &&
    (typeof p.border === 'string'
      ? p.border
      : `border: ${p.theme.border.color()} ${p.theme.border.size} ${
          p.theme.border.type
        }`)};
`;

const RowStyled = styled(defaultStyled)`
  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const Row = withTheme(p => <RowStyled {...p}>{p.children}</RowStyled>);

const ColumnStyled = styled(defaultStyled)`
  flex-direction: column;

  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const Column = withTheme(p => (
  <ColumnStyled {...p}>{p.children}</ColumnStyled>
));
