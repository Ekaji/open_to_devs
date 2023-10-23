import { getServerSession, Session  } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import JobPostForm from "@/components/forms/job_post_form";
import Tabs from "@/components/Tabs";

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

  const tabs = [
    {
      id: 'create_job',
      label: 'Create new Job',
      content: <JobPostForm id={id} />
    },
    {
      id: 'Published Jobs',
      label: 'Published Jobs',
      content: 'Tab 2 content',
    },
    {
      id: 'Drafts',
      label: 'Drafts',
      content: 'Tab 3 content',
    }
  ];

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <Tabs tabs={ tabs } />
      {/* <JobPostForm
      id={id}
      // initialState={initialState}
       /> */}
    </main>
  );
}
