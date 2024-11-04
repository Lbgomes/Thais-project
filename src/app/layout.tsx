"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Thais project</title>
        </head>
      <body>
        <ThemeProvider theme={Theme}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
