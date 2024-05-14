import { headers } from "next/headers";
import { Card } from "./_components/Card";

export default async function Home() {
  const response = await fetch(
    "https://server-test-bkja.onrender.com/api/v1/stores/host",
    {
      cache: "no-cache",
    }
  );

  const headersList = headers();
  const domain = headersList.get("x-forwarded-host") || "";
  const protocol = headersList.get("x-forwarded-proto") || "";
  const pathname = headersList.get("x-invoke-path") || "";
  return (
    <>
      <h4>
        <pre>{JSON.stringify(await response.json(), null, 2)}</pre>
        <pre>{JSON.stringify({ domain, protocol, pathname }, null, 2)}</pre>
      </h4>

      <Card />
    </>
  );
}
