"use client";

import New from "./_components/New/New";
import Popular from "./_components/Popular/Popular";
import Slider from "./_components/Slider/Slider";

// import { useEffect, useState } from "react";
// import Button from "@/components/ui/Button/Button";

export default function Home() {
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   async function fetchPosts() {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/posts",
  //       );

  //       if (!response.ok) {
  //         throw new Error(`HTTP ошибка! Статус: ${response.status}`);
  //       }

  //       const data = await response.json();

  //       setPosts(data);
  //       setLoading(false);
  //     } catch (e) {
  //       console.log(e);
  //       setError("Ошибка получения данных");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <div>
      <Slider />
      <Popular />
      <New />
    </div>
  );
}
