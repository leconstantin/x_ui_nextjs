import React from "react";

interface ImageEditorProps {
  previewUrl: string;
  onClose: () => void;
}

export default function ImageEditor({ previewUrl, onClose }: ImageEditorProps) {
  return <div>ImageEditor</div>;
}
