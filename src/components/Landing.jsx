import LogoWhite from "../assets/logo-white.png";
import Laptop from "../assets/laptop.png";
import Gathering from "../assets/gathering.png";
import HubSpot from "../assets/hubspot.png";
import Hubform from "./Hubform";

export default function Landing() {
  return (
    <>
      <header className="w-full bg-gradient-to-b from-blue-800 to-blue-500 h-96 md:h-[500px] lg:h-[660px]">
        <div className="flex flex-col bg-black/40 bg-blend-darken lg:bg-inherit bg-no-repeat w-full px-3 md:px-6 md:max-w-screen-xl mx-auto h-full bg-right bg-auto bg-[url('assets/icons.png')]">
          <div className="flex items-center py-4">
            <span className="mr-1">
              <svg
                className="w-14 h-14 md:w-16 md:h-16"
                viewBox="0 0 88 94"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.4283 27.2047L23.4866 62.3997C23.1526 62.8378 22.7832 63.2571 22.3828 63.6605C17.1889 68.8961 8.85084 69.0083 3.75941 63.9204C-1.3277 58.8282 -1.24112 50.4593 3.95276 45.2273C4.14684 45.0318 4.34164 44.8471 4.54365 44.6712L40.0921 8.86499L58.4283 27.2047Z"
                  fill="#42E4B3"
                />
                <path
                  d="M39.5338 9.45904C34.329 14.6831 34.228 23.0516 39.3083 28.1507C44.3885 33.2498 52.7261 33.1485 57.9309 27.9244C63.1357 22.7003 63.2366 14.3318 58.1564 9.23272C53.0762 4.13365 44.7385 4.23498 39.5338 9.45904Z"
                  fill="#168CF6"
                />
                <path
                  d="M83.3532 53.4421C82.9521 53.8447 82.5351 54.2162 82.0993 54.5522L48.8675 87.9072C52.9532 82.673 52.6805 75.1796 47.9873 70.4733C43.0921 65.56 35.1862 65.4738 29.9556 70.1453L65.5667 34.4021C70.7931 29.7502 78.6911 29.8479 83.579 34.7497C88.6575 39.8506 88.5601 48.2159 83.3532 53.4421Z"
                  fill="#168CF6"
                />
                <path
                  d="M65.5473 34.4217L64.4023 35.5709C64.5777 35.3674 64.7609 35.1719 64.9557 34.9764C65.1505 34.7808 65.3453 34.5976 65.5473 34.4217Z"
                  fill="#4D4D4D"
                />
                <path
                  d="M48.8675 87.9072L47.263 89.5177L28.9585 71.1461L29.9556 70.1453C35.1863 65.4738 43.0914 65.56 47.9873 70.4734C52.6805 75.1796 52.9525 82.6731 48.8675 87.9072Z"
                  fill="#4D4D4D"
                />
                <path
                  d="M48.8674 87.9072C48.5326 88.3453 48.1625 88.7632 47.7614 89.1658C42.5581 94.3883 34.2201 94.4897 29.138 89.3924C24.0595 84.2916 24.1605 75.9226 29.3638 70.7C29.5586 70.5045 29.7534 70.3206 29.9554 70.1446C35.1861 65.4731 43.0913 65.5593 47.9872 70.4727C52.6804 75.1796 52.9524 82.6731 48.8674 87.9072Z"
                  fill="#42E4B3"
                />
              </svg>
            </span>
            <h1 className="text-6xl font-extrabold text-white">smarteam</h1>
          </div>
          <div className="flex my-[9%]">
            <p className="text-3xl md:text-5xl font-bold text-slate-100 lg:w-1/2 text-left">
              Evalue el desempeño comercial de tu equipo comercial y
              cumplimiento de metas
            </p>
          </div>
        </div>
      </header>
      {/*<!-- HERO END -->*/}

      {/*<!-- FORM -->*/}
      <section className="w-full bg-gray-100/50 bg-[left_top] bg-auto bg-no-repeat md:bg-[left_top_4rem] bg-[url('assets/elipse1.svg')]">
        <div className="flex flex-col space-y-3 lg:space-y-0 lg:space-x-3 lg:flex-row w-full px-3 md:px-6 md:max-w-screen-xl mx-auto pt-14 pb-28 md:pt-32 md:pb-16">
          <div className="lg:w-2/5">
            <div className="space-y-8 md:space-y-12 lg:pr-8">
              <h4 className="text-blue-500 font-bold text-2xl md:text-4xl">
                Conoce por medio de escalas el desempeño de tu equipo comercial
                alineado al cumplimiento de metas
              </h4>
              <div>
                <p className="text-blue-700 semi-bold text-lg md:text-2xl inline">
                  Llene el formulario para recibir mas informacion
                  <span>
                    <svg
                      className="hidden md:inline"
                      width="62"
                      height="16"
                      viewBox="0 0 62 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM61.7071 8.70711C62.0976 8.31658 62.0976 7.68342 61.7071 7.29289L55.3431 0.928932C54.9526 0.538408 54.3195 0.538408 53.9289 0.928932C53.5384 1.31946 53.5384 1.95262 53.9289 2.34315L59.5858 8L53.9289 13.6569C53.5384 14.0474 53.5384 14.6805 53.9289 15.0711C54.3195 15.4616 54.9526 15.4616 55.3431 15.0711L61.7071 8.70711ZM1 9H61V7H1V9Z"
                        fill="#42E4B3"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
            <div className="hidden lg:block m-0">
              <img
                src={Laptop}
                alt="smarteam"
              />
            </div>
          </div>
          <div className="lg:w-3/5">
            <div className="px-10 py-5 relative lg:px-20 lg:py-14 bg-white shadow-2xl rounded-lg">
              <Hubform />
              <div className="w-28 h-28 bg-center bg-contain bg-no-repeat absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 bg-[url('assets/elipse2.svg')]"></div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- FORM END -->*/}

      {/*<!-- FEATURES -->*/}
      <section className="w-full bg-gray-100/50 bg-auto bg-no-repeat bg-[center_top_12rem] bg-[url('assets/background.png')]">
        <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row w-full px-3 md:px-6 pt-10 pb-14 md:pt-14 lg:pt-0 md:max-w-screen-xl mx-auto">
          <div className="flex flex-col">
            <div className="max-w-2xl mx-auto">
              <p className="text-blue-700 font-bold text-center text-2xl md:text-4xl">
                Sabes porque debes conocer el desempeño de tu equipo comercial?
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
              <div className="bg-white rounded-md shadow-md border border-cyan-300 p-4 lg:p-8">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.3"
                    cx="27.5"
                    cy="27.5"
                    r="27.5"
                    fill="#42E4B3"
                  />
                  <path
                    d="M21.6753 30.893C22.5439 30.0244 22.5439 28.6109 21.6753 27.7423C21.2544 27.3216 20.695 27.0897 20.0999 27.0897C19.7559 27.0897 19.424 27.1675 19.1239 27.3143C18.0658 25.8004 17.5085 24.0289 17.5085 22.1656C17.5085 17.3968 21.2338 13.4463 25.9893 13.1716C26.3127 13.1529 26.5594 12.8757 26.5409 12.5525C26.5221 12.2291 26.2449 11.9831 25.9217 12.0009C20.5464 12.3115 16.3359 16.7763 16.3359 22.1656C16.3359 24.3157 16.9931 26.358 18.2389 28.0927C17.6696 28.9569 17.7648 30.1334 18.5245 30.893C18.9454 31.3137 19.5048 31.5456 20.0999 31.5456C20.695 31.5456 21.2544 31.3137 21.6753 30.893ZM19.3535 28.5715C19.5593 28.3657 19.8296 28.2627 20.0999 28.2627C20.37 28.2627 20.6403 28.3657 20.8461 28.5715C21.2576 28.9828 21.2576 29.6525 20.8461 30.0638C20.4345 30.4753 19.765 30.4753 19.3535 30.0638C18.9422 29.6525 18.9422 28.983 19.3535 28.5715Z"
                    fill="#168CF6"
                  />
                  <path
                    d="M35.5571 32.3126C35.1866 32.3126 34.8382 32.4092 34.5359 32.5785C34.2678 31.7287 33.4722 31.1107 32.535 31.1107C31.9419 31.1107 31.4057 31.3581 31.0239 31.755C30.9179 31.6452 30.8 31.547 30.6726 31.462C32.0239 30.8571 33.2399 29.9585 34.2239 28.8203C35.8201 26.9732 36.6992 24.6098 36.6992 22.1656C36.6992 20.0166 36.0421 17.9731 34.7965 16.2382C35.3658 15.3739 35.2706 14.1977 34.5107 13.4378C33.6421 12.5692 32.2287 12.5692 31.3599 13.4378C30.4913 14.3064 30.4913 15.72 31.3599 16.5886C31.7943 17.023 32.3647 17.2402 32.9353 17.2402C33.2697 17.2402 33.6036 17.1649 33.9105 17.0157C34.9691 18.53 35.5267 20.3029 35.5267 22.1656C35.5267 26.4067 32.6476 29.9917 28.5879 30.9361V27.7803C30.9129 26.9219 32.5013 24.6746 32.5013 22.1656C32.5013 18.8662 29.817 16.1819 26.5174 16.1819C23.2181 16.1819 20.5338 18.866 20.5338 22.1656C20.5338 23.4677 20.9451 24.7059 21.7228 25.746C22.4012 26.653 23.3399 27.3575 24.393 27.7594V36.3835L23.6564 35.1752C23.0375 34.1592 21.7455 33.8296 20.7153 34.4242C19.7354 34.99 19.3532 36.2315 19.8478 37.2555L22.0348 41.6736C22.1371 41.8803 22.3449 42 22.5608 42C22.6482 42 22.7368 41.9805 22.8203 41.9391C23.1105 41.7954 23.2293 41.4436 23.0858 41.1536L20.9011 36.7405C20.6748 36.2715 20.8505 35.7003 21.3017 35.4398C21.7679 35.1706 22.3751 35.3256 22.6553 35.7854L24.4786 38.7771C24.6154 39.0014 24.8848 39.1074 25.1377 39.0364C25.3906 38.9655 25.5655 38.7348 25.5655 38.4718V25.0199C25.5655 24.51 25.9805 24.0953 26.4904 24.0953C27.0004 24.0953 27.4153 24.51 27.4153 25.0199V27.339C27.4151 27.3431 27.4153 27.3472 27.4153 27.3516V36.1548C27.4153 36.4787 27.6776 36.741 28.0015 36.741C28.3254 36.741 28.5879 36.4787 28.5879 36.1548V33.2082C28.5879 32.6982 29.0026 32.2833 29.5126 32.2833C30.0225 32.2833 30.4375 32.6982 30.4375 33.2082V36.3681C30.4375 36.692 30.7 36.9545 31.0237 36.9545C31.3475 36.9545 31.6101 36.692 31.6101 36.3681V33.2082C31.6101 32.6982 32.025 32.2833 32.535 32.2833C33.0449 32.2833 33.4596 32.6982 33.4596 33.2082V36.4077C33.4596 36.7316 33.7222 36.9941 34.046 36.9941C34.3699 36.9941 34.6322 36.7316 34.6322 36.4077V34.41C34.6322 33.9001 35.0472 33.4851 35.5571 33.4851C36.0671 33.4851 36.482 33.9001 36.482 34.41V41.4134C36.482 41.7372 36.7443 41.9998 37.0682 41.9998C37.3921 41.9998 37.6546 41.7372 37.6546 41.4134V34.41C37.6546 33.2535 36.7137 32.3126 35.5571 32.3126ZM32.1891 15.7596C31.7776 15.3481 31.7776 14.6786 32.1891 14.2671C32.3949 14.0613 32.665 13.9585 32.9353 13.9585C33.2056 13.9585 33.4759 14.0613 33.6817 14.2671C34.093 14.6786 34.093 15.3481 33.6817 15.7596C33.2701 16.1709 32.6004 16.1709 32.1891 15.7596ZM21.7063 22.1656C21.7063 19.5126 23.8647 17.3542 26.5177 17.3542C29.1704 17.3542 31.3288 19.5126 31.3288 22.1656C31.3288 24.0337 30.234 25.7217 28.5879 26.5093V25.0199C28.5879 24.6908 28.5115 24.3791 28.3755 24.1014C28.8955 23.6002 29.2029 22.9014 29.2029 22.1656C29.2029 20.6847 27.9983 19.4801 26.5177 19.4801C25.0368 19.4801 23.8322 20.6847 23.8322 22.1656C23.8322 22.8799 24.1231 23.5663 24.6232 24.0666C24.4765 24.3527 24.393 24.6768 24.393 25.0199V26.4846C22.7603 25.6867 21.7063 24.0321 21.7063 22.1656ZM25.4266 23.2134C25.1563 22.9337 25.0048 22.5631 25.0048 22.1656C25.0048 21.3313 25.6834 20.6526 26.5174 20.6526C27.3517 20.6526 28.0303 21.3313 28.0303 22.1656C28.0303 22.5688 27.8665 22.9529 27.5877 23.2335C27.2682 23.0364 26.8923 22.9227 26.4904 22.9227C26.1022 22.9227 25.7388 23.0289 25.4266 23.2134Z"
                    fill="#168CF6"
                  />
                  <path
                    d="M28.5937 13.3815C28.748 13.3815 28.8993 13.3188 29.0082 13.2097C29.1174 13.1007 29.1801 12.9494 29.1801 12.7952C29.1801 12.6411 29.1174 12.4898 29.0082 12.3806C28.8993 12.2717 28.748 12.209 28.5937 12.209C28.4397 12.209 28.2884 12.2717 28.1795 12.3806C28.0703 12.4898 28.0076 12.6411 28.0076 12.7952C28.0076 12.9494 28.0703 13.1007 28.1795 13.2097C28.2884 13.3188 28.4397 13.3815 28.5937 13.3815Z"
                    fill="#168CF6"
                  />
                </svg>
                <p className="text-blue-700 text-left text-lg mt-5 lg:mb-12 leading-5">
                  Mejorar estructuras y procesos colaborativos
                </p>
              </div>
              <div className="bg-white rounded-md shadow-md border border-cyan-300 p-4 lg:p-8">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.3"
                    cx="27.5"
                    cy="27.5"
                    r="27.5"
                    fill="#42E4B3"
                  />
                  <path
                    d="M27.0968 35.7097C27.0968 35.9768 26.88 36.1935 26.6129 36.1935C26.3458 36.1935 26.129 35.9768 26.129 35.7097C26.129 35.4426 26.3458 35.2258 26.6129 35.2258C26.88 35.2258 27.0968 35.4426 27.0968 35.7097ZM28.5484 35.2258C28.2813 35.2258 28.0645 35.4426 28.0645 35.7097C28.0645 35.9768 28.2813 36.1935 28.5484 36.1935C28.8155 36.1935 29.0323 35.9768 29.0323 35.7097C29.0323 35.4426 28.8155 35.2258 28.5484 35.2258ZM25.6452 26.0323C25.6452 28.4332 23.6913 30.3871 21.2903 30.3871C18.8894 30.3871 16.9355 28.4332 16.9355 26.0323C16.9355 23.6313 18.8894 21.6774 21.2903 21.6774C23.6913 21.6774 25.6452 23.6313 25.6452 26.0323ZM24.6387 25.5484C24.5565 24.976 24.331 24.4505 23.999 24.0077L23.3066 24.7002C23.475 24.9537 23.5979 25.2402 23.6608 25.5484H24.6387ZM22.7419 26.0323C22.7419 25.2319 22.0906 24.5806 21.2903 24.5806C20.49 24.5806 19.8387 25.2319 19.8387 26.0323C19.8387 26.8326 20.49 27.4839 21.2903 27.4839C22.0906 27.4839 22.7419 26.8326 22.7419 26.0323ZM23.3148 23.3235C22.8721 22.9916 22.3466 22.7661 21.7742 22.6839V23.6618C22.0824 23.7247 22.3689 23.8476 22.6224 24.016L23.3148 23.3235ZM17.9419 25.5484H18.9198C19.1129 24.6019 19.86 23.8548 20.8065 23.6618V22.6839C19.3263 22.8968 18.1548 24.0682 17.9419 25.5484ZM20.8065 29.3806V28.4027C19.86 28.2097 19.1129 27.4626 18.9198 26.5161H17.9419C18.1548 27.9963 19.3263 29.1677 20.8065 29.3806ZM24.6387 26.5161H23.6608C23.4677 27.4626 22.7206 28.2097 21.7742 28.4027V29.3806C23.2544 29.1677 24.4258 27.9963 24.6387 26.5161ZM20.8065 32.3226H21.7742V31.3548H20.8065V32.3226ZM22.7419 32.3226H23.7097V31.3548H22.7419V32.3226ZM24.6774 32.3226H25.6452V31.3548H24.6774V32.3226ZM16.9355 32.3226H17.9032V31.3548H16.9355V32.3226ZM18.871 32.3226H19.8387V31.3548H18.871V32.3226ZM15 15.3871C15 13.5194 16.5194 12 18.3871 12C20.2548 12 21.7742 13.5194 21.7742 15.3871C21.7742 17.2548 20.2548 18.7742 18.3871 18.7742C16.5194 18.7742 15 17.2548 15 15.3871ZM20.8065 15.3871C20.8065 14.895 20.6569 14.4377 20.4034 14.055L18.871 15.5874V17.7576C19.9737 17.5326 20.8065 16.5552 20.8065 15.3871ZM18.3871 12.9677C17.895 12.9677 17.4377 13.1173 17.055 13.3708L18.3871 14.7029L19.7192 13.3708C19.3365 13.1173 18.8792 12.9677 18.3871 12.9677ZM15.9677 15.3871C15.9677 16.5552 16.8005 17.5326 17.9032 17.7576V15.5874L16.3708 14.055C16.1173 14.4377 15.9677 14.895 15.9677 15.3871ZM22.7419 15.3871C22.7419 13.5194 24.2613 12 26.129 12C27.9968 12 29.5161 13.5194 29.5161 15.3871C29.5161 17.2548 27.9968 18.7742 26.129 18.7742C24.2613 18.7742 22.7419 17.2548 22.7419 15.3871ZM26.129 17.8065C26.6211 17.8065 27.0784 17.6569 27.4611 17.4034L25.9287 15.871H23.7585C23.9835 16.9737 24.961 17.8065 26.129 17.8065ZM28.5484 15.3871C28.5484 14.895 28.3989 14.4377 28.1453 14.055L26.8132 15.3871L28.1453 16.7192C28.3989 16.3365 28.5484 15.8792 28.5484 15.3871ZM23.7585 14.9032H25.9287L27.4611 13.3708C27.0784 13.1173 26.6211 12.9677 26.129 12.9677C24.961 12.9677 23.9835 13.8005 23.7585 14.9032ZM31.4758 17.7823C30.1553 16.4618 30.1553 14.3129 31.4758 12.9924C32.7963 11.6719 34.9452 11.6719 36.2656 12.9924C37.5861 14.3129 37.5861 16.4618 36.2656 17.7823C35.6052 18.4427 34.7381 18.7727 33.8705 18.7727C33.0029 18.7727 32.1363 18.4423 31.4758 17.7823ZM35.5819 17.0981C35.9298 16.7497 36.1476 16.3205 36.2385 15.871H34.0713L32.5369 17.4053C33.4756 18.0261 34.756 17.924 35.5819 17.0981ZM35.5819 13.6761C35.2335 13.3282 34.8048 13.1105 34.3548 13.0195V14.9032H36.2385C36.1476 14.4537 35.9298 14.0245 35.5819 13.6761ZM31.8527 16.7211L33.3871 15.1868V13.0195C32.9371 13.1105 32.5084 13.3282 32.16 13.6761C31.334 14.5026 31.2319 15.7824 31.8527 16.7211ZM42.0721 29.4194H43.0645V30.3871H42.0721C41.9719 31.4918 41.5345 32.4997 40.8619 33.3068L41.5645 34.0094L40.8803 34.6936L40.1777 33.991C39.3711 34.664 38.3627 35.101 37.2581 35.2011V36.1935H36.2903V35.2011C35.1856 35.101 34.1777 34.6635 33.3706 33.991L32.6681 34.6936L31.9839 34.0094L32.6864 33.3068C32.0134 32.5002 31.5765 31.4918 31.4763 30.3871H30.4839V29.4194H31.4763C31.5765 28.3147 32.0139 27.3068 32.6864 26.4997L31.9839 25.7971L32.6681 25.1129L33.3706 25.8155C34.1773 25.1424 35.1856 24.7055 36.2903 24.6053V23.6129H37.2581V24.6053C38.3627 24.7055 39.3706 25.1429 40.1777 25.8155L40.8803 25.1129L41.5645 25.7971L40.8619 26.4997C41.535 27.3068 41.9719 28.3147 42.0721 29.4194ZM41.129 29.9032C41.129 27.5023 39.1752 25.5484 36.7742 25.5484C34.3732 25.5484 32.4194 27.5023 32.4194 29.9032C32.4194 32.3042 34.3732 34.2581 36.7742 34.2581C39.1752 34.2581 41.129 32.3042 41.129 29.9032ZM40.1613 29.9032C40.1613 31.771 38.6419 33.2903 36.7742 33.2903C34.9065 33.2903 33.3871 31.771 33.3871 29.9032C33.3871 28.0355 34.9065 26.5161 36.7742 26.5161C38.6419 26.5161 40.1613 28.0355 40.1613 29.9032ZM39.1935 29.9032C39.1935 28.5692 38.1082 27.4839 36.7742 27.4839C35.4402 27.4839 34.3548 28.5692 34.3548 29.9032C34.3548 31.2373 35.4402 32.3226 36.7742 32.3226C38.1082 32.3226 39.1935 31.2373 39.1935 29.9032ZM38.2258 29.9032C38.2258 30.7035 37.5745 31.3548 36.7742 31.3548C35.9739 31.3548 35.3226 30.7035 35.3226 29.9032C35.3226 29.1029 35.9739 28.4516 36.7742 28.4516C37.5745 28.4516 38.2258 29.1029 38.2258 29.9032ZM37.2581 29.9032C37.2581 29.6366 37.0408 29.4194 36.7742 29.4194C36.5076 29.4194 36.2903 29.6366 36.2903 29.9032C36.2903 30.1698 36.5076 30.3871 36.7742 30.3871C37.0408 30.3871 37.2581 30.1698 37.2581 29.9032ZM44.2263 27.8506L45 28.0989V31.7081L44.2263 31.9563C43.8948 32.0623 43.6229 32.324 43.4797 32.6734C43.3292 33.0377 43.3374 33.4142 43.4956 33.7219L43.8673 34.4444L41.3153 36.9963L40.5929 36.6247C40.2856 36.4665 39.9087 36.4582 39.5603 36.6024C39.195 36.7524 38.9337 37.0244 38.8273 37.3558L38.5785 38.129H35.8065H34.9698H31.9355V39.0968H35.8065C36.3402 39.0968 36.7742 39.5308 36.7742 40.0645V41.0323C36.7742 41.566 36.3402 42 35.8065 42H21.2903C20.7566 42 20.3226 41.566 20.3226 41.0323V40.0645C20.3226 39.5308 20.7566 39.0968 21.2903 39.0968H25.1613V38.129H17.4194C16.0853 38.129 15 37.0437 15 35.7097V22.1613C15 20.8273 16.0853 19.7419 17.4194 19.7419H39.6774C41.0115 19.7419 42.0968 20.8273 42.0968 22.1613V23.5926L43.8668 25.3626L43.4952 26.085C43.3369 26.3927 43.3287 26.7687 43.4729 27.1176C43.6229 27.4829 43.8948 27.7447 44.2263 27.8506ZM17.4194 37.1613H34.6331C34.5005 36.9198 34.2823 36.7224 34.004 36.6082C33.6406 36.4573 33.2632 36.466 32.956 36.6242L32.2335 36.9958L29.6816 34.4439L30.0532 33.7215C30.2115 33.4137 30.2197 33.0373 30.0755 32.6889C29.9255 32.3235 29.6535 32.0623 29.3221 31.9558L28.5484 31.7076V28.0984L29.3221 27.8502C29.6535 27.7442 29.9255 27.4824 30.0687 27.1331C30.2197 26.7687 30.211 26.3923 30.0527 26.085L29.6811 25.3626L32.2331 22.8106L32.9555 23.1823C33.2627 23.341 33.6392 23.3487 33.9881 23.2045C34.3534 23.0545 34.6147 22.7826 34.7211 22.4511L34.9698 21.6774H38.579L38.8273 22.4511C38.9332 22.7826 39.195 23.0545 39.5444 23.1977C39.9087 23.3492 40.2852 23.3405 40.5924 23.1818L41.129 22.906V22.1613C41.129 21.361 40.4777 20.7097 39.6774 20.7097H17.4194C16.619 20.7097 15.9677 21.361 15.9677 22.1613V33.2903H29.0323V34.2581H15.9677V35.7097C15.9677 36.51 16.619 37.1613 17.4194 37.1613ZM35.8065 40.0645H21.2903V41.0323H35.8069L35.8065 40.0645ZM30.9677 38.129H26.129V39.0968H30.9677V38.129ZM44.0323 28.8044L43.9311 28.7719C43.3273 28.5789 42.8366 28.1153 42.584 27.5008C42.3256 26.8752 42.346 26.2026 42.6348 25.6418L42.6832 25.5479L41.1295 23.9942L41.0352 24.0426C40.4748 24.331 39.8018 24.3513 39.1902 24.0987C38.5621 23.8408 38.0985 23.3502 37.9055 22.7463L37.8731 22.6452H35.6758L35.6434 22.7463C35.4503 23.3502 34.9868 23.8408 34.3723 24.0934C33.7466 24.3513 33.0735 24.3315 32.5132 24.0426L32.4194 23.9942L30.8656 25.5479L30.914 25.6423C31.2029 26.2026 31.2232 26.8752 30.9702 27.4873C30.7123 28.1153 30.2216 28.5789 29.6177 28.7719L29.5161 28.8044V31.0016L29.6173 31.034C30.2211 31.2271 30.7118 31.6906 30.9644 32.3052C31.2227 32.9303 31.2024 33.6034 30.9135 34.1637L30.8652 34.2581L32.4189 35.8118L32.5132 35.7634C33.0735 35.4745 33.7466 35.4542 34.3582 35.7073C34.9863 35.9652 35.4498 36.4558 35.6429 37.0597L35.6753 37.1613H35.8065H37.8731L37.9055 37.0602C38.0985 36.4563 38.5621 35.9656 39.1766 35.7131C39.8018 35.4547 40.4744 35.4745 41.0356 35.7639L41.1295 35.8123L42.6832 34.2585L42.6348 34.1642C42.346 33.6034 42.3256 32.9308 42.5787 32.3192C42.8366 31.6911 43.3273 31.2276 43.9311 31.0345L44.0323 31.0021V28.8044Z"
                    fill="#168CF6"
                  />
                </svg>
                <p className="text-blue-700 text-left text-lg mt-5 lg:mb-12 leading-5">
                  Impulsar la productividad y crecimiento de tu negocio
                </p>
              </div>
              <div className="bg-white rounded-md shadow-md border border-cyan-300 p-4 lg:p-8">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.3"
                    cx="27.5"
                    cy="27.5"
                    r="27.5"
                    fill="#42E4B3"
                  />
                  <g clipPath="url(#clip0_3049_705)">
                    <path
                      d="M38.6442 23.387V22.6443C38.6442 16.2084 33.4366 11.0001 27 11.0001C20.5794 11.0001 15.3558 16.2237 15.3558 22.6443V23.387C12.8018 24.1113 10.8507 26.5503 11.009 29.4986C11.18 32.6851 13.8531 35.1777 16.9983 35.1777C18.5483 35.1777 19.805 33.9268 19.805 32.3759V25.9606C19.805 24.4924 18.6728 23.282 17.2382 23.1686V22.6443C17.2382 17.2617 21.6173 12.8825 27 12.8825C32.3956 12.8825 36.7618 17.2482 36.7618 22.6443V23.1684C35.3288 23.2803 34.1949 24.4914 34.1949 25.9607V32.3759C34.1949 33.8439 35.322 35.0464 36.7618 35.1671C36.7618 37.7146 34.7671 39.4863 32.5297 39.4863H30.4809C30.1044 38.5321 29.1738 37.8549 28.0875 37.8549H25.9124C24.4939 37.8549 23.3398 39.009 23.3398 40.4275C23.3398 41.8459 24.4939 43 25.9124 43H28.0875C29.1738 43 30.1044 42.3228 30.4809 41.3686H32.5296C35.9011 41.3686 38.6441 38.6254 38.6441 35.2535V34.9449C41.0457 34.2527 42.8518 32.0926 42.9909 29.4986C43.1487 26.5604 41.2071 24.1139 38.6442 23.387ZM17.9227 25.9606V32.3759C17.9227 32.8513 17.5572 33.3066 16.9256 33.2946C14.7769 33.2525 13.0036 31.5407 12.8886 29.3978C12.7605 27.0125 14.6497 25.0414 17.0091 25.0414H17.0252C17.5201 25.0433 17.9227 25.4556 17.9227 25.9606ZM28.0875 41.1176H25.9124C25.5319 41.1176 25.2222 40.8079 25.2222 40.4274C25.2222 40.0468 25.5319 39.7372 25.9124 39.7372H28.0875C28.4687 39.7372 28.7786 40.0478 28.7777 40.4292C28.7766 40.8089 28.4675 41.1176 28.0875 41.1176ZM41.1113 29.3978C40.9963 31.5407 39.223 33.2525 37.0743 33.2946C36.4544 33.3072 36.0772 32.8615 36.0772 32.3759V25.9606C36.0772 25.4556 36.4798 25.0433 36.9711 25.0414H36.9908C39.3505 25.0414 41.2394 27.0128 41.1113 29.3978Z"
                      fill="#168CF6"
                    />
                    <path
                      d="M27.6656 34.3694L32.0116 30.0235C33.3654 28.6696 33.3655 26.4784 32.0116 25.1245C30.7662 23.8791 28.6081 23.6294 27.0001 25.2369C25.4139 23.6512 23.2528 23.8602 21.9886 25.1244C20.6347 26.4783 20.6346 28.6695 21.9886 30.0235L26.3346 34.3694C26.7021 34.7369 27.298 34.737 27.6656 34.3694ZM23.3195 26.4554C23.9363 25.8388 24.9397 25.8387 25.5565 26.4554L26.3345 27.2334C26.702 27.601 27.2979 27.601 27.6655 27.2334L28.4435 26.4554C29.0603 25.8387 30.0637 25.8386 30.6804 26.4554C31.2986 27.0735 31.2987 28.0741 30.6804 28.6924L27 32.3728L23.3195 28.6924C22.7014 28.0743 22.7013 27.0737 23.3195 26.4554Z"
                      fill="#168CF6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3049_705">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(11 11)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-blue-700 text-left text-lg mt-5 lg:mb-12 leading-5">
                  Consolidar un flujo de comunicacion y feedback
                </p>
              </div>
              <div className="bg-white rounded-md shadow-md border border-cyan-300 p-4 lg:p-8">
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.3"
                    cx="27.5"
                    cy="27.5"
                    r="27.5"
                    fill="#42E4B3"
                  />
                  <g clipPath="url(#clip0_3049_801)">
                    <path
                      d="M32.1089 28.4589H30.1585V27.2284C32.0624 26.1469 33.3496 24.1005 33.3496 21.7588V18.4761C34.3415 17.7799 34.9918 16.6284 34.9918 15.3271V13H24.6236C22.503 13 20.7778 14.7252 20.7778 16.8458V21.7587C20.7778 24.0478 22.0078 26.0546 23.8414 27.1539V28.4589H21.891C17.2535 28.4589 13.4806 32.2318 13.4806 36.8693V41H40.5192V36.8693C40.5193 32.2318 36.7464 28.4589 32.1089 28.4589ZM22.4198 16.8458C22.4198 15.6306 23.4084 14.642 24.6235 14.642H33.3497V15.3271C33.3497 16.5422 32.3611 17.5308 31.146 17.5308H23.7961C23.3007 17.5308 22.8327 17.6508 22.4198 17.8632V16.8458ZM22.4198 21.7587V20.5491V20.5491C22.4198 19.7902 23.0372 19.1729 23.7961 19.1729H31.146C31.3368 19.1729 31.5242 19.1584 31.7076 19.1314V21.7587C31.7076 24.3193 29.6244 26.4026 27.0637 26.4026C24.503 26.4026 22.4198 24.3194 22.4198 21.7587ZM27.0637 28.0447C27.5636 28.0447 28.05 27.9857 28.5165 27.8749V29.8419C27.9244 30.0014 27.4009 30.3289 26.9999 30.7702C26.599 30.3289 26.0754 30.0014 25.4834 29.8419V27.8434C25.9885 27.9747 26.5181 28.0447 27.0637 28.0447ZM38.8772 39.358H36.0811V36.1415H34.439V39.358H19.5609V36.1415H17.9189V39.358H15.1226V36.8693C15.1226 33.1372 18.1589 30.1009 21.891 30.1009H23.8414V31.3757H24.6624C25.4986 31.3757 26.1789 32.056 26.1789 32.8923V34.5696H27.821V32.8923C27.821 32.056 28.5013 31.3757 29.3375 31.3757H30.1585V30.1009H32.1089C35.8409 30.1009 38.8772 33.1371 38.8772 36.8693V39.358Z"
                      fill="#168CF6"
                    />
                    <path
                      d="M26.179 36.1415H27.821V37.699H26.179V36.1415Z"
                      fill="#168CF6"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3049_801">
                      <rect
                        width="28"
                        height="28"
                        fill="white"
                        transform="translate(13 13)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-blue-700 text-left text-lg mt-5 lg:mb-12 leading-5">
                  Encontrar metodos para motivar al equipo
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-10 my-14">
              <div className="hidden md:block">
                <img
                  src={Gathering}
                  alt="smarteam"
                />
              </div>
              <div className="flex flex-col md:items-center">
                <p className="text-blue-700 text-center md:text-left font-bold text-2xl md:text-4xl">
                  Nuestro test te ayudara a:
                </p>
                <div className="flex flex-col my-8 space-y-5 lg:w-3/5 pl-8">
                  <div className="text-lg text-gray-500/70 relative">
                    <svg
                      className="absolute -left-8"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
                        fill="#42E4B3"
                      />
                    </svg>
                    <p className="pl-4 m-0">
                      Aterrizar tu estructura comercial
                    </p>
                  </div>
                  <div className="text-lg text-gray-500/70 relative">
                    <svg
                      className="absolute -left-8"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
                        fill="#42E4B3"
                      />
                    </svg>
                    <p className="pl-4 m-0">
                      Evaluar por escalas y parametros tus procesos comerciales
                    </p>
                  </div>
                  <div className="text-lg text-gray-500/70 relative">
                    <svg
                      className="absolute -left-8"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 0C4.925 0 0 4.925 0 11C0 17.075 4.925 22 11 22C17.075 22 22 17.075 22 11C22 4.925 17.075 0 11 0ZM15.768 9.14C15.8558 9.03964 15.9226 8.92274 15.9646 8.79617C16.0065 8.6696 16.0227 8.53591 16.0123 8.40298C16.0018 8.27005 15.9648 8.14056 15.9036 8.02213C15.8423 7.90369 15.758 7.79871 15.6555 7.71334C15.5531 7.62798 15.4346 7.56396 15.3071 7.52506C15.1796 7.48616 15.0455 7.47316 14.9129 7.48683C14.7802 7.50049 14.6517 7.54055 14.5347 7.60463C14.4178 7.66872 14.3149 7.75554 14.232 7.86L9.932 13.019L7.707 10.793C7.5184 10.6108 7.2658 10.51 7.0036 10.5123C6.7414 10.5146 6.49059 10.6198 6.30518 10.8052C6.11977 10.9906 6.0146 11.2414 6.01233 11.5036C6.01005 11.7658 6.11084 12.0184 6.293 12.207L9.293 15.207C9.39126 15.3052 9.50889 15.3818 9.63842 15.4321C9.76794 15.4823 9.9065 15.505 10.0453 15.4986C10.184 15.4923 10.32 15.4572 10.4444 15.3954C10.5688 15.3337 10.6791 15.2467 10.768 15.14L15.768 9.14Z"
                        fill="#42E4B3"
                      />
                    </svg>
                    <p className="pl-4 m-0">Enfocar tus objetivos</p>
                  </div>
                  <div className="content md:block">
                    <button className="bg-blue-500 font-bold text-white rounded-full px-8 py-4">
                      Descargar test
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full space-y-5 lg:py-14">
              <p className="text-blue-700 text-center font-bold text-3xl">
                Compartelo en redes sociales
              </p>
              <div className="flex items-center justify-center space-x-5">
                <button className="w-16 h-16 p-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    width="14"
                    height="28"
                    viewBox="0 0 14 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.90826 27.75V14.8462H0.496216V10.2002H3.90826V6.23195C3.90826 3.11363 5.92376 0.25 10.5679 0.25C12.4483 0.25 13.8387 0.430263 13.8387 0.430263L13.7291 4.76883C13.7291 4.76883 12.3111 4.75503 10.7637 4.75503C9.08896 4.75503 8.82064 5.52682 8.82064 6.8078V10.2002H13.8623L13.6429 14.8462H8.82064V27.75H3.90826Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="w-16 h-16 p-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8711 4.46534C18.6206 2.20947 15.6236 0.96875 12.4385 0.96875C5.86427 0.96875 0.514649 6.31837 0.514649 12.8926C0.514649 14.9927 1.0625 17.0445 2.10449 18.8545L0.412598 25.0313L6.73438 23.3716C8.47462 24.3223 10.4351 24.8218 12.4331 24.8218H12.4385C19.0074 24.8218 24.4751 19.4722 24.4751 12.898C24.4751 9.7129 23.1216 6.7212 20.8711 4.46534ZM12.4385 22.813C10.6553 22.813 8.90968 22.335 7.38966 21.4326L7.02979 21.2178L3.28077 22.2007L4.27979 18.543L4.04346 18.167C3.04981 16.5879 2.52881 14.7671 2.52881 12.8926C2.52881 7.43019 6.97608 2.98291 12.4439 2.98291C15.0918 2.98291 17.5786 4.01416 19.4478 5.88868C21.3169 7.76319 22.4663 10.25 22.461 12.898C22.461 18.3657 17.9009 22.813 12.4385 22.813ZM17.8741 15.3902C17.5786 15.2398 16.1123 14.52 15.8384 14.4234C15.5645 14.3213 15.3657 14.273 15.167 14.5737C14.9683 14.8745 14.3989 15.5405 14.2217 15.7447C14.0498 15.9434 13.8726 15.9702 13.5772 15.8198C11.8262 14.9444 10.6768 14.2569 9.52199 12.2749C9.21583 11.7486 9.82814 11.7861 10.3975 10.6475C10.4942 10.4487 10.4458 10.2769 10.3706 10.1265C10.2954 9.97609 9.69923 8.50978 9.45216 7.91358C9.21046 7.33351 8.96339 7.41407 8.78077 7.40333C8.6089 7.39259 8.41017 7.39259 8.21144 7.39259C8.01271 7.39259 7.69044 7.46778 7.41651 7.76319C7.14259 8.06398 6.37452 8.7837 6.37452 10.25C6.37452 11.7163 7.44337 13.1343 7.58839 13.333C7.73878 13.5318 9.68849 16.5396 12.6802 17.834C14.5708 18.6504 15.312 18.7202 16.2573 18.5806C16.8321 18.4947 18.0191 17.8609 18.2661 17.1626C18.5132 16.4644 18.5132 15.8682 18.438 15.7447C18.3682 15.6104 18.1695 15.5352 17.8741 15.3902Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button className="w-16 h-16 p-2 rounded-full bg-blue-500 flex items-center justify-center">
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 30 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.87245 27.7501V9.19582H0.705406V27.7501H6.87245ZM3.78973 6.66103C5.94029 6.66103 7.2789 5.23628 7.2789 3.45582C7.23884 1.6352 5.94037 0.25 3.83054 0.25C1.72104 0.25 0.341553 1.63523 0.341553 3.45582C0.341553 5.23636 1.67984 6.66103 3.74947 6.66103H3.78954H3.78973ZM10.2859 27.7501H16.4529V17.3885C16.4529 16.8339 16.493 16.28 16.6559 15.8836C17.1017 14.7756 18.1164 13.6281 19.82 13.6281C22.0516 13.6281 22.9444 15.3296 22.9444 17.8238V27.7499H29.111V17.1111C29.111 11.412 26.0686 8.76022 22.011 8.76022C18.6841 8.76022 17.2234 10.6198 16.4119 11.8864H16.4531V9.19543H10.286C10.367 10.9365 10.286 27.7497 10.286 27.7497L10.2859 27.7501Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<!-- FEATURES END -->*/}

      {/*<!-- FOOTER -->*/}
      <section className="w-full bg-blue-800">
        <div className="flex flex-col w-full px-3 md:px-6 md:max-w-screen-xl mx-auto">
          <div className="flex justify-center flex-wrap md:flex-nowrap items-center space-x-5 py-5 md:py-10 border-b border-slate-200 w-full">
            <div className="flex justify-center items-center space-x-5">
              <img
                src={LogoWhite}
                alt="smarteam"
              />
              <h4 className="text-4xl font-extrabold text-white">smarteam</h4>
            </div>
            <img
              className="h-10"
              src={HubSpot}
              alt="hubspot"
            />
          </div>
          <div className="flex justify-center items-center py-5 md:py-10">
            <h6 className="text-sm md:text-md text-white">
              © 2022 Smarteam, todos los derechos reservados.
            </h6>
          </div>
        </div>
      </section>
      {/*<!-- FOOTER END -->*/}
    </>
  );
}
