import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function MealList() {
  const data = useLoaderData();

  return (
    <>
      <div className="flex gap-3 pb-10 justify-center flex-col">
        {data.map((info) => {
          return (
            <div
              key={info.id}
              className="card flex-row items-center gap-5 w-106 font-bold  glass bg-emerald-500 p-3 text-indigo-800 "
            >
              <h1 className=" text-3xl font-bold text-center ">
                <span className=" text-red-500">{info.title}</span>
              </h1>
              <p>
                <span className=" text-yellow-300">{info.mathod}</span>{" "}
              </p>
              <p>
                🕔
                <span className=" text-yellow-300">
                  {info.cookingTime}
                </span>{" "}
              </p>
              <img src={info.image} alt="" width="200" height="200" />

              <Link
                className="btn btn-accent w-20 ml-auto  "
                to={`/Meal/${info.title}`}
              >
                o'qish
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MealList;
