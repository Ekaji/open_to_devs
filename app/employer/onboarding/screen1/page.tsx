"use client"
import React from 'react'
import { useSession } from "next-auth/react";


export default function page() {
  const { data: session } : any = useSession();
  const id = session?.user?.id;


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
      id,
      name: e.target.name.value,
      bio: e.target.bio.value,
      website: e.target.website.value,
      image: e.target.image.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      intrests: e.target.interests.value,
      availability: e.target.availability.value,
      skills: e.target.skills.value,
      additional_info: e.target.additional_info.value,
      experience_level: e.target.experience_level.value,
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
      <div>
  <form onSubmit={handleSubmit} >
    <label>
      Phone:
      <input type="tel" id="phone" name="phone" />
    </label>
    <br />
    <label>
      Address:
      <input type="text" id="address" name="address" />
    </label>
    <br />
    <label>
      Bio:
      <textarea id="bio" name="bio"></textarea>
    </label>
    <br />
    <label>
      Website:
      <input type="text" id="website" name="website" />
    </label>
    <br />
    <label>
      Image:
      <input type="file" id="image" name="image" accept="image/*" />
    </label>
    <br />
    <label>
      Interests:
      <input type="text" id="interests" name="interests" />
    </label>
    <br />
    <label>
      Availability:
      <select id="availability" name="availability">
        <option value="ENTRY">Immedieatly</option>
        <option value="One Week">One Week</option>
        <option value="Two Weeks">Two Weeks</option>
        <option value="Four Weeks">Four Weeks</option>
      </select>
    </label>
    <br />
    <label>
      Skills:
      <input type="text" id="skills" name="skills" />
    </label>
    <br />
    <label>
      Additional Info:
      <textarea id="additional_info" name="additional_info"></textarea>
    </label>
    <br />
    <label>
      Experience Level:
      <select id="experience_level" name="experience_level">
        <option value="ENTRY">ENTRY</option>
        <option value="INTERNSHIP">INTERNSHIP</option>
        <option value="INTERMIDIATE">INTERMIDIATE</option>
        <option value="JUNIOR">JUNIOR</option>
        <option value="MIDLEVEL">MIDLEVEL</option>
        <option value="SENIOR">SENIOR</option>
      </select>
    </label>
    <br />
    <button type="submit">Submit</button>
  </form>
</div>
    </div>
  )
}
