import classNames from 'classnames';
import { Sidebar } from 'flowbite-react';
import React from 'react';
import { HiChartPie, HiUser, HiArrowSmRight, HiTable } from 'react-icons/hi';
import { IoCloseOutline } from 'react-icons/io5';

type Props = {
  setIsSideBarOpen: (value: boolean) => void;
  isSideBarOpen: boolean;
};

function SideBar({ isSideBarOpen, setIsSideBarOpen }: Props) {
  return (
    //deskop sidebar
    <div>
      <div className="w-fit md:block hidden rounded-lg h-screen py-4 px-4">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Logo href="book.png" img="book.png" imgAlt="Book Worms">
            Book Worms
          </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/users" icon={HiUser}>
                Add Books
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      {/* mobile sidebar */}
      <div
        className={classNames(
          'w-fit md:hidden  h-screen  z-50',
          isSideBarOpen ? 'absolute' : 'hidden'
        )}
      >
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <div className="flex justify-center align-center">
            <Sidebar.Logo href="/" img="book.png" imgAlt="Book Worms">
              <span>Book Worms</span>
            </Sidebar.Logo>
            <IoCloseOutline
              className="mt-2 ml-2 cursor-pointer"
              onClick={() => setIsSideBarOpen(!isSideBarOpen)}
            />
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={HiChartPie}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="/users" icon={HiUser}>
                Add Books
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}

export default SideBar;
