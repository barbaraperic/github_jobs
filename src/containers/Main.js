import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button'
import Icon from '../components/Icon';
import Image from '../components/Image';

const MainWrapper = styled.main`
  max-width: 700px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
`

const Title = styled.h2`
  margin-right: 17px;
`

const StyledIcon = styled(Icon)`
  margin-top: 10px;
`

const TopContent = styled.div`
  margin-top: 35px;
  display: flex;
`

const Label = styled.p`
  font-size: 16px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainContent = styled.div`
  margin-top: 32px;

  p {
    line-height: 1.5;
  }
`

const Main = ({ className }) => {
  return (
    <MainWrapper className={className}>
      <Header>
        <Title>Front-End Software Engineer</Title>
        <Button variant="outline">Full Time</Button>
      </Header>
      <StyledIcon id="clock" text="5 days ago"/>
      <TopContent>
        <Image src="https://source.unsplash.com/weekly" alt="company logo" size="small"/>
        <Wrapper>
          <Label>Kaisto</Label>
          <Icon id="globe" text="NewYork"/>
        </Wrapper>
      </TopContent>
      <MainContent>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh praesent tristique. Pellentesque elit eget gravida cum sociis natoque. Malesuada pellentesque elit eget gravida cum sociis. Imperdiet sed euismod nisi porta lorem. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Proin fermentum leo vel orci porta non. Egestas congue quisque egestas diam. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Justo donec enim diam vulputate ut. Felis eget velit aliquet sagittis. Pellentesque elit eget gravida cum sociis. Placerat in egestas erat imperdiet sed euismod nisi porta lorem. Tellus id interdum velit laoreet id donec ultrices. Sed sed risus pretium quam vulputate. Magna eget est lorem ipsum dolor sit. Augue eget arcu dictum varius duis at. Integer quis auctor elit sed. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. A lacus vestibulum sed arcu non odio euismod lacinia at.
          Blandit turpis cursus in hac habitasse platea. Enim facilisis gravida neque convallis a cras semper. Odio ut enim blandit volutpat. Mattis pellentesque id nibh tortor id aliquet lectus proin. Eget arcu dictum varius duis at consectetur. Lobortis mattis aliquam faucibus purus in. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Pretium lectus quam id leo in vitae turpis. Massa ultricies mi quis hendrerit. Morbi non arcu risus quis varius quam. Mi ipsum faucibus vitae aliquet nec ullamcorper.
          Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Condimentum lacinia quis vel eros donec ac. Scelerisque eu ultrices vitae auctor. Fermentum iaculis eu non diam phasellus vestibulum lorem. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Et ultrices neque ornare aenean. Tellus elementum sagittis vitae et leo duis ut diam. Vitae purus faucibus ornare suspendisse sed nisi lacus. In fermentum posuere urna nec tincidunt praesent semper. Egestas integer eget aliquet nibh. Scelerisque in dictum non consectetur a erat nam at lectus.

          Faucibus a pellentesque sit amet porttitor. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lobortis mattis aliquam faucibus purus in. Integer feugiat scelerisque varius morbi enim nunc faucibus a pellentesque. Non curabitur gravida arcu ac tortor dignissim convallis. Gravida arcu ac tortor dignissim convallis aenean et. Sapien et ligula ullamcorper malesuada proin libero nunc. At elementum eu facilisis sed odio morbi. Non nisi est sit amet facilisis magna.
          Tincidunt eget nullam non nisi. Feugiat in fermentum posuere urna nec tincidunt. Tempus iaculis urna id volutpat lacus laoreet non. Faucibus interdum posuere lorem ipsum dolor sit. Sed blandit libero volutpat sed cras ornare arcu dui. Odio ut sem nulla pharetra diam sit. Urna condimentum mattis pellentesque id nibh tortor id. Mi bibendum neque egestas congue quisque egestas diam in arcu. Nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin fermentum leo. In cursus turpis massa tincidunt dui ut ornare lectus. Dui sapien eget mi proin. Et malesuada fames ac turpis. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Non enim praesent elementum facilisis leo vel fringilla. Tellus rutrum tellus pellentesque eu tincidunt tortor.  
        </p>
      </MainContent>
    </MainWrapper>
  )
}

export default Main