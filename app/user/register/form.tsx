"use client";

import { signIn } from "next-auth/react";
// import { useSession } from "next-auth/react";

export const UserRegisterForm = async () => {
  
  // const { data: session } = useSession();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    }

    try {
      const res = await fetch("/api/register/user", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const response= await res.json()

      // setLoading(false);
      if (!res.ok) {
        alert((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: `/profile` });
      

    } catch (error: any) {
      // setLoading(false);
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        rowGap: 10,
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        id="name"
        // value={formValues.name}
        // onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        // value={formValues.email}
        // onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <label htmlFor="password">Password</label>
      <input
        required
        type="password"
        name="password"
        id="password"
        // value={formValues.password}
        // onChange={handleChange}
        style={{ padding: "1rem" }}
      />
      <button
        style={{
          backgroundColor: "#3446eb",
          //  `${loading ? "#ccc" : 
          //  "#3446eb"}`,
          color: "#fff",
          padding: "1rem",
          cursor: "pointer",
        }}
        // disabled={loading}
        type="submit"
      >
        {
        // loading ? "loading..." :
         "Register"}
      </button>
    </form>
  );
};
