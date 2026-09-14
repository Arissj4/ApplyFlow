import { signIn } from "@/auth";
export default function LoginPage() {
  return (
    <main>
      <header>Login page</header>
      <section>
          <form
              action={async () => {
                  "use server";
                  await signIn("google", {redirectTo: "/"});
              }}
          >
              <button type="submit">login</button>
          </form>
      </section>
    </main>
  );
}