"use client";

import { DeviceMode } from "@/app/page";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormData } from "@/providers/FormDataProvider";
import useCopyRichText from "@/providers/useCopyRichText";
import {
  Archive,
  ArrowLeft,
  Copy,
  Menu,
  MoreVertical,
  Paperclip,
  Reply,
  Search,
  Star,
  Trash2,
} from "lucide-react";
import EmailSignature from "./email-signature";

interface SignaturePreviewProps {
  deviceMode: DeviceMode;
}

export function SignaturePreview({ deviceMode }: SignaturePreviewProps) {
  const { formData: data } = useFormData();
  const { richTextRef, copyToClipboard } = useCopyRichText();

  const getDeviceWidth = () => {
    switch (deviceMode) {
      case "mobile":
        return "max-w-[375px]";
      case "tablet":
        return "max-w-[768px]";
      case "desktop":
        return "max-w-full";
    }
  };

  const linkedinDisplayText = data["linked-url"]
    ? data["linked-display-name"] || data["linked-url"]
    : null;

  const renderEmailClient = () => {
    if (deviceMode === "mobile") {
      return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-border">
          {/* Mobile Email Header */}
          <div className="bg-background border-b border-border px-4 py-3 flex items-center justify-between">
            <ArrowLeft className="h-5 w-5 text-foreground" />
            <div className="flex items-center gap-3">
              <Archive className="h-5 w-5 text-muted-foreground" />
              <Trash2 className="h-5 w-5 text-muted-foreground" />
              <MoreVertical className="h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Email Content */}
          <div className="bg-white">
            {/* Email Header Info */}
            <div className="px-4 py-4 border-b border-border">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="font-semibold text-sm">
                    Re: Project Update
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Inbox
                  </div>
                </div>
                <Star className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {data.name ? data.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">
                    {data.name || "User Name"}
                  </div>
                  <div className="text-xs text-muted-foreground truncate">
                    to me
                  </div>
                </div>
                <div className="text-xs text-muted-foreground">10:30 AM</div>
              </div>
            </div>

            {/* Email Body */}
            <div className="px-4 py-4 text-sm leading-relaxed">
              <p className="mb-4">Hi there,</p>
              <p className="mb-4">
                Thank you for your email. I wanted to follow up on our previous
                conversation about the project timeline.
              </p>
              <p className="mb-4">Best regards,</p>

              {/* Signature */}
              <EmailSignature ref={richTextRef} />
            </div>
          </div>
        </div>
      );
    }

    if (deviceMode === "tablet") {
      return (
        <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-border">
          <div className="flex">
            {/* Email List Sidebar */}
            <div className="w-80 border-r border-border bg-muted/30">
              <div className="p-4 bg-primary/5 border-b border-border">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0">
                    {data.name ? data.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">
                      {data.name || "User Name"}
                    </div>
                    <div className="text-sm font-medium truncate mt-0.5">
                      Re: Project Update
                    </div>
                    <div className="text-xs text-muted-foreground truncate mt-1">
                      Thank you for your email...
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">10:30 AM</div>
                </div>
              </div>
              <div className="p-4 border-b border-border opacity-50">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold text-sm flex-shrink-0">
                    J
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold truncate">
                      John Smith
                    </div>
                    <div className="text-sm truncate mt-0.5">
                      Meeting Tomorrow
                    </div>
                    <div className="text-xs text-muted-foreground truncate mt-1">
                      Just confirming our meeting...
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">9:15 AM</div>
                </div>
              </div>
            </div>

            {/* Email Content */}
            <div className="flex-1 bg-white">
              {/* Email Header */}
              <div className="px-6 py-5 border-b border-border">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-xl font-semibold">Re: Project Update</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Star className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Archive className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    {data.name ? data.name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">
                      {data.name || "User Name"}
                    </div>
                    <div className="text-sm text-muted-foreground">to me</div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Today at 10:30 AM
                  </div>
                </div>
              </div>

              {/* Email Body */}
              <div className="px-6 py-6">
                <div className="text-sm leading-relaxed max-w-3xl">
                  <p className="mb-4">Hi there,</p>
                  <p className="mb-4">
                    Thank you for your email. I wanted to follow up on our
                    previous conversation about the project timeline and next
                    steps.
                  </p>
                  <p className="mb-4">Looking forward to hearing from you.</p>
                  <p className="mb-6">Best regards,</p>

                  {/* Signature */}
                  <EmailSignature ref={richTextRef} />
                </div>

                {/* Reply Actions */}
                <div className="flex gap-3 mt-8">
                  <Button>
                    <Reply className="mr-2 h-4 w-4" />
                    Reply
                  </Button>
                  <Button variant="outline">Forward</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Desktop view
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-2xl border border-border">
        <div className="flex">
          {/* Email List */}
          <div className="w-96 border-r border-border bg-muted/20">
            <div className="p-4 bg-primary/5 border-b border-border cursor-pointer">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold flex-shrink-0">
                  {data.name ? data.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-semibold text-sm truncate">
                      {data.name || "User Name"}
                    </div>
                    <div className="text-xs text-muted-foreground ml-2">
                      10:30 AM
                    </div>
                  </div>
                  <div className="text-sm font-medium truncate">
                    Re: Project Update
                  </div>
                  <div className="text-xs text-muted-foreground truncate mt-1">
                    Thank you for your email. I wanted to follow up...
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-border opacity-50 cursor-pointer hover:bg-muted/50">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-semibold flex-shrink-0">
                  J
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-semibold text-sm truncate">
                      John Smith
                    </div>
                    <div className="text-xs text-muted-foreground ml-2">
                      9:15 AM
                    </div>
                  </div>
                  <div className="text-sm truncate">Meeting Tomorrow</div>
                  <div className="text-xs text-muted-foreground truncate mt-1">
                    Just confirming our meeting for tomorrow...
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email Content */}
          <div className="flex-1 bg-white">
            {/* Email Header */}
            <div className="px-8 py-6 border-b border-border">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-semibold">Re: Project Update</h2>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Star className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Reply className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Archive className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-lg">
                  {data.name ? data.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div className="flex-1">
                  <div className="font-semibold">
                    {data.name || "User Name"}
                  </div>
                  <div className="text-sm text-muted-foreground">to me</div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Today at 10:30 AM
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="px-8 py-8">
              <div className="leading-relaxed max-w-4xl">
                <p className="mb-4">Hi there,</p>
                <p className="mb-4">
                  Thank you for your email. I wanted to follow up on our
                  previous conversation about the project timeline and discuss
                  the next steps we should take moving forward.
                </p>
                <p className="mb-4">
                  I believe we&apos;re making great progress and I&apos;m
                  excited to continue working together on this initiative.
                </p>
                <p className="mb-6">Best regards,</p>

                {/* Signature */}
                <EmailSignature ref={richTextRef} />
              </div>

              {/* Reply Actions */}
              <div className="flex gap-3 mt-10">
                <Button size="lg">
                  <Reply className="mr-2 h-4 w-4" />
                  Reply
                </Button>
                <Button variant="outline" size="lg">
                  Forward
                </Button>
                <Button variant="outline" size="lg">
                  <Paperclip className="mr-2 h-4 w-4" />
                  Attach
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "transition-all duration-300 mx-auto h-[600px] overflow-y-auto",
          getDeviceWidth()
        )}
      >
        {renderEmailClient()}
      </div>
      <Button onClick={copyToClipboard}>
        <Copy className="mr-2 h-4 w-4" />
        Copy Signature
      </Button>
    </div>
  );
}
