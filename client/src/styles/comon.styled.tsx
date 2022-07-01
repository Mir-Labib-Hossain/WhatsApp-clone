import styled from "styled-components";

interface RowProps {
  justifyContent?: string;
  alignItems?: string;
  flexDirectionColumn?: boolean;
  wrap?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirectionColumn }) => (flexDirectionColumn ? "column" : "row")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  flex-wrap: wrap;
  height: 100%;
`;

export const Col4 = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  @media screen and (max-width: 1100px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const Col1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Loading = styled.div`
  height: 120px;
  width: 100px;
  margin: auto;
  background-image: url(https://cursos.civika.edu.mx/extras/imagenes/loaders/loader06.gif);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Paragraph = styled.p<{ secondary?: boolean; align?: string; color?: string }>`
  color: ${({ secondary, color, theme }) => (secondary ? theme.secondaryText : color ? color : theme.primaryText)};
  text-align: ${({ align }) => align};
  font-weight: 400;
`;

export const Spanner = styled.span<{ align?: string; width?: string }>`
  color: ${({ theme }) => theme.theme};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width};
`;

export const ErrorText = styled.span`
  color: ${({ theme }) => theme.red};
  font-size: 12px;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 13px;
`;

export const Image = styled.img``;

export const Bg = styled.div<{ bg: string; height?: string }>`
  ${({ height }) => `height:${height}`};
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Div = styled.div<{ width?: string; height?: string }>`
  ${({ height, width }) => `height:${height};width:${width};`};
`;
export const Break = styled.br``;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border: 3px solid ${({ theme }) => theme.secondaryText};
  padding: 10px;
  border-radius: 20px;
  margin: 10px 0;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Header1 = styled.h1<{ color?: string }>`
  font-size: 52px;
  color: ${({ color, theme }) => (color ? theme.theme : theme.primaryText)};
  font-weight: 400;
`;
export const Header2 = styled.h1<{ align?: string }>`
  color: ${({ theme }) => theme.primaryText};
  text-align: ${({ align }) => align};
  width: 100%;
  font-size: 35px;
  font-weight: 400;
`;
export const Header3 = styled.h1<{ align?: string }>`
  color: ${({ theme }) => theme.primaryText};
  text-align: ${({ align }) => align};
  font-size: 22px;
  font-weight: 600;
`;
export const Icon = styled.i<{ color?: string }>`
  color: ${({ color, theme }) => (color ? color : theme.theme)};
  display: grid;
  margin-right: 5px;
  place-content: center;
`;

export const Button = styled.button<{ active?: boolean }>`
  border: 2px solid ${({ theme }) => theme.theme};
  margin: 0 auto;
  padding: 10px;
  min-height: 40px;
  border-radius: 35px;
  cursor: pointer;
  font-weight: bold;
  min-width: 40px;

  i {
    color: ${({ theme }) => theme.theme};
    margin: 0;
  }
  :hover {
    background-color: ${({ theme }) => theme.theme}!important;
    color: ${({ theme }) => theme.primaryBg};
    i {
      color: white!important;
    }
  }
`;

export const InvisibleButton = styled.button`
  cursor: pointer;
`;

export const A = styled.a``;
