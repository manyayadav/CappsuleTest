import * as React from "react";
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="flex justify-center items-center px-16 py-16 bg-white max-md:px-5">
      {/* Main wrapper with max-width and responsive padding */}
      <div className="flex flex-col w-full max-w-[1017px] max-md:max-w-full">
        {/* Title */}
        <div className="self-center text-2xl text-black">
          Cappsule web development test
        </div>
        {/* Card 1 */}
        <div className="flex gap-5 px-7 py-6 mt-16 w-full text-base tracking-tight leading-6 whitespace-nowrap bg-white shadow-2xl rounded-[35px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between font-medium text-teal-950">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/43af2f868ecc988e43f5387bbd14c2bdba0bf43f9371efbfb6b1f94ebd71e5fe?apiKey=2c014d0c051d4d938856cc86b4afef08&"
              className="shrink-0 w-6 border-2 border-solid aspect-[1.59] border-teal-950 stroke-[2px] stroke-teal-950"
            />
            <div>Medicine</div>
          </div>
          <div className="flex-auto my-auto font-semibold text-cyan-800">
            Search
          </div>
        </div>
        {/* Horizontal line */}
        <div className="shrink-0 mt-12 h-px border border-solid bg-stone-300 border-stone-300 max-md:mt-10 max-md:max-w-full" />
        {/* Card 2 */}
        <div className="flex flex-col items-start py-6 pr-20 pl-8 mt-10 rounded-2xl shadow-lg max-md:px-5 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[257px]">
            <div className="my-auto text-base font-light text-black">
              Form :
            </div>
            <div className="flex gap-5 justify-between text-sm leading-5 whitespace-nowrap">
              <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
                Tablet
              </div>
              <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-600">
                Injection
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-start self-stretch mt-5 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between">
              <div className="my-auto text-base font-light text-black">
                Strength :
              </div>
              <div className="flex gap-3.5 text-sm leading-5">
                <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
                  100 mg
                </div>
                <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-dashed border-neutral-400 text-neutral-600">
                  500 mg
                </div>
              </div>
            </div>
            <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col text-center">
                <div className="self-center text-lg font-semibold text-neutral-800">
                  Salt A
                </div>
                <div className="mt-4 text-sm font-medium text-cyan-800">
                  Tablet |100mg | 5 strips
                </div>
              </div>
              <div className="flex-auto self-start text-3xl font-extrabold text-teal-950">
                From₹<span className="">80</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-2.5 text-sm leading-5">
            <div className="grow my-auto text-base font-light text-black">
              Packaging :
            </div>
            <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
              5 strips
            </div>
            <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-dashed border-neutral-400 text-neutral-600">
              10 strips
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-start px-8 py-6 mt-11 rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[257px]">
            <div className="my-auto text-base font-light text-black">
              Form :
            </div>
            <div className="flex gap-5 justify-between text-sm leading-5 whitespace-nowrap">
              <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
                Tablet
              </div>
              <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-600">
                Injection
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between self-stretch mt-2 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between my-auto">
              <div className="my-auto text-base font-light text-black">
                Strength :
              </div>
              <div className="flex gap-3.5 text-sm leading-5">
                <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-dashed border-teal-950 text-teal-950">
                  100 mg
                </div>
                <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-600">
                  500 mg
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between text-center max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col self-start mt-4">
                <div className="self-center text-lg font-semibold text-neutral-800">
                  Salt B
                </div>
                <div className="mt-4 text-sm font-medium text-cyan-800">
                  Tablet | 100mg | 5 strips
                </div>
              </div>
              <div className="justify-center px-9 py-3.5 text-sm font-medium leading-5 bg-white rounded-md border border-emerald-200 border-solid text-teal-950 max-md:px-5">
                No stores selling this product near you
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-2 text-sm leading-5">
            <div className="grow my-auto text-base font-light text-black">
              Packaging :
            </div>
            <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-dashed border-teal-950 text-teal-950">
              5 strips
            </div>
            <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-dashed border-neutral-400 text-neutral-600">
              10 strips
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-start px-8 py-6 mt-11 rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 justify-between max-w-full w-[173px]">
            <div className="my-auto text-base font-light text-black">
              Form :
            </div>
            <div className="justify-center px-2.5 py-1.5 text-sm font-semibold leading-5 whitespace-nowrap bg-white rounded-lg border-2 border-dashed border-teal-950 text-teal-950">
              Capsule
            </div>
          </div>
          <div className="flex gap-5 justify-between self-stretch mt-2 w-full max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between my-auto">
              <div className="my-auto text-base font-light text-black">
                Strength :
              </div>
              <div className="justify-center px-2.5 py-1.5 text-sm font-semibold leading-5 bg-white rounded-lg border-2 border-dashed border-teal-950 text-teal-950">
                500 mg
              </div>
            </div>
            <div className="flex gap-5 justify-between text-center max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col self-start mt-4">
                <div className="self-center text-lg font-semibold text-neutral-800">
                  Salt C
                </div>
                <div className="mt-4 text-sm font-medium text-cyan-800">
                  Capsule | 500mg | 30 strips
                </div>
              </div>
              <div className="justify-center px-9 py-3.5 text-sm font-medium leading-5 bg-white rounded-md border border-emerald-200 border-solid text-teal-950 max-md:px-5">
                No stores selling this product near you
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-2">
            <div className="grow my-auto text-base font-light text-black">
              Packaging :
            </div>
            <div className="justify-center px-2.5 py-1.5 text-sm font-semibold leading-5 bg-white rounded-lg border-2 border-dashed border-teal-950 text-teal-950">
              30 strips
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="px-8 py-6 mt-11 rounded-2xl shadow-lg max-md:px-5 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10">
                <div className="flex gap-5 w-full max-md:pr-5">
                  <div className="my-auto text-base font-light text-black">
                    Form :
                  </div>
                  <div className="flex gap-3 text-sm leading-5 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
                      Tablet
                    </div>
                    <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-solid border-neutral-400 text-neutral-600">
                      Injection
                    </div>
                  </div>
                </div>
                <div className="flex gap-3.5 self-end mt-3 text-sm leading-5 whitespace-nowrap text-neutral-600">
                  <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-solid border-neutral-400">
                    Syrup
                  </div>
                  <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-solid border-neutral-400">
                    Topicals
                  </div>
                  <div className="my-auto text-sm font-bold text-cyan-900">
                    more..
                  </div>
                </div>
                <div className="flex gap-5 mt-7">
                  <div className="grow my-auto text-base font-light text-black">
                    Strength :
                  </div>
                  <div className="flex gap-3 text-sm leading-5">
                    <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
                      100 mg
                    </div>
                    <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-dashed border-neutral-400 text-neutral-600">
                      500 mg
                    </div>
                  </div>
                </div>
                <div className="flex gap-3.5 mt-6 text-sm leading-5 max-md:pr-5">
                  <div className="my-auto text-base font-light text-black">
                    Packaging :
                  </div>
                  <div className="justify-center px-2.5 py-1.5 font-semibold bg-white rounded-lg border-2 border-solid shadow-sm border-teal-950 text-teal-950">
                    5 strips
                  </div>
                  <div className="justify-center px-2.5 py-1.5 bg-white rounded-lg border border-dashed border-neutral-400 text-neutral-600">
                    10 strips
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-center max-md:mt-10">
                <div className="self-center text-lg font-semibold text-neutral-800">
                  Salt D
                </div>
                <div className="mt-4 text-sm font-medium text-cyan-800">
                  Tablet | 100mg | 5 strips
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto text-3xl font-extrabold text-teal-950 max-md:mt-10">
                From₹<span className="">80</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
