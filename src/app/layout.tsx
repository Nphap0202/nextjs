'use client'
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from "@/components/app.header";
import AppFooter from "@/components/app.footer";
import Container from "react-bootstrap/Container";

//React toastify import
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

import AppTable from "@/components/app.table";
// import "./globals.css";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AppHeader/>
        <Container>
            {children}
        </Container>
        <AppFooter/>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        </body>
        </html>
    );
}
