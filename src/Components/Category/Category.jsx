
const Category = ({category}) => {
    const {logo,category_name,availability} = category;


    return (
       <div className=" w-64 p-4 bg-purple-50 card card-compact bg-base-100 border">
    <figure>
    <img src={logo}/>
    </figure>
    <div className="card-body">
    <h2 className="card-title">{category_name}</h2>
    <p>{availability}</p> 
    </div>
   </div>

    );
};

export default Category;