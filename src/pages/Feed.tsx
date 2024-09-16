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
      <div className="bg-gray-100 py-16 sm:py-24 text-left"> {/* Changed background and padding */}
        <div className="mx-auto max-w-6xl px-4 lg:px-6">
          <div className="mx-auto max-w-3xl lg:max-w-5xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
              Abbey's Community
            </h2>
            <p className="mt-2 text-lg leading-7 text-gray-700">
              Connect with friends and the world.
            </p>
            <div className="mt-6">
              <Search />
            </div>

            <div className="mt-12 space-y-16 lg:space-y-20">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative flex flex-col lg:flex-row gap-10 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative lg:w-72 lg:shrink-0">
                    <img
                      alt=""
                      src={post.imageUrl}
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <div>
                    <div className="flex items-center gap-4 text-sm">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="bg-blue-50 px-3 py-1.5 text-blue-700 rounded-full hover:bg-blue-100"
                      >
                        {post.category.title}
                      </a>
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold text-gray-800 hover:text-gray-600">
                      <a href={post.href}>{post.title}</a>
                    </h3>

                    <p className="mt-4 text-gray-600">{post.description}</p>

                    <div className="mt-6 flex items-center gap-4 border-t pt-6">
                      <img
                        alt=""
                        src={post.author.imageUrl}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="text-sm">
                        <p className="font-bold text-gray-800">
                          <a href={post.author.href}>{post.author.name}</a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
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
