import { useState } from "react";

export default function JobDetailsForm() {
  const [form, setForm] = useState({
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
    console.log("Submitting", form);
  };

  return (
    <div className="w-[70%] max-w-[900px] mx-auto my-12 bg-white p-10 rounded-xl shadow-2xl text-[#495057]">
      <h2 className="text-center text-2xl font-bold text-[#343a40] mb-8">Job Details Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Job Name */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="jobName" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Job Name
            </label>
            <input
              type="text"
              id="jobName"
              name="jobName"
              placeholder="Enter Job Name"
              value={form.jobName}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-semibold mb-2 text-[#343a40]">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            rows="6"
            placeholder="Enter Job Description"
            value={form.jobDescription}
            onChange={handleChange}
            className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
          />
        </div>

        {/* Project Name & Location */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="projectName" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Project Name
            </label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              placeholder="Enter Project Name"
              value={form.projectName}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="location" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter Job Location"
              value={form.location}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="skills" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Skills
            </label>
            <textarea
              id="skills"
              name="skills"
              rows="6"
              placeholder="Enter Skills"
              value={form.skills}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="optionalSkills" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Optional Skills
            </label>
            <textarea
              id="optionalSkills"
              name="optionalSkills"
              rows="6"
              placeholder="Enter Optional Skills"
              value={form.optionalSkills}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        {/* Employee Band, Experience & Positions */}
        <div className="flex flex-wrap gap-5">
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="employeeBand" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Employee Band
            </label>
            <input
              type="text"
              id="employeeBand"
              name="employeeBand"
              placeholder="Enter Employee Band"
              value={form.employeeBand}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="experience" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Experience (in Months)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              placeholder="Enter Experience"
              value={form.experience}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
          <div className="flex-1 min-w-[220px]">
            <label htmlFor="positions" className="block text-sm font-semibold mb-2 text-[#343a40]">
              Positions
            </label>
            <input
              type="number"
              id="positions"
              name="positions"
              placeholder="Enter Positions"
              value={form.positions}
              onChange={handleChange}
              className="w-full p-3 text-sm border border-[#ced4da] rounded-md bg-[#f8f9fa] focus:border-primary focus:bg-white outline-none transition-all"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="px-6 py-4 text-base font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
