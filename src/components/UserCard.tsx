import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { followUser, unFollowUser } from "../api/services/relationship";

export default function UserCard({ profile, status }: any) {
  const [isFollowing, setIsFollowing] = useState(status || false);
  const { mutate: follow, error: followError } = followUser();
  const { mutate: unfollow, error: unfollowError } = unFollowUser();

  const handleFollowToggle = () => {
    const userId = profile?.user_id;

    if (isFollowing) {
      unfollow(userId);
      setIsFollowing(false);
    } else {
      follow(userId);
      setIsFollowing(true);
    }
  };

  if (followError || unfollowError) {
    console.error("Error:", followError || unfollowError);
  }

  return (
    <div>
      <div>
        <img alt="" src="https://www.shutterstock.com/shutterstock/photos/1736263703/display_1500/stock-photo-luxury-leaf-shadow-leaves-in-blank-green-natural-background-concept-scene-stage-showcase-product-1736263703.jpg" className="h-32 w-full object-cover lg:h-48" />
      </div>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-left mb-8">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <img alt="" src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611710.jpg?w=740&t=st=1726480457~exp=1726481057~hmac=585fc78b1dcaf476d5cb33ea570245a487f52a0bb3c1b92120903e62904a6b5d" className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" />
          </div>
          <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="mt-6 min-w-0 flex-1 sm:hidden md:block">
              <h1 className="truncate text-2xl font-bold text-gray-900">{profile?.first_name + " " + profile?.last_name}</h1>
              <p className="truncate text-sm text-gray-500">{profile.email}</p>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
              <button type="button" className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <EnvelopeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" />
                <span>Message</span>
              </button>
              {/* Follow/Unfollow Button */}
              <button type="button" onClick={handleFollowToggle} className={`inline-flex justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ${isFollowing ? "bg-red-500 text-white" : "bg-blue-500 text-white"}`}>
                <CheckBadgeIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
                <span>{isFollowing ? "Unfollow" : "Follow"}</span>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6 hidden min-w-0 flex-1 sm:block md:hidden">
          <h1 className="truncate text-2xl font-bold text-gray-900">{profile.name}</h1>
        </div>
      </div>
    </div>
  );
}
