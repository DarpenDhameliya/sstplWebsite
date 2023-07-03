import React, { useEffect } from "react";
import useStyleMainDisplay from "../CommonComponent/sidebar/MainDisplayStyle";
import Sidebar from "../CommonComponent/sidebar/Sidebar";
import {Route, Switch, useHistory} from "react-router-dom";
import Hireus from "../pages/hireus/Hireus";
import Contact_us from "../pages/contactus/Contact_us";
import Career from "../pages/career/Careerinq";
import MetaList from "../pages/meta/MetaList";
import Profile_forggetpas from "../pages/profile/Profile_forggetpas";
import CareerDataList from "../pages/career/CareerDataList";
import CareerDetailsAdd from "../pages/career/CareerDetailsAdd";
import CareerEdit from "../pages/career/CareerEdit";
import PortfolioList from "../pages/portfolio/PortfolioList";
import PortfolioAdd from "../pages/portfolio/PortfolioAdd";
import PortfolioEdit from "../pages/portfolio/PortfolioEdit";
import AboutList from "../pages/about/AboutList";
// import AboutAdd from "../pages/about/AboutAdd";
// import AboutEdit from "../pages/about/AboutEdit";
import AboutValueAdd from "../pages/about/AboutValueAdd";
import AboutValueEdit from "../pages/about/AboutValueEdit";
import AboutValueList from "../pages/about/AboutValueList";
import ServiceList from "../pages/services/ServiceList";
import Serviceadd from "../pages/services/Serviceadd";
import ServiceEdit from "../pages/services/ServiceEdit";

const AdminMainrous = () => {

  const classes = useStyleMainDisplay();
  const history = useHistory();
  var token = localStorage.getItem("ssAdmin");
  useEffect(() => {
    if (!token) {
      history.push("/admin");
    }
  }, []);
  return (
    <>
    <div className={classes.setdisplay}>
      <Sidebar />
      <Switch>
        <Route  path="/admin/dashboard/hire" component={Hireus} />
        <Route  path="/admin/dashboard/contact" component={Contact_us} />
        <Route  path="/admin/dashboard/career" component={Career} />
        <Route  path="/admin/dashboard/meta" component={MetaList} />
        <Route  path="/admin/dashboard/careerdetails" component={CareerDataList} />
        <Route  path="/admin/dashboard/careerdetailsadd" component={CareerDetailsAdd} />
        <Route  path="/admin/dashboard/careerdetailedit/:id" component={CareerEdit} />
        <Route  path="/admin/dashboard/meta" component={MetaList} />
        <Route  path="/admin/dashboard/portfolio" component={PortfolioList} />
        <Route  path="/admin/dashboard/portfolioadd" component={PortfolioAdd} />
        <Route  path="/admin/dashboard/portfolioedit/:id" component={PortfolioEdit} />
        <Route  path="/admin/dashboard/profile" component={Profile_forggetpas} />
        <Route  path="/admin/dashboard/about" component={AboutList} />
        <Route  path="/admin/dashboard/aboutvalue" component={AboutValueList} />
        <Route  path="/admin/dashboard/aboutvalueadd" component={AboutValueAdd} />
        <Route  path="/admin/dashboard/aboutvalueedit/:id" component={AboutValueEdit} />
        <Route  path="/admin/dashboard/service" component={ServiceList} />
        <Route  path="/admin/dashboard/serviceadd" component={Serviceadd} />
        <Route  path="/admin/dashboard/serviceedit/:id" component={ServiceEdit} />
      </Switch>
    </div>
    </>
  );
};

export default AdminMainrous;

{/* <g id="teeth">
  <polygon
    id="Tooth32-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    ng-click="vm.selectTooth('32')"
    fill="#FFFFFF"
    data-key="32"
    points="66.7,369.7 59,370.3 51,373.7 43.7,384.3 42.3,392 38.7,406 41,415.3 44.3,420.3
 47.3,424 51.7,424.3 57.7,424 62.3,422.7 66.7,422.7 71,424.3 76.3,422.7 80.7,419.3 84.7,412.3 85.3,405 87.3,391.7 85,380
 80.7,375 73.7,371.3 	"
  ></polygon>
  <polygon
    id="Tooth31-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="31"
    points="76,425.7 80.3,427.7 83.3,433 85.3,447.7 84.3,458.7 79.7,472.3 73,475 50.3,479.7
 46.7,476.7 37.7,446.3 39.7,438.3 43.3,432 49,426.7 56,424.7 65,424.7 	"
  ></polygon>
  <polygon
    id="Tooth30-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="30"
    points="78.7,476 85,481 90.3,488.3 96.3,499.3 97.7,511.3 93,522 86,526.3 67,533
 60.3,529.7 56.3,523.7 51.7,511 47.7,494.7 47.7,488.3 50.3,483.3 55,479.7 67,476.7 	"
  ></polygon>
  <polygon
    id="Tooth29-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="29"
    points="93.3,525 99.3,527.3 108.3,536 114,546.7 115.7,559.3 114.3,567.3 106.3,573
 98.3,578.3 88,579 82,575 75,565 69.3,552.3 67.3,542 69.7,536 74.3,531.7 84.3,528.3 	"
  ></polygon>
  <path
    id="Tooth28-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="28"
    d="M117.3,569.7l7.7,1.3l6.3,3.7l6.3,7.7l4,8.3L144,602l-1.3,6.7l-6.7,6.7l-7.7,3.3l-7.3-1l-7-3
 l-7.3-7l-5-9l-2-10c0,0-0.7-7,0.3-7.3c1-0.3,5.3-6.7,5.3-6.7l9-5H117.3z"
  ></path>
  <polygon
    id="Tooth27-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="27"
    points="155.7,611 160.3,615.3 165,624.7 161.7,634.3 156,641.3 149,644 140.7,644.3
 133.3,641.3 128.7,634.7 128.7,629 132.7,621.3 137.7,615 143.7,611 149.7,610 	"
  ></polygon>
  <polygon
    id="Tooth26-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="26"
    points="178.3,627 186,629 187.7,633.7 188.7,644 189,657 189.3,662.7 186.3,663.7 176.7,663
 168,656.3 159.3,649.7 156.7,644 162,639.3 	"
  ></polygon>
  <polygon
    id="Tooth25-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="25"
    points="214,637 218,642.7 223,654.3 225.7,664 225.3,666.3 219,668.3 206.7,668 196,665.7
 190.3,662.7 193,657.3 199.7,647.3 207,638 210.7,635.5 	"
  ></polygon>
  <path
    id="Tooth24-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="24"
    d="M235.3,637c0,0,3-2,4-2.3c1-0.3,4.3,0,4.3,0l5,4.3l5.3,7.3l3.3,6.7l2,7.3l-2,3l-7.7,2.7
 l-10,0.3h-10l-2-6.7l2.7-7.3L235.3,637z"
  ></path>
  <polygon
    id="Tooth23-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="23"
    points="269.3,624 273.3,624.7 275.3,627.3 279,628.7 281.7,631.3 285.3,634.7 289.3,638.3
 292,643.3 291.3,650 287,655 280.7,658.7 272,660 265,660.7 261.3,657.3 261.7,650 263.7,637 264.3,627 	"
  ></polygon>
  <polygon
    id="Tooth22-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="22"
    points="286,629.3 286.7,633.3 291.3,638.7 295.3,642.3 302,644 311.7,643.3 318.3,637.7
 321,630 321.3,620.3 317,614.3 308,608 298.3,607 291,609.3 287,612.3 286.7,617.7 287.3,624.7 	"
  ></polygon>
  <polygon
    id="Tooth21-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="21"
    points="331,565.7 335,565.7 341.3,568 349.3,574.3 352.3,578.3 352.7,583.7 350.7,593.7
 342.7,604 337.7,609 328,612.7 320,613.3 315,611 308.3,604.7 306.7,598 307.3,591.3 309,584.7 312.7,578.3 318.3,571.7 	"
  ></polygon>
  <polygon
    id="Tooth20-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="20"
    points="334,561 338.7,566 346,570 354.7,573 360.7,571.7 368,568.3 383,545 385.3,532.7
 381.3,524.3 374,520.7 363.7,516.3 356.3,515.3 351.3,518.3 346.3,524 340.3,534.3 336,546.7 	"
  ></polygon>
  <path
    id="Tooth19-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="19"
    d="M398,470l4.7,5.7l3,7.7l-0.3,11.7l-6,13.3l-6.3,10.3l-8.3,4.3l-7.3-1l-16.3-7c0,0-2.7-6-3-7.3
 c-0.3-1.3-0.3-11-0.3-11l3.7-14.3l3.7-7l5.3-6.7l8-2l9.7-0.7L398,470z"
  ></path>
  <polygon
    id="Tooth18-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="18"
    points="410,435 408.7,447.3 404.3,459 399.3,467.7 393.7,468 388,466 376.3,466.3
 369.7,466.3 365.7,460 364.7,444.7 366.3,434.3 369,424 378.3,417.3 386.7,415.7 391.7,415.3 396,418 399.7,418 404,421.7
 407.7,427.3 	"
  ></polygon>
  <polygon
    id="Tooth17-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="17"
    points="371.7,417 378.3,417.3 386.7,415.7 391.7,415.3 397.3,417.7 402.7,416.3 407.7,409.7
 406.7,395 401,377.7 397.3,373 390.7,367.3 380,365 373,366.7 367.3,369 364,374.3 360,389 363.3,401.3 367.7,412.3 	"
  ></polygon>
  <polygon
    id="Tooth16-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="16"
    points="404.3,293.7 408.7,299.3 408.7,308 405.3,318.7 401,329.7 392.3,339.7 382.7,341
 369,339.7 359,335 354.7,327.7 354.3,316 358.3,304 363.7,294 368.7,294.7 378.7,296 389,296 	"
  ></polygon>
  <polygon
    id="Tooth15-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="15"
    points="362.3,247.3 357.3,251 357,259.3 358.7,268 359.7,279.7 361.3,286.7 365,291.7
 371,294.3 392,295 404.3,293.7 410,280.7 412,263.3 407.3,246.7 401,240.3 396,239.7 389.3,243 	"
  ></polygon>
  <polygon
    id="Tooth14-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="14"
    points="359.7,243.7 350.7,224 345.7,211.7 348.7,205 358.3,202.7 375.7,197 388.7,193
 393,196 399.3,207 401.3,222.7 400,234.3 394.7,240.7 381.7,244.7 371,246 	"
  ></polygon>
  <polygon
    id="Tooth13-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="13"
    points="386,188.7 383.3,192.7 377.7,196 356.3,203.3 345.7,202.3 341.7,199.7 338.7,196.3
 335,188.7 332,177 333.7,169.7 338,164.7 346.3,161 353.7,156.7 360.3,150.3 364,151 370.7,156.3 376.3,164.3 380,170.3
 383.3,178.3 	"
  ></polygon>
  <polygon
    id="Tooth12-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="12"
    points="358.7,134.3 360.3,145.7 357.3,152.7 352,157.3 346.3,161 336,164 329.7,163.3
 321.7,157.7 314.3,149 310.7,139.3 310,133.7 312.3,127 318.3,125.7 326,122 332.7,116 334.7,114.3 337.7,117.3 343.3,119.7
 348.7,122.7 354.3,127.7 	"
  ></polygon>
  <polygon
    id="Tooth11-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="11"
    points="336,93.3 337.7,100 336,104.7 332.7,113.7 324.3,121.3 315.3,125.7 306.3,126
 297.3,120.3 294,112 295.7,102.7 299,95 303.3,90 309.3,88 316.3,87.3 322.7,87.3 328,88.3 	"
  ></polygon>
  <polygon
    id="Tooth10-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="10"
    points="310.3,83.3 298,90.7 286,95 276.3,98.3 270.3,93.3 269,82.7 269,69.3 270,58.7
 274.7,54.7 282,53 287.7,54.7 297.3,60.3 304,64.3 308.7,68.7 312.3,74 313,81 	"
  ></polygon>
  <polygon
    id="Tooth9-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="9"
    points="273.3,52 266.7,61.7 258.3,72.3 253.3,79.7 247.3,85 239,87.7 232.3,82 224.7,67
 222,58.3 219,50 220,44.3 224.3,40.3 230,38.7 237.3,38.7 253,39.3 258.7,41.3 264.3,43.7 268.3,45.7 	"
  ></polygon>
  <polygon
    id="Tooth8-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="8"
    points="176.7,46.3 195,41 203.3,39.7 209.3,40.7 215.3,42.7 217,47 217.7,54.3 215,64.7
 212.3,75.7 208,83 201.7,85.7 195.7,86.7 189.7,83.3 183.7,74.7 175,62 171.7,54 172.7,49.7 	"
  ></polygon>
  <path
    id="Tooth7-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="7"
    d="M167,55l6.7,6.3L174,68l0.3,8l1,10l-2,8.3l-4.7,4.3l-6.7,1.7l-8-4.3l-7.3-4.7l-9.3-4.7
 l-6.3-5.3l-1-4.3l1.3-5c0,0,3.3-6,4.3-6s5.3-6,6.3-6s10.3-4.7,10.3-4.7L167,55z"
  ></path>
  <polygon
    id="Tooth6-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="6"
    points="126.3,82 134.3,86.3 139.7,92.3 144.7,104.7 145.7,115.3 143.7,120.7 138,124.3
 131.3,125 121,125 114.7,119.3 110.3,112.3 108.3,104.7 108.7,94.7 110.7,88.7 116,84 	"
  ></polygon>
  <polygon
    id="Tooth5-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="5"
    points="109,116.7 116,122.3 122.7,125.3 127.7,131.3 128.3,141 122.7,153.7 114,161.7
 105.7,162.3 96.7,161 85.7,156 82,150 81,139.3 86.3,128 93,121.3 100.7,117.3 	"
  ></polygon>
  <polygon
    id="Tooth4-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="4"
    points="82,155.3 102.3,163.3 108.7,172 109.3,182 104.7,192 100,199 94,203.7 85.3,201.7
 73.7,201 64.3,196.7 60.3,190.7 59,183.3 61.7,175.3 66.3,167.7 71.3,161.3 	"
  ></polygon>
  <path
    id="Tooth3-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="3"
    d="M92.7,207.3l2,5.3l-1.7,8l-1.7,9l-4,8l-5,7.7l-11,4.7l-13.7,0.7l-10-7l-1.7-5L45,220l3-10.7
 l5-7.3l4-3.3l4.7-2.7l5.3,3.7l6.7,1.3c0,0,7.3,1.3,9.3,1.3s6.3,0.7,6.3,0.7L92.7,207.3z"
  ></path>
  <polygon
    id="Tooth2-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="2"
    points="79.7,288.3 71.7,291 55,293 40.3,291.3 36,287 33,273.7 36.3,260 42,248.7 44.7,244.7
 50.3,246.7 56,249 65.3,250.7 74,249.7 80.3,249.7 82.3,254 85.3,259.3 87,267.7 87.7,274.7 85.3,282.7 	"
  ></polygon>
  <polygon
    id="Tooth1-76ad2f6a-e0af-40a3-862a-252116c268fd"
    class="no-outline"
    fill="#FFFFFF"
    data-key="1"
    points="33,314.3 38,325.7 45.7,335.7 55.7,341.7 64.7,343 73.3,340 77.7,335.7 81.3,326.3
 82,314.3 81.3,302 80.7,292.7 73.7,292 51.3,293.7 38.7,293.7 34,298 31.7,302.3 32,311 	"
  ></polygon>
</g>; */}
