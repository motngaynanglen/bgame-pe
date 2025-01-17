"use client"
import contentApiRequest from "@/src/apiRequests/content";
import { useEffect, useState } from "react";

export default function AboutUs() {
    const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await contentApiRequest.getAboutUs();
        setContent(response.data);
      } catch (error) {
        console.error('Error fetching content', error);
      }
    };

    fetchData();
  }, []);
    
    return (
        <>
            {JSON.stringify(content)}
        </>
    );
}