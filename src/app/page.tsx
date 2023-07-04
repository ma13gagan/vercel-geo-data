import { headers } from "next/headers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-4">
      <p>Geo Data: {headers().get("x-geo")}</p>
      <p>IP: {headers().get("x-ip")}</p>
    </main>
  );
}
