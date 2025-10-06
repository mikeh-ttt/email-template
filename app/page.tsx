"use client";

import { Form } from "@/components/form";
import { SignaturePreview } from "@/components/signature-preview";
import { Button } from "@/components/ui/button";
import { FormDataProvider } from "@/providers/FormDataProvider";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { useState } from "react";
export type DeviceMode = "desktop" | "tablet" | "mobile";

export interface SignatureData {
  name: string;
  jobPosition: string;
  linkedinUrl: string;
  linkedinDisplayName: string;
  phoneNumber: string;
}

export default function Home() {
  const [deviceMode, setDeviceMode] = useState<DeviceMode>("desktop");
  return (
    <FormDataProvider>
      <main className="flex min-h-screen flex-row items-center p-6 space-x-4  mx-auto">
        {" "}
        <Form />
        <div className="rounded-lg p-6 flex flex-col gap-4">
          <div className="flex flex-col items-center justify-start gap-4">
            <div className="flex items-start gap-4 w-full">
              {/* Device Mode Toggle */}
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1 ">
                <Button
                  variant={deviceMode === "mobile" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceMode("mobile")}
                  className="h-8 w-8 p-0"
                >
                  <Smartphone className="h-4 w-4" />
                  <span className="sr-only">Mobile view</span>
                </Button>
                <Button
                  variant={deviceMode === "tablet" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceMode("tablet")}
                  className="h-8 w-8 p-0"
                >
                  <Tablet className="h-4 w-4" />
                  <span className="sr-only">Tablet view</span>
                </Button>
                <Button
                  variant={deviceMode === "desktop" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setDeviceMode("desktop")}
                  className="h-8 w-8 p-0"
                >
                  <Monitor className="h-4 w-4" />
                  <span className="sr-only">Desktop view</span>
                </Button>
              </div>
            </div>

            <SignaturePreview deviceMode={deviceMode} />
          </div>
        </div>
      </main>
    </FormDataProvider>
  );
}
