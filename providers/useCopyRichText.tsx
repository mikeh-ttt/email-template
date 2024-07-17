import React, { useRef } from 'react';

const useCopyRichText = () => {
  const richTextRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    if (richTextRef.current) {
      const htmlContent = richTextRef.current.innerHTML;
      debugger;

      const blob = new Blob([htmlContent], { type: 'text/html' });
      const clipboardItem = new ClipboardItem({ 'text/html': blob });

      try {
        await navigator.clipboard.write([clipboardItem]);
        alert('Copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return { richTextRef, copyToClipboard };
};

export default useCopyRichText;
