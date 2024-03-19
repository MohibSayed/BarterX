import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import { downarw, rightarw, submenuarw } from "../../images";
import downarw from '../../images/header/downarw.svg';
import rightarw from '../../images/header/rightarw.svg';
import submenuarw from '../../images/header/submenuarw.svg';

const MobileMenu = ({
    mbSingleMenu,
    menuItemIndex,
    handlePlusClick,
    menuItemActiveIndex,
}) => {
    const [menuItemActive, setMenuItemActive] = useState(false);
    useEffect(() => {
        if (!(menuItemActiveIndex === menuItemIndex)) {
            setMenuItemActive(false); //for each faq it will check and make other off
        }
    }, [menuItemActiveIndex]);

    const handleCheckActive = () => {
        setMenuItemActive(!menuItemActive); //for single faq that you click will check make it on
    };
    return (
        <div className="mb_link_wrapper">
            <div className="mb_link_main_wrapper">
                {mbSingleMenu.isLink ? (
                    <NavLink
                        to={mbSingleMenu.redirectLink}
                        activeclassname="link_selected"
                        className={`route_link mb_route_text ${menuItemActiveIndex === menuItemIndex && menuItemActive
                                ? "mb_route_text_active"
                                : null
                            }`}
                        exact="true"
                    >
                        {mbSingleMenu.linkName}
                    </NavLink>
                ) : (
                    <div
                        className={`${menuItemActiveIndex === menuItemIndex && menuItemActive
                                ? "mb_route_text_active"
                                : null
                            } mb_route_text`}
                    >
                        {mbSingleMenu.linkName}
                    </div>
                )}
                {mbSingleMenu.subMenu && (
                    <span
                        className="plus_minus_span"
                        onClick={() => {
                            handlePlusClick(menuItemIndex);
                            handleCheckActive();
                        }}
                    >
                        {menuItemActiveIndex === menuItemIndex && menuItemActive ? (
                            <img
                                className="active_arrow"
                                src={downarw}
                                loading="lazy"
                                alt="arrow"
                            ></img>
                        ) : (
                            <img
                                className="normal_arrow"
                                src={rightarw}
                                loading="lazy"
                                alt="arrow"
                            ></img>
                        )}
                    </span>
                )}
            </div>
            {mbSingleMenu.subMenu && (
                <div
                    className={`mb_sub_menu_wrapper ${menuItemActiveIndex === menuItemIndex && menuItemActive
                            ? "sub_menu_active"
                            : null
                        }`}
                >
                    {mbSingleMenu.subMenu.map((subMenu, i) => (
                        <div className="mb_sub_link_wrapper" key={i}>
                            <NavLink
                                to={subMenu.redirectLink}
                                activeclassname="link_selected"
                                className="route_link mb_sub_route_text"
                                exact="true"
                                state={i}
                            >
                                {subMenu.subLinkName}
                                <img
                                    className="sub_arrow"
                                    src={submenuarw}
                                    loading="lazy"
                                    alt="arrow"
                                ></img>
                                <div className="submenuline"></div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
