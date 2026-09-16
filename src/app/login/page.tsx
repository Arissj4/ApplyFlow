import { signIn } from "@/auth";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

export default function LoginPage() {
  return (
    <main>
      <section className="flex h-screen w-full justify-center">
        <div className="mx-auto flex w-[55%] flex-col items-center justify-center bg-[#0C213D] px-10">
          <div className="flex h-20 flex-row items-center">
            <BusinessCenterIcon className="text-[54px]!" />
            <p className="ml-2 text-[58px]">ApplyFlow</p>
          </div>

          <div className="flex h-20 flex-row items-center">
            <p className="text-[38px]">Every Application, One Place.</p>
          </div>

          <div className="flex h-20 flex-row items-center">
            <p className="text-center text-[26px] text-[#B5C6C5]">
              Track applications, follow-ups and updates without the spreadsheet.
            </p>
          </div>
        </div>

        <div className="mx-auto w-[45%]">
          <div>

          </div>
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/" });
            }}
          >
            <button type="submit">login</button>
          </form>
        </div>
      </section>
    </main>
  );
}
