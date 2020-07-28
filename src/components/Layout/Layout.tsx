import React from "react";
import { Header } from "../Header/Header";
import { Advertising } from "../Advertising/Advertising";
import "./Layout.css";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="body-container w-100">
    <Header />

    <div className="container w-100">
      <div className="row">
        <main className="col-md-10">{children}</main>
        <aside className="col-md-2">
          <Advertising />
        </aside>
      </div>
    </div>
  </div>
);

export default Layout;
