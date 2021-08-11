import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.color};
`;

export default function Home(): JSX.Element {
  return <Title>The year is {new Date().getFullYear()} 😒</Title>
}
