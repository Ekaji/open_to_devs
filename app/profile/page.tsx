import Profile_form from "@/components/forms/profile_form"
import { getServerSession, Session  } from "next-auth";
import { authOptions } from "@/lib/auth";

type SessionWithRole = Session & { user: { role: string, id: number } };
type Role = string | null;
type id = number | null;

export default async function Page() {
  
  const session: SessionWithRole | null = await getServerSession(authOptions) || null;
  const role: Role = session?.user?.role ?? null;
  const id: id = session?.user?.id ?? null;

  return (
    <>
      <div>My Profile: {id}</div>
      {/* <Profile_form  /> */}
    </>
    )
}