export default async function Pickban() {
  return (
    <table className="text-white bg-white border-collapse">
      <tr>
        <th className="font-semibold max-w-[10px] bg-[#1f1f21] border-[#edfa5b] border-r-[3px] border-b-[3px] text-center px-8 py-4">
          TEAM 1 VETO MAP
        </th>
        <th className="font-semibold max-w-[10px] bg-[#1f1f21] border-[#edfa5b] border-r-[3px] border-b-[3px] text-center px-8 py-4">
          TEAM 2 VETO MAP
        </th>
        <th className="font-semibold max-w-[10px] bg-[#1f1f21] border-[#edfa5b] border-b-[3px] text-center px-8 py-4">
          TEAM 1 SELECT MAP
        </th>
      </tr>
      <tr className="">
        <td className="p-0 relative border-[#edfa5b] border-r-[3px]">
          <div className="w-[250px] h-[350px] grayscale bg-[url(/maps/busan.jpg)] bg-cover bg-center" />
          <h2 className="font-bold text-5xl text-white text-center absolute inset-0 flex items-center justify-center">
            BUSAN
          </h2>
          <div className="text-red-500 absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height={200}
              width={200}
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M76.391,13.774c-4.616-3.374-9.793-5.805-15.387-7.226C57.383,5.63,53.67,5.164,49.968,5.164  c-11.271,0-21.952,4.355-30.041,11.682c-0.121,0.077-0.24,0.16-0.35,0.26c-0.126,0.115-0.236,0.24-0.333,0.373  c-4.704,4.44-8.48,9.907-10.904,16.124c-0.675,1.725-1.247,3.511-1.699,5.304C0.573,62.813,15.086,87.2,38.993,93.269  c3.623,0.919,7.338,1.386,11.042,1.386c20.468,0,38.282-13.874,43.323-33.739C97.878,43.112,91.217,24.608,76.391,13.774z   M40.224,88.422c-21.235-5.39-34.126-27.051-28.736-48.289c0.402-1.594,0.91-3.178,1.51-4.711c1.891-4.85,4.708-9.185,8.196-12.841  l53.462,58.508c-6.827,5.405-15.421,8.565-24.62,8.565C46.746,89.654,43.444,89.24,40.224,88.422z M88.513,59.686  c-1.778,7.006-5.349,13.168-10.141,18.058L24.863,19.185c6.969-5.686,15.811-9.021,25.104-9.021c3.288,0,6.587,0.414,9.806,1.231  c4.972,1.262,9.569,3.42,13.667,6.416C86.61,27.435,92.526,43.872,88.513,59.686z" />
            </svg>
          </div>
        </td>
        <td className="p-0 relative border-[#edfa5b] border-r-[3px]">
          <div className="w-[250px] h-[350px] grayscale bg-[url(/maps/midtown.jpg)] bg-cover bg-center" />
          <h2 className="font-bold text-5xl text-white text-center absolute inset-0 flex items-center justify-center">
            MIDTOWN
          </h2>
          <div className="text-red-500 absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              height={200}
              width={200}
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M76.391,13.774c-4.616-3.374-9.793-5.805-15.387-7.226C57.383,5.63,53.67,5.164,49.968,5.164  c-11.271,0-21.952,4.355-30.041,11.682c-0.121,0.077-0.24,0.16-0.35,0.26c-0.126,0.115-0.236,0.24-0.333,0.373  c-4.704,4.44-8.48,9.907-10.904,16.124c-0.675,1.725-1.247,3.511-1.699,5.304C0.573,62.813,15.086,87.2,38.993,93.269  c3.623,0.919,7.338,1.386,11.042,1.386c20.468,0,38.282-13.874,43.323-33.739C97.878,43.112,91.217,24.608,76.391,13.774z   M40.224,88.422c-21.235-5.39-34.126-27.051-28.736-48.289c0.402-1.594,0.91-3.178,1.51-4.711c1.891-4.85,4.708-9.185,8.196-12.841  l53.462,58.508c-6.827,5.405-15.421,8.565-24.62,8.565C46.746,89.654,43.444,89.24,40.224,88.422z M88.513,59.686  c-1.778,7.006-5.349,13.168-10.141,18.058L24.863,19.185c6.969-5.686,15.811-9.021,25.104-9.021c3.288,0,6.587,0.414,9.806,1.231  c4.972,1.262,9.569,3.42,13.667,6.416C86.61,27.435,92.526,43.872,88.513,59.686z" />
            </svg>
          </div>
        </td>
        <td className="p-0 relative w-[250px] h-[350px]">
          <div className="w-[250px] h-[350px] bg-[url(/maps/suravasa.jpg)] bg-cover bg-center" />
          <h2 className="font-bold text-5xl text-white text-center absolute inset-0 flex items-center justify-center">
            SURAVASA
          </h2>
          <h3 className="leading-5 text-center text-black absolute w-full bottom-0 bg-[#edfa5b] px-8 py-4">
            TEAM 2 PICKS DEFENSE
          </h3>
        </td>
      </tr>
    </table>
  );
}
