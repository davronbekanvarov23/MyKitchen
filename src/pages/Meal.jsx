import { useCollection } from "../hooks/useCollection";
import { Link, useParams } from "react-router-dom";

function Meal() {
  const data = useCollection().data;
  const { title } = useParams();

  let newMeal;
  if (data) {
    newMeal = data.filter((info) => {
      return title == info.title;
    });
  }
  return (
    <div className="align-content mt-10 p-8">
      {newMeal &&
        newMeal.map((info) => {
          return (
            <div
              key={info.id}
              className=" p-10 cart bg-gray-300 text-slate-600 "
            >
              <img
                className=" ml-auto mr-auto"
                src={info.image}
                alt=""
                width="800"
                height="200"
              />
              <h1 className=" text-3xl font-bold  uppercase mt-5 text-center">
                {info.title}
              </h1>
              <p className=" font-bold text-2xl">
                Ingredients:{" "}
                <span className=" font-medium text-green-600">
                  {info.ingredients}
                </span>{" "}
              </p>
              <p className=" font-bold text-2xl">
                Cooking Time:{" "}
                <span className=" font-medium text-green-600">
                  {" "}
                  🕔 {info.cookingTime}
                </span>{" "}
              </p>
              <p className=" font-bold text-2xl">
                Mathod:{" "}
                <span className=" font-medium text-green-600">
                  {info.mathod}
                </span>{" "}
              </p>
              <Link className="btn btn-secondary mt-5" to="/">
                Back
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default Meal;
