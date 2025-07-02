import React from 'react';
import Section2OurStory from './Section2OurStory';
import Footer from './Footer';
import CarouselSection from './CarouselSection';
import SalesServiceOverview from './SalesServiceOverview';
/*
To make your React application live and accessible via a URL, you need to deploy it to a hosting service. Here are the general steps:

1. Build your React app:
    Run `npm run build` or `yarn build` in your project directory. This creates a `build` folder with production-ready files.

2. Choose a hosting provider:
    - For static sites: Vercel, Netlify, GitHub Pages, Firebase Hosting, or AWS S3.
    - For custom domains or backend: Vercel, Netlify, or your own server.

3. Deploy:
    - For Vercel/Netlify: Sign up, connect your GitHub repo, and follow their deploy instructions.
    - For GitHub Pages: Push your build to a `gh-pages` branch and configure GitHub Pages in your repo settings.
    - For Firebase: Run `firebase init` and `firebase deploy`.

4. Share the provided URL with others.

Refer to your chosen provider's documentation for detailed steps.
*/
const Layout: React.FC = () => (
    <div
        style={{
            width: 1728,
            minHeight: '100vh',
            margin: '0 auto',
            background: '#0F0F0F',
            color: '#fff',
            boxSizing: 'border-box',
            position: 'relative',
        }}
    >
        {/* Content goes here */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 132 }}>
            {/* Left side: Deloitte name */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 54,
                    width: 220,
                    marginLeft: 42,
                    flexShrink: 0,
                    aspectRatio: '110/27',
                    color: '#fff',
                    fontSize: 48,
                    fontWeight: 700,
                    letterSpacing: 1,
                    paddingLeft: 24,
                }}
            >
                Deloitte.
            </div>
            {/* Center: Navigation */}
            <ul
                style={{
                    display: 'inline-flex',
                    padding: '24px 40px',
                    alignItems: 'center',
                    gap: 40,
                    borderRadius: 40,
                    border: '1px solid #F5F5F5',
                    background: 'linear-gradient(89deg, rgba(88, 255, 126, 0.59) 8.64%, rgba(175, 216, 74, 0.59) 101.47%)',
                    listStyle: 'none',
                    margin: 0,
                }}
            >
                {['Home', 'Our Story', 'S&S', 'Section'].map((item) => (
                    <li
                        key={item}
                        style={{
                            padding: '0 24px',
                            color: '#FFF',
                            fontFamily: '"Open Sans", sans-serif',
                            fontSize: 24,
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: 'normal',
                            borderRadius: 24,
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* Right side placeholder for spacing */}
            <div style={{ width: 220, marginRight: 42 }} />
            <div
                style={{
                    position: 'absolute',
                    right: 32,
                    top: '-258px', // Moves the ellipse up to show only 25% at the top
                    width: 386,
                    height: 386,
                    flexShrink: 0,
                    borderRadius: '50%',
                    border: '70px solid #8FE55D',
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 0,
                }}
            />
        </div>
        <div style={{
            position: 'relative', height: 700,
                }}>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(0%, -50%)',
                    width: 193,
                    height: 386,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                    zIndex: 1,
                    right: 0,
                }}
            >
                <div
                    style={{
                        width: 386,
                        height: 386,
                        borderRadius: 386,
                        border: '70px solid #8FE55D',
                        boxSizing: 'border-box',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        background: 'transparent',
                    }}
                />
            </div>
            <div style={{
                position: 'absolute',}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1728" height="693" viewBox="0 0 1728 693" fill="none">
                    <path d="M-1.5 34H969.262C1123 34 1335.22 145.275 1372.47 412.255C1409.72 679.234 1644.01 677.266 1756.5 642.91" stroke="#1F2022" strokeWidth="67"/>
                </svg>
            </div>
            <div style={{
                position: 'absolute',}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="1728" height="693" viewBox="0 0 1728 693" fill="none">
                    <path d="M-1.5 659H969.262C1123 659 1335.22 547.725 1372.47 280.745C1409.72 13.7659 1644.01 15.7338 1756.5 50.0903" stroke="url(#paint0_linear_56_2191)" strokeWidth="67"/>
                    <defs>
                    <linearGradient id="paint0_linear_56_2191" x1="877.5" y1="34" x2="877.5" y2="659" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#58FF7E"/>
                    <stop offset="1" stopColor="#AFD74A"/>
                    </linearGradient>
                    </defs>
                </svg>
            </div>
            <div
                style={{
                width: 934,
                marginLeft: 161,
                marginTop: 48,
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                paddingTop: 84,
                }}>
                <div>
                    <span
                        style={{
                        color: '#D7FF75',
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 64,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        }}
                    >
                        Lead Boldly
                    </span>
                    <span
                        style={{
                        color: '#FFF',
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 64,
                        fontStyle: 'normal',
                        fontWeight: 700,
                        lineHeight: 'normal',
                        marginLeft: 16,
                        }}
                    >
                        , Innovate Fearlessly
                    </span>
                </div>
                <div
                style={{
                    color: '#FFF',
                    fontFamily: '"Open Sans", sans-serif',
                    fontSize: 24,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                }}
                >
                Connecting the dots with us. Since the beginning, Deloitte has been about creating connections. With our clients, our talent and our communities. Connecting with leaders far and wide, we are changing the world—making an impact that matters.
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 40,
                        borderRadius: 40,
                        border: '1px solid #F5F5F5',
                        background: 'linear-gradient(90deg, #ADD74A 0%, #58FF7E 100%)',
                        width: 'max-content',
                        height: 81,
                        padding: '24px 40px',
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 20,
                        fontWeight: 600,
                        color: '#0F0F0F',
                        cursor: 'pointer',
                        justifyContent: 'center',
                    }}
                >
                    <div
                    style={{
                        color: '#0F0E13',
                        fontFamily: '"Open Sans", sans-serif',
                        fontSize: 24,
                        fontStyle: 'normal',
                        lineHeight: 'normal',
                    }}
                >
                    Discover our services
                </div>
                </div>
            </div>

        </div>
        <Section2OurStory/>
        <SalesServiceOverview />
        <div style={{paddingBottom:95,paddingTop:95,backgroundColor: 'black'}}>
            <CarouselSection />
        </div>
        <Footer />
    </div>
);

export default Layout;
