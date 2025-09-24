"use client";

import { useFormData } from "@/providers/FormDataProvider";
import { Button } from "./ui/button";
import useCopyRichText from "@/providers/useCopyRichText";

const EmailSignature: React.FC = () => {
  const { formData, updateFormData } = useFormData();
  const { richTextRef, copyToClipboard } = useCopyRichText();

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <title>Email Signature</title>
      </head>
      <div
        ref={richTextRef}
        id="email-signature"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <span style={{ fontWeight: 700, fontSize: "18px" }}>
          {formData.name}
        </span>
        <br />
        <span style={{ fontSize: "12.85px" }}>{formData["job-position"]}</span>
        {formData["linked-url"] && formData["linked-display-name"] && (
          <>
            <br />
            <span
              style={{ fontSize: "12.85px", color: "#666666", fontWeight: 700 }}
            >
              LinkedIn:{" "}
            </span>
            <a style={{ fontSize: "12.85px" }} href={formData["linked-url"]}>
              {formData["linked-display-name"]}
            </a>
          </>
        )}
        {formData.phone && (
          <>
            {formData["linked-url"] && formData["linked-display-name"] ? (
              <span style={{ margin: "0 10px" }}>|</span>
            ) : (
              <br />
            )}
            <span
              style={{ fontSize: "12.85px", color: "#666666", fontWeight: 700 }}
            >
              Phone:{" "}
            </span>
            <span style={{ fontSize: "12.85px" }}>{formData.phone}</span>
          </>
        )}
        <br />
        <table
          cellPadding="0"
          cellSpacing="0"
          width="300"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  borderBottom: "2px solid #4794C8",
                  paddingBottom: "2px",
                }}
              ></td>
            </tr>
            <tr>
              <td style={{ padding: "2px" }}></td>
            </tr>
            <tr>
              <td>
                <a href="https://www.ttt.studio/">
                  <img
                    width="300"
                    height="45"
                    src="https://ttt-studios-website.s3.us-west-2.amazonaws.com/images/ttt_logo.png"
                    alt="TTT Studios"
                  />
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://handled.work/">
                  <img
                    width="300"
                    height="45"
                    src="https://ttt-studios-website.s3.us-west-2.amazonaws.com/images/handled_logo.png"
                    alt="Handled AI"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <p
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "10px",
            fontStyle: "italic",
            color: "#666666",
          }}
        >
          <br />
          This email and any attachments are intended for the person/persons or
          entity/entities to whom it/they is/are addressed and may contain
          information that is confidential, contains intellectual property, is
          the subject of patent and/or trademark and/or copyright and/or is
          otherwise protected or private information, including trade secrets
          and industrial designs. Any unauthorized access, distribution,
          copying, alteration, or disclosure of information contained herein is
          strictly prohibited. If you have received this email by error please
          immediately notify the sender and delete it. Thank you.
        </p>
      </div>

      <Button className="w-full mt-4" onClick={copyToClipboard}>
        Copy
      </Button>
    </div>
  );
};

export default EmailSignature;
