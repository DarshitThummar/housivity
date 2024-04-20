import { Header } from "@/components";
import "./globals.css";
import Providers from "@/redux/Provider";

export const metadata = {
  title: "Housivity",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
