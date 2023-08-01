"use client"

export default function Profile_form({id}) {


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      bio: e.bio.title.value,
      website: e.target.website.value,
      image: e.target.title.value,
      id
    }

    try {

      const response = await fetch("/api/auth/user/update", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        throw new Error("Failed to create job post.");
      }

    } catch (error) {
        console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text"  id='name' name='name' />
        </label>
        <br />
        <label>
          Bio:
          <textarea id='bio' name='bio' />
        </label>
        <br />
        <label>
          Website:
          <input type="text" />
        </label>
        <br />
        <label>
          Image:
          <input id='image' name='image' />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
