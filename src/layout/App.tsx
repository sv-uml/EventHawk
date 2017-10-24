import * as React from "react";
import { Header } from "../components/navigation/Header";
import { Sidebar } from "../components/navigation/Sidebar";
import { Container } from "../components/Container";
import { Switch, Route } from "react-router-dom";

import { Maintenance } from "../components/maintenance/Maintenance";

import { HomeView } from "../views/HomeView";
import { LoginView } from "../views/LoginView";
import { MyEventsView } from "../views/MyEventsView";
import { CreateEventView } from "../views/CreateEventView";
import { UserProfileView } from "../views/UserProfileView";
import { RateEventView } from "../views/RateEventView";

export const Content = () => (
    <div>
        <Switch>
            <Maintenance>
                <Route exact path="/" component={HomeView} />
                <Route path="/login" component={LoginView} />
                <Route path="/myevents" component={MyEventsView} />
                <Route path="/events/create" component={CreateEventView} />
                <Route path="/events/edit" component={CreateEventView} />
                <Route path="/events/rate" component={RateEventView} />
                <Route path="/users/profile" component={UserProfileView} />
            </Maintenance>
        </Switch>
    </div>
)

export const App = () => (
    <div className="root">
        <Header />
        <div className="global-container">
            <Sidebar event={null} />
            <div className="content">
                <div className="area">
                    <Content />
                </div>
            </div>
        </div>
    </div>
);