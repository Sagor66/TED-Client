import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./ToyCategory.css"
import Category from "./Category";
import { AuthContext } from "../../providers/AuthProvider";

const ToysCategory = () => {

  const { user } = useContext(AuthContext)

  const [toysCategoryData, setToysCategoryData] = useState([]);
  // const [toysCategory, setToysCategory] = useState("");
  const [toysCategory, setToysCategory] = useState("Science Kits");
  // const [renderData, setRenderData] = useState(false);
  const [newToys, setNewToys] = useState([])

  const getCategory = (event) => {
    const category = event.target.textContent;
    setToysCategory(category);
    // setRenderData(true);
  };

  // useEffect(() => {
  //   fetch(`http://localhost:5000/toys/category/${toysCategory}`)
  //     .then((res) => res.json())
  //     .then((data) => setToysCategoryData(data));
  // }, [toysCategory, renderData]);

  useEffect(() => {
    fetch(`http://localhost:5000/toys/category/${toysCategory}`)
      .then((res) => res.json())
      .then((data) => {
        const newToysData = newToys
        const allData = [...data, ...newToysData]
        console.log(allData)
        setToysCategoryData(allData)
      });
  }, [toysCategory, newToys]);

  const url = `http://localhost:5000/newToys/category/${toysCategory}?email=${user?.email}`

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNewToys(data));
  }, [url]);

  // console.log(toysCategoryData);
  // console.log(toysCategory);

  return (
    <div className="mb-32">
      <h2 className="text-heading">Category Shopping</h2>
      <Tabs>
        <TabList className="font-fredoka text-2xl font-bold text-pink-400 border-b-8 border-pink-400 rounded-lg">
          <Tab onClick={getCategory}>Science Kits</Tab>
          <Tab onClick={getCategory}>Math Kits</Tab>
          <Tab onClick={getCategory}>Engineering Kits</Tab>
          <Tab onClick={getCategory}>Engineering Tools</Tab>
        </TabList>

        <div className="max-w-6xl mx-auto mt-10">
          <TabPanel>
            <div className="grid grid-cols-4 gap-4 justify-between items-center">
              {toysCategoryData.map((categoryData) => (
                <Category key={categoryData._id} categoryData={categoryData}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4 justify-between items-center">
              {toysCategoryData.map((categoryData) => (
                <Category key={categoryData._id} categoryData={categoryData}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4 justify-between items-center">
              {toysCategoryData.map((categoryData) => (
                <Category key={categoryData._id} categoryData={categoryData}></Category>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-4 justify-between items-center">
              {toysCategoryData.map((categoryData) => (
                <Category key={categoryData._id} categoryData={categoryData}></Category>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ToysCategory;
