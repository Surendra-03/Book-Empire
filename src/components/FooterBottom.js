import {
  FooterHeadContainer,
  FooterHeadText,

} from './Styles';

const FooterBottom = () => {
    return (
      
        <FooterHeadContainer>
            <FooterHeadText>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                Library 
            </FooterHeadText>
        </FooterHeadContainer>
    );
  };
  
export default FooterBottom;
