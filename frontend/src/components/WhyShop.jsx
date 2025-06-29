// components/WhyShopSection.tsx
"use client";

import { Truck, BadgeDollarSign, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Fast & Free Shipping",
    description: "We deliver your products quickly with no extra charges.",
  },
  {
    icon: <BadgeDollarSign className="w-8 h-8 text-primary" />,
    title: "Best Price Guarantee",
    description: "Get the best value with unbeatable prices every day.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Secure Payments",
    description: "Shop confidently with end-to-end encryption and protection.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Premium Quality",
    description: "Handpicked items that meet the highest standards.",
  },
];

export default function WhyShop() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Why Shop With Us?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
          Experience the difference with our hand-curated quality and service.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
