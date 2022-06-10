import {
  StyledHeader,
  HeaderText,
  HeaderImage,
  ImageFront,
  ImageBack
} from './styles/Header.styled';
import { Container } from './styles/Container.styled';
import { FlexSpaceBetween } from './styles/Flex.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <FlexSpaceBetween>
          <HeaderText>
            <h3>YEEEEEEEEEEE</h3>
            <h5>yessssir</h5>
            <button>yeeeee</button>
          </HeaderText>
          <HeaderImage>
            <ImageFront />
            <ImageBack />
          </HeaderImage>
        </FlexSpaceBetween>
      </Container>
    </StyledHeader>
  );
}
