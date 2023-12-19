import { Nav } from '@/components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer'
import Head from 'next/head';
import FAV from './fav.ico'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Sharar Organization',
  // more to be added soon !!!
  description: 'Youth Organization working in Pakistan',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content="Sharar ORG" />
        <meta property="og:image" content="https://z-p4-instagram.fisb2-1.fna.fbcdn.net/v/t51.2885-19/119144966_320091485979486_6989211259288478698_n.jpg?stp=dst-jpg_s320x320&_nc_ht=z-p4-instagram.fisb2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=fXSrO6cdO3YAX_Kn-LA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB7Gs8bdXGLWWqhIspruTcR3dDHoZa6cy6BHVcWjkmN5Q&oe=65119E96&_nc_sid=8b3546" />
        <meta property="og:description" content="Youth Organization working in Pakistan" />
        <meta property="og:url" content="https://alshan-brutal.vercel.aoo" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <link rel="icon" href={FAV} /> 
      </Head>
      <body className={poppins.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
