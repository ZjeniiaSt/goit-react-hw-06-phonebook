import PropTypes from 'prop-types';
import { ContainerStyle, ContainerTitle } from './Container.styled';

function Container({ title, children }) {
  return (
    <ContainerStyle>
      <ContainerTitle>{title}</ContainerTitle> {children}
    </ContainerStyle>
  );
}

export default Container;
Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};
