

export default function ApplicationsPage() {
    return(
        <main
            className={"mx-auto max-w-5xl px-6 py-12"}
        >
            <header>
                <h1 className="text-3xl font-bold">Applications</h1>
                <p className="mt-2 text-gray-500">
                    Track your job applications and follow-ups in one place.
                </p>
            </header>

            <section className="mt-8 rounded-xl border border-gray-200 p-10 text-center">
                <h2 className="text-lg font-semibold">No applications yet</h2>
                <p className="mt-2 text-gray-500">
                    Your applications will appear here once you add them.
                </p>
            </section>
        </main>
    );
};