export default function TooFastPage() {
  return (
    <main className="root-container flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold font-bebas-neue text-light-100">
        Whoa, slow down there!
      </h1>
      <p className="mt-3 max-w-xl text-center text-light-400">
        Looks like you&apos;ve been a little too eager. We&apos;ve put a
        temporary pause on your excitement. 🚦 Chill for a bit, and try again
        shortly.
      </p>
    </main>
  );
}