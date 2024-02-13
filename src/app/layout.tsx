import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export const metadata = {
    title: {
        template: '%s | Acme',
        default: 'Acme',
    },
    openGraph: {
        title: 'Acme',
        description: 'Acme is a...',
    },
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
