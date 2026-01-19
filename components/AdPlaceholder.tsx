"use client";

interface AdPlaceholderProps {slot?: string; format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'; className?: string;}

export default function AdPlaceholder({slot = "default", format = "auto", className = ""}: AdPlaceholderProps) {
  const showPlaceholder = true;
  if (showPlaceholder) {
    return (<div className={`max-w-4xl mx-auto ${className}`}><div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"><p className="text-sm text-gray-500 mb-2">AdSense Placeholder {slot !== "default" ? `(${slot})` : ""}</p><p className="text-xs text-gray-400">Replace with actual AdSense code after approval</p></div></div>);
  }
  return null;
}
