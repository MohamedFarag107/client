export default async function Home() {
  const response = await fetch(
    "https://server-test-bkja.onrender.com/api/v1/stores/host",
    {
      cache: "no-cache",
    }
  );
  return (
    <>
      <h4>
        <pre>{JSON.stringify(await response.json(), null, 2)}</pre>
      </h4>
    </>
  );
}
