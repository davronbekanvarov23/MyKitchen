import { Link, useLoaderData } from "react-router-dom";

function MealGrid() {
  const data = useLoaderData();
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-9">
        {data.map((info) => {
          return (
            <div
              key={info.id}
              className="card flex gap-5  w-80 font-bold  glass bg-emerald-500 p-3 text-indigo-800 "
            >
              <h1 className=" text-3xl font-bold text-center ">
                <span className=" text-red-500">{info.title}</span>
              </h1>
              <p>
                <span className=" text-yellow-300 line-clamp-3">
                  {info.mathod}
                </span>{" "}
              </p>
              <p>
                🕔
                <span className=" text-yellow-300">
                  {info.cookingTime}
                </span>{" "}
              </p>
              <img src={info.image} alt="" width="full" height="200" />

              <Link className="btn btn-accent w-20 " to={`/Meal/${info.title}`}>
                o'qish
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MealGrid;
