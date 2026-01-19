/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utills";

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749547014/368171d2-f64c-42c5-9e7d-a4dea0a4b8c0_lk6jrz.jpg",
    alt: "Workplace",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945558/Himalayan_Rock_Salt_Candle_Holder__is_available_s6uszh.jpg",
    alt: "Salt Lick Block",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945557/Himalayan_Salt_-_Pink_Warmer__A_genuine_zomxzr.jpg",
    alt: "Handcrafted Salt Lamp",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945557/Himalayan_Salt_-_Pink_Warmer__A_genuine_zomxzr.jpg",
    alt: "Salt Table Lamp",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749546206/14e47b8d-93e8-447f-9f72-81d888aeeb0b_xqcfvo.jpg",
    alt: "Display Variety of Salt Lamps",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1749545146/About_this_item_Home_Decor__home_decor_items_such_egksqb.jpg",
    alt: "Natural Himalayan Salt Lamp",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945558/HSD_Pink_Himalayan_Salt_Rocks_1Kg___Food_Grade_xx7muw.jpg",
    alt: "Raw Pink Himalayan Salt",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1755945081/7ccf29e1-b647-4a76-8fb4-b24aa23b964f_jwhnxt.jpg",
    alt: "Himalayan Salt Mine",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810414/received_867262264765142_atqi8q.jpg",
    alt: "Salt Bricks",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810423/received_3613438468931285_xzarwb.jpg",
    alt: "Edible Himalayan Salt",
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810416/received_1278297286201813_sn1b82.jpg",
    alt: "Salt Rock Presentation",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dptmeakuy/image/upload/v1768810414/received_803925301281025_zt56ty.jpg",
    alt: "Pink Himalayan Salt",
    colSpan: 2,
    rowSpan: 2,
  },
];


export function GalleryComponent() {
    const [selectedImage, setSelectedImage] = useState(null)
    const [isLoaded, setIsLoaded] = useState({})

    const handleImageLoad = (id) => {
        setIsLoaded((prev) => ({ ...prev, [id]: true }))
    }

    const getSpanClasses = (colSpan, rowSpan) => {
        const colClass = colSpan === 2 ? "md:col-span-2" : "col-span-1"
        const rowClass = rowSpan === 2 ? "row-span-2" : "row-span-1"
        return `${colClass} ${rowClass}`
    }

    return (
        <>
            {/* GalleryComponent Grid with dense packing */}
            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3"
                style={{ gridAutoRows: "150px", gridAutoFlow: "dense" }}
            >
                {galleryImages.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                            "group relative overflow-hidden rounded-lg bg-muted cursor-pointer",
                            "transition-all duration-500 ease-out",
                            "hover:shadow-2xl hover:shadow-foreground/10 hover:z-10",
                            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                            getSpanClasses(image.colSpan, image.rowSpan),
                            isLoaded[image.id]
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-95"
                        )}
                        style={{
                            transitionDelay: `${index * 50}ms`,
                        }}
                        aria-label={`View ${image.alt} in full screen`}
                    >
                        <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className={cn(
                                "absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out",
                                "group-hover:scale-110"
                            )}
                            onLoad={() => handleImageLoad(image.id)}
                        />
                        {/* Overlay */}
                        <div
                            className={cn(
                                "absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent",
                                "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            )}
                        />
                        {/* Title */}
                        <div
                            className={cn(
                                "absolute bottom-0 left-0 right-0 p-3",
                                "translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            )}
                        >
                            <p className="text-background text-sm font-medium">{image.alt}</p>
                        </div>
                    </button>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className={cn(
                        "fixed inset-0 z-50 flex items-center justify-center",
                        "bg-background/95 backdrop-blur-md",
                        "animate-in fade-in duration-300"
                    )}
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelectedImage(null)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            setSelectedImage(null)
                        }
                    }}
                    aria-label={`Close full view of ${selectedImage.alt}`}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className={cn(
                            "absolute top-4 right-4 z-50 p-2 rounded-full",
                            "bg-muted/80 hover:bg-muted text-foreground",
                            "transition-colors duration-200",
                            "focus:outline-none focus:ring-2 focus:ring-ring"
                        )}
                        aria-label="Close full view"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Image Container */}
                    <div
                        className={cn(
                            "relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4",
                            "animate-in zoom-in-95 duration-300"
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src || "/placeholder.svg"}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Caption */}
                    <div
                        className={cn(
                            "absolute bottom-8 left-1/2 -translate-x-1/2",
                            "px-6 py-3 rounded-full",
                            "bg-muted/80 backdrop-blur-sm",
                            "animate-in slide-in-from-bottom-4 duration-500 delay-150"
                        )}
                    >
                        <p className="text-foreground font-medium">{selectedImage.alt}</p>
                    </div>
                </div>
            )}
        </>
    )
}
