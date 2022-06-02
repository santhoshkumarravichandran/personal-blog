import styled from 'styled-components';

export default function FooterBar() {
    const FooterContainer = styled.div`
        height: 20px;
        width: 100%;
        z-index: 99;
        background-color: black;
        color: white;
    `;
    return <FooterContainer> Copy right </FooterContainer>;
}
