import React from "react";
import Image from "./Image";

export default function PostInfo() {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <Image path="icons/infoMore.svg" w={16} h={16} alt="" />
    </div>
  );
}
