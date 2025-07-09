import { useEffect, useState } from "react";
import Category from "../Components/Category/Category";

const JobCategory = () => {
    const [categories , setCategories] = useState([]);

    useEffect(()=>{
            fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])

    return (
        <div className="mt-20">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold">Job Category List</h2>
                <p className="text-[16px] text-gray-500 mt-3" >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="grid sm:grid-cols-1 gap-3 mt-8 md:grid-cols-4">
                {
                    categories.map(category => <Category
                    key={category.id}
                    category={category}
                    ></Category>)
                }
            </div>

            
        </div>
    );
};

export default JobCategory;