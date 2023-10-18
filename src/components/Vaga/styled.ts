import styled from 'styled-components'

export const ListaVaga = styled.li`
  border: 1px solid ${(props) => props.theme.Cprincipal};
  background-color: ${(props) => props.theme.Csecundaria};
  color: ${(props) => props.theme.Cprincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: ${(props) => props.theme.Cprincipal};
    color: ${(props) => props.theme.Csecundaria};
  }

  :hover a {
    border-color: ${(props) => props.theme.Cprincipal};
    background-color: ${(props) => props.theme.Csecundaria};
    color: ${(props) => props.theme.Cprincipal};
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.Csecundaria};
  background-color: ${(props) => props.theme.Cprincipal};
  color: ${(props) => props.theme.Csecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
