import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountSettings from "./AccountSettings";
import MembershipSettings from "./MembershipSettings";
import NotificationSettings from "./NotificationSettings";
import PreferenceSettings from "./PreferenceSettings";
import SecuritySettings from "./SecuritySettings";
import SupportSettings from "./SupportSettings";
import LogoutSettings from "./LogoutSettings";


const Settings = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null);


    /* =========================================================
       LOAD USER
    ========================================================= */

    useEffect(() => {

        const loadUser = () => {

            const storedUser =
                localStorage.getItem("ironfitUser");


            if (!storedUser) {

                setUser(null);

                navigate("/login");

                return;
            }


            try {

                const parsedUser =
                    JSON.parse(storedUser);

                setUser(parsedUser);

            } catch (error) {

                console.log(
                    "USER DATA ERROR:",
                    error
                );

                localStorage.removeItem(
                    "ironfitUser"
                );

                setUser(null);

                navigate("/login");
            }
        };


        loadUser();


        /* =====================================================
           LISTEN FOR USER CHANGES
        ===================================================== */

        const handleUserChanged = () => {
            loadUser();
        };


        window.addEventListener(
            "ironfitUserChanged",
            handleUserChanged
        );


        return () => {

            window.removeEventListener(
                "ironfitUserChanged",
                handleUserChanged
            );

        };

    }, [navigate]);


    /* =========================================================
       WAIT FOR USER
    ========================================================= */

    if (!user) {
        return null;
    }


    return (

        <main className="settings-page">


            {/* =================================================
                HERO
            ================================================= */}

            <section className="settings-page__hero">

                <div className="settings-page__container">

                    <span className="settings-page__eyebrow">
                        ACCOUNT SETTINGS
                    </span>


                    <h1 className="settings-page__title">

                        YOUR{" "}

                        <span>
                            SETTINGS.
                        </span>

                    </h1>


                    <p className="settings-page__description">

                        Manage your IronFit account,
                        membership, preferences and
                        notifications.

                    </p>

                </div>

            </section>


            {/* =================================================
                SETTINGS CONTENT
            ================================================= */}

            <section className="settings-page__content">

                <div className="settings-page__container">


                    {/* 01 / ACCOUNT */}

                    <AccountSettings
                        user={user}
                    />


                    {/* 02 / MEMBERSHIP */}

                    <MembershipSettings
                        user={user}
                    />


                    {/* 03 / NOTIFICATIONS */}

                    <NotificationSettings />


                    {/* 04 / PREFERENCES */}

                    <PreferenceSettings />


                    {/* 05 / SECURITY */}

                    <SecuritySettings />


                    {/* SUPPORT */}

                    <SupportSettings />


                    {/* LOGOUT */}

                    <LogoutSettings />


                </div>

            </section>

        </main>

    );
};


export default Settings;