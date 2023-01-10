import { userData as UsersData } from "lib";

const UsersCard = () => {
  return (
    <div className="flex items-center justify-between gap-x-2 flex-wrap">
      {UsersData.map(({ title, count, image }, index) => {
        return (
          <div
            className="users__card my-5 xl:my-10 lg:my-2 lg:w-full mb-4 lg:mb-0 w-full"
            key={index}
          >
            <img src={image} alt="" />
            <h6 className="users__card-title text-secondary">{title}</h6>
            <h1 className="users__card-count text-primary">{count}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UsersCard;
