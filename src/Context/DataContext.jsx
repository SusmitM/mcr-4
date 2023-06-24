import { createContext, useContext, useState } from "react";
import { forumData } from "../Data/Data";

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(forumData);

  const sortPost = (type) => {
    if (type === "upvote") {
      const sortedData = [...data.posts]?.sort(
        (a, b) => a?.upvotes - b?.upvotes
      );

      setData({ ...data, posts: sortedData });
    } else {
      const sortedData = [...data.posts]?.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() / 1000 -
          new Date(b.createdAt).getTime() / 1000
      );

      setData({ ...data, posts: sortedData });
    }
  };
  return (
    <DataContext.Provider value={{ data, sortPost }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
