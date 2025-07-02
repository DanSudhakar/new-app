import React from 'react';

const Footer: React.FC = () => (
    <div style={{position: 'relative'}}>
        <div style={{display:'flex'}}><svg xmlns="http://www.w3.org/2000/svg" width="766" height="430" viewBox="0 0 766 430" fill="none">
<path d="M765.622 22H131.909C31.5488 22 -106.986 94.6402 -131.304 268.925C-155.623 443.209 -308.567 441.924 -382 419.496" stroke="url(#paint0_linear_56_2275)" stroke-width="43.7376"></path>
<defs>
<linearGradient id="paint0_linear_56_2275" x1="191.811" y1="430" x2="191.811" y2="22" gradientUnits="userSpaceOnUse">
<stop stop-color="#58FF7E"></stop>
<stop offset="1" stop-color="#AFD74A"></stop>
</linearGradient>
</defs>
</svg><svg xmlns="http://www.w3.org/2000/svg" width="1085" height="430" viewBox="0 0 1085 430" fill="none">
<path d="M0 22.0001H633.713C734.073 22.0001 872.608 94.6403 896.926 268.925C921.245 443.209 1074.19 441.924 1147.62 419.496" stroke="url(#paint0_linear_56_2274)" stroke-width="43.7376"></path>
<defs>
<linearGradient id="paint0_linear_56_2274" x1="573.811" y1="430" x2="573.811" y2="22.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#58FF7E"></stop>
<stop offset="1" stop-color="#AFD74A"></stop>
</linearGradient>
</defs>
</svg></div>
    <footer style={{
        position: 'absolute',
        top: '164px',
        width: '1249px',
        marginLeft: '162px',
        color: '#BBB',
        fontFamily: '"Open Sans"',
        fontSize: '19px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    }}>
            <div style={{ marginBottom: '1rem' }}>
                © 2025. See <a href="#" style={{ color: '#0072c6', textDecoration: 'underline' }}>Terms of Use</a> for more information.
            </div>
            <div>
                Deloitte refers to one or more of Deloitte Touche Tohmatsu Limited, a UK private company limited by guarantee (), its network of member firms, and their related entities. DTTL and each of its member firms are legally separate and independent entities. DTTL (also referred to as "Deloitte Global") does not provide services to clients. In the United States, Deloitte refers to one or more of the US member firms of DTTL, their related entities that operate using the "Deloitte" name in the United States and their respective affiliates. Certain services may not be available to attest clients under the rules and regulations of public accounting. Please see <a href="https://www.deloitte.com/about" target="_blank" rel="noopener noreferrer" style={{ color: '#0072c6', textDecoration: 'underline' }}>www.deloitte.com/about</a> to learn more about our global network of member firms.
            </div>
        </footer>
    </div>
);

export default Footer;