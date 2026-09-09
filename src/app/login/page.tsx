import { Suspense } from "react";

export default function LoginPage() {
  return (
    <main>
      <header>Login page</header>

      <section>
        <Suspense>
          <button>login</button>
        </Suspense>
      </section>
    </main>
  );
}
