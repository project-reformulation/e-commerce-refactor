import FooterSeller from "../components/FooterSeller/FooterSeller";
import Navseller from "../components/Navseller/Navseller";
import"../globals.css"
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white text-black">
          <Navseller/>
          {children}
          <FooterSeller/>
      </div>
        
      </body>
    </html>
  );
}
