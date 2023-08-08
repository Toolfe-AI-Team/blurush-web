import React from 'react';
import {Grid} from "@mui/material";
import CurrencyCalculator from "../../../shared/widgets/CurrencyCalculator";

import SalesOverview from "../../../shared/metrics/SalesOverview";
import Documents1 from "../../../shared/widgets/Documents1";
import Ideas1 from "../../../shared/widgets/Ideas1";
import UserOrders from "../../../shared/metrics/UserOrders";
import UserSummary from "../../../shared/widgets/UserSummary";
import ScheduleCard from "../../../shared/widgets/ScheduleCard";
import UserProfileCard1 from "../../../shared/widgets/UserProfileCard1";
import NewConnections from "../../../shared/widgets/NewConnections";
import RecentActivities from "../../../shared/widgets/RecentActivities";
import LastMonthSales from "../../../shared/metrics/LastMonthSales";
import OnlineSignupsFilled from "../../../shared/metrics/OnlineSignupsFilled";
import NewVisitorsThisMonth from "../../../shared/metrics/NewVisitorsThisMonth";
import TotalRevenueThisYear from "../../../shared/metrics/TotalRevenueThisYear";
import UpgradePlan from "../../../shared/widgets/UpgradePlan";
import SalesReport1 from "../../../shared/metrics/SalesReport1";
import WordOfTheDay from "../../../shared/widgets/WordOfTheDay";
import OurOffice1 from "../../../shared/widgets/OurOffice1";
import UserProfileAction from "../../../shared/widgets/UserProfileAction";
import PopularProducts from "../../../shared/widgets/PopularProducts";
import ProjectsListCard from "../../../shared/widgets/ProjectsListCard";
import ProductImage from "../../../shared/widgets/ProductImage";
import ExplorePlaceCard from "../../../shared/widgets/ExplorePlaceCard";
import MarkerClusterer from "../../maps/MarkerClusterer";
import AppUsers from "../../../shared/metrics/AppUsers";
import CafeStore1 from "../../../shared/widgets/CafeStore1";
import LatestAlerts from "../../../shared/widgets/LatestAlerts";
import DailyFeed from "../../../shared/widgets/DailyFeed";

const MiscDashboard = () => {
    return (
        <Grid container spacing={3.75}>
        
        <Grid item xs={12} md={6}>
                <CurrencyCalculator/>
            </Grid>

        </Grid>
    );
};

export default MiscDashboard;
