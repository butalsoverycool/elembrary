import React from 'react';
import styled, { css } from 'styled-components';
import { withTheme } from '../constants/Theme';

const MainStyled = styled.h1`
  /*  DEAFULT */
  font-size: ${p => p.theme.fontSize.mainTitle};
  text-align: center;

  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const MainTitle = withTheme(p => (
  <MainStyled {...p}>{p.children}</MainStyled>
));

const TitleStyled = styled.h2`
  font-size: ${p => p.theme.fontSize.title};
  margin: 10px;

  ${p => {
    if (p.style) {
      if (p.style.textAlign === 'center') return 'margin: auto;';
    }
  }}

  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const Title = withTheme(p => (
  <TitleStyled {...p}>{p.children}</TitleStyled>
));

const SubStyled = styled.h3`
  font-size: ${p => p.theme.fontSize.subtitle};
  margin: 10px;

  ${p => {
    if (p.style) {
      if (p.style.textAlign === 'center') return 'margin: auto;';
    }
  }}

  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const Subtitle = withTheme(p => (
  <SubStyled {...p}>{p.children}</SubStyled>
));

const StrongStyled = styled.span`
  ${p => p.bold !== false && 'font-weight: 700'};
  ${p => p.underline && 'text-decoration: underline'};
  ${p => p.italic && 'font-style: italic;'}

  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const Strong = withTheme(p => (
  <StrongStyled {...p}>{p.children}</StrongStyled>
));

const TextStyled = styled.p`
  ${p => p.bold && 'font-weight: 700'};
  ${p => p.underline && 'text-decoration: underline'};
  ${p => p.italic && 'font-style: italic;'}

  margin: auto 10px;
  ${p => {
    if (p.style) {
      if (p.style.textAlign === 'center') return 'margin: auto;';
    }
  }}

  ${p =>
    p.style &&
    css`
      ${p.style}
    `};
`;

export const Text = withTheme(p => (
  <TextStyled {...p}>{p.children}</TextStyled>
));
