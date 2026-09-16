import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 36,
        background: "#090a0d",
        borderRadius: 112,
      }}
    >
      <div style={{ width: 72, height: 72, borderRadius: 9999, background: "#ff6b6b", opacity: 0.85 }} />
      <div style={{ width: 72, height: 72, borderRadius: 9999, background: "#feca57", opacity: 0.85 }} />
      <div style={{ width: 72, height: 72, borderRadius: 9999, background: "#1dd1a1", opacity: 0.85 }} />
    </div>,
    { ...size }
  )
}
