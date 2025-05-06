import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Users() {
  let data = [];
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/photos");
    data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  } catch (error) {
    console.log(error);
    redirect("/users/7");
  }

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">Users</h1>
      {data.map((users, index) => {
        return (
          <div
            key={index}
            className="bg-white shadow-md rounded-md p-4 m-
          hover:bg-gray-100 transition duration-300"
          >
            <div className="flex items-center space-x-2">
              <Image
                className="w-12 h-12 rounded-full object-cover"
                src={users.url}
                alt={users.title}
                width={600}
                height={600}
                blurDataURL={users.thumbnailUrl}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
