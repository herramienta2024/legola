"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HomgePage = () => {
  const BannerInicio = [
    {
      video:
        "https://img.freepik.com/foto-gratis/artistas-que-usan-pintura-latas-pincel_23-2148591278.jpg?t=st=1724426088~exp=1724429688~hmac=8f35ebc32821da340ecf89ffdb583ad8a21f08fc5c95b60c386b0108087b9fec&w=826",
    },
    ,
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <div className="relative w-full h-screen sm:h-[90vh]">
        <video
          src="/VideoBanner.mp4"
          className="h-full w-full object-cover overflow-hidden"
          autoPlay
          muted
          loop
          playsInline
        />

        <motion.div
          className="absolute top-0 left-0 w-full h-full text-white bg-black/40"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-start items-center max-w-[883px] h-full pl-2 sm:text-3xl sm:pl-20">
            <div className="max-w-[40rem] space-y-1 sm:space-y-4">
              <motion.section
                className="sm:p-2 font-bold bg-Secundario border border-Secundario text-xl uppercase rounded-3xl rounded-br-none rounded-tl-none outline-none shadow-lg hover:shadow-xl hover:opacity-90 duration-200 w-[10.5rem] text-white"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Soluciones
              </motion.section>
              <motion.p
                className="text-start text-base sm:text-4xl font-extrabold"
                initial="hidden"
                animate="visible"
                variants={fadeInVariants}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A tu <span className="uppercase">Medida</span>
              </motion.p>

              <Link href={"/Servicios"} className="flex justify-start">
                <motion.div
                  className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-start cursor-pointer sm:h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-transparent text-white border-Secundario hover:bg-Secundario"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInVariants}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <strong className="font-bold uppercase">Servicios</strong>
                  <span className="absolute bg-Secundario bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="space-y-5">
        <div className="bg-gray-50 ">
          <div className="container mx-auto my-4 space-y-6 ">
            <div className="  ">
              <div className="space-y-4">
                <div className=" max-w-2xl text-center mx-auto">
                  <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                    Nuestros Productos
                  </h1>
                </div>
                <div className=" max-w-3xl mx-auto">
                  <p className="text-lg text-gray-600  text-center">
                    Queremos facilitar tu experiencia a la hora de comprar. Haz
                    clic de acuerdo a lo que necesitas
                  </p>
                </div>
              </div>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6   lg:grid-cols-4"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomgePage;
