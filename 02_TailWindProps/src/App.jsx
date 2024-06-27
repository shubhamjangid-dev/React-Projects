import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <>
      <h1 className="text-6xl bg-red-100 text-red-600 my-4 py-5 rounded-xl">Jaipur</h1>
      <div className="flex flex-wrap m-auto justify-center">
        <Card
          CardTitle="City Palace"
          date="24/06/24"
          CardDescription="jaipur"
          image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xsbwhcsvkioxwqkooond/From:SameDayPrivateJaipurTouryCar.webp"
        />
        <Card
          CardTitle="Jal Mahal"
          date="24/06/24"
          CardDescription="jaipur"
          image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_776/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ra5debmhrmsvys3k7bbj/From:SameDayPrivateJaipurTouryCar.webp"
        />
        <Card
          CardTitle="Amber Fort"
          date="24/06/24"
          CardDescription="jaipur"
          image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_866/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/mp8a9e5kk7edcahh8mrm/From:SameDayPrivateJaipurTouryCar.webp"
        />
        <Card
          CardTitle="Hawa Mahal"
          date="24/06/24"
          CardDescription="jaipur"
          image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_640/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/dyfeinxe39kiwsr634ub/From:SameDayPrivateJaipurTouryCar.webp"
        />
        <Card
          CardTitle="Hawa Mahal"
          date="24/06/24"
          CardDescription="jaipur"
          image="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_856/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ryaivmcrjzgdayse9gss/From:SameDayPrivateJaipurTouryCar.webp"
        />
      </div>
    </>
  );
}

export default App;
