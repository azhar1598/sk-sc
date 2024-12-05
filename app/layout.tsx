"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { Flex, MantineProvider, Stack } from "@mantine/core";
import { theme } from "@/theme";
import { queryClient } from "@/lib/queryClient";
import "@mantine/core/styles.css";
import "mantine-datatable/styles.layer.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/common/Sidebar";
import Header from "@/components/common/Header";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import "@mantine/carousel/styles.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
              <Notifications position="top-center" />

              <Flex align={"Flex-start"} justify={"Flex-start"} w={"100%"}>
                {pathname !== "/login" &&
                  pathname !== "/test" &&
                  pathname !== "/signup" &&
                  pathname != "/story-editor" && <Sidebar />}

                {/* {pathname != "/story-editor" &&
                      pathname !== "/login" &&
                      pathname !== "/signup" && <Header />} */}
                <Stack>
                  {pathname !== "/login" &&
                    pathname !== "/test" &&
                    pathname !== "/signup" && <Header />}

                  {children}
                </Stack>
              </Flex>
            </MantineProvider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
