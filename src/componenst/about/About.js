import React, { useEffect, useState, useRef } from "react";
import "./about.scss";
import AnimateL from "../animate/AnimateL";
function About({ aboutRef, position }) {
  const abMe = "About Me".split("");
  const [letClass, setLetClass] = useState("about_animate");
  const [handId, setHandId] = useState("");
  const [timeId, setTime] = useState(undefined);
  const clear = () => {
    setHandId("hand");
    setLetClass("about_bounce_class");
  };

  useEffect(() => {
    if (position === "about") {
      setHandId("handM");
      setLetClass("about_animate");
      setTime(setTimeout(clear, 4000));
    }
    if (position !== "about") {
      setLetClass("about_animate_before");
      setHandId("");
      clearTimeout(timeId);
    }
  }, [position]);

  return (
    <section className="about_cont" id="about">
      <div className="about_text">
        <h1 ref={aboutRef}>
          <AnimateL arr={abMe} lclass={letClass} ind={1} />
        </h1>
        <div className={`${position === "about" && "p_cont"}`}>
          <p>
            I'm a self-taught <span>Full-Stack Web Developer</span>. Also, I
            have a BA in <span>Macroeconomics</span> and a Master's Degree in
            <span> Digital Economics</span>. After I graduated from university,
            I realized that digital space was going to be the most important
            thing in my lifetime. So, I taught myself how to code.
          </p>
          <p>
            As I mentioned, I am an economist, so I do not have a lot of
            experience with coding. It has been 1.5 years since I started
            writing code. But I am good at solving problems, and I am
            results-oriented. So, most likely, I can do everything you want!
          </p>
          <p>
            I'm quietly confident, naturally curious, and perpetually working on
            improving my skills and knowledge.
          </p>
        </div>
      </div>
      <div className="about_logo_cont">
        <svg
          viewBox="0 0 1018 822"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="about">
            <g id="back">
              <path id="Vector" d="M52 0H959V436H52V0Z" fill="#F7F7F7" />
              <g id="line">
                <path
                  className={`${position === "about" && "about_out"}`}
                  d="M931.5 249.16V344.26H923.61V377.92H903.88V358.9H880.33V347.42H907.82V341.11H880.33V325.98H876.93V341.11H871.53V344.26H865.21V326.71H851.8V344.26H829.7V361.82H805.24V334.02H801.29V313.54H797.47V281.58H832.07V275.27H797.47V271.11H794.07V275.27H781.57V281.58H794.07V313.54H777.62V354.51H730.27V323.78H725.66V313.77H745.27V307.46H725.66V304.68H722.26V307.46H719.22V313.77H722.26V323.78H708.18V341.11H683.71V347.42H694.24V357.43H678.98V372.06H671.88V364.75H664.78V249.16H660.04V231.6H645.05V367.67H616.64V231.6H604.8V243.31H598.49V335.48H588.23V360.36H583.5V335.48H563.77V319.39H555.09V300.37H547.2V257.94H534.57V274.03H503.01V335.48H486.43V315H466.71V274.03H417.78V322.32H410.17V335.48H405.16V252.09H399.63V231.6H390.16V249.16H379.9V319.39H375.17V335.48H369.65V285.74H330.98V326.71H318.35V344.26H311.25V354.51H304.15V342.8L299.81 334.76V316.47H280.47V358.9H273.37V348.65H265.48V231.6H259.17V199.42H252.07V183.32H242.6V170H228.39V193.56H220.5V218.44H215.77V304.68H207.09V288.67H196.04V312.08H183.41V244.77L178.68 235.99V205.27H152.64V227.21H139.22V271.11H132.91V262.33H125.02L120.28 271.11L118.23 274.91V376.45H109.24V275.5H101.34V265.25H89.51V281.35H78.46V307.46H72.27V295.98H68.87V307.46H54V313.77H68.87V347.19H67.41V374.99H55.47V436H962.47V249.16H931.5ZM78.46 322.32H72.94V347.19H72.27V313.77H78.46V322.32ZM708.18 357.43H697.65V347.42H708.18V357.43ZM876.93 358.9H871.53V347.42H876.93V358.9Z"
                  stroke="#050296"
                  strokeWidth="2"
                  mask="url(#path-2-inside-1_82_57)"
                />
              </g>
              <path
                id="Vector_2"
                d="M983.91 822H26.09C20.35 822 15.66 817.31 15.66 811.57V765.08C15.66 759.34 20.35 754.65 26.09 754.65H983.91C989.65 754.65 994.34 759.34 994.34 765.08V811.57C994.34 817.31 989.65 822 983.91 822V822Z"
                fill="#F2F2F2"
              />
            </g>
            <g id={`${handId}`}>
              <path
                id="Vector_3"
                d="M726.5 140L741 117.667L755 112.812L768 98.2464L759 84.6522L731 90.4783C731 90.4783 732 74.942 728 73C725 80.7681 721 93.3913 721 93.3913C721 93.3913 723 110.87 723 115.725C721 120.58 708 133.203 708 133.203L726.5 140Z"
                fill="#FCD2B1"
              />
              <path
                id="Vector_4"
                d="M536.524 233L526 160.776C526 160.776 538.402 164.965 546.547 166.879C616.236 183.262 722.444 115 722.444 115L747 125.172C747 125.172 683.852 172.908 640.76 192.819C601.258 211.071 536.524 233 536.524 233Z"
                fill="#0E538C"
              />
            </g>
            <g id={`${position === "about" && "person"}`}>
              <path
                id="Vector_5"
                d="M393.63 570.41L284.37 587L277 580V492H398.89L412 499.46L393.63 570.41Z"
                fill="#0E538C"
              />
              <path
                id="Vector_6"
                d="M284.37 499.46H412V587H284.37V499.46Z"
                fill="#CCE9FF"
              />
              <path
                id="Vector_7"
                d="M358.82 494.86H320.14V476.43C320.14 466.27 328.82 458 339.48 458C350.14 458 358.82 466.27 358.82 476.43V494.86V494.86ZM324.98 490.25H353.99V476.43C353.99 468.81 347.48 462.61 339.49 462.61C331.49 462.61 324.99 468.81 324.99 476.43V490.25H324.98Z"
                fill="#0E538C"
              />
              <path
                id="Vector_8"
                d="M412 549H284V499H412V549Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_9"
                d="M330 537H378V561H330V537Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_10"
                d="M330.73 436C330.73 436 321.56 462.81 324 469C326.44 475.19 352.29 477.99 352.29 477.99L355 457L344.78 436H330.73Z"
                fill="#FCD2B1"
              />
              <path
                id="Vector_11"
                d="M566.29 786.61L627.55 806.49H552.97V786.61H566.29ZM414.47 786.61L470.41 806.49H396.48L400.27 786.61H414.47Z"
                fill="#0A3951"
              />
              <path
                id="Vector_12"
                d="M532.29 384.36L573.75 795.67H548.82C548.82 795.67 499.01 617 509.01 582C502.65 553.68 462.46 459.51 471.82 447.53C481.18 435.55 498.32 373.03 498.32 373.03L532.29 384.36Z"
                fill="#083047"
              />
              <path
                id="Vector_13"
                d="M525.87 390.58L505.77 418.26L422.89 795.67H396.56C396.56 795.67 401.13 605.9 420 582C427.55 539.23 425.49 390.58 439.33 380.52C464.49 379.26 521.13 369.2 521.13 369.2L525.87 390.58V390.58Z"
                fill="#0A3951"
              />
              <path
                id="Vector_14"
                d="M530 175L526 382L470 377L464 165C472.23 164.23 501.16 164.79 507 164L530 175Z"
                fill="white"
              />
              <path
                id="Vector_15"
                d="M470.78 57.6499C459.2 69.8299 456.44 95.1999 463.93 107.37C471.42 119.54 487.55 124.66 494.3 130.96C504.26 115.41 519.5 103.96 519.5 103.96L506.86 69.7999L489.4 63.6499L470.78 57.6499V57.6499Z"
                fill="#0E538C"
              />
              <path
                id="Vector_16"
                d="M521.13 134.95V165.69L509.31 183.42L480.93 157.12L492.17 102.67L521.13 134.95Z"
                fill="#FCD2B1"
              />
              <path
                id="Vector_17"
                d="M553.05 58.02C554.4 97.17 562.2 140.28 558.25 146.74C554.3 153.2 507.37 159.1 499.29 142.24C491.21 125.38 470.5 83.9 480.32 67.17C490.14 50.45 553.05 58.02 553.05 58.02Z"
                fill="#FFE3CA"
              />
              <path
                id="Vector_18"
                d="M497.19 68.6201C500.72 77.7101 498.58 95.6001 489.49 99.1301C490.17 104.54 492.16 114.73 493.04 119.14C493.28 120.34 492.52 121.51 491.32 121.78C488.58 122.4 486.19 123.26 486.08 122.45C485.93 121.28 472.55 71.7201 472.55 71.7201L497.19 68.6201V68.6201Z"
                fill="#0E538C"
              />
              <path
                id="Vector_19"
                d="M486.078 118.97C490.113 117.325 491.536 111.46 489.257 105.87C486.978 100.281 481.859 97.0831 477.824 98.7284C473.789 100.374 472.366 106.239 474.645 111.828C476.924 117.418 482.043 120.616 486.078 118.97Z"
                fill="#FFE3CA"
              />
              <path
                id="Vector_20"
                d="M488.17 98.1102L492 119.07L488.28 120.98L482.25 91.9502L488.17 98.1102Z"
                fill="#0E538C"
              />
              <path
                id="Vector_21"
                d="M509.31 183.42L496.93 201.12L471.81 162.89L480.93 157.12L509.31 183.42ZM509.31 183.42L513.16 201.12L525.87 173.94L521.13 165.69L509.31 183.42Z"
                fill="#F2F2F2"
              />
              <path
                id="Vector_22"
                d="M511.9 195.32L509.31 202.55L522.05 326.68C522.05 326.68 510.08 358.53 509.01 355.01C507.94 351.49 491.49 323.82 491.49 323.82L502.29 202.74L501.04 195.26L509.32 183.43L511.9 195.32Z"
                fill="#FFBE55"
              />
              <path
                id="Vector_23"
                d="M472.14 70.7701C467.12 67.9701 465.95 60.76 468.39 55.55C470.83 50.34 475.9 46.87 481.09 44.4C489.263 40.5213 498.193 38.4996 507.24 38.48C511.46 38.48 515.68 38.9101 519.88 38.4601C524.07 38.0101 528.35 36.56 531.17 33.42C533.99 30.29 534.89 25.21 532.42 21.79C541.26 26.96 549.4 33.34 556.54 40.68C557.41 36.08 556.79 31.22 554.81 26.98C558.7 31.71 562.63 36.49 565.35 41.97C568.08 47.45 569.54 53.78 568.21 59.76C566.37 68.03 559.39 74.42 551.56 77.65C543.73 80.88 535.08 81.4301 526.61 81.6301C517.09 81.8501 507.45 81.67 498.22 79.31C488.99 76.95 481.85 78.5001 476 70.9901L472.14 70.7701V70.7701ZM521.36 119.9L520.22 119.98C512.78 120.51 506.31 114.91 505.78 107.47L505.11 98.12L533.2 96.11L533.87 105.46C534.4 112.91 528.8 119.37 521.36 119.9ZM553.86 117.49C547.55 117.94 542.06 113.19 541.61 106.87L540.8 95.48L563.66 93.8501L564.47 105.24C564.92 111.55 560.17 117.04 553.86 117.49Z"
                fill="#0E538C"
              />
              <path
                id="Vector_24"
                d="M529.859 98.9946L543.863 97.9937L544.149 101.984L530.144 102.984L529.859 98.9946Z"
                fill="#0E538C"
              />
              <path
                id="Vector_25"
                d="M507 107L479.74 96.9698L480.26 95.0298L506.94 99.5098L507 107ZM472 163C472 163 419 175 403 183C387 191 316 300 326 445C338 445 359 436 359 436C359 436 344 279 425 247C426 288 402 445 402 445L482.25 435.94L472 163ZM527.5 173.5L522 436L550 445L552.5 233.5C557.5 212.5 556 190 556 190L527.5 173.5Z"
                fill="#0E538C"
              />
            </g>
            <g id={`${position === "about" && "right"}`}>
              <path
                id="Vector_26"
                d="M893.79 783.01C918.98 783.01 929.62 762.89 933.8 741.55C938.53 717.47 935.06 691.84 935.06 691.84H852.52C852.52 691.84 852.39 692.82 852.21 694.56C850.67 709.72 845.7 783.01 893.79 783.01V783.01Z"
                fill="#B6E7FF"
              />
              <path
                id="Vector_27"
                d="M852.52 691.84C852.52 693.64 871 695.1 893.79 695.1C916.58 695.1 935.06 693.64 935.06 691.84C935.06 690.04 916.58 688.58 893.79 688.58C870.99 688.58 852.52 690.04 852.52 691.84Z"
                fill="#85DDFF"
              />
              <path
                id="Vector_28"
                d="M782.03 463.01C782.03 463.01 825.56 529.23 851.67 569.65C877.78 610.07 884.63 618.46 887.74 631.52C890.85 644.58 893.65 692.77 893.65 692.77H895.58C895.58 692.77 894.91 651.87 892.55 638.1C890.27 624.79 892.71 620.02 894.58 606.03C896.45 592.04 898.93 569.65 884.79 554.11C870.64 538.56 874.37 523.33 869.4 513.07C864.42 502.81 825.87 490.37 820.9 479.8C815.91 469.23 794.15 462.7 782.03 463.01V463.01Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_29"
                d="M782.03 463.01C782.03 463.01 795.71 478.56 805.04 483.84C814.37 489.12 818.72 484.46 825.87 497.21C833.02 509.96 833.3 515.55 839.84 522.08C846.39 528.61 854.16 528.92 854.78 543.22C855.4 557.52 851.67 569.65 851.67 569.65C851.67 569.65 784.82 466.43 782.03 463.01V463.01Z"
                fill="#41AAF7"
              />
              <path
                id="Vector_30"
                d="M890.2 692.78H888.25C888.25 692.78 887.67 679.54 882.41 673.11C879.02 668.96 864.61 664.25 850.37 658.61C842.53 655.5 834.73 652.11 828.86 648.37C812.3 637.85 796.52 603.96 795.17 597.92C794.69 595.82 794.48 594.54 794.49 593.67V593.65C794.53 592.03 795.33 591.78 796.72 590.14C797.39 589.35 799.41 589.62 801.87 590.37C809.01 592.55 815.04 597.44 818.77 603.9C822.22 609.88 827.74 617.35 834.5 619.16C846.19 622.28 845.22 624.22 849.53 636.11C853.83 648 864.7 649.94 878.33 663.96C891.95 677.97 890.2 692.78 890.2 692.78V692.78Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_31"
                d="M850.36 658.6C842.52 655.49 834.72 652.1 828.85 648.36C812.29 637.84 796.51 603.95 795.16 597.91C794.68 595.81 794.47 594.53 794.48 593.66C794.53 594.06 795.3 599.42 803.92 602.99C812.87 606.68 814.63 606.68 815.79 612.34C816.96 617.98 817.94 624.03 822.61 625.2C827.28 626.37 830.21 621.11 833.9 629.68C837.6 638.25 839.37 641.17 842.77 642.34C846.17 643.51 848.75 641.76 849.51 648.38C849.97 652.41 850.23 656.24 850.36 658.6V658.6Z"
                fill="#41AAF7"
              />
              <path
                id="Vector_32"
                d="M904.51 692.78H906.82C906.82 692.78 911.34 610.79 917.56 603.18C921.57 598.27 934.82 589.46 951.69 582.78C960.98 579.1 970.21 575.08 977.17 570.66C996.78 558.2 1015.47 518.06 1017.07 510.91C1017.64 508.42 1017.89 506.91 1017.87 505.87V505.84C1017.83 503.92 1016.87 503.63 1015.23 501.69C1014.44 500.75 1012.05 501.08 1009.13 501.96C1000.67 504.54 993.54 510.33 989.11 517.99C985.02 525.07 978.48 533.92 970.47 536.06C956.63 539.76 957.78 542.05 952.67 556.13C947.58 570.21 934.7 572.5 918.57 589.11C902.43 605.71 904.51 692.78 904.51 692.78V692.78Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_33"
                d="M951.69 582.77C960.98 579.09 970.21 575.07 977.17 570.65C996.78 558.19 1015.47 518.05 1017.07 510.9C1017.64 508.41 1017.89 506.9 1017.87 505.86C1017.81 506.33 1016.9 512.68 1006.69 516.91C996.09 521.28 994.01 521.28 992.63 527.98C991.25 534.67 990.08 541.82 984.55 543.21C979.01 544.59 975.55 538.37 971.18 548.51C966.79 558.66 964.7 562.12 960.68 563.5C956.65 564.88 953.59 562.81 952.69 570.66C952.15 575.44 951.84 579.98 951.69 582.77Z"
                fill="#41AAF7"
              />
              <path
                id="Vector_34"
                d="M893.79 783.01C918.98 783.01 929.62 762.89 933.8 741.55C909.11 732.19 878.01 717.18 852.21 694.56C850.67 709.72 845.7 783.01 893.79 783.01Z"
                fill="#CCE9FF"
              />
            </g>
            <g id={`${position === "about" && "left"}`}>
              <path
                id="Vector_35"
                d="M74.72 785.67C88.63 785.67 94.5 774.56 96.81 762.78C99.42 749.49 97.5 735.34 97.5 735.34H51.94C51.94 735.34 51.87 735.88 51.77 736.84C50.92 745.2 48.17 785.67 74.72 785.67Z"
                fill="#B6E7FF"
              />
              <path
                id="Vector_36"
                d="M51.94 735.33C51.94 736.33 62.14 737.13 74.73 737.13C87.31 737.13 97.52 736.32 97.52 735.33C97.52 734.33 87.32 733.53 74.73 733.53C62.14 733.53 51.94 734.34 51.94 735.33Z"
                fill="#85DDFF"
              />
              <path
                id="Vector_37"
                d="M0 584.01C0 584.01 28.77 627.77 46.02 654.49C63.27 681.21 67.8 686.75 69.85 695.38C71.91 704.01 73.75 735.86 73.75 735.86H76.01C76.01 735.86 77.45 708.94 74.78 700.11C72.11 691.28 73.14 687.78 74.37 678.54C75.6 669.29 77.25 654.5 67.9 644.23C58.55 633.96 61.02 623.89 57.73 617.11C54.44 610.33 28.96 602.11 25.68 595.13C22.4 588.12 8.01 583.8 0 584.01V584.01Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_38"
                d="M6.29001 584.01C6.29001 584.01 15.33 594.28 21.49 597.78C27.65 601.27 30.53 598.19 35.26 606.61C39.99 615.03 40.17 618.73 44.49 623.05C48.82 627.36 53.95 627.57 54.36 637.02C54.77 646.47 52.31 654.48 52.31 654.48C52.31 654.48 8.14001 586.27 6.29001 584.01V584.01Z"
                fill="#41AAF7"
              />
              <path
                id="Vector_39"
                d="M83.33 735.33L84.98 734.84C84.98 734.84 82.12 723.52 84.94 716.76C86.75 712.4 97.72 704.78 108.32 696.41C114.15 691.8 119.88 686.97 123.89 682.33C135.21 669.26 139.95 636.66 139.57 631.22C139.44 629.32 139.3 628.19 139.07 627.46L139.06 627.44C138.62 626.08 137.88 626.07 136.29 625.05C135.53 624.55 133.89 625.29 132 626.55C126.52 630.19 122.67 635.84 121.16 642.25C119.76 648.17 116.99 655.87 111.74 659.11C102.66 664.7 103.97 666.09 103.34 677.22C102.72 688.34 94.03 692.73 86.08 708.01C78.11 723.28 83.33 735.33 83.33 735.33Z"
                fill="#2A94F4"
              />
              <path
                id="Vector_40"
                d="M108.32 696.41C114.15 691.8 119.88 686.97 123.89 682.33C135.21 669.26 139.95 636.66 139.57 631.22C139.44 629.32 139.3 628.19 139.07 627.46C139.13 627.81 139.84 632.53 133.46 637.72C126.84 643.1 125.36 643.55 125.8 648.62C126.24 653.68 126.94 659.03 123.29 661.2C119.64 663.37 115.84 659.67 114.89 667.83C113.93 676 113.18 678.91 110.6 680.76C108.02 682.61 105.4 681.78 106.44 687.57C107.08 691.08 107.83 694.38 108.32 696.41V696.41Z"
                fill="#41AAF7"
              />
              <path
                id="Vector_41"
                d="M74.72 785.67C88.63 785.67 94.5 774.56 96.81 762.78C83.18 757.61 66.01 749.32 51.77 736.84C50.92 745.2 48.17 785.67 74.72 785.67V785.67Z"
                fill="#CCE9FF"
              />
            </g>
          </g>
        </svg>
      </div>
    </section>
  );
}

export default About;
