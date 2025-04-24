import "./globals.css";

export const metadata = {
  title: "About - Boldo",
  description: "We love to make great things, things that matter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
