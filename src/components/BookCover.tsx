"use client";

import { cn } from "@/lib/utils";
import BookCoverSvg from "./BookCoverSvg";
import Image from "next/image";
import { IKImage } from "imagekitio-next";
import config from "@/lib/config";

type BookCoverVariant = "small" | "default" | "wide";

interface BookCoverProps {
  coverColor?: string;
  variant?: BookCoverVariant;
  className?: string;
  coverImage?: string;
}

const variantStyles: Record<BookCoverVariant, string> = {
  small: "book-cover_small",
  default: "book-cover",
  wide: "book-cover_wide",
};

export default function BookCover({
  className,
  variant = "default",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: BookCoverProps) {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className,
      )}
    >
      <BookCoverSvg coverColor={coverColor} />
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <IKImage
          path={coverImage}
          urlEndpoint={config.env.imagekit.urlEndpoint}
          alt="Book Cover"
          fill
          className="rounded-sm object-fill"
          loading="lazy"
          lqip={{ active: true }}
        />
      </div>
    </div>
  );
}
