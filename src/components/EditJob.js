import { useEffect, useState } from "react";

export default function EditJob({ onSubmit }) {
  const [form, setForm] = useState({
    jobId: "",
    jobName: "",
    jobDescription: "",
    projectName: "",
    location: "",
    skills: "",
    optionalSkills: "",
    employeeBand: "",
    experience: "",
    positions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(form);
    // fallback demo
    console.table(form);
  };
 useEffect(async()=>{
    const res = await fetch("http://localhost:8080/job/3", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const result=res.json();
      result.then((data)=>{
        setForm((prev)=>{
            console.log(data);
             return data;
        })
      })
 },[])
  return (
    <div className="container mx-auto w-[80%] my-10 bg-white shadow-lg p-8 rounded-lg text-[#333]">
      <h2 className="text-center text-2xl font-bold mb-8">Job Details Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Job ID & Name */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="jobId" className="block text-sm font-bold mb-2">Job ID</label>
            <input
              type="text"
              id="jobId"
              name="jobId"
              value={form.jobId}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="jobName" className="block text-sm font-bold mb-2">Job Name</label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              value={form.jobName}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-bold mb-2">Job Description</label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows="6"
            value={form.jobDescription}
            onChange={handleChange}
            className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none resize-y"
          />
        </div>

        {/* Project & Location */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="projectName" className="block text-sm font-bold mb-2">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={form.projectName}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="location" className="block text-sm font-bold mb-2">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="skills" className="block text-sm font-bold mb-2">Skills</label>
            <textarea
              id="skills"
              name="skills"
              rows="6"
              value={form.skills}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none resize-y"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="optionalSkills" className="block text-sm font-bold mb-2">Optional Skills</label>
            <textarea
              id="optionalSkills"
              name="optionalSkills"
              rows="6"
              value={form.optionalSkills}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none resize-y"
            />
          </div>
        </div>

        {/* Band, Experience, Positions */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="employeeBand" className="block text-sm font-bold mb-2">Employee Band</label>
            <input
              type="text"
              id="employeeBand"
              name="employeeBand"
              value={form.employeeBand}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="experience" className="block text-sm font-bold mb-2">Experience (in Months)</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="positions" className="block text-sm font-bold mb-2">Positions</label>
            <input
              type="number"
              id="positions"
              name="positions"
              value={form.positions}
              onChange={handleChange}
              className="w-full p-3 border border-[#ddd] rounded-md bg-[#f9f9f9] focus:border-green-500 focus:bg-white outline-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button type="submit" className="px-6 py-3 text-base font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
