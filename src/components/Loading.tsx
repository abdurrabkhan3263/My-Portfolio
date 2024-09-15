"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Loader } from "lucide-react";

interface LoadingProps {
  Children: React.ReactNode;
}

export default function Loading({ Children }: LoadingProps) {
  const [Loading, setLoading] = useState(true);
  const router = useRouter();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (Loading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <Loader size={64} className="animate-spin" />
      </div>
    );
  }

  return <>{Children}</>;
}
