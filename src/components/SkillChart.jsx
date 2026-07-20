import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts";


function SkillChart({analysis}) {


    const data = [

        {
            name:"Found Skills",
            value: analysis?.skills?.length || 0
        },

        {
            name:"Missing Skills",
            value: analysis?.missingSkills?.length || 0
        }

    ];



    return (

        <div className="bg-white shadow-lg rounded-xl p-6">


            <h2 className="text-xl font-bold mb-5">
                📈 Skill Analysis
            </h2>



            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <BarChart data={data}>


                    <XAxis dataKey="name"/>

                    <YAxis/>

                    <Tooltip/>


                    <Bar
                        dataKey="value"
                    />


                </BarChart>


            </ResponsiveContainer>



        </div>

    );

}


export default SkillChart;