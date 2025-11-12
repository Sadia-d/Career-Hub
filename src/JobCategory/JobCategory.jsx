import { useEffect, useState } from "react";
import Category from "../Components/Category/Category";

const JobCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <section className="mt-20 px-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white">
          Job Category List
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base">
          Explore thousands of job opportunities with all the information you need. It's your future.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-6 mt-8">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default JobCategory;
