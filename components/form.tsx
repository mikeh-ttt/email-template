"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import { useFormData } from "@/providers/FormDataProvider";
import { useState } from "react";

export function Form() {
  const { formData, updateFormData } = useFormData();

  const handleChange = (key: string, value: string) => {
    updateFormData({ [key]: value });
  };

  const name = formData.name || "";
  const jobPosition = formData["job-position"] || "";
  const linkedinUrl = formData["linked-url"] || "";
  const linkedinDisplayName = formData["linked-display-name"] || "";
  const phoneNumber = formData.phone || "";
  
  // Job position suggestions
  const jobPositionOptions = [
    { value: "Software Engineer", label: "Software Engineer" },
    { value: "Product Manager", label: "Product Manager" },
    { value: "UX Designer", label: "UX Designer" },
    { value: "Data Scientist", label: "Data Scientist" },
    { value: "Marketing Specialist", label: "Marketing Specialist" },
    { value: "Project Manager", label: "Project Manager" },
    { value: "CEO", label: "CEO" },
    { value: "CTO", label: "CTO" },
    { value: "CFO", label: "CFO" },
    { value: "COO", label: "COO" },
  ];

  return (
    <Card className="w-full max-w-md p-6">
      <div className="space-y-1 mb-4">
        <h1 className="text-2xl font-semibold leading-none tracking-tight">
          Email signature generator
        </h1>
      </div>

      <div className="space-y-5">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>

        {/* Job Position (uses same key: "job-position") */}
        <div className="space-y-2">
          <Label htmlFor="jobPosition">Job Position</Label>
          <Combobox
            options={jobPositionOptions}
            value={jobPosition}
            onChange={(value) => handleChange("job-position", value)}
            placeholder="Enter or select your job position"
            emptyMessage="No matching job positions found."
            allowCustomValue={true}
          />
        </div>

        {/* LinkedIn URL (uses same key: "linked-url") */}
        <div className="space-y-2">
          <Label htmlFor="linkedinUrl">
            LinkedIn URL{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="linkedinUrl"
            placeholder="https://linkedin.com/in/yourprofile"
            value={linkedinUrl}
            onChange={(e) => handleChange("linked-url", e.target.value)}
          />
        </div>

        {/* LinkedIn Display Name (uses same key: "linked-display-name") */}
        <div className="space-y-2">
          <Label htmlFor="linkedinDisplayName">
            LinkedIn Display Name{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="linkedinDisplayName"
            placeholder="Defaults to URL if empty"
            value={linkedinDisplayName}
            onChange={(e) =>
              handleChange("linked-display-name", e.target.value)
            }
            disabled={!linkedinUrl}
          />
          <p className="text-xs text-muted-foreground">
            Requires LinkedIn URL. If left empty, the URL will be used as
            display text.
          </p>
        </div>

        {/* Phone Number (same key: "phone") */}
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">
            Phone Number{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="phoneNumber"
            placeholder="+1 (555) 123-4567"
            value={phoneNumber}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>
      </div>
    </Card>
  );
}
