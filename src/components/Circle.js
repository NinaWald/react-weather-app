import React from 'react';
import '../circle.css'

const Circle = () => {
  return (
    <div className="circle-container">
      <svg width="100%" height="100%">
        <path
          d="M750 750C594.28 750 516.56 777.428 454.912 822.704C393.264 868.08 348.736 925.344 324.32 986.496C299.904 1047.65 292.696 1110.64 302.696 1165.47C312.696 1220.3 339.82 1266.16 383.068 1302.03C426.316 1337.9 484.66 1362.69 556.1 1376.41C627.54 1390.12 710.36 1392.67 804.568 1384.08C898.776 1375.48 983.96 1355.75 1060.12 1324.88C1136.28 1294.01 1199.66 1253.04 1248.26 1201.96C1296.86 1150.88 1330.1 1091.68 1348 1024.35C1365.9 957.016 1367.24 882.41 1352.02 800.523C1336.8 718.635 1305.26 642.893 1257.41 573.295C1209.57 503.697 1147.93 441.206 1072.49 385.823C997.045 330.441 908.461 282.166 806.736 241C705.01 199.834 592.332 166.779 468.703 141.834C345.075 116.889 210.987 100.214 66.4375 91.8098C-78.1111 83.4051 -213.372 83.4051 -340.943 91.8098C-468.514 100.214 -603.603 116.889 -746.209 141.834C-888.815 166.779 -1001.49 199.834 -1084.23 241C-1166.97 282.166 -1245.56 330.441 -1319 385.823C-1392.44 441.206 -1454.08 503.697 -1503.92 573.295C-1553.76 642.893 -1585.3 718.635 -1598.53 800.523C-1611.76 882.41 -1610.42 957.016 -1594.61 1024.35C-1578.79 1091.68 -1545.55 1150.88 -1494.95 1201.96C-1444.35 1253.04 -1380.97 1294.01 -1304.81 1324.88C-1228.65 1355.75 -1143.47 1375.48 -1047.26 1384.08C-951.048 1392.67 -868.23 1390.12 -798.794 1376.41C-729.358 1362.69 -670.014 1337.9 -620.764 1302.03C-571.514 1266.16 -544.39 1220.3 -539.392 1165.47C-534.394 1110.64 -541.602 1047.65 -561.016 986.496C-580.43 925.344 -615.056 868.08 -664.896 822.704C-714.736 777.428 -780.952 750 -863.544 750Z"
          fill="#d992de">
          <animate
            attributeName="d"
            dur="40s"
            repeatCount="indefinite"
            values="
            M1592.87 1264.75C1439.99 1317.69 1411.57 1447.09 1507.61 1652.96C1603.65 1858.83 1573.27 1943.14 1416.47 1905.89C1259.67 1868.64 1127.37 1864.71 1019.57 1894.12C911.774 1923.53 828.474 1886.28 769.674 1782.37C710.874 1678.45 569.754 1634.34 346.314 1650.02C122.874 1665.71 -60.3864 1592.18 -203.466 1429.45C-346.546 1266.71 -277.946 1136.33 2.33361 1038.29C282.614 940.26 408.054 795.171 378.654 603.025C349.254 410.88 424.714 346.178 605.034 408.919C785.354 471.661 951.954 392.254 1104.83 170.698C1257.71 -50.857 1378.25 -56.739 1466.45 153.052C1554.65 362.844 1723.21 481.464 1972.13 508.913C2221.05 536.363 2258.29 655.963 2083.85 867.715C1909.41 1079.47 1745.75 1211.81 1592.87 1264.75Z;
            M1825.46 922.362C1625.3 992.322 1513.56 1069.08 1490.24 1152.65C1466.92 1236.21 1436.8 1390.71 1399.87 1616.13C1362.95 1841.56 1259.95 1948.44 1090.88 1936.78C921.814 1925.12 762.461 1881.4 612.824 1805.61C463.188 1729.82 378.653 1606.42 359.219 1435.4C339.786 1264.39 273.713 1118.64 160.999 998.152C48.2859 877.666 -5.15578 730.944 0.674223 557.987C6.50422 385.031 136.708 319.929 391.284 362.682C645.861 405.436 789.668 334.504 822.704 149.887C855.741 -34.7295 926.673 -48.3328 1035.5 109.077C1144.33 266.487 1243.44 345.192 1332.83 345.192C1422.22 345.192 1595.18 331.589 1851.7 304.382C2108.22 277.176 2218.02 355.881 2181.09 540.497C2144.17 725.114 2025.63 852.402 1825.46 922.362Z;
            M2034.67 1307.32C1930.97 1410.99 1882.69 1550.41 1889.84 1725.57C1896.99 1900.73 1822.79 1993.68 1667.24 2004.4C1511.68 2015.13 1365.96 2028.53 1230.07 2044.62C1094.19 2060.7 975.285 2023.17 873.369 1932.01C771.454 1840.86 633.779 1771.15 460.344 1722.89C286.909 1674.63 151.021 1567.39 52.6819 1401.16C-45.6576 1234.93 -6.32182 1087.48 170.689 958.785C347.7 830.093 451.404 681.741 481.8 513.727C512.195 345.714 612.323 263.494 782.182 267.069C952.041 270.644 1118.32 209.873 1281.03 84.7563C1443.74 -40.3602 1583.2 -26.9548 1699.42 124.972C1815.64 276.9 1968.51 389.504 2158.04 462.787C2347.57 536.069 2400.31 669.229 2316.28 862.266C2232.24 1055.3 2138.37 1203.66 2034.67 1307.32Z;
            M1825.46 922.362C1625.3 992.322 1513.56 1069.08 1490.24 1152.65C1466.92 1236.21 1436.8 1390.71 1399.87 1616.13C1362.95 1841.56 1259.95 1948.44 1090.88 1936.78C921.814 1925.12 762.461 1881.4 612.824 1805.61C463.188 1729.82 378.653 1606.42 359.219 1435.4C339.786 1264.39 273.713 1118.64 160.999 998.152C48.2859 877.666 -5.15578 730.944 0.674223 557.987C6.50422 385.031 136.708 319.929 391.284 362.682C645.861 405.436 789.668 334.504 822.704 149.887C855.741 -34.7295 926.673 -48.3328 1035.5 109.077C1144.33 266.487 1243.44 345.192 1332.83 345.192C1422.22 345.192 1595.18 331.589 1851.7 304.382C2108.22 277.176 2218.02 355.881 2181.09 540.497C2144.17 725.114 2025.63 852.402 1825.46 922.362Z;
            M1592.87 1264.75C1439.99 1317.69 1411.57 1447.09 1507.61 1652.96C1603.65 1858.83 1573.27 1943.14 1416.47 1905.89C1259.67 1868.64 1127.37 1864.71 1019.57 1894.12C911.774 1923.53 828.474 1886.28 769.674 1782.37C710.874 1678.45 569.754 1634.34 346.314 1650.02C122.874 1665.71 -60.3864 1592.18 -203.466 1429.45C-346.546 1266.71 -277.946 1136.33 2.33361 1038.29C282.614 940.26 408.054 795.171 378.654 603.025C349.254 410.88 424.714 346.178 605.034 408.919C785.354 471.661 951.954 392.254 1104.83 170.698C1257.71 -50.857 1378.25 -56.739 1466.45 153.052C1554.65 362.844 1723.21 481.464 1972.13 508.913C2221.05 536.363 2258.29 655.963 2083.85 867.715C1909.41 1079.47 1745.75 1211.81 1592.87 1264.75Z"
            fill="#3498db" />
        </path>
      </svg>
    </div>

  );
};

export default Circle;
