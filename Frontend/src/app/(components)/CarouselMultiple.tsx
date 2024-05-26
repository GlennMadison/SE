import * as React from "react";
import { EventCard } from "./EventCard";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselMultiple({
    children,
    carouselItemClass = "md:basis-1/2 lg:basis-1/4",
}: {
    children: React.ReactNode;
    carouselItemClass?: string;
}) {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-6xl"
        >
            <CarouselContent>
                {Array.from({ length: 8 }).map((_, index) => (
                    <CarouselItem key={index} className={carouselItemClass}>
                        {children}
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
