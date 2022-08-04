import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 1)",
    },
  };

  return (
    <div className="bg-white rounded-full">
      <motion.svg
        // variants={container}
        // animate="show"
        version="1.0"
        width="771.000000pt"
        height="774.000000pt"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 771.000000 774.000000"
        preserveAspectRatio="xMidYMid meet"
        className="w-[50px] h-[50px] "
      >
        <g
          transform="translate(0.000000,774.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            key={1}
            d="M3575 7564 c-252 -25 -443 -57 -640 -109 -891 -232 -1649 -776 -2161
-1550 -311 -471 -503 -990 -581 -1575 -26 -191 -25 -729 0 -910 103 -723 357
-1318 801 -1874 111 -140 406 -432 556 -552 556 -442 1166 -697 1895 -790 196
-25 632 -25 835 -1 849 104 1602 468 2195 1062 594 593 958 1346 1062 2195 24
203 24 639 -1 835 -93 729 -348 1339 -790 1895 -120 150 -412 445 -552 556
-555 443 -1156 700 -1869 800 -114 16 -643 28 -750 18z m685 -258 c565 -69
1074 -258 1532 -568 752 -509 1274 -1289 1453 -2173 43 -215 56 -341 62 -607
6 -283 -4 -435 -43 -665 -123 -724 -472 -1383 -1006 -1899 -569 -550 -1299
-883 -2091 -955 -166 -15 -603 -6 -757 16 -994 139 -1852 671 -2408 1493 -310
459 -499 968 -569 1537 -24 194 -24 597 1 790 99 794 435 1486 990 2041 599
599 1366 946 2226 1008 111 8 488 -3 610 -18z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 0.05, ease: "easeInOut" },
              fill: { duration: 0.05, ease: [1, 0, 0.8, 1] },
            }}
            key={2}
            d="M3668 7189 c-710 -41 -1394 -313 -1943 -773 -95 -80 -290 -273 -374
-371 -326 -380 -567 -834 -691 -1300 -210 -788 -130 -1610 225 -2330 329 -665
843 -1180 1505 -1510 1086 -542 2406 -439 3388 262 211 151 440 360 602 548
868 1011 1048 2446 455 3635 -330 662 -845 1176 -1510 1505 -322 159 -636 255
-1005 309 -99 15 -420 37 -485 34 -16 0 -91 -4 -167 -9z m-1026 -2172 c37 -13
93 -40 124 -58 65 -39 173 -145 200 -195 10 -18 21 -34 24 -34 3 0 14 16 25
36 27 50 133 153 199 193 31 18 87 45 124 60 l67 26 1005 0 1005 0 65 -23
c158 -57 290 -172 361 -317 89 -181 90 -374 1 -555 -50 -102 -169 -223 -268
-273 -134 -67 -147 -69 -584 -76 l-395 -7 -62 -26 c-283 -120 -396 -421 -252
-674 60 -107 197 -207 317 -233 36 -7 248 -11 658 -11 l605 0 24 -25 c32 -31
32 -69 -1 -102 l-26 -26 -2000 5 -1999 5 -22 22 -22 22 0 892 0 892 28 82 c56
167 175 300 332 374 104 49 156 59 290 55 86 -3 124 -9 177 -29z"
          />
          {/* <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            key={3}
            d="M2305 4886 c-169 -54 -299 -195 -334 -364 -7 -36 -11 -310 -11 -862
l0 -810 1163 0 1163 0 -45 49 c-92 98 -153 232 -167 366 l-7 65 -548 0 -548 0
-28 24 -28 24 -5 589 -5 589 -37 75 c-87 175 -241 270 -437 268 -47 0 -104 -6
-126 -13z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            key={4}
            d="M3398 4881 c-152 -50 -270 -171 -316 -325 -13 -42 -16 -138 -19 -563
l-4 -513 480 0 481 0 0 503 c0 548 -2 566 -58 671 -43 81 -129 161 -219 204
-73 34 -85 37 -183 39 -81 2 -118 -1 -162 -16z"
          />
          <motion.path
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 2, ease: "easeInOut" },
              fill: { duration: 2, ease: [1, 0, 0.8, 1] },
            }}
            key={5}
            d="M4002 4851 c87 -100 137 -206 157 -332 6 -36 11 -233 11 -457 l0
-393 49 59 c59 70 125 121 213 162 115 54 168 60 543 60 272 0 353 3 400 15
341 87 489 439 306 722 -46 72 -120 134 -211 177 l-65 31 -723 3 -724 3 44
-50z"
          /> */}
        </g>
      </motion.svg>
    </div>
  );
};

export default Logo;
