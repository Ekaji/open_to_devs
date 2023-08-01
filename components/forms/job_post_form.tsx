"use client"

export default function JobPostForm({ id }: any) {


  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const data = {
        title: e.target.title.value,
        description: e.target.description.value,
        deadline: e.target.deadline.value,
        link: e.target.link.value,
        source: e.target.source.value,
        level: e.target.level.value,
        duration: e.target.duration.value,
        job_post_status: e.target.job_post_status.value,
        city: e.target.city.value,
        state: e.target.state.value,
        country: e.target.country.value,
        workLocation: e.target.work_location.value,
        skill_requirements: e.target.skill_requirements.value, //comma seperated list
        niceToHave: e.target.nice_to_have.value, //comma seperated list
        experience: e.target.experience.value,
        responsibilities: e.target.responsibilities.value,
        benefits: e.target.benefits.value, //comma seperated list
        from: parseInt(e.target.from.value),
        to: parseInt(e.target.to.value),
        // currency: e.target.currency.value,
        tags: e.target.tags.value, //comma seperated list
        employerID: id,
    }

    console.log('raw data', data)
    // /api/auth/posts/create_new_job
    const JSONdata = JSON.stringify(data)
 
    // API endpoint where we send form data.
    const endpoint = '/api/auth/posts/create_new_job'
 
    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }
 
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
 
    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    console.log(result)
  
  };

  return (
    // <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
       <form onSubmit={handleSubmit} >
      <label>
        Title:
        <input type="text" id='title' name='title' 
        />
      </label>
      <br />
      <label>
        Description:
        <textarea id='description' name='description' 
        />
      </label>
      <br />
      <label>
        Deadline:
        <input type="datetime-local" id='deadline' name='deadline'
        />
      </label>
      <br />
      <label>
        Link:
        <input type="text"  id='link' name='link'
        />
      </label>
      <br />
      <label>
        Source:
        <input type="text" id='source' name='source'
         />
      </label>
      <br />
      <label>
        Level:
        <select id='level' name='level'
        >
          <option value="JUNIOR">Junior</option>
          <option value="MID">Mid</option>
          <option value="SENIOR">Senior</option>
        </select>
      </label>
      <br />
      <label>
        Duration:
        <input type="text" id='duration' name='duration'
        />
      </label>
      <br />
      <label>
        Job Post Status:
        <select id='job_post_status' name='job_post_status'
        >
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
        </select>
      </label>
      <br />

      <div>
        <h2>Location</h2>
        <label>
          City:
          <input type="text" id='city' name='city'
          />
        </label>
        <label>
          State:
          <input type="text" id='state' name='state'
          />
        </label>
        <label>
          Country:
          <input type="text" id='country' name='country'
           />
        </label>
      </div>

      <br />
      <label>
        Work Location:
        <select 
        id='work_location' name='work_location'
        >
          <option value="ONSITE">Onsite</option>
          <option value="REMOTE">Remote</option>
        </select>
      </label>
      <br />
      <label>
        Skill Requirements:
        <input type="text" 
        id='skill_requirements' name='skill_requirements'
          />
      </label>
      <br />
      <label>
        Experience<input type="text" 
        id='experience' name='experience'
         />
      </label>
      <br />
      <label>
        Nice to Have:
        <input type="text" 
        id='nice_to_have' name='nice_to_have'
        />
      </label>
      <br />
      <label>
        Responsibilities:
        <input type="text" 
        id='responsibilities' name='responsibilities'
        />
      </label>
      <br />
      <label>
        Benefits:
        <input type="text" 
        id='benefits' name='benefits'
        />
      </label>
      <br />

      <div>
        <label>
          From:
          <input type="number" 
          id='from' name='from'
          />
          To:
          <input type="number" 
          id='to' name='to'
          />
        </label>
      </div>
      <div>
      <label>
        currency
        <input type="text" 
        id='currency' name='currency'
        />
      </label>
      </div>
      <br />
      <label>
        Tags:
        <input type="text"
        id='tags' name='tags' 
        />
      </label>
      <br />
      
      <button type="submit">Submit</button>
    </form>
    // </main>
  );
}
