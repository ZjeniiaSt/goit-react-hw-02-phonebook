import { ContainerStyle, ContainerTitle } from './Container.styled';

function Container({ title, children }) {
  return (
    <ContainerStyle>
      <ContainerTitle>{title}</ContainerTitle> {children}
    </ContainerStyle>
  );
}

export default Container;
