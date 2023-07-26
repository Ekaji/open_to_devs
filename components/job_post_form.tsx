"use client"
import React, { useReducer } from "react";
// import { useSession } from "next-auth/react";

const initialState = {
  title: "",
  description: "",
  deadline: "",
  link: "",
  source: "",
  level: "JUNIOR",
  duration: "",
  job_post_status: "DRAFT",
  // location: {},
  city: "",
  state: "",
  country: "",
  workLocation: "ONSITE",
  // skill_requirements: {},
  skill_requirements: "", //comma seperated list
  niceToHave: "", //comma seperated list
  experience: "",
  responsibilities: '',
  benefits: "", //comma seperated list
  // salaryRange: [],
  from: 0.0,
  to: 0.0,
  currency: "",
  tags: "", //comma seperated list
  employerID: "",
};

function reducer(state: any, action: { type: any; field: any; value: any; }) {
  switch (action.type) {
    case "updateField":
      return { ...state, [action.field]: action.value };
    case "reset":
      return initialState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function JobPostForm({ id }: any) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    // Create a new JobPost object with the form values
    const newJobPost = {
      ...state,
      employerID: parseInt(id),
    };

    try {

      const response = await fetch("/api/auth/posts/create_new_job", {
        method: "POST",
        body: JSON.stringify(newJobPost ),
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        throw new Error("Failed to create job post.");
      }

    } catch (error) {
        console.error(error)
    }

    // console.log(newJobPost)
    // TODO: Send the newJobPost object to the server to create a new job post


    // Reset the form
    dispatch({
      type: "reset",
      field: undefined,
      value: undefined
    });
  };

  const updateField = (field: any, value: any) => {
    dispatch({ type: "updateField", field, value });
  };

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
       <form  >
      <label>
        Title:
        <input type="text" value={state.title} onChange={(e) => updateField("title", e.target.value)} />
      </label>
      <br />
      <label>
        Description:
        <textarea value={state.description} onChange={(e) => updateField("description", e.target.value)} />
      </label>
      <br />
      <label>
        Deadline:
        <input type="datetime-local" value={state.deadline} onChange={(e) => updateField("deadline", e.target.value)} />
      </label>
      <br />
      <label>
        Link:
        <input type="text" value={state.link} onChange={(e) => updateField("link", e.target.value)} />
      </label>
      <br />
      <label>
        Source:
        <input type="text" value={state.source} onChange={(e) => updateField("source", e.target.value)} />
      </label>
      <br />
      <label>
        Level:
        <select value={state.level} onChange={(e) => updateField("level", e.target.value)}>
          <option value="JUNIOR">Junior</option>
          <option value="MID">Mid</option>
          <option value="SENIOR">Senior</option>
        </select>
      </label>
      <br />
      <label>
        Duration:
        <input type="text" value={state.duration} onChange={(e) => updateField("duration", e.target.value)} />
      </label>
      <br />
      <label>
        Job Post Status:
        <select value={state.job_post_status} onChange={(e) => updateField("job_post_status", e.target.value)}>
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
        </select>
      </label>
      <br />

      <div>
        <h2>Location</h2>
        <label>
          City:
          <input type="text" value={state.city} onChange={(e) => updateField("city", e.target.value)} />
        </label>
        <label>
          State:
          <input type="text" value={state.state} onChange={(e) => updateField("state", e.target.value)} />
        </label>
        <label>
          Country:
          <input type="text" value={state.country} onChange={(e) => updateField("country", e.target.value)} />
        </label>
      </div>

      <br />
      <label>
        Work Location:
        <select value={state.workLocation} onChange={(e) => updateField("workLocation", e.target.value)}>
          <option value="ONSITE">Onsite</option>
          <option value="REMOTE">Remote</option>
        </select>
      </label>
      <br />
      <label>
        Skill Requirements:
        <input type="text" value={state.skill_requirements} onChange={(e) => updateField("skill_requirements", e.target.value)} />
      </label>
      <br />
      <label>
        Experience<input type="text" value={state.experience} onChange={(e) => updateField("experience", e.target.value)} />
      </label>
      <br />
      <label>
        Nice to Have:
        <input type="text" value={state.niceToHave} onChange={(e) => updateField("niceToHave", e.target.value)} />
      </label>
      <br />
      <label>
        Responsibilities:
        <input type="text" value={state.responsibilities} onChange={(e) => updateField("responsibilities", e.target.value)} />
      </label>
      <br />
      <label>
        Benefits:
        <input type="text" value={state.benefits} onChange={(e) => updateField("benefits", e.target.value)} />
      </label>
      <br />

      <div>
        <label>
          From:
          <input type="number" value={state.from} onChange={(e) => updateField("from", e.target.value)} />
          To:
          <input type="number" value={state.to} onChange={(e) => updateField("to", e.target.value)} />
        </label>
      </div>
      <br />
      <label>
        Tags:
        <input type="text" value={state.tags} onChange={(e) => updateField("tags", e.target.value)} />
      </label>
      <br />
      
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    </main>
  );
}
