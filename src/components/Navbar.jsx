/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from "react";
import { ReactComponent as ChevronDown } from "../assets/svg/chevron-down.svg";
import space from ".././assets/images/space.webp";
import ".././assets/css/Navbar.css";
import classNames from "classnames";

export default function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const toggleDropdown = () => setDropdown(!dropdown);
    const toggle = useCallback(() => {
        document.body.style.overflowY = document.getElementById(
            "root"
        ).style.overflowY = sidebar ? "scroll" : "hidden";
        setSidebar(!sidebar);
    }, [sidebar]);
    useEffect(() => {
        const keyPress = (e) => {
            if (e.key === "Escape" && sidebar) toggle();
        };
        document.addEventListener("keydown", keyPress, false);

        return () => {
            document.removeEventListener("keydown", keyPress, false);
        };
    }, [toggle, sidebar]);
    return (
        <>
            <div
                className={classNames("tint", { "active-tint": sidebar })}
                onClick={toggle}
            />
            <div className={classNames("sidebar", { active: sidebar })}>
                <ul className="sidebar-links">
                    <li>
                        <a href="/ref">Ref</a>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li>
                        <a href="/sources">Sources</a>
                    </li>
                </ul>
            </div>
            <div
                className={classNames("sidecover", {
                    "sidecover-active": sidebar,
                })}
            />
            <div className="ghost" />
            <nav>
                <a href="/" className="logo-link" aria-label="Logo">
                    <img
                        className="logo"
                        src={space}
                        alt=""
                        height="50"
                        width="100"
                    />
                </a>
                <div className="nav-container">
                    <ul className="nav-links">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Details">Details</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <div className="dropdown">
                                <a
                                    className="dropdown-btn"
                                    onClick={toggleDropdown}
                                >
                                    dropdown <ChevronDown />
                                </a>
                                <div
                                    className={classNames("dropdown-content", {
                                        "dropdown-active": dropdown,
                                    })}
                                >
                                    <ul>
                                        <li>
                                            <a href="#">hi</a>
                                        </li>
                                        <li>
                                            <a href="#">hi</a>
                                        </li>
                                        <li>
                                            <a href="#">hi</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button
                        className={classNames("burger", {
                            "active-burger": sidebar,
                        })}
                        onClick={toggle}
                        aria-label="Access sidebar"
                    >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </button>
                </div>
            </nav>
        </>
    );
}
