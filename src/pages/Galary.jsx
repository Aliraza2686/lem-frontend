'use client';

import { GalleryComponent } from "../components/atoms/GalleryComponent";
import { NavLayout } from "../components/layouts/NavLayout";


export function Gallery() {

    return (
        <NavLayout>
            <main className="min-h-screen bg-background">
                {/* Header */}
                <header className="py-12 md:py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight text-balance">
                        Photo Gallery
                    </h1>
                    <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto px-4">
                        View real images of our Himalayan salt products, packaging, and sourcing environment based in Khewra, Pakistan. All photos reflect actual materials and export-ready handling.
                    </p>
                </header>

                {/* Gallery Section */}
                <section className="container mx-auto px-4 pb-20">
                    <GalleryComponent />
                </section>
            </main>
        </NavLayout>
    )
}
