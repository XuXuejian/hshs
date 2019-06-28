import styled from 'styled-components'

const Input = styled.input`
  border: 1px solid rgba(84, 92, 99, 0.6);
  height: 40px;
  width: 100%;
  padding: 6px;
  background-color: #fff;
  color: #1c1f21;
`
const input = props => {
  return <Input {...props} />
}

export default input
