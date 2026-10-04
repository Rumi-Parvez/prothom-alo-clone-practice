import type { Metadata } from "next";
import { Tiro_Bangla , Hind_Siliguri} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const Tiro_bangla = Tiro_Bangla({
  weight: "400",
  subsets: ["bengali"],
  variable: "--font-tiro-bangla"
});

// const Hindi_shiliguri = Hind_Siliguri({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["bengali"],
//   variable: "--font-hindi-shiliguri"
// });

export const metadata: Metadata = {
  title: "Prothom Alo",
  description: "A trusted daily usefull newsportal site.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      Data-theme="light"
      className={`${Tiro_bangla.className} h-full antialiased`}
    >
      <body suppressHydrationWarning className="px-40 min-h-full flex flex-col">
      
      <Navbar></Navbar>
      
      <main>
        {children}
      </main>
      
      
      </body>
    </html>
  );
}
