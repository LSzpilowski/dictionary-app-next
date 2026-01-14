import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const SkeletonLoader: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 animate-fade-in">
      <Card>
        <CardHeader>
          <div className="skeleton-title w-32" />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="skeleton h-10 w-20" />
            <div className="skeleton-text w-40" />
          </div>
        </CardContent>
      </Card>

      {[1, 2, 3].map((i) => (
        <Card key={i} className={`stagger-${i}`}>
          <CardHeader>
            <div className="skeleton-text w-24" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="skeleton-text w-full" />
            <div className="skeleton-text w-5/6" />
            <div className="skeleton-text w-4/6" />
          </CardContent>
        </Card>
      ))}

      <div className="grid grid-cols-2 gap-3 mt-5">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`skeleton h-40 rounded-lg stagger-${i}`} />
        ))}
      </div>
    </div>
  );
};
