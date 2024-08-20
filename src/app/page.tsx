'use client'
import Image from "next/image";
import styles from "./page.module.css";

import style from "@/styles/app.module.css"
import Link from "next/link";
import Container from "react-bootstrap/Container";
import AppTable from "@/components/app.table";

export default function Home() {

    return (
        <div>
            <ul>
                <li className={style['link']}>
                    <Link href="/facebook">Facebook</Link>
                </li>
                <li className={style['link']}>
                    <Link href="/tiktok">TikTok</Link>
                </li>
                <li className={style['link']}>
                    <Link href="/instagram">Instagram</Link>
                </li>
            </ul>
        </div>
    );
}
