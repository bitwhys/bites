import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function IndexPage() {
  return (
    <>
      <header className="mt-6 flex h-16 items-center justify-end px-8 py-2">
        <div className="flex items-center gap-x-8">
          <div className="relative flex h-12 w-[clamp(200px,17vw,300px)] items-center rounded-full border border-inverse-6 bg-inverse-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="size-6 text-inverse-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path
                  d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z"
                  opacity="0.2"
                ></path>
                <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
              </svg>
            </div>
            <Input
              className="h-full rounded-full border-none pl-12 text-inverse-12 placeholder:text-inverse-9 focus-visible:ring-0"
              placeholder="Search"
            />
          </div>
          <div className="size-12 rounded-full bg-white"></div>
        </div>
      </header>
      <main className="fixed size-full">
        <div className="flex h-full">
          {/* -------- Side Panel -------- */}
          <div className="flex h-full max-w-[500px] flex-col p-16 pr-10">
            <div className="h-[calc(100vh_-_64px_-_48px_-_48px)] flex flex-col">
              {/* -------- logo -------- */}
              <div>
                <svg
                  className="h-12 w-auto text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 67 40"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4807 8.23264C12.2987 11.0243 8.51906 15.434 6.3154 20.0916C5.0194 22.8316 5.0474 23.7806 6.46673 25.2C7.09006 25.8233 7.74473 26.3333 7.9214 26.3333C8.09806 26.3333 8.33606 25.6533 8.45006 24.822C8.70473 22.963 10.4364 19.1526 12.4077 16.1133C13.8014 13.965 17.2954 9.85064 17.5284 10.084C17.7464 10.302 14.2367 18.497 13.7834 18.8286C13.5247 19.018 13.3551 19.4713 13.4064 19.8363C13.4581 20.2013 13.0567 22.056 12.5147 23.958L11.5297 27.416L12.3017 28.0413C13.6851 29.1616 14.0964 28.8696 15.0611 26.0833C16.8217 20.9993 16.7514 21.0983 18.9107 20.6543C19.9684 20.4366 21.0791 20.129 21.3797 19.9706C22.3087 19.481 22.8527 21.312 22.3314 23.174C21.1541 27.3783 15.5711 30.3263 9.5164 29.9406C7.43773 29.8083 7.34173 29.835 7.54707 30.484C7.87306 31.5153 8.68973 32.6553 9.35873 33.0136C10.7821 33.7753 14.9114 32.9443 18.0877 31.2566C23.2694 28.5033 26.2347 22.9426 24.1871 19.8176C23.6954 19.067 23.6697 18.858 24.0441 18.6483C27.1331 16.919 29.7941 13.2616 30.2191 10.1616C30.4654 8.36564 29.8477 7.45997 28.1614 7.14364C26.6457 6.8593 25.4541 7.5723 22.9914 10.2373L20.9001 12.5L21.8384 10.8333C22.3544 9.91664 22.9017 9.02397 23.0551 8.84997C23.9211 7.86497 22.8061 7.02097 20.3724 6.81864C18.9477 6.7003 18.5707 6.8373 16.4807 8.23264ZM38.3317 9.72497C37.6131 11.2446 37.0934 11.8943 36.3457 12.2086C35.2637 12.6636 34.9817 13.3333 35.8724 13.3333C36.6014 13.3333 36.4447 13.895 34.1524 19.5C32.3597 23.883 32.1044 24.3063 29.9551 26.4646C28.6964 27.7286 27.6667 28.617 27.6667 28.439C27.6667 27.809 29.4247 23.7846 31.3667 19.9686C32.4484 17.843 33.3334 15.945 33.3334 15.7513C33.3334 15.3713 31.5977 14.6666 30.6624 14.6666C30.2881 14.6666 29.7964 15.3276 29.2364 16.5833C27.8577 19.6753 26.4737 23.3003 25.5377 26.2703C24.5731 29.3316 24.6994 30.1613 26.1864 30.5346C26.8727 30.707 27.3397 30.442 28.8237 29.0386C29.8154 28.1006 30.7294 27.3333 30.8551 27.3333C30.9807 27.3333 30.9927 27.7863 30.8821 28.3403C30.6621 29.4406 31.5327 30.6666 32.5344 30.6666C32.8284 30.6666 34.1117 29.7666 35.3867 28.6666C37.8431 26.5473 38.3327 26.312 38.3347 27.25C38.3367 28.2176 39.5711 29.9333 40.6764 30.505C41.9231 31.1496 43.1707 30.9513 45.3997 29.7536L46.9664 28.9123L48.0091 29.7896C48.5824 30.272 49.4044 30.7553 49.8361 30.8636C50.8464 31.1173 54.1084 30.1723 54.7064 29.453C55.0484 29.0416 55.1951 27.4173 55.2771 23.1433C55.3764 17.9676 55.4524 17.329 56.0291 16.807C56.9804 15.946 57.1354 16.4206 56.5137 18.2916C55.8474 20.298 55.9337 22.7833 56.6744 22.9236C57.0207 22.9893 57.3224 22.5446 57.6237 21.5243C57.8664 20.7016 58.7917 18.8596 59.6801 17.431C61.1307 15.0973 61.2397 14.791 60.7504 14.4166C59.9864 13.832 58.6481 13.898 58.1757 14.544C57.8084 15.0466 57.7127 15.0453 56.9244 14.529C55.0587 13.3066 52.8864 15.022 52.3031 18.1776C52.1021 19.2646 52.0111 20.6066 52.1004 21.1603C52.2267 21.942 52.0374 22.4273 51.2534 23.3333C50.3334 24.397 50.2697 24.3143 50.8691 22.8333C51.1067 22.2456 50.8877 22.221 49.3534 22.661C48.7251 22.841 48.1491 22.9266 48.0734 22.851C47.9977 22.7753 48.3694 22.0653 48.8991 21.2733C51.4224 17.5006 51.2244 16.0023 48.0264 14.6776C47.1481 14.3136 46.8824 14.3516 45.8537 14.9873C44.0921 16.076 41.2304 19.4096 40.0344 21.7656C39.2717 23.2683 38.2241 24.5423 36.3137 26.2896L33.6547 28.722L34.3521 26.9523C35.7714 23.352 37.7844 18.7603 39.0444 16.25L40.3407 13.6666H42.4847C44.3301 13.6666 44.7024 13.562 45.1561 12.9166L45.6827 12.1666L43.5081 12.068C42.3121 12.014 41.3341 11.864 41.3347 11.7346C41.3354 11.6056 41.6354 11.009 42.0014 10.4086C42.9007 8.93364 42.8521 8.70997 41.5107 8.14964C39.6551 7.3743 39.3787 7.51097 38.3317 9.72497ZM32.3954 10.5766C31.8221 11.8103 31.4634 12.93 31.5981 13.0646C31.7327 13.1993 32.2951 13.3523 32.8477 13.4046C33.7264 13.488 34.1124 13.1993 35.9261 11.1013C37.0667 9.7823 38.0001 8.61964 38.0001 8.51797C38.0001 8.4163 36.9734 8.3333 35.7187 8.3333H33.4377L32.3954 10.5766ZM23.7707 11.467C22.6814 12.6556 21.1614 14.5246 20.3927 15.6203L18.9954 17.6126L20.0114 17.8356C21.5491 18.1736 23.8281 16.3833 25.5071 13.5183C26.3957 12.002 26.7504 9.66164 26.1254 9.4393C25.9194 9.36597 24.8597 10.2783 23.7707 11.467ZM46.9367 17.9243C45.3384 19.578 43.3334 22.2396 43.3334 22.7083C43.3334 23.216 45.1557 22.303 46.2507 21.2466C47.1847 20.346 48.9091 16.7976 48.5751 16.464C48.5117 16.4006 47.7744 17.0576 46.9367 17.9243ZM43.6667 24.3933C42.2061 24.8106 42.3214 24.6696 41.8024 26.6706C41.2764 28.698 41.4604 29.3333 42.5741 29.3333C43.7454 29.3333 46.7334 27.654 46.5254 27.1126C46.4337 26.8736 46.5714 26.0756 46.8314 25.3393L47.3037 24L46.0687 24.03C45.3894 24.0466 44.3084 24.21 43.6667 24.3933ZM51.0834 25.744C50.4877 26.3606 50.0001 27.1846 50.0001 27.5753C50.0001 28.3046 50.7991 29.3333 51.3654 29.3333C51.8977 29.3333 52.3704 27.6253 52.2657 26.082L52.1667 24.623L51.0834 25.744Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              {/* -------- heading -------- */}
              <h1 className="mt-2 mb-4 text-4xl font-semibold text-inverse-12">
                Your own playground for Tailwind CSS
              </h1>
              {/* -------- tabs -------- */}
              <Tabs
                defaultValue="community"
                className="w-full relative overflow-y-auto h-full"
              >
                <div className="mt-14">
                  <TabsList
                    defaultValue="community"
                    className="topy-8 sticky grid size-full grid-cols-2 bg-inverse-3 text-inverse-9"
                  >
                    <TabsTrigger
                      value="community"
                      className="text-xl font-semibold data-[state=active]:bg-inverse-12 data-[state=active]:text-inverse-1"
                    >
                      Community
                    </TabsTrigger>
                    <TabsTrigger
                      value="pro"
                      className="text-xl font-semibold data-[state=active]:bg-inverse-12 data-[state=active]:text-inverse-1"
                    >
                      Pro
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="mt-8 ">
                  <TabsContent
                    value="community"
                    className="grid w-full grid-cols-2 gap-4"
                  >
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                  </TabsContent>
                  <TabsContent
                    value="pro"
                    className="grid w-full grid-cols-2 gap-4"
                  >
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                    <div className="aspect-square w-full cursor-pointer rounded-lg bg-inverse-4 hover:bg-inverse-5"></div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1 pr-8 pt-4">
            <div className="flex size-full flex-col space-y-8 overflow-y-hidden rounded-t-[3rem] bg-background px-8  pt-6">
              <header className="flex items-center justify-end gap-x-3">
                <div className="h-10 w-52 rounded-xl bg-grey-9"></div>
                <div className="h-10 w-20 rounded-xl bg-grey-9"></div>
                <div className="h-10 w-20 rounded-xl bg-grey-9"></div>
              </header>
              <section className="grid w-full grid-cols-2 gap-8 overflow-y-scroll">
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
                <div className="aspect-[16/10] w-full rounded-3xl bg-grey-3"></div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
