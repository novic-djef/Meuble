/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Slide() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                La solution pour vos meublés
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Ici, vous avez la possiblité de trouver des applaterments meublés pour 
                vos court sejour a des prix defiant toute concurence
                 et tous ceci sans vous deplacelcer qu'es ce que vous attendez pour reserver maintenant?
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://th.bing.com/th/id/R.327924473afb550a5cbc0b7370d97b93?rik=2TfLwhzAW4p2tQ&pid=ImgRaw&r=0"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/R.3699c56b163512661de0f840133fbe44?rik=PxzmZLvL%2bGrblw&riu=http%3a%2f%2fapartments-villas-hcm.com%2fwp-content%2fuploads%2f2013%2f08%2fsunrise-city-14-700x400.jpg&ehk=%2fcoyQBsXpsZvkX10R%2bfHlmFhU4jMqeUpz6WoGz%2bjwgE%3d&risl=&pid=ImgRaw&r=0"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.sKdN6UQiJJVo2AcDrwXaPwHaE8?pid=ImgDet&rs=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.EATHyghCKsStVibm66bmNQHaJ4?pid=ImgDet&rs=1"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/R.edc13dccbfe8579a4d44e7d367837709?rik=fenas89VsMQ6PA&pid=ImgRaw&r=0"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.xdYYSVDWtr5lrl49OB7J2wHaFj?pid=ImgDet&w=200&h=150&c=7"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://th.bing.com/th/id/OIP.qkJieGFD1yIP5s2fUO0NbQHaFj?pid=ImgDet&w=200&h=149&c=7"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Reserver Maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  