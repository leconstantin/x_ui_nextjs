"use client";
import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {
  return (
    <div>
      <IKImage
        urlEndpoint={urlEndpoint}
        path="general/post.jpeg"
        width={400}
        height={400}
        alt="Alt text"
      />
    </div>
  );
}
