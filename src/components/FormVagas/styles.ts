import styled from 'styled-components'

export const Fomulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.Csecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`
export const BtnPesquisar = styled.button`
  background-color: ${(props) => props.theme.Cprincipal};
  border: 1px solid ${(props) => props.theme.Cprincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.Csecundaria};
  margin-left: 8px;
  cursor: pointer;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${(props) => props.theme.Cprincipal};
`
