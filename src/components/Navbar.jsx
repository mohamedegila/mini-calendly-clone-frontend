import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/authSlice";
import { Logo } from "./logo";
export const Navbar = (props) => {
  //    const currentUser = useSelector((store)=>store.authReducer.currentUser)

  const {isAuth} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const logoutHandler = () => {
    dispatch(logout())
    navigate('/')
    //TODO: Clear session
  }
  
  return (
    <>
      <div class="px-6 pt-6 lg:px-8">
        <div>
          <nav
            class="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div class="flex lg:min-w-0 md:flex-1" aria-label="Global">
            <Logo/>
            </div>

            {props.isNavLink && (
              <>
                <div class="flex lg:hidden">
                  <button
                    type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    <span class="sr-only">Open main menu</span>

                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </div>
                <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
                  <Link
                    to="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Product
                  </Link>

                  <Link
                    to="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Features
                  </Link>

                  <Link
                    to="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Marketplace
                  </Link>

                  <Link
                    to="#"
                    class="font-semibold text-gray-900 hover:text-gray-900"
                  >
                    Company
                  </Link>
                </div>
                <div class="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                  {
                    isAuth ? (
                      <Link
                      to="#"
                      onClick={logoutHandler}
                      class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      Logout
                    </Link>
                    ) : (
                      <Link
                      to="/login"
                      class="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      Login
                    </Link>
                    )
                  }
                 
                </div>
              </>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};
