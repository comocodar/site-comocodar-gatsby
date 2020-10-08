import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.background};

  h1 {
    margin-bottom: 48px;
    font-size: 64px;
  }

  p {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 32px;

    li + li {
      margin-left: 16px
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      transition: color 0.2s;

      svg {
        margin-bottom: 4px;
        position: relative;
        top: 0;
        transition: top 0.2s;
      }

      span {
        display: block;
      }

      &:hover {
        color: ${props => props.theme.colors.primary};

        svg {
          top: -8px;
        }
      }
    }
  }
`;