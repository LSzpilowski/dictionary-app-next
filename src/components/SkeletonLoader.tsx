import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 opacity-0 animate-[fadeIn_0.4s_ease-out_forwards]">
      <Card>
        <CardHeader>
          <div className="h-8 bg-muted animate-pulse rounded w-32" />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-20 bg-muted animate-pulse rounded-md" />
            <div className="h-4 bg-muted animate-pulse rounded w-40" />
          </div>
        </CardContent>
      </Card>

      {[1, 2, 3].map((i) => (
        <Card key={i} style={{animationDelay: `${i * 0.1}s`}}>
          <CardHeader>
            <div className="h-4 bg-muted animate-pulse rounded w-24" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-4 bg-muted animate-pulse rounded w-full" />
            <div className="h-4 bg-muted animate-pulse rounded w-5/6" />
            <div className="h-4 bg-muted animate-pulse rounded w-4/6" />
          </CardContent>
        </Card>
      ))}

      <div className="grid grid-cols-2 gap-3 mt-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-40 bg-muted animate-pulse rounded-lg" style={{animationDelay: `${i * 0.1}s`}} />
        ))}
      </div>
    </div>
  );
};
