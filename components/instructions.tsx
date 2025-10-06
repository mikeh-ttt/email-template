"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function GmailInstructionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="w-full bg-transparent">
          <HelpCircle className="mr-2 h-4 w-4" />
          How to add to Gmail
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            How to Add Your Signature to Gmail
          </DialogTitle>
          <DialogDescription>
            Follow these simple steps to set up your email signature in Gmail
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Copy your signature</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Click the "Copy signature" button above to copy your signature
                  to your clipboard.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Open Gmail Settings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Go to{" "}
                  <a
                    href="https://mail.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Gmail
                  </a>
                  , click the gear icon in the top right corner, and select "See
                  all settings".
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">
                  Navigate to the Signature section
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scroll down to the "Signature" section in the General tab.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">
                  Create or edit your signature
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Click "+ Create new" to add a new signature, or select an
                  existing one to edit. Give it a name if creating a new one.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Paste your signature</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Click in the signature text box and paste your signature using
                  Ctrl+V (Windows) or Cmd+V (Mac). The formatting should be
                  preserved.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                6
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Set signature defaults</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose when to use this signature in the "Signature defaults"
                  section:
                </p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                  <li>
                    For new emails: Select your signature from the dropdown
                  </li>
                  <li>
                    On reply/forward: Choose if you want the signature included
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold flex-shrink-0">
                7
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Save your changes</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scroll to the bottom of the settings page and click "Save
                  Changes". Your signature is now ready to use!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 border border-border">
            <h4 className="font-semibold text-sm mb-2">💡 Pro Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • You can create multiple signatures for different purposes
              </li>
              <li>• Test your signature by sending yourself an email</li>
              <li>• Make sure all links work correctly before using it</li>
              <li>• Keep your signature concise and professional</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
