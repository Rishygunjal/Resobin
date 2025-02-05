import styled from 'styled-components'
import Divider from 'components/shared/Divider'
import { Developer } from 'components/contact'
import ImgLaxman from 'assets/images/ProfileImg_Laxman.jpg'

const Container = styled.div`
  background: ${({ theme }) => theme.secondary};
  position: fixed;
  top: 4rem;
  right: 0px;
  width: 19rem;
  height: 100%;
  padding: 2rem;
  z-index: 7; /* To put searchbar at the bottom */
  box-shadow: inset 2px 0px 5px rgba(0, 0, 0, 0.3);
`

const Title = styled.h4`
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 30px;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
`

const DeveloperList = () => {
  return (
    <Container>
      <Title>Made with ❤️ by</Title>
      <Divider margin="1rem 0 1.5rem 0" />

      <Developer
        name="Laxman Desai"
        img={ImgLaxman}
        href="https://github.com/relaxxpls"
      />
      <Developer
        name="John Doe"
        img={ImgLaxman}
        href="https://github.com/relaxxpls"
        switchOrder
      />
    </Container>
  )
}

export default DeveloperList
