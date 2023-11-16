/* eslint-disable react/no-unescaped-entities */

import { Typewriter } from "react-simple-typewriter";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      id: 2,
      name: "Neko Kaito",
      position: "UX Designer",
      avatar:
        "https://cdn.discordapp.com/attachments/1151870132549865536/1160301761467265166/1675242775823.jpg?ex=65342a39&is=6521b539&hm=c1bfe95360778ee13ec630cb38106e74b6695e519ff7aec54f080a0ea02d4d5f&",
    },
    {
      id: 3,
      name: "Bob Johnson",
      position: "Product Manager",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      id: 4,
      name: "Alice Brown",
      position: "Marketing Specialist",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      position: "Event Planner",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      id: 6,
      name: "Eva Davis",
      position: "Graphic Designer",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
    },
  ];

  return (
    <section className="py-6 dark:text-[#ffffffd6]">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading text-center sm:text-5xl">
          Meet Our{" "}
          <Typewriter
            words={["Passionate", "Committed", "Innovative", "Dedicated"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}></Typewriter>
        </h1>

        <p className="max-w-2xl text-center dark:text-gray-400">
          <Typewriter
            words={[
              "Get to know the awesome people behind our projects! They're dedicated to making things happen, always ready to tackle challenges and turn them into opportunities. You'll love working with our team!",
            ]}
            cursor
            cursorStyle="_"
            typeSpeed={100}></Typewriter>
        </p>
        <div className="flex flex-row flex-wrap-reverse justify-center">
          {data.map((member, index) => (
            <div
              key={index}
              className="flex flex-col justify-center m-8 text-center">
              <img
                alt=""
                className="self-center object-cover flex-shrink-0 w-24 h-24 mb-4 rounded-full dark:bg-gray-500 hover:transform hover:scale-110 transition-all duration-300"
                src={member.avatar}
              />
              <p className="text-xl font-semibold leading">{member.name}</p>
              <p className="dark:text-gray-400">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
