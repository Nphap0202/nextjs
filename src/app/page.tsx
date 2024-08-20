'use client'
import Image from "next/image";
import styles from "./page.module.css";
import useSWR from "swr";
import style from "@/styles/app.module.css"
import Link from "next/link";
import Container from "react-bootstrap/Container";
import AppTable from "@/components/app.table";
import {useEffect, useState} from "react";
import Axios from "axios";

export default function Home() {

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const {data, error, isLoading} = useSWR("http://localhost:9000/todo", fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });
if(!data){
    return (
        <div>Loading....</div>
    )
}    // const [todo, setTodo] = useState("");
    // const fetchTodoData = () => {
    //     Axios.get("http://localhost:9000/todo").then((response) => {
    //        // setTodo(response.data);
    //         console.log("Data", response.data);
    //     });
    // };
    //
    // useEffect(() => {
    //      fetchTodoData();
    // }, []);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("http://localhost:9000/todo");
    //         const json = await res.json();
    //         console.log("dada", json);
    //     }
    //     fetchData();
    // }, []);
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
            <AppTable blogs={data}/>
        </div>
    );
}
