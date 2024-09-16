import Header from "../components/Header";
import Search from "../components/Search";

const posts = [
  {
    id: 1,
    title: "Connect with friends",
    href: "#",
    description: "Connect with friends and the world, share your world with every vibe.",
    imageUrl: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611704.jpg?w=740&t=st=1726480328~exp=1726480928~hmac=09964580cfc4b60e5b6239233a0ad4b97b1de16dd592d162f23dc074692f0497",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Social", href: "#" },
    author: {
        userId: "lanreshittu8546",
      name: "Lanre Shittu",
      role: "Software Engineer",
      href: `/relationships/user/${"lanreshittu8546"}`,
      imageUrl: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611710.jpg?w=740&t=st=1726480457~exp=1726481057~hmac=585fc78b1dcaf476d5cb33ea570245a487f52a0bb3c1b92120903e62904a6b5d",
    },
  },
  // More posts...
];

export default function Feed() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32 text-left">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">Abbey's Community</h2>
            <p className="mt-2 text-lg leading-8 text-light blue-600">Connect with friends and the world .</p>
            <Search />
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img alt="" src={post.imageUrl} className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a href={post.category.href} className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">{post.description}</p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
