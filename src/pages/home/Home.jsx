import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import Chart from "../../components/chart/Chart";
import { data } from "../../data";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={data} title="User Analytics" grid dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
