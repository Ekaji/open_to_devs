import { getServerSession, Session  } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import JobPostForm from "@/components/job_post_form";

type SessionWithRole = Session & { user: { role: string, id: number } };
type Role = string | null;
type id = number | null;

export default async function Profile() {
  const session: SessionWithRole | null = await getServerSession(authOptions) || null;
  const role: Role = session?.user?.role ?? null;
  const id: id = session?.user?.id ?? null;

  if (!session) {
    redirect("/api/auth/signin");
  }

  if (!role || role !== "ADMIN" || "EMPLOYER" || "MODERATOR" ) {
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <pre>You are not Authorised to view this page</pre>
    </main>
  }

 
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <JobPostForm id={id} />
    </main>
  );
}
