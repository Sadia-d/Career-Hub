
const AppliedJobsBlog = () => {
  return (
    <section className="min-h-screen   px-6 py-24">
      <div className="max-w-5xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">
          Applied Jobs Blog
        </h2>

        {/* Blog content */}
        <article className="space-y-6">
          <p className=" text-lg">
            Applied jobs section in your career portal allows users to track all the jobs they have applied for. Keeping a clean and organized applied jobs list helps in managing job search efficiently.
          </p>

          <p className=" text-lg">
            You can filter applied jobs by type, such as remote or onsite, to quickly find relevant opportunities. Using a responsive design ensures that users can access their applied jobs on any device.
          </p>

          <p className=" text-lg">
            Maintaining a history of applied jobs helps in preparing for interviews and following up with potential employers. Always update the status of applications and keep notes for better career management.
          </p>

          <p className=" text-lg">
            Integrating local storage or backend storage for applied jobs ensures that users never lose their applied jobs data, providing a seamless experience.
          </p>

          <p className=" text-lg">
            By combining clear UI, filtering options, and reliable storage, an applied jobs section becomes a valuable tool for any job seeker.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AppliedJobsBlog;
